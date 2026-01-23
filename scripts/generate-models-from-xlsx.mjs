import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
 
const decodeXml = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
 
const extractTextTokens = (xml) => {
  const tokens = [];
  const re = /<t[^>]*>([\s\S]*?)<\/t>/g;
  let match;
  while ((match = re.exec(xml))) {
    const token = decodeXml(match[1]).replace(/\s+/g, ' ').trim();
    if (token) tokens.push(token);
  }
  return tokens;
};
 
const parseSharedStrings = (xml) => {
  const out = [];
  const re = /<si>([\s\S]*?)<\/si>/g;
  let match;
  while ((match = re.exec(xml))) {
    out.push(extractTextTokens(match[1]).join(''));
  }
  return out;
};
 
const colToIndex = (col) => {
  let n = 0;
  for (let i = 0; i < col.length; i++) {
    n = n * 26 + (col.charCodeAt(i) - 64);
  }
  return n - 1;
};
 
const getCellValue = ({ cellXml, attrs, sharedStrings }) => {
  const tMatch = attrs.match(/\bt="([^"]+)"/);
  const type = tMatch ? tMatch[1] : null;
 
  if (type === 'inlineStr') {
    const tokens = extractTextTokens(cellXml);
    return tokens.join('');
  }
 
  const vMatch = cellXml.match(/<v>([\s\S]*?)<\/v>/);
  if (!vMatch) return null;
  const raw = decodeXml(vMatch[1]).trim();
 
  if (type === 's') {
    const idx = Number.parseInt(raw, 10);
    return Number.isFinite(idx) ? sharedStrings[idx] ?? null : null;
  }
 
  const num = Number.parseFloat(raw);
  if (Number.isFinite(num) && String(num) === raw.replace(/\.0+$/, '').replace(/(\.\d+?)0+$/, '$1')) {
    return num;
  }
 
  return raw;
};
 
const parseSheetRows = (xml, sharedStrings) => {
  const rows = [];
  const rowRe = /<row\b[^>]*\br="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
  let rowMatch;
  while ((rowMatch = rowRe.exec(xml))) {
    const rowNum = Number.parseInt(rowMatch[1], 10);
    const rowXml = rowMatch[2];
 
    const row = [];
 
    const cellRe = /<c\b[^>]*\br="([A-Z]+)(\d+)"([^>]*)>([\s\S]*?)<\/c>/g;
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowXml))) {
      const col = cellMatch[1];
      const attrs = cellMatch[3] ?? '';
      const inner = cellMatch[4] ?? '';
      const colIndex = colToIndex(col);
      const value = getCellValue({ cellXml: inner, attrs, sharedStrings });
      row[colIndex] = value;
    }
 
    const selfClosingCellRe = /<c\b[^>]*\br="([A-Z]+)(\d+)"[^>]*\/>/g;
    while ((cellMatch = selfClosingCellRe.exec(rowXml))) {
      const col = cellMatch[1];
      const colIndex = colToIndex(col);
      if (row[colIndex] === undefined) row[colIndex] = null;
    }
 
    rows[rowNum] = row;
  }
 
  return rows.filter(Boolean);
};
 
const normalizeHeader = (value) => String(value ?? '').trim();
const isBlankRow = (row) => !row || row.every((c) => c === null || c === undefined || String(c).trim() === '');
 
const findHeaderRowIndex = (rows) => {
  const hints = ['模型', '输入', '输出', '价格', '思考', '能力'];
  for (let i = 0; i < Math.min(rows.length, 20); i++) {
    const row = rows[i];
    if (isBlankRow(row)) continue;
    const cells = row.map((c) => normalizeHeader(c)).filter(Boolean);
    const score = hints.reduce((acc, h) => acc + (cells.some((x) => x.includes(h)) ? 1 : 0), 0);
    if (score >= 2) return i;
  }
  return 0;
};
 
