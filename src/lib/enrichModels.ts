import type { ModelInfo } from '../types';

const uniq = (arr: string[]) => Array.from(new Set(arr.map((x) => x.trim()).filter(Boolean)));

const inferProvider = (modelId: string) => {
  const id = modelId.toLowerCase();
  if (id.startsWith('claude')) return 'Anthropic';
  if (id.startsWith('gemini')) return 'Google';
  if (id.startsWith('grok')) return 'xAI';
  if (id.startsWith('gpt') || id.startsWith('o1') || id.startsWith('o3') || id.startsWith('o4')) return 'OpenAI';
  if (id.startsWith('chatgpt')) return 'OpenAI';
  if (id.includes('dall-e') || id.startsWith('gpt-image')) return 'OpenAI';
  if (id.startsWith('text-embedding') || id.startsWith('whisper')) return 'OpenAI';
  return null;
};

const inferTags = (modelId: string) => {
  const id = modelId.toLowerCase();
  const tags: string[] = [];
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

const inferNovelStrengths = (modelId: string) => {
  const id = modelId.toLowerCase();
  const tags: string[] = [];

  if (id.startsWith('claude')) {
    if (id.includes('haiku')) tags.push('章纲', '正文草稿', '改写');
    if (id.includes('sonnet')) tags.push('设定', '章纲', '正文');
    if (id.includes('opus')) tags.push('设定定稿', '高质量正文', '终稿');
    if (id.includes('thinking')) tags.push('剧情推演', '逻辑校验');
    return tags;
  }

  if (id.startsWith('gemini')) {
    if (id.includes('flash')) tags.push('章纲', '正文草稿', '改写');
    if (id.includes('pro')) tags.push('设定', '高质量正文');
    if (id.includes('thinking')) tags.push('逻辑校验', '剧情结构');
    if (id.includes('nothinking')) tags.push('正文生成');
    return tags;
  }

  if (id.startsWith('gpt')) {
    if (id.startsWith('gpt-3.5')) tags.push('章纲', '正文草稿', '改写');
    else if (id.startsWith('gpt-4')) tags.push('设定', '高质量正文', '逻辑校验');
    else if (id.startsWith('gpt-5')) tags.push('设定', '章纲', '正文');
    else tags.push('通用写作');
    if (id.includes('codex')) tags.push('代码');
    return tags;
  }

  if (id.startsWith('o1') || id.startsWith('o3') || id.startsWith('o4')) {
    tags.push('剧情推演', '逻辑校验', 'QC');
    return tags;
  }

  if (id.startsWith('grok')) {
    tags.push('脑暴', '章纲');
    if (id.includes('reason')) tags.push('推理');
    return tags;
  }

  if (id.includes('dall-e') || id.startsWith('gpt-image')) {
    tags.push('封面', '插画');
    return tags;
  }

  if (id.includes('embedding')) {
    tags.push('向量', '检索');
    return tags;
  }

  if (id.includes('whisper') || id.includes('tts')) {
    tags.push('语音转写', '配音');
    return tags;
  }

  return tags;
};

const inferDescription = (modelId: string) => {
  const id = modelId.toLowerCase();
  if (id.startsWith('claude')) {
    if (id.includes('haiku')) return '速度快、低成本，适合跑量草稿';
    if (id.includes('sonnet')) return '质量-成本平衡，适合主力写作';
    if (id.includes('opus')) return '高质量输出，适合终稿与复杂创作';
    return 'Claude 系列模型';
  }
  if (id.startsWith('gemini')) {
    if (id.includes('flash')) return '速度快，适合草稿与改写';
    if (id.includes('pro')) return '高质量写作能力';
    return 'Gemini 系列模型';
  }
  if (id.startsWith('gpt-3.5')) return '经典低成本对话模型，适合草稿与改写';
  if (id.startsWith('gpt-4')) return '更强推理与写作能力，适合高质量正文';
  if (id.startsWith('gpt-5')) return '新一代通用模型，适合设定与正文';
  if (id.startsWith('o1') || id.startsWith('o3') || id.startsWith('o4')) return '推理模型，适合复杂剧情推演与QC';
  if (id.startsWith('grok')) return '适合脑暴与灵感生成';
  if (id.includes('dall-e') || id.startsWith('gpt-image')) return '图像生成模型';
  if (id.includes('embedding')) return '文本向量嵌入模型';
  if (id.includes('whisper')) return '语音识别与转写';
  return '';
};

export const enrichDMXAPIModels = (dmxapi: ModelInfo[], geminiSupplier: ModelInfo[]) => {
  const geminiById = new Map(geminiSupplier.map((m) => [m.id, m]));

  return dmxapi.map((m) => {
    const gemini = geminiById.get(m.id);
    const provider = inferProvider(m.id) ?? m.provider;

    const baseSpecialties = Array.isArray(m.specialties) ? m.specialties : [];
    const extra = uniq([
      ...(gemini?.specialties ?? []),
      ...inferTags(m.id),
      ...(baseSpecialties.length === 0 ? inferNovelStrengths(m.id) : []),
    ]);
    const specialties = uniq([...baseSpecialties, ...extra]);

    const description = (m.description || gemini?.description || '').trim() || inferDescription(m.id);

    return {
      ...m,
      provider,
      description,
      specialties,
    };
  });
};
