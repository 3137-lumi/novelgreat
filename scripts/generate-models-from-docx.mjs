import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const decodeXml = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

const extractTextTokens = (xml) => {
  const tokens = [];
  const re = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g;
  let match;
  while ((match = re.exec(xml))) {
    const token = decodeXml(match[1]).replace(/\s+/g, ' ').trim();
    if (token) tokens.push(token);
  }
  return tokens;
};

const uniq = (arr) => {
  const out = [];
  const seen = new Set();
  for (const x of arr) {
    const v = String(x).trim();
    if (!v) continue;
    if (seen.has(v)) continue;
    seen.add(v);
    out.push(v);
  }
  return out;
};

const splitTags = (text) => {
  const rawParts = text
    .split(/[\/|、,，；;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const parts = [];
  for (const p of rawParts) {
    const match = p.match(/^(.+?)（(.+?)）$/);
    if (match) {
      const main = match[1].trim();
      const extra = match[2].trim();
      if (main) parts.push(main);
      if (extra) parts.push(extra);
      continue;
    }
    parts.push(p);
  }

  return parts;
};

const tagsFromModelId = (modelId) => {
  const id = modelId.toLowerCase();
  const tags = [];

  if (id.includes('thinking')) tags.push('推理');
  if (id.includes('nothinking') || id.includes('non-thinking')) tags.push('非推理');
  if (id.includes('deepsearch')) tags.push('DeepSearch');
  if (id.includes('preview')) tags.push('Preview');
  if (id.includes('beta')) tags.push('Beta');
  if (/(^|[-_.])lite($|[-_.])/.test(id)) tags.push('Lite');
  if (/(^|[-_.])flash($|[-_.])/.test(id)) tags.push('Flash');
  if (/(^|[-_.])pro($|[-_.])/.test(id)) tags.push('Pro');
  if (/(^|[-_.])mini($|[-_.])/.test(id)) tags.push('Mini');
  if (id.includes('cc')) tags.push('CC');
  if (id.includes('embedding')) tags.push('文本嵌入');
  if (id.includes('whisper') || id.includes('tts')) tags.push('语音');
  if (id.includes('image') || id.includes('dall-e')) tags.push('图像生成');
  if (/-0\d\d\b/.test(id) || /-001\b/.test(id)) tags.push('快照');

  if (id.includes('haiku')) tags.push('Haiku');
  if (id.includes('sonnet')) tags.push('Sonnet');
  if (id.includes('opus')) tags.push('Opus');

  return tags;
};

const pickProviderFromHeading = (tokens, i) => {
  const t = tokens[i];
  const tPrev = i > 0 ? tokens[i - 1] : '';
  const tNext = i + 1 < tokens.length ? tokens[i + 1] : '';

  if (t.includes('Anthropic')) return 'Anthropic';
  if (t.includes('OpenAI')) return 'OpenAI';
  if (t.includes('xAI')) return 'xAI';

  if (t.includes('Google')) return 'Google';
  if (`${tPrev}${t}` === 'Google') return 'Google';
  if (`${t}${tNext}` === 'Google') return 'Google';

  if (t.includes('Gemini')) return 'Google';

  return null;
};

const parseInputOutputPrice = (text) => {
  const inputMatch = text.match(/Input\s*\$([0-9.]+)\s*\/M/i);
  const outputMatch = text.match(/Output\s*\$([0-9.]+)\s*\/M/i);

  const inputPrice = inputMatch ? Number.parseFloat(inputMatch[1]) : null;
  const outputPrice = outputMatch ? Number.parseFloat(outputMatch[1]) : null;

  return {
    inputPrice: Number.isFinite(inputPrice) ? inputPrice : null,
    outputPrice: Number.isFinite(outputPrice) ? outputPrice : null,
  };
};

const parsePerCallPrice = (text) => {
  const match = text.match(/\$\s*([0-9.]+)/);
  if (!match) return null;
  const value = Number.parseFloat(match[1]);
  return Number.isFinite(value) ? value : null;
};

const normalizeBlockText = (parts) =>
  parts
    .join('')
    .replace(/\s+/g, ' ')
    .replace(/\s*([，。；：、])/g, '$1')
    .trim();

const parseModelsFromDocx = async ({
  inputDocxPath,
  defaultProvider,
  useHeadingsProvider,
}) => {
  const xml = execSync(`unzip -p "${inputDocxPath}" word/document.xml`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });

  const tokens = extractTextTokens(xml);

  let currentProvider = defaultProvider ?? 'Unknown';
  let currentModelId = null;
  let currentInputPrice = null;
  let currentOutputPrice = null;
  let currentPriceUnit = 'per_1m';
  let mode = null;
  let featuresParts = [];
  let strengthsParts = [];
  let perCallPriceParts = [];

  const models = [];

  const flush = () => {
    if (!currentModelId) return;

    const features = normalizeBlockText(featuresParts);
    const strengthsText = normalizeBlockText(strengthsParts);
    const strengthsTags = strengthsText ? splitTags(strengthsText) : [];

    const idTags = tagsFromModelId(currentModelId);
    const featureTags = features
      ? uniq([
          ...(features.toLowerCase().includes('缓存') || features.toLowerCase().includes('cached') ? ['缓存'] : []),
          ...(features.toLowerCase().includes('cc') ? ['CC'] : []),
        ])
      : [];

    const specialties = uniq([...strengthsTags, ...idTags, ...featureTags]);

    if (currentPriceUnit === 'per_call') {
      const perCallText = normalizeBlockText(perCallPriceParts);
      models.push({
        id: currentModelId,
        name: currentModelId,
        provider: currentProvider,
        description: features || (perCallText ? `按次计费：${perCallText}` : ''),
        inputPrice: currentInputPrice ?? 0,
        outputPrice: currentOutputPrice ?? 0,
        specialties: uniq(['按次计费', ...specialties]),
        parameters: { model: currentModelId },
        priceUnit: 'per_call',
      });
    } else {
      models.push({
        id: currentModelId,
        name: currentModelId,
        provider: currentProvider,
        description: features || '',
        inputPrice: currentInputPrice ?? 0,
        outputPrice: currentOutputPrice ?? 0,
        specialties,
        parameters: { model: currentModelId },
        priceUnit: 'per_1m',
      });
    }

    currentModelId = null;
    currentInputPrice = null;
    currentOutputPrice = null;
    currentPriceUnit = 'per_1m';
    mode = null;
    featuresParts = [];
    strengthsParts = [];
    perCallPriceParts = [];
  };

  for (let i = 0; i < tokens.length; i++) {
    if (useHeadingsProvider) {
      const provider = pickProviderFromHeading(tokens, i);
      if (provider) currentProvider = provider;
    }

    const t = tokens[i];

    if (t.startsWith('模型名：')) {
      flush();
      currentModelId = t.replace('模型名：', '').trim();
      continue;
    }

    if (!currentModelId) continue;

    if (/^价格[:：]/.test(t)) {
      mode = null;
      const { inputPrice, outputPrice } = parseInputOutputPrice(t);

      if (inputPrice !== null) currentInputPrice = inputPrice;
      if (outputPrice !== null) currentOutputPrice = outputPrice;

      if (inputPrice === null && outputPrice === null) {
        const perCall = parsePerCallPrice(t);
        if (perCall !== null) {
          currentPriceUnit = 'per_call';
          currentInputPrice = perCall;
          currentOutputPrice = 0;
          perCallPriceParts.push(t.replace(/^价格[:：]?\s*/, '').trim());
        }
      }
      continue;
    }

    if (/^Input\s*\$/.test(t)) {
      const { inputPrice } = parseInputOutputPrice(t);
      if (inputPrice !== null) currentInputPrice = inputPrice;
      continue;
    }

    if (/^Output\s*\$/.test(t)) {
      const { outputPrice } = parseInputOutputPrice(t);
      if (outputPrice !== null) currentOutputPrice = outputPrice;
      continue;
    }

    if (/^(特点|特征)[:：]?$/.test(t) || /^(特点|特征)[:：]/.test(t)) {
      mode = 'features';
      const rest = t.replace(/^(特点|特征)[:：]?\s*/, '').trim();
      if (rest) featuresParts.push(rest);
      continue;
    }

    if (/^擅长[:：]?$/.test(t) || /^擅长[:：]/.test(t)) {
      mode = 'strengths';
      const rest = t.replace(/^擅长[:：]?\s*/, '').trim();
      if (rest) strengthsParts.push(rest);
      continue;
    }

    if (currentPriceUnit === 'per_call' && /\/次/.test(t)) {
      perCallPriceParts.push(t);
      continue;
    }

    if (mode === 'features') {
      featuresParts.push(t);
      continue;
    }
    if (mode === 'strengths') {
      strengthsParts.push(t);
    }
  }

  flush();

  const deduped = [];
  const seen = new Set();
  for (const m of models) {
    if (seen.has(m.id)) continue;
    seen.add(m.id);
    deduped.push(m);
  }

  return deduped;
};

const parseArgs = (argv) => {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
};

const main = async () => {
  const args = parseArgs(process.argv);
  const input = args.input;
  const output = args.output;
  const defaultProvider = args.defaultProvider;
  const useHeadingsProvider = Boolean(args.useHeadingsProvider);

  if (!input || !output) {
    throw new Error('参数缺失：--input <docxPath> --output <tsPath>');
  }

  const models = await parseModelsFromDocx({
    inputDocxPath: input,
    defaultProvider,
    useHeadingsProvider,
  });

  const absOut = path.isAbsolute(output) ? output : path.resolve(process.cwd(), output);
  await fs.mkdir(path.dirname(absOut), { recursive: true });

  const varName = args.varName || 'MODELS';
  const content = [
    "import type { ModelInfo } from '../types';",
    '',
    `export const ${varName}: ModelInfo[] = ${JSON.stringify(models, null, 2)};`,
    '',
  ].join('\n');
  await fs.writeFile(absOut, content, 'utf8');
  console.log(`已生成 ${models.length} 个模型 -> ${absOut}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