const sheetToObjects = (rows) => {
  const headerIndex = findHeaderRowIndex(rows);
  const headerRow = rows[headerIndex] ?? [];
 
  const headers = headerRow.map((h) => normalizeHeader(h));
  const objects = [];
  for (let i = headerIndex + 1; i < rows.length; i++) {
    const row = rows[i];
    if (isBlankRow(row)) continue;
    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      const key = headers[c];
      if (!key) continue;
      const value = row[c];
      if (value === null || value === undefined || String(value).trim() === '') continue;
      obj[key] = value;
    }
    if (Object.keys(obj).length > 0) objects.push(obj);
  }
  return objects;
};
 
const uniq = (arr) => Array.from(new Set(arr.map((x) => String(x).trim()).filter(Boolean)));
 
const inferProvider = (modelId) => {
  const id = String(modelId).toLowerCase();
 
  if (id.startsWith('claude')) return 'Anthropic';
  if (id.startsWith('gemini')) return 'Google';
  if (id.startsWith('grok')) return 'xAI';
  if (id.startsWith('gpt') || id.startsWith('o1') || id.startsWith('o3') || id.startsWith('o4') || id.startsWith('chatgpt')) return 'OpenAI';
 
  if (id.startsWith('qwen') || id.startsWith('qwq') || id.startsWith('qvq')) return '通义千问';
  if (id.startsWith('deepseek')) return 'DeepSeek';
  if (id.startsWith('glm')) return '智谱';
  if (id.startsWith('kimi')) return '月之暗面';
  if (id.startsWith('doubao')) return '火山';
  if (id.startsWith('ernie') || id.startsWith('qianfan')) return '百度';
 
  return null;
};
 
const parseYesNo = (value) => {
  const v = String(value ?? '').trim().toLowerCase();
  if (!v) return null;
  if (v === '是' || v === '有' || v === 'true' || v === 'yes') return true;
  if (v === '否' || v === '无' || v === 'false' || v === 'no') return false;
  if (v.includes('不支持')) return false;
  return null;
};
 
const pickFirst = (obj, keys) => {
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
};
 
const splitTendency = (text) => {
  const raw = String(text ?? '').trim();
  if (!raw || raw === '-' || raw === '—') return { tags: [], hint: '' };
  const [left, ...rest] = raw.split(/[；;]/);
  const hint = rest.join('；').trim();
  const tags = uniq(
    String(left ?? '')
      .split(/[\/|、,，\s]+/)
      .map((x) => x.trim())
      .filter(Boolean)
  );
  return { tags, hint };
};
 
const parseInputOutputPrice = (obj, { currency }) => {
  const inputRaw = pickFirst(obj, ['输入价格', '输入价', 'Input', 'input']);
  const outputRaw = pickFirst(obj, ['输出价格', '输出价', 'Output', 'output']);
  const combinedRaw = pickFirst(obj, ['价格（单位：百万token）', '价格', '价格(单位：百万token)']);
 
  const toNumber = (v) => {
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    const s = String(v ?? '').trim();
    if (!s) return null;
    const num = Number.parseFloat(s.replace(/[^\d.]+/g, ''));
    return Number.isFinite(num) ? num : null;
  };
 
  const maybePerCall = (v) => typeof v === 'string' && /\/\s*次/.test(v);
 
  const currencyFactor = currency === 'cny' ? 1 / 7 : 1;
 
  if (typeof combinedRaw === 'string' && combinedRaw.includes('/')) {
    const [a, b] = combinedRaw.split('/').map((x) => x.trim());
    const input = toNumber(a);
    const output = toNumber(b);
    if (input !== null && output !== null) {
      return { inputPrice: input * currencyFactor, outputPrice: output * currencyFactor, priceUnit: 'per_1m' };
    }
  }
 
  if (typeof combinedRaw === 'number' && Number.isFinite(combinedRaw)) {
    if (combinedRaw > 1000) {
      return { inputPrice: null, outputPrice: null, priceUnit: 'per_1m' };
    }
  }

  if (maybePerCall(inputRaw)) {
    const input = toNumber(inputRaw);
    if (input !== null) return { inputPrice: input * currencyFactor, outputPrice: null, priceUnit: 'per_call' };
  }
 
  const input = toNumber(inputRaw);
  const output = toNumber(outputRaw);
  if (input !== null || output !== null) {
    return {
      inputPrice: input === null ? null : input * currencyFactor,
      outputPrice: output === null ? null : output * currencyFactor,
      priceUnit: 'per_1m',
    };
  }
 
  if (typeof combinedRaw === 'string' && maybePerCall(combinedRaw)) {
    const input = toNumber(combinedRaw);
    if (input !== null) return { inputPrice: input * currencyFactor, outputPrice: null, priceUnit: 'per_call' };
  }
 
  return { inputPrice: null, outputPrice: null, priceUnit: 'per_1m' };
};
 
