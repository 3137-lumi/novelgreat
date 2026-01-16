const uniq = (arr: string[]) => Array.from(new Set(arr.map((x) => x.trim()).filter(Boolean)));

const normalizeOne = (tag: string): string[] => {
  const t = tag.trim();
  if (!t) return [];

  const lower = t.toLowerCase();

  const has = (needle: string) => t.includes(needle);
  const hasLower = (needle: string) => lower.includes(needle);

  // Versions / Editions (usually redundant if model name has it, but good for filtering)
  if (['flash', 'lite', 'preview', 'pro', 'beta', 'turbo', 'mini', 'plus'].some(k => lower.includes(k))) {
    // We generally ignore version tags for "Specialties" as they are in the name,
    // unless it's a specific "Low Cost" or "Fast" indicator.
    // Let's map "flash"/"lite"/"mini" -> "轻量级" (Lightweight)
    if (lower.includes('flash') || lower.includes('lite') || lower.includes('mini') || lower.includes('haiku')) return ['轻量级'];
    return []; // Remove 'pro', 'preview' etc as they are just version markers
  }

  // Logic / Reasoning
  if (t === 'QC' || has('校验') || hasLower('qc') || has('逻辑')) return ['逻辑校验'];
  if (has('结构') || has('剧情') || has('推演') || has('大纲')) return ['剧情结构'];
  if (has('推理') || has('思维链') || hasLower('thinking') || hasLower('reasoning')) return ['深度思考'];

  // Writing / Content
  if (has('文风') || has('风格') || has('角色')) return ['角色扮演'];
  if (has('设定') || has('世界观') || has('人设')) return ['设定构建'];
  if (has('草稿') || has('初稿')) return ['草稿生成'];
  if (has('扩写') || has('续写') || has('补全')) return ['续写扩写'];
  if (has('改写') || has('润色') || has('重写')) return ['润色改写'];
  if (has('正文') || has('小说') || has('写作') || has('直出')) return ['正文写作'];
  
  // Production / Batch
  if (has('跑量') || has('批量') || has('流水线') || has('并发')) return ['批量生产'];

  // Technical
  if (lower.includes('embedding') || lower.includes('search') || lower.includes('vision') || lower.includes('audio') || lower.includes('image')) return []; // Exclude non-text for novel config context usually, or keep specific? User wants "novel model config", so text is key.
  
  // General fallback for unknown meaningful tags, but try to be strict to reduce noise
  if (t.length > 6) return []; // Ignore long random descriptions
  
  return [t];
};

export const normalizeSpecialties = (tags: string[]) => {
  const out: string[] = [];
  for (const tag of tags || []) {
    out.push(...normalizeOne(tag));
  }
  return uniq(out).sort();
};
