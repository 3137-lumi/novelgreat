const uniq = (arr: string[]) => Array.from(new Set(arr.map((x) => x.trim()).filter(Boolean)));

const normalizeOne = (tag: string): string[] => {
  const t = tag.trim();
  if (!t) return [];

  const lower = t.toLowerCase();

  const has = (needle: string) => t.includes(needle);
  const hasLower = (needle: string) => lower.includes(needle);

  if (['flash', 'lite', 'preview', 'pro', 'beta'].includes(lower)) return ['版本'];
  if (['haiku', 'sonnet', 'opus', 'cc'].includes(lower)) return [];
  if (['haiku', 'sonnet', 'opus', 'cc'].includes(t)) return [];

  if (t === 'QC' || t === '全书逻辑校验' || t === '逻辑校验' || has('校验') || hasLower('qc')) return ['逻辑校验'];

  if (t === '剧情结构测试' || t === '复杂结构验证' || t === '复杂剧情推演' || t === '结构' || has('结构') || has('剧情') || has('推演')) return ['结构'];

  if (t === '测试新文风' || t === '文风' || has('文风')) return ['文风'];

  if (t === '设定定稿' || t === '设定' || has('设定') || has('世界观') || has('人设')) return ['设定'];

  if (t === '草稿' || t === '大规模草稿生成' || has('草稿')) return ['草稿'];

  if (t === '章纲' || has('章纲') || has('大纲')) return ['章纲'];
  if (t === '章纲跑量') return ['章纲', '跑量'];

  if (t === '跑量' || t === '批量生成' || has('跑量') || has('批量') || has('流水线')) return ['跑量'];

  if (t === '改写' || has('改写') || has('润色') || has('重写')) return ['改写'];

  if (t === '快照' || has('快照') || has('固定版本') || /\b-0\d\d\b/.test(lower) || /-001\b/.test(lower)) return ['快照'];

  if (t === '推理' || has('推理') || has('思维链') || hasLower('thinking')) return ['推理'];
  if (t === '非推理' || has('非推理') || hasLower('nothinking') || hasLower('non-thinking')) return ['非推理'];

  if (t === '通用写作' || t === '通用' || has('通用写作') || has('通用')) return ['通用写作'];

  if (
    t === '正文' ||
    t === '正文生成' ||
    t === '正文草稿' ||
    t === '高质量正文' ||
    t === '高质量正文测试' ||
    t === '旗舰级正文' ||
    t === '终稿' ||
    t === '正文续写' ||
    t === '正文扩写' ||
    t === '续写' ||
    t === '扩写' ||
    t === '补字数' ||
    t === '直出' ||
    t === '稳正文'
  ) {
    return ['正文'];
  }

  if (has('正文') || has('连载') || has('日更') || has('小说') || has('剧情') || has('对话')) return ['正文'];

  if (t === '章纲跑量') return ['章纲', '跑量'];

  if (t === '剧情结构') return ['结构'];

  if (t === '复杂结构') return ['结构'];

  if (t === '复杂剧情') return ['结构'];

  if (t === '人物一致性更好' || t === '更稳' || t === '主力' || has('更稳') || has('主力')) return [];

  if (has('高预算') || has('高端内容') || t === '高端内容' || t === '高端' || t === '高质' || t === '高质量' || t === '顶级设定' || t === '高端设定') {
    return [];
  }

  if (lower.includes('embedding') || t === '文本嵌入') return [];
  if (t === '图像生成' || lower.includes('image') || lower.includes('dall')) return [];
  if (t === '语音' || lower.includes('tts') || lower.includes('whisper')) return [];
  if (t === 'DeepSearch' || lower.includes('deepsearch')) return [];

  return [t];
};

export const normalizeSpecialties = (tags: string[]) => {
  const out: string[] = [];
  for (const tag of tags || []) {
    out.push(...normalizeOne(tag));
  }
  return uniq(out);
};