const parseModelsFromXlsx = async ({ inputXlsxPath, currency }) => {
  const sharedStringsXml = execSync(`unzip -p "${inputXlsxPath}" xl/sharedStrings.xml`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
  const sharedStrings = parseSharedStrings(sharedStringsXml);
 
  const sheetCandidates = ['xl/worksheets/sheet1.xml', 'xl/worksheets/sheet0.xml', 'xl/worksheets/sheet2.xml'];
  let sheetXml = null;
  for (const candidate of sheetCandidates) {
    try {
      sheetXml = execSync(`unzip -p "${inputXlsxPath}" ${candidate}`, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      break;
    } catch {
      // ignore
    }
  }
  if (!sheetXml) throw new Error(`无法读取工作表：${inputXlsxPath}`);
 
  const rows = parseSheetRows(sheetXml, sharedStrings);
  const records = sheetToObjects(rows);
 
  const models = [];
  for (const r of records) {
    const id =
      pickFirst(r, ['模型ID', '模型id', '模型Id', '模型名', '模型', 'Model ID', 'model id', 'modelId', '模型id ']) ?? '';
    const modelId = String(id).trim();
    if (!modelId) continue;
    if (/^\d+$/.test(modelId)) continue;
 
    const provider = inferProvider(modelId) ?? String(pickFirst(r, ['供应商', '模型方', '提供方', '备注 / 类型', '备注/类型']) ?? 'Unknown');
 
    const note =
      pickFirst(r, ['写作能力备注（小说向）', '写作能力备注', '写作能力备注(小说向)', '备注', '备注 / 类型', '写作能力']) ?? '';
    const description = String(note ?? '').trim();
 
    const thinkingValue = pickFirst(r, ['是否思考模式', '思考模式', '是否有深度思考']);
    const isThinking = parseYesNo(thinkingValue);
 
    const tendencyValue = pickFirst(r, [
      '功能倾向',
      '能力类型',
      '能力支持（根据卡片标签）',
      '能力支持',
      '思考模式支持类型',
      '原生续写模式',
    ]);
    const { tags: tendencyTags, hint: tendencyHint } = splitTendency(tendencyValue);
 
    const { inputPrice, outputPrice, priceUnit } = parseInputOutputPrice(r, { currency });
 
    const specialties = uniq([
      ...tendencyTags,
      ...(tendencyHint ? splitTendency(tendencyHint).tags : []),
      ...(isThinking ? ['推理'] : []),
    ]);
 
    models.push({
      id: modelId,
      name: modelId,
      provider,
      description: description || (tendencyHint ? tendencyHint : ''),
      inputPrice,
      outputPrice,
      priceUnit,
      specialties,
      tendencies: tendencyTags,
      parameters: { model: modelId },
      isThinking: isThinking ?? undefined,
    });
  }
 
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
 
  const currency = String(args.currency ?? 'usd').toLowerCase();
  if (!['usd', 'cny'].includes(currency)) {
    throw new Error('参数错误：--currency 仅支持 usd / cny');
  }
 
  if (!input || !output) {
    throw new Error('参数缺失：--input <xlsxPath> --output <tsPath> [--currency usd|cny]');
  }
 
  const models = await parseModelsFromXlsx({
    inputXlsxPath: input,
    currency,
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
