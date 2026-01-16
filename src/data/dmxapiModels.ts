import type { ModelInfo } from '../types';

export const DMXAPI_MODELS: ModelInfo[] = [
  {
    "id": "claude-3-5-haiku-20241022",
    "name": "claude-3-5-haiku-20241022",
    "provider": "Anthropic",
    "description": "快、便宜，文风中规中矩",
    "inputPrice": 0.8,
    "outputPrice": 4,
    "specialties": [
      "正文续写",
      "扩写",
      "批量生成",
      "Haiku"
    ],
    "parameters": {
      "model": "claude-3-5-haiku-20241022"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-5-sonnet-20241022",
    "name": "claude-3-5-sonnet-20241022",
    "provider": "Anthropic",
    "description": "质量-成本平衡，剧情稳定",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "主力",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-3-5-sonnet-20241022"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-7-sonnet-20250219",
    "name": "claude-3-7-sonnet-20250219",
    "provider": "Anthropic",
    "description": "人物一致性更好，多线更稳",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "更稳",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-3-7-sonnet-20250219"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-7-sonnet-20250219-thinking",
    "name": "claude-3-7-sonnet-20250219-thinking",
    "provider": "Anthropic",
    "description": "推理更强，不建议直接写正文",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "复杂设定",
      "多线章纲",
      "推理",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-3-7-sonnet-20250219-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-haiku-20240307",
    "name": "claude-3-haiku-20240307",
    "provider": "Anthropic",
    "description": "老款，成本低，质量一般",
    "inputPrice": 0.8,
    "outputPrice": 4,
    "specialties": [
      "正文续写",
      "扩写",
      "Haiku"
    ],
    "parameters": {
      "model": "claude-3-haiku-20240307"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-sonnet-20240229",
    "name": "claude-3-sonnet-20240229",
    "provider": "Anthropic",
    "description": "稳定耐用，略老但可用",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-3-sonnet-20240229"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-3-opus-20240229",
    "name": "claude-3-opus-20240229",
    "provider": "Anthropic",
    "description": "文学性强、细腻，成本高",
    "inputPrice": 15,
    "outputPrice": 75,
    "specialties": [
      "精品正文",
      "关键剧情",
      "高端设定",
      "Opus"
    ],
    "parameters": {
      "model": "claude-3-opus-20240229"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-haiku-4-5-20251001",
    "name": "claude-haiku-4-5-20251001",
    "provider": "Anthropic",
    "description": "新一代 Haiku，性价比高",
    "inputPrice": 1,
    "outputPrice": 5,
    "specialties": [
      "正文续写",
      "日更生成",
      "Haiku"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-haiku-4-5-20251001-cc",
    "name": "claude-haiku-4-5-20251001-cc",
    "provider": "Anthropic",
    "description": "上下文缓存，重复设定更省钱",
    "inputPrice": 0.5,
    "outputPrice": 2.5,
    "specialties": [
      "连载正文",
      "固定世界观",
      "CC",
      "Haiku",
      "缓存"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-cc"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-haiku-4-5-20251001-thinking",
    "name": "claude-haiku-4-5-20251001-thinking",
    "provider": "Anthropic",
    "description": "偏推理，正文收益有限",
    "inputPrice": 1,
    "outputPrice": 5,
    "specialties": [
      "设定草稿",
      "结构推导",
      "推理",
      "Haiku"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-haiku-4-5-20251001-thinking-cc",
    "name": "claude-haiku-4-5-20251001-thinking-cc",
    "provider": "Anthropic",
    "description": "推理+缓存，适合固定前置内容",
    "inputPrice": 0.5,
    "outputPrice": 2.5,
    "specialties": [
      "复杂设定",
      "连载项目",
      "推理",
      "CC",
      "Haiku",
      "缓存"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-thinking-cc"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-20250514",
    "name": "claude-opus-4-20250514",
    "provider": "Anthropic",
    "description": "顶级文笔，贵",
    "inputPrice": 15,
    "outputPrice": 75,
    "specialties": [
      "精品正文",
      "核心剧情",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-20250514"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-20250514-thinking",
    "name": "claude-opus-4-20250514-thinking",
    "provider": "Anthropic",
    "description": "推理强，创作慢",
    "inputPrice": 15,
    "outputPrice": 75,
    "specialties": [
      "复杂世界观设计",
      "推理",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-20250514-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-1-20250805",
    "name": "claude-opus-4-1-20250805",
    "provider": "Anthropic",
    "description": "opus 升级，细节更好",
    "inputPrice": 15,
    "outputPrice": 75,
    "specialties": [
      "高端正文",
      "世界观",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-1-20250805"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-1-20250805-thinking",
    "name": "claude-opus-4-1-20250805-thinking",
    "provider": "Anthropic",
    "description": "偏逻辑设计",
    "inputPrice": 15,
    "outputPrice": 75,
    "specialties": [
      "大型设定工程",
      "推理",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-1-20250805-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-5-20251101",
    "name": "claude-opus-4-5-20251101",
    "provider": "Anthropic",
    "description": "高质量且成本更友好",
    "inputPrice": 5,
    "outputPrice": 25,
    "specialties": [
      "高端正文",
      "精品小说",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-5-20251101-cc",
    "name": "claude-opus-4-5-20251101-cc",
    "provider": "Anthropic",
    "description": "opus+缓存，连载高端首选",
    "inputPrice": 1.7,
    "outputPrice": 8.5,
    "specialties": [
      "长篇连载精品小说",
      "CC",
      "Opus",
      "缓存"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101-cc"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-opus-4-5-20251101-thinking",
    "name": "claude-opus-4-5-20251101-thinking",
    "provider": "Anthropic",
    "description": "推理更强",
    "inputPrice": 5,
    "outputPrice": 25,
    "specialties": [
      "复杂设定推导",
      "推理",
      "Opus"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-sonnet-4-20250514",
    "name": "claude-sonnet-4-20250514",
    "provider": "Anthropic",
    "description": "高性价比主力",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "主力",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-sonnet-4-20250514"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-sonnet-4-20250514-thinking",
    "name": "claude-sonnet-4-20250514-thinking",
    "provider": "Anthropic",
    "description": "推理增强",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "章纲",
      "结构设计",
      "推理",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-sonnet-4-20250514-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-sonnet-4-5-20250929",
    "name": "claude-sonnet-4-5-20250929",
    "provider": "Anthropic",
    "description": "新一代主力，稳定",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "设定",
      "正文",
      "主力",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-sonnet-4-5-20250929-cc",
    "name": "claude-sonnet-4-5-20250929-cc",
    "provider": "Anthropic",
    "description": "高质量+缓存，非常推荐",
    "inputPrice": 1.5,
    "outputPrice": 7.5,
    "specialties": [
      "连载正文",
      "高质",
      "CC",
      "Sonnet",
      "缓存"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929-cc"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "claude-sonnet-4-5-20250929-thinking",
    "name": "claude-sonnet-4-5-20250929-thinking",
    "provider": "Google",
    "description": "结构能力强Google · Gemini",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "复杂章纲",
      "推理",
      "Sonnet"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.0-flash",
    "name": "gemini-2.0-flash",
    "provider": "Google",
    "description": "极低成本，文风偏平",
    "inputPrice": 0.1,
    "outputPrice": 0.4,
    "specialties": [
      "正文扩写",
      "批量生成",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.0-flash"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.0-flash-SSVIP",
    "name": "gemini-2.0-flash-SSVIP",
    "provider": "Google",
    "description": "通道优化版",
    "inputPrice": 0.14,
    "outputPrice": 0.56,
    "specialties": [
      "正文扩写",
      "批量生成",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-SSVIP"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash",
    "name": "gemini-2.5-flash",
    "provider": "Google",
    "description": "快、便宜",
    "inputPrice": 0.3,
    "outputPrice": 2.5,
    "specialties": [
      "正文草稿",
      "扩写",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash-deepsearch",
    "name": "gemini-2.5-flash-deepsearch",
    "provider": "Google",
    "description": "擅长资料组织，不擅长文学",
    "inputPrice": 2,
    "outputPrice": 16,
    "specialties": [
      "考据",
      "资料型设定（历史",
      "科幻）",
      "DeepSearch",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-deepsearch"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash-lite",
    "name": "gemini-2.5-flash-lite",
    "provider": "Google",
    "description": "更便宜，质量更基础",
    "inputPrice": 0.1,
    "outputPrice": 0.4,
    "specialties": [
      "批量续写",
      "扩写",
      "Lite",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-lite"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash-nothinking",
    "name": "gemini-2.5-flash-nothinking",
    "provider": "Google",
    "description": "直给输出，适合日更",
    "inputPrice": 0.3,
    "outputPrice": 2.5,
    "specialties": [
      "正文扩写",
      "补字数",
      "直出",
      "推理",
      "非推理",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-nothinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash-thinking",
    "name": "gemini-2.5-flash-thinking",
    "provider": "Google",
    "description": "比 nothinking 更会组织",
    "inputPrice": 0.3,
    "outputPrice": 2.5,
    "specialties": [
      "简单章纲",
      "结构化草稿",
      "推理",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-pro",
    "name": "gemini-2.5-pro",
    "provider": "Google",
    "description": "结构能力强",
    "inputPrice": 1.25,
    "outputPrice": 10,
    "specialties": [
      "设定",
      "章纲",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-2.5-pro"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-pro-deepsearch",
    "name": "gemini-2.5-pro-deepsearch",
    "provider": "Google",
    "description": "资料检索更强",
    "inputPrice": 3,
    "outputPrice": 24,
    "specialties": [
      "考据型设定",
      "DeepSearch",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-deepsearch"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-pro-thinking",
    "name": "gemini-2.5-pro-thinking",
    "provider": "Google",
    "description": "逻辑强，文笔一般",
    "inputPrice": 1.25,
    "outputPrice": 10,
    "specialties": [
      "复杂设定",
      "多约束章纲",
      "推理",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-3-flash-preview",
    "name": "gemini-3-flash-preview",
    "provider": "Google",
    "description": "预览版，稳定性不确定",
    "inputPrice": 0.3,
    "outputPrice": 2.5,
    "specialties": [
      "测试",
      "探索新能力",
      "Preview",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-3-pro-preview",
    "name": "gemini-3-pro-preview",
    "provider": "Google",
    "description": "预览版",
    "inputPrice": 2,
    "outputPrice": 12,
    "specialties": [
      "测试设定",
      "章纲",
      "Preview",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-3-pro-preview"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-3-pro-preview-thinking",
    "name": "gemini-3-pro-preview-thinking",
    "provider": "Google",
    "description": "预览版",
    "inputPrice": 2,
    "outputPrice": 12,
    "specialties": [
      "测试复杂结构",
      "推理",
      "Preview",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-3-pro-preview-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-flash-latest",
    "name": "gemini-flash-latest",
    "provider": "Google",
    "description": "较稳的通用 flash",
    "inputPrice": 0.3,
    "outputPrice": 2.5,
    "specialties": [
      "正文扩写",
      "日常生成",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-flash-latest"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-flash-lite-latest",
    "name": "gemini-flash-lite-latest",
    "provider": "OpenAI",
    "description": "最低成本档OpenAI",
    "inputPrice": 0.1,
    "outputPrice": 0.4,
    "specialties": [
      "批量生成",
      "Lite",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-flash-lite-latest"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-3.5-turbo",
    "name": "gpt-3.5-turbo",
    "provider": "OpenAI",
    "description": "便宜但质量偏低",
    "inputPrice": 0.5,
    "outputPrice": 1,
    "specialties": [
      "改写",
      "草稿"
    ],
    "parameters": {
      "model": "gpt-3.5-turbo"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-3.5-turbo-16k",
    "name": "gpt-3.5-turbo-16k",
    "provider": "OpenAI",
    "description": "老模型，主要看上下文长度",
    "inputPrice": 3,
    "outputPrice": 6,
    "specialties": [
      "长输入改写",
      "润色"
    ],
    "parameters": {
      "model": "gpt-3.5-turbo-16k"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4",
    "name": "gpt-4",
    "provider": "OpenAI",
    "description": "贵且偏旧",
    "inputPrice": 30,
    "outputPrice": 60,
    "specialties": [
      "设定",
      "章纲",
      "高预算"
    ],
    "parameters": {
      "model": "gpt-4"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4-32k",
    "name": "gpt-4-32k",
    "provider": "OpenAI",
    "description": "极贵",
    "inputPrice": 60,
    "outputPrice": 120,
    "specialties": [
      "超长设定",
      "全书大纲"
    ],
    "parameters": {
      "model": "gpt-4-32k"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4-32k-0613",
    "name": "gpt-4-32k-0613",
    "provider": "OpenAI",
    "description": "极贵（旧版）",
    "inputPrice": 60,
    "outputPrice": 120,
    "specialties": [
      "超长设定",
      "全书大纲"
    ],
    "parameters": {
      "model": "gpt-4-32k-0613"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4-all",
    "name": "gpt-4-all",
    "provider": "OpenAI",
    "description": "旧且贵",
    "inputPrice": 24,
    "outputPrice": 48,
    "specialties": [
      "通用"
    ],
    "parameters": {
      "model": "gpt-4-all"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4-turbo",
    "name": "gpt-4-turbo",
    "provider": "OpenAI",
    "description": "稳定",
    "inputPrice": 10,
    "outputPrice": 30,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4-turbo"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4-turbo-2024-04-09",
    "name": "gpt-4-turbo-2024-04-09",
    "provider": "OpenAI",
    "description": "固定版本便于回归测试",
    "inputPrice": 10,
    "outputPrice": 30,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4-turbo-2024-04-09"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1",
    "name": "gpt-4.1",
    "provider": "OpenAI",
    "description": "结构好，性价比高",
    "inputPrice": 2,
    "outputPrice": 8,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4.1"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1-2025-04-14",
    "name": "gpt-4.1-2025-04-14",
    "provider": "OpenAI",
    "description": "固定版本便于对比",
    "inputPrice": 2,
    "outputPrice": 8,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4.1-2025-04-14"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1-mini",
    "name": "gpt-4.1-mini",
    "provider": "OpenAI",
    "description": "便宜，适合流水线",
    "inputPrice": 0.4,
    "outputPrice": 1.6,
    "specialties": [
      "扩写",
      "改写",
      "批量",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-4.1-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1-mini-2025-04-14",
    "name": "gpt-4.1-mini-2025-04-14",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 0.4,
    "outputPrice": 1.6,
    "specialties": [
      "扩写",
      "改写",
      "批量",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-4.1-mini-2025-04-14"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1-nano",
    "name": "gpt-4.1-nano",
    "provider": "OpenAI",
    "description": "质量一般",
    "inputPrice": 0.1,
    "outputPrice": 0.4,
    "specialties": [
      "超低成本改写",
      "标签",
      "短文"
    ],
    "parameters": {
      "model": "gpt-4.1-nano"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4.1-nano-2025-04-14",
    "name": "gpt-4.1-nano-2025-04-14",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 0.1,
    "outputPrice": 0.4,
    "specialties": [
      "超低成本改写"
    ],
    "parameters": {
      "model": "gpt-4.1-nano-2025-04-14"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4o",
    "name": "gpt-4o",
    "provider": "OpenAI",
    "description": "快，文风偏理性",
    "inputPrice": 2.5,
    "outputPrice": 10,
    "specialties": [
      "通用正文",
      "对话式创作"
    ],
    "parameters": {
      "model": "gpt-4o"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4o-mini",
    "name": "gpt-4o-mini",
    "provider": "OpenAI",
    "description": "便宜快",
    "inputPrice": 0.15,
    "outputPrice": 0.6,
    "specialties": [
      "扩写",
      "改写",
      "批量",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-4o-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-4o-mini-2024-07-18",
    "name": "gpt-4o-mini-2024-07-18",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 0.15,
    "outputPrice": 0.6,
    "specialties": [
      "扩写",
      "改写",
      "批量",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-4o-mini-2024-07-18"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-2025-08-07",
    "name": "gpt-5-2025-08-07",
    "provider": "OpenAI",
    "description": "逻辑强，适合剧情向",
    "inputPrice": 1.25,
    "outputPrice": 10,
    "specialties": [
      "设定",
      "章纲",
      "稳正文"
    ],
    "parameters": {
      "model": "gpt-5-2025-08-07"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-mini",
    "name": "gpt-5-mini",
    "provider": "OpenAI",
    "description": "性价比高",
    "inputPrice": 0.25,
    "outputPrice": 2,
    "specialties": [
      "正文扩写",
      "续写",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-5-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-mini-2025-08-07",
    "name": "gpt-5-mini-2025-08-07",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 0.25,
    "outputPrice": 2,
    "specialties": [
      "正文扩写",
      "续写",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-5-mini-2025-08-07"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-mini-ssvip",
    "name": "gpt-5-mini-ssvip",
    "provider": "OpenAI",
    "description": "同档更贵（通道）",
    "inputPrice": 0.38,
    "outputPrice": 3.04,
    "specialties": [
      "正文扩写",
      "续写",
      "Mini"
    ],
    "parameters": {
      "model": "gpt-5-mini-ssvip"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-nano",
    "name": "gpt-5-nano",
    "provider": "OpenAI",
    "description": "质量一般",
    "inputPrice": 0.05,
    "outputPrice": 0.4,
    "specialties": [
      "超低成本改写",
      "短续写"
    ],
    "parameters": {
      "model": "gpt-5-nano"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-nano-2025-08-07",
    "name": "gpt-5-nano-2025-08-07",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 0.05,
    "outputPrice": 0.4,
    "specialties": [
      "超低成本改写",
      "短续写"
    ],
    "parameters": {
      "model": "gpt-5-nano-2025-08-07"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-nano-ssvip",
    "name": "gpt-5-nano-ssvip",
    "provider": "OpenAI",
    "description": "通道更贵",
    "inputPrice": 0.08,
    "outputPrice": 0.64,
    "specialties": [
      "超低成本改写"
    ],
    "parameters": {
      "model": "gpt-5-nano-ssvip"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-pro",
    "name": "gpt-5-pro",
    "provider": "OpenAI",
    "description": "极贵",
    "inputPrice": 15,
    "outputPrice": 120,
    "specialties": [
      "复杂设定",
      "高端内容",
      "Pro"
    ],
    "parameters": {
      "model": "gpt-5-pro"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-ssvip",
    "name": "gpt-5-ssvip",
    "provider": "OpenAI",
    "description": "通道更贵",
    "inputPrice": 1.84,
    "outputPrice": 14.72,
    "specialties": [
      "设定",
      "章纲",
      "稳正文"
    ],
    "parameters": {
      "model": "gpt-5-ssvip"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5-web",
    "name": "gpt-5-web",
    "provider": "OpenAI",
    "description": "适合需要检索信息的设定",
    "inputPrice": 1.063,
    "outputPrice": 8.5,
    "specialties": [
      "资料型设定",
      "考据"
    ],
    "parameters": {
      "model": "gpt-5-web"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.1",
    "name": "gpt-5.1",
    "provider": "OpenAI",
    "description": "稳",
    "inputPrice": 1.25,
    "outputPrice": 10,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-5.1"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.2",
    "name": "gpt-5.2",
    "provider": "OpenAI",
    "description": "更强主力，适合剧情推进",
    "inputPrice": 1.75,
    "outputPrice": 14,
    "specialties": [
      "设定",
      "正文",
      "主力"
    ],
    "parameters": {
      "model": "gpt-5.2"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.2-high",
    "name": "gpt-5.2-high",
    "provider": "OpenAI",
    "description": "偏高质量",
    "inputPrice": 1.75,
    "outputPrice": 14,
    "specialties": [
      "设定",
      "正文",
      "更稳"
    ],
    "parameters": {
      "model": "gpt-5.2-high"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.2-low",
    "name": "gpt-5.2-low",
    "provider": "OpenAI",
    "description": "偏速度/成本",
    "inputPrice": 1.75,
    "outputPrice": 14,
    "specialties": [
      "正文批量",
      "性价比"
    ],
    "parameters": {
      "model": "gpt-5.2-low"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.2-pro",
    "name": "gpt-5.2-pro",
    "provider": "OpenAI",
    "description": "极贵，不建议常开",
    "inputPrice": 21,
    "outputPrice": 168,
    "specialties": [
      "顶级设定",
      "复杂规划",
      "Pro"
    ],
    "parameters": {
      "model": "gpt-5.2-pro"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gpt-5.2-pro-2025-12-11",
    "name": "gpt-5.2-pro-2025-12-11",
    "provider": "OpenAI",
    "description": "固定版本",
    "inputPrice": 21,
    "outputPrice": 168,
    "specialties": [
      "顶级设定",
      "复杂规划",
      "Pro"
    ],
    "parameters": {
      "model": "gpt-5.2-pro-2025-12-11"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o1",
    "name": "o1",
    "provider": "OpenAI",
    "description": "不建议写正文",
    "inputPrice": 15,
    "outputPrice": 60,
    "specialties": [
      "复杂推理设定",
      "悬疑结构"
    ],
    "parameters": {
      "model": "o1"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o1-mini",
    "name": "o1-mini",
    "provider": "OpenAI",
    "description": "正文一般",
    "inputPrice": 1.1,
    "outputPrice": 4.4,
    "specialties": [
      "轻推理",
      "结构辅助",
      "Mini"
    ],
    "parameters": {
      "model": "o1-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o1-preview",
    "name": "o1-preview",
    "provider": "OpenAI",
    "description": "预览版",
    "inputPrice": 15,
    "outputPrice": 60,
    "specialties": [
      "推理测试",
      "Preview"
    ],
    "parameters": {
      "model": "o1-preview"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o1-pro-all",
    "name": "o1-pro-all",
    "provider": "OpenAI",
    "description": "按次计费，适合少量高价值任务",
    "inputPrice": 0.25,
    "outputPrice": 0,
    "specialties": [
      "按次计费",
      "超复杂推理任务",
      "Pro"
    ],
    "parameters": {
      "model": "o1-pro-all"
    },
    "priceUnit": "per_call"
  },
  {
    "id": "o3",
    "name": "o3",
    "provider": "OpenAI",
    "description": "偏逻辑",
    "inputPrice": 2,
    "outputPrice": 8,
    "specialties": [
      "悬疑结构",
      "复杂章纲"
    ],
    "parameters": {
      "model": "o3"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o3-mini",
    "name": "o3-mini",
    "provider": "OpenAI",
    "description": "偏逻辑",
    "inputPrice": 1.1,
    "outputPrice": 4.4,
    "specialties": [
      "结构辅助",
      "Mini"
    ],
    "parameters": {
      "model": "o3-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o3-mini-high",
    "name": "o3-mini-high",
    "provider": "OpenAI",
    "description": "偏逻辑",
    "inputPrice": 1.1,
    "outputPrice": 4.4,
    "specialties": [
      "更稳的结构辅助",
      "Mini"
    ],
    "parameters": {
      "model": "o3-mini-high"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "o4-mini",
    "name": "o4-mini",
    "provider": "xAI",
    "description": "正文一般xAI · Grok",
    "inputPrice": 1.1,
    "outputPrice": 4.4,
    "specialties": [
      "推理辅助",
      "Mini"
    ],
    "parameters": {
      "model": "o4-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3",
    "name": "grok-3",
    "provider": "xAI",
    "description": "文风偏硬",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "科幻设定",
      "硬设定"
    ],
    "parameters": {
      "model": "grok-3"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-beta",
    "name": "grok-3-beta",
    "provider": "xAI",
    "description": "beta 稳定性不确定",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "测试",
      "设定",
      "Beta"
    ],
    "parameters": {
      "model": "grok-3-beta"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-deepsearch",
    "name": "grok-3-deepsearch",
    "provider": "xAI",
    "description": "偏检索组织",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "资料型设定",
      "考据",
      "DeepSearch"
    ],
    "parameters": {
      "model": "grok-3-deepsearch"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-fast",
    "name": "grok-3-fast",
    "provider": "xAI",
    "description": "更贵更快",
    "inputPrice": 5,
    "outputPrice": 25,
    "specialties": [
      "快速扩写",
      "草稿"
    ],
    "parameters": {
      "model": "grok-3-fast"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-mini",
    "name": "grok-3-mini",
    "provider": "xAI",
    "description": "便宜但文笔一般",
    "inputPrice": 0.3,
    "outputPrice": 0.501,
    "specialties": [
      "低成本扩写",
      "改写",
      "Mini"
    ],
    "parameters": {
      "model": "grok-3-mini"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-mini-beta",
    "name": "grok-3-mini-beta",
    "provider": "xAI",
    "description": "beta",
    "inputPrice": 0.3,
    "outputPrice": 0.501,
    "specialties": [
      "低成本扩写",
      "测试",
      "Beta",
      "Mini"
    ],
    "parameters": {
      "model": "grok-3-mini-beta"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-3-reasoner",
    "name": "grok-3-reasoner",
    "provider": "xAI",
    "description": "偏推理",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "逻辑结构",
      "设定推导"
    ],
    "parameters": {
      "model": "grok-3-reasoner"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4",
    "name": "grok-4",
    "provider": "xAI",
    "description": "偏理工",
    "inputPrice": 3,
    "outputPrice": 15,
    "specialties": [
      "科幻设定",
      "硬设定"
    ],
    "parameters": {
      "model": "grok-4"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4-fast",
    "name": "grok-4-fast",
    "provider": "xAI",
    "description": "性价比高但文笔一般",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "低成本扩写"
    ],
    "parameters": {
      "model": "grok-4-fast"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4-fast-non-reasoning",
    "name": "grok-4-fast-non-reasoning",
    "provider": "xAI",
    "description": "不推理",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "直出扩写"
    ],
    "parameters": {
      "model": "grok-4-fast-non-reasoning"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4-fast-reasoning",
    "name": "grok-4-fast-reasoning",
    "provider": "xAI",
    "description": "带推理",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "结构辅助"
    ],
    "parameters": {
      "model": "grok-4-fast-reasoning"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4.1",
    "name": "grok-4.1",
    "provider": "xAI",
    "description": "较新",
    "inputPrice": 2,
    "outputPrice": 10,
    "specialties": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "grok-4.1"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4.1-fast",
    "name": "grok-4.1-fast",
    "provider": "xAI",
    "description": "低成本",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "扩写",
      "批量"
    ],
    "parameters": {
      "model": "grok-4.1-fast"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4.1-non-thinking",
    "name": "grok-4.1-non-thinking",
    "provider": "xAI",
    "description": "不推理",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "直出扩写",
      "推理",
      "非推理"
    ],
    "parameters": {
      "model": "grok-4.1-non-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "grok-4.1-thinking",
    "name": "grok-4.1-thinking",
    "provider": "xAI",
    "description": "带推理",
    "inputPrice": 0.2,
    "outputPrice": 0.5,
    "specialties": [
      "结构辅助",
      "推理"
    ],
    "parameters": {
      "model": "grok-4.1-thinking"
    },
    "priceUnit": "per_1m"
  }
];
