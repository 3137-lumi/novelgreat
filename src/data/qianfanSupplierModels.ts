import type { ModelInfo } from '../types';

export const QIANFAN_SUPPLIER_MODELS: ModelInfo[] = [
  {
    "id": "ernie-5.0-thinking-exp",
    "name": "ernie-5.0-thinking-exp",
    "provider": "百度",
    "description": "创意能力强，情节设计丰富，适合主线剧情与复杂世界观小说",
    "inputPrice": 0.8571428571428571,
    "outputPrice": 3.4285714285714284,
    "priceUnit": "per_1m",
    "specialties": [
      "深度推理",
      "推理"
    ],
    "tendencies": [
      "深度推理"
    ],
    "parameters": {
      "model": "ernie-5.0-thinking-exp"
    },
    "isThinking": true
  },
  {
    "id": "ernie-x1.1",
    "name": "ernie-x1.1",
    "provider": "百度",
    "description": "偏理性与事实表达，适合现实题材与设定整理，不适合强文风创作",
    "inputPrice": 0.14285714285714285,
    "outputPrice": 0.5714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "深度推理",
      "推理"
    ],
    "tendencies": [
      "深度推理"
    ],
    "parameters": {
      "model": "ernie-x1.1"
    },
    "isThinking": true
  },
  {
    "id": "ernie-x1-turbo-32k-preview",
    "name": "ernie-x1-turbo-32k-preview",
    "provider": "百度",
    "description": "输出稳定，适合批量生成剧情草稿与剧情扩写",
    "inputPrice": 0.14285714285714285,
    "outputPrice": 0.5714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "深度推理",
      "推理"
    ],
    "tendencies": [
      "深度推理"
    ],
    "parameters": {
      "model": "ernie-x1-turbo-32k-preview"
    },
    "isThinking": true
  },
  {
    "id": "ernie-x1-turbo-32k",
    "name": "ernie-x1-turbo-32k",
    "provider": "百度",
    "description": "",
    "inputPrice": null,
    "outputPrice": null,
    "priceUnit": "per_1m",
    "specialties": [],
    "tendencies": [],
    "parameters": {
      "model": "ernie-x1-turbo-32k"
    }
  },
  {
    "id": "kimi-k2-instruct",
    "name": "kimi-k2-instruct",
    "provider": "月之暗面",
    "description": "文风中性偏技术流，适合科幻、设定说明与理性叙事",
    "inputPrice": 0.5714285714285714,
    "outputPrice": 2.2857142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "kimi-k2-instruct"
    },
    "isThinking": false
  },
  {
    "id": "ernie-4.5-turbo-128k-preview",
    "name": "ernie-4.5-turbo-128k-preview",
    "provider": "百度",
    "description": "适合超长剧情续写与多章节连贯创作",
    "inputPrice": 0.11428571428571428,
    "outputPrice": 0.45714285714285713,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "ernie-4.5-turbo-128k-preview"
    },
    "isThinking": false
  },
  {
    "id": "ernie-4.5-turbo-32k",
    "name": "ernie-4.5-turbo-32k",
    "provider": "百度",
    "description": "适合中长篇正文生成，稳定但文学性中等",
    "inputPrice": 0.11428571428571428,
    "outputPrice": 0.45714285714285713,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "ernie-4.5-turbo-32k"
    },
    "isThinking": false
  },
  {
    "id": "ernie-4.5-turbo-128k",
    "name": "ernie-4.5-turbo-128k",
    "provider": "百度",
    "description": "适合长篇小说连载与剧情保持一致性",
    "inputPrice": 0.11428571428571428,
    "outputPrice": 0.45714285714285713,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "ernie-4.5-turbo-128k"
    },
    "isThinking": false
  },
  {
    "id": "ernie-4.5-21b-a3b-thinking",
    "name": "ernie-4.5-21b-a3b-thinking",
    "provider": "百度",
    "description": "综合能力强，适合主力小说正文创作与复杂人物塑造",
    "inputPrice": 0.07142857142857142,
    "outputPrice": 0.2857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "思考模型",
      "推理"
    ],
    "tendencies": [
      "思考模型"
    ],
    "parameters": {
      "model": "ernie-4.5-21b-a3b-thinking"
    },
    "isThinking": true
  },
  {
    "id": "deepseek-v3.2-think",
    "name": "deepseek-v3.2-think",
    "provider": "DeepSeek",
    "description": "逻辑严谨，适合悬疑、推理类小说剧情设计",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.42857142857142855,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成（思考增强）",
      "思考模型",
      "推理"
    ],
    "tendencies": [
      "文本生成（思考增强）",
      "思考模型"
    ],
    "parameters": {
      "model": "deepseek-v3.2-think"
    },
    "isThinking": true
  },
  {
    "id": "deepseek-v3.2",
    "name": "deepseek-v3.2",
    "provider": "DeepSeek",
    "description": "偏通用写作，适合日常网文与剧情扩写",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.42857142857142855,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "deepseek-v3.2"
    },
    "isThinking": false
  },
  {
    "id": "deepseek-v3.1-think-250821",
    "name": "deepseek-v3.1-think-250821",
    "provider": "DeepSeek",
    "description": "擅长复杂结构与伏笔设计，适合烧脑剧情",
    "inputPrice": 0.5714285714285714,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成（思考增强）",
      "推理"
    ],
    "tendencies": [
      "文本生成（思考增强）"
    ],
    "parameters": {
      "model": "deepseek-v3.1-think-250821"
    },
    "isThinking": true
  },
  {
    "id": "deepseek-v3.1-250821",
    "name": "deepseek-v3.1-250821",
    "provider": "DeepSeek",
    "description": "适合剧情逻辑校验，不适合正文写作",
    "inputPrice": 0.5714285714285714,
    "outputPrice": 1.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "deepseek-v3.1-250821"
    },
    "isThinking": false
  },
  {
    "id": "deepseek-v3",
    "name": "deepseek-v3",
    "provider": "DeepSeek",
    "description": "性价比高，适合平台默认小说正文模型",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 1.1428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "deepseek-v3"
    },
    "isThinking": false
  },
  {
    "id": "deepseek-r1",
    "name": "deepseek-r1",
    "provider": "DeepSeek",
    "description": "偏推理，不适合情感描写，适合剧情逻辑校验与设定构建",
    "inputPrice": 0.5714285714285714,
    "outputPrice": 2.2857142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "深度推理",
      "推理"
    ],
    "tendencies": [
      "深度推理"
    ],
    "parameters": {
      "model": "deepseek-r1"
    },
    "isThinking": true
  },
  {
    "id": "qianfan-lightning-128b-a19b-slim",
    "name": "qianfan-lightning-128b-a19b-slim",
    "provider": "百度",
    "description": "输出快，适合批量生成剧情草稿",
    "inputPrice": 0.0857142857142857,
    "outputPrice": 0.3,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qianfan-lightning-128b-a19b-slim"
    },
    "isThinking": false
  },
  {
    "id": "qianfan-lightning-128b-a19b",
    "name": "qianfan-lightning-128b-a19b",
    "provider": "百度",
    "description": "适合商业网文批量创作，文风中性",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 1.1428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qianfan-lightning-128b-a19b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-235b-a22b-thinking-2507",
    "name": "qwen3-235b-a22b-thinking-2507",
    "provider": "通义千问",
    "description": "适合史诗级世界观、权谋、悬疑类长篇小说",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 2.8571428571428568,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成",
      "思考模型",
      "推理"
    ],
    "tendencies": [
      "文本生成",
      "思考模型"
    ],
    "parameters": {
      "model": "qwen3-235b-a22b-thinking-2507"
    },
    "isThinking": true
  },
  {
    "id": "qwen3-235b-a22b-instruct-2507",
    "name": "qwen3-235b-a22b-instruct-2507",
    "provider": "通义千问",
    "description": "适合标准网文与剧情扩写",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 1.1428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "24"
    ],
    "tendencies": [
      "24"
    ],
    "parameters": {
      "model": "qwen3-235b-a22b-instruct-2507"
    }
  },
  {
    "id": "qwen3-next-80b-a3b-thinking",
    "name": "qwen3-next-80b-a3b-thinking",
    "provider": "通义千问",
    "description": "适合剧情复杂、设定重的中长篇小说",
    "inputPrice": 0.14285714285714285,
    "outputPrice": 1.4285714285714284,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成",
      "思考模型",
      "推理"
    ],
    "tendencies": [
      "文本生成",
      "思考模型"
    ],
    "parameters": {
      "model": "qwen3-next-80b-a3b-thinking"
    },
    "isThinking": true
  },
  {
    "id": "qwen3-next-80b-a3b-instruct",
    "name": "qwen3-next-80b-a3b-instruct",
    "provider": "通义千问",
    "description": "适合日常小说正文生成",
    "inputPrice": 0.14285714285714285,
    "outputPrice": 0.5714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "24"
    ],
    "tendencies": [
      "24"
    ],
    "parameters": {
      "model": "qwen3-next-80b-a3b-instruct"
    }
  },
  {
    "id": "qwen3-32b",
    "name": "qwen3-32b",
    "provider": "通义千问",
    "description": "适合网文主流创作，稳定通用",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 1.1428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-32b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-14b",
    "name": "qwen3-14b",
    "provider": "通义千问",
    "description": "适合中短篇小说与轻量创作",
    "inputPrice": 0.14285714285714285,
    "outputPrice": 0.5714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-14b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-8b",
    "name": "qwen3-8b",
    "provider": "通义千问",
    "description": "适合草稿生成与剧情扩写",
    "inputPrice": 0.07142857142857142,
    "outputPrice": 0.2857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-8b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-4b",
    "name": "qwen3-4b",
    "provider": "通义千问",
    "description": "文学性弱，仅适合简单扩写与补全",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.1714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-4b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-1.7b",
    "name": "qwen3-1.7b",
    "provider": "通义千问",
    "description": "仅适合模板补全，不适合小说正文",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.1714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-1.7b"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-0.6b",
    "name": "qwen3-0.6b",
    "provider": "通义千问",
    "description": "不适合小说创作",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.1714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-0.6b"
    },
    "isThinking": false
  },
  {
    "id": "deepseek-r1-distill-qwen-32b",
    "name": "deepseek-r1-distill-qwen-32b",
    "provider": "DeepSeek",
    "description": "适合剧情推理与结构设计，不适合情感描写",
    "inputPrice": 0.21428571428571427,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "深度推理",
      "推理"
    ],
    "tendencies": [
      "深度推理"
    ],
    "parameters": {
      "model": "deepseek-r1-distill-qwen-32b"
    },
    "isThinking": true
  },
  {
    "id": "deepseek-r1-distill-qwen-14b",
    "name": "deepseek-r1-distill-qwen-14b",
    "provider": "DeepSeek",
    "description": "适合小说大纲与剧情梳理",
    "inputPrice": 0.0857142857142857,
    "outputPrice": 0.3428571428571428,
    "priceUnit": "per_1m",
    "specialties": [
      "蒸馏模型"
    ],
    "tendencies": [
      "蒸馏模型"
    ],
    "parameters": {
      "model": "deepseek-r1-distill-qwen-14b"
    },
    "isThinking": false
  },
  {
    "id": "ernie-speed-pro-128k",
    "name": "ernie-speed-pro-128k",
    "provider": "百度",
    "description": "适合快速生成章节草稿",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.0857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "ernie-speed-pro-128k"
    },
    "isThinking": false
  },
  {
    "id": "ernie-lite-pro-128k",
    "name": "ernie-lite-pro-128k",
    "provider": "百度",
    "description": "适合辅助写作与低成本生成",
    "inputPrice": 0.02857142857142857,
    "outputPrice": 0.05714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "ernie-lite-pro-128k"
    },
    "isThinking": false
  },
  {
    "id": "ernie-char-8k",
    "name": "ernie-char-8k",
    "provider": "百度",
    "description": "非常适合人物对白与角色塑造",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.0857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "角色扮演"
    ],
    "tendencies": [
      "角色扮演"
    ],
    "parameters": {
      "model": "ernie-char-8k"
    },
    "isThinking": false
  },
  {
    "id": "qianfan-correct",
    "name": "qianfan-correct",
    "provider": "百度",
    "description": "适合小说润色、降 AI 味、语病修复",
    "inputPrice": 0.0857142857142857,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "文本纠错"
    ],
    "tendencies": [
      "文本纠错"
    ],
    "parameters": {
      "model": "qianfan-correct"
    },
    "isThinking": false
  },
  {
    "id": "qianfan-sug-8k",
    "name": "qianfan-sug-8k",
    "provider": "百度",
    "description": "适合剧情续写与灵感补充",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.0857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qianfan-sug-8k"
    },
    "isThinking": false
  },
  {
    "id": "qianfan-ipcharacter",
    "name": "qianfan-ipcharacter",
    "provider": "百度",
    "description": "适合固定角色IP长期写作",
    "inputPrice": 0.0857142857142857,
    "outputPrice": 0.21428571428571427,
    "priceUnit": "per_1m",
    "specialties": [
      "IP",
      "角色"
    ],
    "tendencies": [
      "IP",
      "角色"
    ],
    "parameters": {
      "model": "qianfan-ipcharacter"
    },
    "isThinking": false
  },
  {
    "id": "qwq-32b",
    "name": "qwq-32b",
    "provider": "通义千问",
    "description": "适合剧情逻辑校验，不适合正文写作",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "推理模型",
      "推理"
    ],
    "tendencies": [
      "推理模型"
    ],
    "parameters": {
      "model": "qwq-32b"
    },
    "isThinking": true
  }
];
