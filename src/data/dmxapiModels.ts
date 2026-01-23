import type { ModelInfo } from '../types';

export const DMXAPI_MODELS: ModelInfo[] = [
  {
    "id": "claude-3-5-haiku-20241022",
    "name": "claude-3-5-haiku-20241022",
    "provider": "Anthropic",
    "description": "快、便宜",
    "inputPrice": 0.5485714285714285,
    "outputPrice": 2.7428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "正文续写",
      "扩写",
      "批量生成",
      "快",
      "便宜"
    ],
    "tendencies": [
      "正文续写",
      "扩写",
      "批量生成"
    ],
    "parameters": {
      "model": "claude-3-5-haiku-20241022"
    },
    "isThinking": false
  },
  {
    "id": "claude-3-5-sonnet-20241022",
    "name": "claude-3-5-sonnet-20241022",
    "provider": "Anthropic",
    "description": "稳定",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲",
      "正文主力",
      "稳定"
    ],
    "tendencies": [
      "设定",
      "章纲",
      "正文主力"
    ],
    "parameters": {
      "model": "claude-3-5-sonnet-20241022"
    },
    "isThinking": false
  },
  {
    "id": "claude-3-7-sonnet-20250219",
    "name": "claude-3-7-sonnet-20250219",
    "provider": "Anthropic",
    "description": "人物一致性强",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "人物一致性强"
    ],
    "tendencies": [
      "设定",
      "章纲",
      "正文"
    ],
    "parameters": {
      "model": "claude-3-7-sonnet-20250219"
    },
    "isThinking": false
  },
  {
    "id": "claude-3-7-sonnet-20250219-thinking",
    "name": "claude-3-7-sonnet-20250219-thinking",
    "provider": "Anthropic",
    "description": "强推理",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂设定",
      "多线章纲",
      "强推理",
      "推理"
    ],
    "tendencies": [
      "复杂设定",
      "多线章纲"
    ],
    "parameters": {
      "model": "claude-3-7-sonnet-20250219-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-3-haiku-20240307",
    "name": "claude-3-haiku-20240307",
    "provider": "Anthropic",
    "description": "老款低价",
    "inputPrice": 0.5485714285714285,
    "outputPrice": 2.7428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "正文续写",
      "老款低价"
    ],
    "tendencies": [
      "正文续写"
    ],
    "parameters": {
      "model": "claude-3-haiku-20240307"
    },
    "isThinking": false
  },
  {
    "id": "claude-3-sonnet-20240229",
    "name": "claude-3-sonnet-20240229",
    "provider": "Anthropic",
    "description": "稳定",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "稳定"
    ],
    "tendencies": [
      "设定",
      "章纲",
      "正文"
    ],
    "parameters": {
      "model": "claude-3-sonnet-20240229"
    },
    "isThinking": false
  },
  {
    "id": "claude-3-opus-20240229",
    "name": "claude-3-opus-20240229",
    "provider": "Anthropic",
    "description": "文学性强",
    "inputPrice": 10.285714285714285,
    "outputPrice": 51.42857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "精品正文",
      "高端设定",
      "文学性强"
    ],
    "tendencies": [
      "精品正文",
      "高端设定"
    ],
    "parameters": {
      "model": "claude-3-opus-20240229"
    },
    "isThinking": false
  },
  {
    "id": "claude-haiku-4-5-20251001",
    "name": "claude-haiku-4-5-20251001",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 0.6857142857142856,
    "outputPrice": 3.4285714285714284,
    "priceUnit": "per_1m",
    "specialties": [
      "日更正文",
      "续写"
    ],
    "tendencies": [
      "日更正文",
      "续写"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001"
    },
    "isThinking": false
  },
  {
    "id": "claude-haiku-4-5-20251001-cc",
    "name": "claude-haiku-4-5-20251001-cc",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 0.3428571428571428,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "连载正文（缓存省钱）"
    ],
    "tendencies": [
      "连载正文（缓存省钱）"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-cc"
    },
    "isThinking": false
  },
  {
    "id": "claude-haiku-4-5-20251001-thinking",
    "name": "claude-haiku-4-5-20251001-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 0.6857142857142856,
    "outputPrice": 3.4285714285714284,
    "priceUnit": "per_1m",
    "specialties": [
      "结构推导",
      "设定草稿",
      "推理"
    ],
    "tendencies": [
      "结构推导",
      "设定草稿"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-haiku-4-5-20251001-thinking-cc",
    "name": "claude-haiku-4-5-20251001-thinking-cc",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 0.3428571428571428,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "连载复杂设定（缓存）",
      "推理"
    ],
    "tendencies": [
      "连载复杂设定（缓存）"
    ],
    "parameters": {
      "model": "claude-haiku-4-5-20251001-thinking-cc"
    },
    "isThinking": true
  },
  {
    "id": "claude-opus-4-20250514",
    "name": "claude-opus-4-20250514",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 51.42857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "核心剧情",
      "顶级文笔"
    ],
    "tendencies": [
      "核心剧情",
      "顶级文笔"
    ],
    "parameters": {
      "model": "claude-opus-4-20250514"
    },
    "isThinking": false
  },
  {
    "id": "claude-opus-4-20250514-thinking",
    "name": "claude-opus-4-20250514-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 51.42857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "世界观设计",
      "推理"
    ],
    "tendencies": [
      "世界观设计"
    ],
    "parameters": {
      "model": "claude-opus-4-20250514-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-opus-4-1-20250805",
    "name": "claude-opus-4-1-20250805",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 51.42857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "高端正文",
      "世界观"
    ],
    "tendencies": [
      "高端正文",
      "世界观"
    ],
    "parameters": {
      "model": "claude-opus-4-1-20250805"
    },
    "isThinking": false
  },
  {
    "id": "claude-opus-4-1-20250805-thinking",
    "name": "claude-opus-4-1-20250805-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 51.42857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "大型设定工程",
      "推理"
    ],
    "tendencies": [
      "大型设定工程"
    ],
    "parameters": {
      "model": "claude-opus-4-1-20250805-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-opus-4-5-20251101",
    "name": "claude-opus-4-5-20251101",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 3.4285714285714284,
    "outputPrice": 17.142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "精品小说",
      "高端正文"
    ],
    "tendencies": [
      "精品小说",
      "高端正文"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101"
    },
    "isThinking": false
  },
  {
    "id": "claude-opus-4-5-20251101-cc",
    "name": "claude-opus-4-5-20251101-cc",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 1.1657142857142857,
    "outputPrice": 5.828571428571427,
    "priceUnit": "per_1m",
    "specialties": [
      "长篇连载精品（缓存）"
    ],
    "tendencies": [
      "长篇连载精品（缓存）"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101-cc"
    },
    "isThinking": false
  },
  {
    "id": "claude-opus-4-5-20251101-thinking",
    "name": "claude-opus-4-5-20251101-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 3.4285714285714284,
    "outputPrice": 17.142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂设定推导",
      "推理"
    ],
    "tendencies": [
      "复杂设定推导"
    ],
    "parameters": {
      "model": "claude-opus-4-5-20251101-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-sonnet-4-20250514",
    "name": "claude-sonnet-4-20250514",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "主力设定",
      "正文"
    ],
    "tendencies": [
      "主力设定",
      "正文"
    ],
    "parameters": {
      "model": "claude-sonnet-4-20250514"
    },
    "isThinking": false
  },
  {
    "id": "claude-sonnet-4-20250514-thinking",
    "name": "claude-sonnet-4-20250514-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "结构设计",
      "推理"
    ],
    "tendencies": [
      "章纲",
      "结构设计"
    ],
    "parameters": {
      "model": "claude-sonnet-4-20250514-thinking"
    },
    "isThinking": true
  },
  {
    "id": "claude-sonnet-4-5-20250929",
    "name": "claude-sonnet-4-5-20250929",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "新一代主力正文"
    ],
    "tendencies": [
      "新一代主力正文"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929"
    },
    "isThinking": false
  },
  {
    "id": "claude-sonnet-4-5-20250929-cc",
    "name": "claude-sonnet-4-5-20250929-cc",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 1.0285714285714285,
    "outputPrice": 5.142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "高质量连载正文"
    ],
    "tendencies": [
      "高质量连载正文"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929-cc"
    },
    "isThinking": false
  },
  {
    "id": "claude-sonnet-4-5-20250929-thinking",
    "name": "claude-sonnet-4-5-20250929-thinking",
    "provider": "Anthropic",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂章纲",
      "推理"
    ],
    "tendencies": [
      "复杂章纲"
    ],
    "parameters": {
      "model": "claude-sonnet-4-5-20250929-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-2.0-flash",
    "name": "gemini-2.0-flash",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.06857142857142856,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "低成本正文扩写"
    ],
    "tendencies": [
      "低成本正文扩写"
    ],
    "parameters": {
      "model": "gemini-2.0-flash"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.0-flash-SSVIP",
    "name": "gemini-2.0-flash-SSVIP",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.096,
    "outputPrice": 0.384,
    "priceUnit": "per_1m",
    "specialties": [
      "批量正文扩写"
    ],
    "tendencies": [
      "批量正文扩写"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-SSVIP"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash",
    "name": "gemini-2.5-flash",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "正文草稿",
      "扩写"
    ],
    "tendencies": [
      "正文草稿",
      "扩写"
    ],
    "parameters": {
      "model": "gemini-2.5-flash"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash-deepsearch",
    "name": "gemini-2.5-flash-deepsearch",
    "provider": "Google",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 10.97142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "考据",
      "资料型设定"
    ],
    "tendencies": [
      "考据",
      "资料型设定"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-deepsearch"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash-lite",
    "name": "gemini-2.5-flash-lite",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.06857142857142856,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "跑量续写"
    ],
    "tendencies": [
      "跑量续写"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-lite"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash-nothinking",
    "name": "gemini-2.5-flash-nothinking",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "直出日更正文"
    ],
    "tendencies": [
      "直出日更正文"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-nothinking"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash-thinking",
    "name": "gemini-2.5-flash-thinking",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "结构草稿",
      "推理"
    ],
    "tendencies": [
      "章纲",
      "结构草稿"
    ],
    "parameters": {
      "model": "gemini-2.5-flash-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-2.5-pro",
    "name": "gemini-2.5-pro",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.8571428571428571,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲"
    ],
    "tendencies": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gemini-2.5-pro"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-pro-deepsearch",
    "name": "gemini-2.5-pro-deepsearch",
    "provider": "Google",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 16.457142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "重考据设定"
    ],
    "tendencies": [
      "重考据设定"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-deepsearch"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-pro-thinking",
    "name": "gemini-2.5-pro-thinking",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.8571428571428571,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "多约束复杂设定",
      "推理"
    ],
    "tendencies": [
      "多约束复杂设定"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-3-flash-preview",
    "name": "gemini-3-flash-preview",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "新能力测试"
    ],
    "tendencies": [
      "新能力测试"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview"
    },
    "isThinking": false
  },
  {
    "id": "gemini-3-pro-preview",
    "name": "gemini-3-pro-preview",
    "provider": "Google",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 8.228571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "设定测试"
    ],
    "tendencies": [
      "设定测试"
    ],
    "parameters": {
      "model": "gemini-3-pro-preview"
    },
    "isThinking": false
  },
  {
    "id": "gemini-3-pro-preview-thinking",
    "name": "gemini-3-pro-preview-thinking",
    "provider": "Google",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 8.228571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂结构测试",
      "推理"
    ],
    "tendencies": [
      "复杂结构测试"
    ],
    "parameters": {
      "model": "gemini-3-pro-preview-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-flash-latest",
    "name": "gemini-flash-latest",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "通用正文扩写"
    ],
    "tendencies": [
      "通用正文扩写"
    ],
    "parameters": {
      "model": "gemini-flash-latest"
    },
    "isThinking": false
  },
  {
    "id": "gemini-flash-lite-latest",
    "name": "gemini-flash-lite-latest",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.06857142857142856,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "最低成本跑量"
    ],
    "tendencies": [
      "最低成本跑量"
    ],
    "parameters": {
      "model": "gemini-flash-lite-latest"
    },
    "isThinking": false
  },
  {
    "id": "gpt-3.5-turbo",
    "name": "gpt-3.5-turbo",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.3428571428571428,
    "outputPrice": 0.6857142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "草稿",
      "改写"
    ],
    "tendencies": [
      "草稿",
      "改写"
    ],
    "parameters": {
      "model": "gpt-3.5-turbo"
    },
    "isThinking": false
  },
  {
    "id": "gpt-3.5-turbo-16k",
    "name": "gpt-3.5-turbo-16k",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 4.114285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "长输入润色"
    ],
    "tendencies": [
      "长输入润色"
    ],
    "parameters": {
      "model": "gpt-3.5-turbo-16k"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4",
    "name": "gpt-4",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 20.57142857142857,
    "outputPrice": 41.14285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "高预算设定"
    ],
    "tendencies": [
      "高预算设定"
    ],
    "parameters": {
      "model": "gpt-4"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4-32k",
    "name": "gpt-4-32k",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 41.14285714285714,
    "outputPrice": 82.28571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "全书大纲"
    ],
    "tendencies": [
      "全书大纲"
    ],
    "parameters": {
      "model": "gpt-4-32k"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4-32k-0613",
    "name": "gpt-4-32k-0613",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 41.14285714285714,
    "outputPrice": 82.28571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "全书大纲"
    ],
    "tendencies": [
      "全书大纲"
    ],
    "parameters": {
      "model": "gpt-4-32k-0613"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4-all",
    "name": "gpt-4-all",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 16.457142857142856,
    "outputPrice": 32.91428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "通用"
    ],
    "tendencies": [
      "通用"
    ],
    "parameters": {
      "model": "gpt-4-all"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4-turbo",
    "name": "gpt-4-turbo",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 6.857142857142857,
    "outputPrice": 20.57142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲"
    ],
    "tendencies": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4-turbo"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4-turbo-2024-04-09",
    "name": "gpt-4-turbo-2024-04-09",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 6.857142857142857,
    "outputPrice": 20.57142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版设定"
    ],
    "tendencies": [
      "固定版设定"
    ],
    "parameters": {
      "model": "gpt-4-turbo-2024-04-09"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1",
    "name": "gpt-4.1",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 5.485714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲"
    ],
    "tendencies": [
      "设定",
      "章纲"
    ],
    "parameters": {
      "model": "gpt-4.1"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1-2025-04-14",
    "name": "gpt-4.1-2025-04-14",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 5.485714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-4.1-2025-04-14"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1-mini",
    "name": "gpt-4.1-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.27428571428571424,
    "outputPrice": 1.097142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "批量扩写"
    ],
    "tendencies": [
      "批量扩写"
    ],
    "parameters": {
      "model": "gpt-4.1-mini"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1-mini-2025-04-14",
    "name": "gpt-4.1-mini-2025-04-14",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.27428571428571424,
    "outputPrice": 1.097142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-4.1-mini-2025-04-14"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1-nano",
    "name": "gpt-4.1-nano",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.06857142857142856,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "超低成本改写"
    ],
    "tendencies": [
      "超低成本改写"
    ],
    "parameters": {
      "model": "gpt-4.1-nano"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4.1-nano-2025-04-14",
    "name": "gpt-4.1-nano-2025-04-14",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.06857142857142856,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-4.1-nano-2025-04-14"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4o",
    "name": "gpt-4o",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.7142857142857142,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "通用正文"
    ],
    "tendencies": [
      "通用正文"
    ],
    "parameters": {
      "model": "gpt-4o"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4o-mini",
    "name": "gpt-4o-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.10285714285714284,
    "outputPrice": 0.41142857142857137,
    "priceUnit": "per_1m",
    "specialties": [
      "跑量扩写"
    ],
    "tendencies": [
      "跑量扩写"
    ],
    "parameters": {
      "model": "gpt-4o-mini"
    },
    "isThinking": false
  },
  {
    "id": "gpt-4o-mini-2024-07-18",
    "name": "gpt-4o-mini-2024-07-18",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.10285714285714284,
    "outputPrice": 0.41142857142857137,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-4o-mini-2024-07-18"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-2025-08-07",
    "name": "gpt-5-2025-08-07",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.8571428571428571,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "剧情向正文"
    ],
    "tendencies": [
      "剧情向正文"
    ],
    "parameters": {
      "model": "gpt-5-2025-08-07"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-mini",
    "name": "gpt-5-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.1714285714285714,
    "outputPrice": 1.3714285714285712,
    "priceUnit": "per_1m",
    "specialties": [
      "正文扩写"
    ],
    "tendencies": [
      "正文扩写"
    ],
    "parameters": {
      "model": "gpt-5-mini"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-mini-2025-08-07",
    "name": "gpt-5-mini-2025-08-07",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.1714285714285714,
    "outputPrice": 1.3714285714285712,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-5-mini-2025-08-07"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-mini-ssvip",
    "name": "gpt-5-mini-ssvip",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.26057142857142856,
    "outputPrice": 2.0845714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "扩写（通道）"
    ],
    "tendencies": [
      "扩写（通道）"
    ],
    "parameters": {
      "model": "gpt-5-mini-ssvip"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-nano",
    "name": "gpt-5-nano",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.03428571428571428,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "超低成本"
    ],
    "tendencies": [
      "超低成本"
    ],
    "parameters": {
      "model": "gpt-5-nano"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-nano-2025-08-07",
    "name": "gpt-5-nano-2025-08-07",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.03428571428571428,
    "outputPrice": 0.27428571428571424,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-5-nano-2025-08-07"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-nano-ssvip",
    "name": "gpt-5-nano-ssvip",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.054857142857142854,
    "outputPrice": 0.43885714285714283,
    "priceUnit": "per_1m",
    "specialties": [
      "通道版"
    ],
    "tendencies": [
      "通道版"
    ],
    "parameters": {
      "model": "gpt-5-nano-ssvip"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-pro",
    "name": "gpt-5-pro",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 82.28571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "顶级设定"
    ],
    "tendencies": [
      "顶级设定"
    ],
    "parameters": {
      "model": "gpt-5-pro"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-ssvip",
    "name": "gpt-5-ssvip",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.2617142857142858,
    "outputPrice": 10.093714285714286,
    "priceUnit": "per_1m",
    "specialties": [
      "通道版"
    ],
    "tendencies": [
      "通道版"
    ],
    "parameters": {
      "model": "gpt-5-ssvip"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5-web",
    "name": "gpt-5-web",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.7289142857142857,
    "outputPrice": 5.828571428571427,
    "priceUnit": "per_1m",
    "specialties": [
      "考据型设定"
    ],
    "tendencies": [
      "考据型设定"
    ],
    "parameters": {
      "model": "gpt-5-web"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.1",
    "name": "gpt-5.1",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.8571428571428571,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "稳定设定"
    ],
    "tendencies": [
      "稳定设定"
    ],
    "parameters": {
      "model": "gpt-5.1"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.2",
    "name": "gpt-5.2",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.2,
    "outputPrice": 9.6,
    "priceUnit": "per_1m",
    "specialties": [
      "主力正文"
    ],
    "tendencies": [
      "主力正文"
    ],
    "parameters": {
      "model": "gpt-5.2"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.2-high",
    "name": "gpt-5.2-high",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.2,
    "outputPrice": 9.6,
    "priceUnit": "per_1m",
    "specialties": [
      "高质量正文"
    ],
    "tendencies": [
      "高质量正文"
    ],
    "parameters": {
      "model": "gpt-5.2-high"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.2-low",
    "name": "gpt-5.2-low",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.2,
    "outputPrice": 9.6,
    "priceUnit": "per_1m",
    "specialties": [
      "跑量正文"
    ],
    "tendencies": [
      "跑量正文"
    ],
    "parameters": {
      "model": "gpt-5.2-low"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.2-pro",
    "name": "gpt-5.2-pro",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 14.399999999999999,
    "outputPrice": 115.19999999999999,
    "priceUnit": "per_1m",
    "specialties": [
      "顶级规划"
    ],
    "tendencies": [
      "顶级规划"
    ],
    "parameters": {
      "model": "gpt-5.2-pro"
    },
    "isThinking": false
  },
  {
    "id": "gpt-5.2-pro-2025-12-11",
    "name": "gpt-5.2-pro-2025-12-11",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 14.399999999999999,
    "outputPrice": 115.19999999999999,
    "priceUnit": "per_1m",
    "specialties": [
      "固定版"
    ],
    "tendencies": [
      "固定版"
    ],
    "parameters": {
      "model": "gpt-5.2-pro-2025-12-11"
    },
    "isThinking": false
  },
  {
    "id": "o1",
    "name": "o1",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 41.14285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂推理设定",
      "推理"
    ],
    "tendencies": [
      "复杂推理设定"
    ],
    "parameters": {
      "model": "o1"
    },
    "isThinking": true
  },
  {
    "id": "o1-mini",
    "name": "o1-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.7542857142857142,
    "outputPrice": 3.017142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "轻推理辅助",
      "推理"
    ],
    "tendencies": [
      "轻推理辅助"
    ],
    "parameters": {
      "model": "o1-mini"
    },
    "isThinking": true
  },
  {
    "id": "o1-preview",
    "name": "o1-preview",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 10.285714285714285,
    "outputPrice": 41.14285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "推理测试",
      "推理"
    ],
    "tendencies": [
      "推理测试"
    ],
    "parameters": {
      "model": "o1-preview"
    },
    "isThinking": true
  },
  {
    "id": "o1-pro-all",
    "name": "o1-pro-all",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.1714285714285714,
    "outputPrice": null,
    "priceUnit": "per_call",
    "specialties": [
      "超复杂推理",
      "推理"
    ],
    "tendencies": [
      "超复杂推理"
    ],
    "parameters": {
      "model": "o1-pro-all"
    },
    "isThinking": true
  },
  {
    "id": "o3",
    "name": "o3",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 5.485714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "悬疑结构",
      "推理"
    ],
    "tendencies": [
      "悬疑结构"
    ],
    "parameters": {
      "model": "o3"
    },
    "isThinking": true
  },
  {
    "id": "o3-mini",
    "name": "o3-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.7542857142857142,
    "outputPrice": 3.017142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "结构辅助",
      "推理"
    ],
    "tendencies": [
      "结构辅助"
    ],
    "parameters": {
      "model": "o3-mini"
    },
    "isThinking": true
  },
  {
    "id": "o3-mini-high",
    "name": "o3-mini-high",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.7542857142857142,
    "outputPrice": 3.017142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "稳定结构",
      "推理"
    ],
    "tendencies": [
      "稳定结构"
    ],
    "parameters": {
      "model": "o3-mini-high"
    },
    "isThinking": true
  },
  {
    "id": "o4-mini",
    "name": "o4-mini",
    "provider": "OpenAI",
    "description": "",
    "inputPrice": 0.7542857142857142,
    "outputPrice": 3.017142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "推理辅助",
      "推理"
    ],
    "tendencies": [
      "推理辅助"
    ],
    "parameters": {
      "model": "o4-mini"
    },
    "isThinking": true
  },
  {
    "id": "grok-3",
    "name": "grok-3",
    "provider": "xAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "硬科幻设定"
    ],
    "tendencies": [
      "硬科幻设定"
    ],
    "parameters": {
      "model": "grok-3"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-beta",
    "name": "grok-3-beta",
    "provider": "xAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "测试"
    ],
    "tendencies": [
      "测试"
    ],
    "parameters": {
      "model": "grok-3-beta"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-deepsearch",
    "name": "grok-3-deepsearch",
    "provider": "xAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "考据设定"
    ],
    "tendencies": [
      "考据设定"
    ],
    "parameters": {
      "model": "grok-3-deepsearch"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-fast",
    "name": "grok-3-fast",
    "provider": "xAI",
    "description": "",
    "inputPrice": 3.4285714285714284,
    "outputPrice": 17.142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "快速草稿"
    ],
    "tendencies": [
      "快速草稿"
    ],
    "parameters": {
      "model": "grok-3-fast"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-mini",
    "name": "grok-3-mini",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 0.3435428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "低成本扩写"
    ],
    "tendencies": [
      "低成本扩写"
    ],
    "parameters": {
      "model": "grok-3-mini"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-mini-beta",
    "name": "grok-3-mini-beta",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.20571428571428568,
    "outputPrice": 0.3435428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "测试"
    ],
    "tendencies": [
      "测试"
    ],
    "parameters": {
      "model": "grok-3-mini-beta"
    },
    "isThinking": false
  },
  {
    "id": "grok-3-reasoner",
    "name": "grok-3-reasoner",
    "provider": "xAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "逻辑推理",
      "推理"
    ],
    "tendencies": [
      "逻辑推理"
    ],
    "parameters": {
      "model": "grok-3-reasoner"
    },
    "isThinking": true
  },
  {
    "id": "grok-4",
    "name": "grok-4",
    "provider": "xAI",
    "description": "",
    "inputPrice": 2.057142857142857,
    "outputPrice": 10.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "硬设定"
    ],
    "tendencies": [
      "硬设定"
    ],
    "parameters": {
      "model": "grok-4"
    },
    "isThinking": false
  },
  {
    "id": "grok-4-fast",
    "name": "grok-4-fast",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "跑量扩写"
    ],
    "tendencies": [
      "跑量扩写"
    ],
    "parameters": {
      "model": "grok-4-fast"
    },
    "isThinking": false
  },
  {
    "id": "grok-4-fast-non-reasoning",
    "name": "grok-4-fast-non-reasoning",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "直出扩写"
    ],
    "tendencies": [
      "直出扩写"
    ],
    "parameters": {
      "model": "grok-4-fast-non-reasoning"
    },
    "isThinking": false
  },
  {
    "id": "grok-4-fast-reasoning",
    "name": "grok-4-fast-reasoning",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "结构辅助",
      "推理"
    ],
    "tendencies": [
      "结构辅助"
    ],
    "parameters": {
      "model": "grok-4-fast-reasoning"
    },
    "isThinking": true
  },
  {
    "id": "grok-4.1",
    "name": "grok-4.1",
    "provider": "xAI",
    "description": "",
    "inputPrice": 1.3714285714285712,
    "outputPrice": 6.857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "设定"
    ],
    "tendencies": [
      "设定"
    ],
    "parameters": {
      "model": "grok-4.1"
    },
    "isThinking": false
  },
  {
    "id": "grok-4.1-fast",
    "name": "grok-4.1-fast",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "跑量"
    ],
    "tendencies": [
      "跑量"
    ],
    "parameters": {
      "model": "grok-4.1-fast"
    },
    "isThinking": false
  },
  {
    "id": "grok-4.1-non-thinking",
    "name": "grok-4.1-non-thinking",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "直出"
    ],
    "tendencies": [
      "直出"
    ],
    "parameters": {
      "model": "grok-4.1-non-thinking"
    },
    "isThinking": false
  },
  {
    "id": "grok-4.1-thinking",
    "name": "grok-4.1-thinking",
    "provider": "xAI",
    "description": "",
    "inputPrice": 0.13714285714285712,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "结构辅助",
      "推理"
    ],
    "tendencies": [
      "结构辅助"
    ],
    "parameters": {
      "model": "grok-4.1-thinking"
    },
    "isThinking": true
  }
];
