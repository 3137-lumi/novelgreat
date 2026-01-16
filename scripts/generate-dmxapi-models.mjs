import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const decodeXml = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

const pickProviderFromTokens = (tokens, i) => {
  const t = tokens[i];
  const tPrev = i > 0 ? tokens[i - 1] : '';
  const tNext = i + 1 < tokens.length ? tokens[i + 1] : '';
  const combinedPrev = `${tPrev}${t}`;
  const combinedNext = `${t}${tNext}`;

  if (t.includes('Anthropic')) return 'Anthropic';
  if (t.includes('OpenAI')) return 'OpenAI';
  if (t.includes('xAI')) return 'xAI';
  if (t.includes('Google')) return 'Google';
  if (combinedPrev === 'Google' || combinedNext === 'Google') return 'Google';
  return null;
};

const specialtiesFromModelId = (modelId) => {
  const id = modelId.toLowerCase();
  const specialties = [];
  if (id.includes('dall-e') || id.includes('image')) specialties.push('图像生成');
  if (id.includes('embedding')) specialties.push('文本嵌入');
  if (id.includes('whisper') || id.includes('tts')) specialties.push('语音');
  return specialties;
};

const parsePrice = (text, label) => {
  const re = new RegExp(`${label}\\s*\\$([0-9.]+)`, 'i');
  const match = text.match(re);
  if (!match) return null;
  const value = Number.parseFloat(match[1]);
  return Number.isFinite(value) ? value : null;
};

const extractTextTokens = (xml) => {
  const tokens = [];
  const re = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g;
  let match;
  while ((match = re.exec(xml))) {
    const token = decodeXml(match[1])
      .replace(/\s+/g, ' ')
      .trim();
    if (token) tokens.push(token);
  }
  return tokens;
};

const main = async () => {
  const inputCandidates = [
    path.resolve(projectRoot, '../formatted_doc.xml'),
    path.resolve(projectRoot, '../word/document.xml'),
  ];

  let xmlPath = null;
  for (const candidate of inputCandidates) {
    try {
      await fs.access(candidate);
      xmlPath = candidate;
      break;
    } catch {
      continue;
    }
  }

  if (!xmlPath) {
    throw new Error('未找到输入文件：formatted_doc.xml 或 word/document.xml');
  }

  const xml = await fs.readFile(xmlPath, 'utf8');
  const tokens = extractTextTokens(xml);

  let currentProvider = 'Unknown';
  let currentModelId = null;
  let currentInput = null;
  let currentOutput = null;
  const models = [];

  for (let i = 0; i < tokens.length; i++) {
    const provider = pickProviderFromTokens(tokens, i);
    if (provider) currentProvider = provider;

    const t = tokens[i];

    if (t.startsWith('模型名：')) {
      currentModelId = t.replace('模型名：', '').trim();
      currentInput = null;
      currentOutput = null;
      continue;
    }

    if (currentModelId) {
      if (t.includes('价格：Input')) {
        const input = parsePrice(t, 'Input');
        if (input !== null) currentInput = input;
        continue;
      }
      if (t.includes('Output')) {
        const output = parsePrice(t, 'Output');
        if (output !== null) currentOutput = output;
      }

      if (currentInput !== null && currentOutput !== null) {
        models.push({
          id: currentModelId,
          name: currentModelId,
          provider: currentProvider,
          description: '',
          inputPrice: currentInput,
          outputPrice: currentOutput,
          specialties: specialtiesFromModelId(currentModelId),
          parameters: { model: currentModelId },
        });
        currentModelId = null;
        currentInput = null;
        currentOutput = null;
      }
    }
  }

  const deduped = [];
  const seen = new Set();
  for (const m of models) {
    if (seen.has(m.id)) continue;
    seen.add(m.id);
    deduped.push(m);
  }

  const outFile = path.resolve(projectRoot, 'src/data/dmxapiModels.ts');
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  const content = [
    "import type { ModelInfo } from '../types';",
    '',
    `export const DMXAPI_MODELS: ModelInfo[] = ${JSON.stringify(deduped, null, 2)};`,
    '',
  ].join('\n');

  await fs.writeFile(outFile, content, 'utf8');
  console.log(`已生成 ${deduped.length} 个模型 -> ${path.relative(projectRoot, outFile)}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
