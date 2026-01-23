import type { ModelInfo } from '../types';

export const TONGYI_SUPPLIER_MODELS: ModelInfo[] = [
  {
    "id": "qwen3-max",
    "name": "qwen3-max",
    "provider": "通义千问",
    "description": "支持长文本小说正文生成与连续章节写作",
    "inputPrice": 0.44285714285714284,
    "outputPrice": 1.8285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-max"
    },
    "isThinking": false
  },
  {
    "id": "qwen3-vl-30b-a3b-thinking",
    "name": "qwen3-vl-30b-a3b-thinking",
    "provider": "通义千问",
    "description": "支持小说文本生成，可结合图片进行情节描述或设定创作",
    "inputPrice": 0.10714285714285714,
    "outputPrice": 1.0714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "视觉理解",
      "深度思考",
      "文本生成",
      "推理"
    ],
    "tendencies": [
      "视觉理解",
      "深度思考",
      "文本生成"
    ],
    "parameters": {
      "model": "qwen3-vl-30b-a3b-thinking"
    },
    "isThinking": true
  },
  {
    "id": "qwen-plus-2025-12-01",
    "name": "qwen-plus-2025-12-01",
    "provider": "通义千问",
    "description": "支持长篇小说正文与多轮剧情续写",
    "inputPrice": 0.11428571428571428,
    "outputPrice": 0.2857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "文本生成",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-plus-2025-12-01"
    },
    "isThinking": true
  },
  {
    "id": "qwen-flash",
    "name": "qwen-flash",
    "provider": "通义千问",
    "description": "支持小说正文与剧情续写的快速生成",
    "inputPrice": 0.021428571428571425,
    "outputPrice": 0.21428571428571427,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "文本生成",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-flash"
    },
    "isThinking": true
  },
  {
    "id": "qwen-max-2025-01-25",
    "name": "qwen-max-2025-01-25",
    "provider": "通义千问",
    "description": "支持小说正文生成",
    "inputPrice": 0.3428571428571428,
    "outputPrice": 1.3714285714285712,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-max-2025-01-25"
    },
    "isThinking": false
  },
  {
    "id": "qwen-deep-research",
    "name": "qwen-deep-research",
    "provider": "通义千问",
    "description": "支持资料型小说背景设定、世界观资料整理与长文本生成",
    "inputPrice": 7.7142857142857135,
    "outputPrice": 23.285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-deep-research"
    },
    "isThinking": false
  },
  {
    "id": "qwq-plus",
    "name": "qwq-plus",
    "provider": "通义千问",
    "description": "支持复杂剧情结构规划与逻辑一致性文本生成",
    "inputPrice": 0.22857142857142856,
    "outputPrice": 0.5714285714285714,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "推理"
    ],
    "tendencies": [
      "深度思考"
    ],
    "parameters": {
      "model": "qwq-plus"
    },
    "isThinking": true
  },
  {
    "id": "qvq-max-latest",
    "name": "qvq-max-latest",
    "provider": "通义千问",
    "description": "支持图像设定输入下的小说文本生成（如人物/场景参考图）",
    "inputPrice": 1.1428571428571428,
    "outputPrice": 4.571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "视觉理解",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "视觉理解"
    ],
    "parameters": {
      "model": "qvq-max-latest"
    },
    "isThinking": true
  },
  {
    "id": "qvq-plus-latest",
    "name": "qvq-plus-latest",
    "provider": "通义千问",
    "description": "支持基于图片的小说场景描写与文本生成",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.7142857142857142,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "视觉理解",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "视觉理解"
    ],
    "parameters": {
      "model": "qvq-plus-latest"
    },
    "isThinking": true
  },
  {
    "id": "deepseek-v3.2",
    "name": "deepseek-v3.2",
    "provider": "DeepSeek",
    "description": "支持小说正文与章节文本生成",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.42857142857142855,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "文本生成",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "文本生成"
    ],
    "parameters": {
      "model": "deepseek-v3.2"
    },
    "isThinking": true
  },
  {
    "id": "glm-4.7",
    "name": "glm-4.7",
    "provider": "智谱",
    "description": "支持小说正文与复杂剧情文本生成",
    "inputPrice": 0.42857142857142855,
    "outputPrice": 2,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成",
      "深度思考",
      "推理"
    ],
    "tendencies": [
      "文本生成",
      "深度思考"
    ],
    "parameters": {
      "model": "glm-4.7"
    },
    "isThinking": true
  },
  {
    "id": "kimi-k2-thinking",
    "name": "kimi-k2-thinking",
    "provider": "月之暗面",
    "description": "支持长文本小说创作与多轮剧情生成",
    "inputPrice": 0.5714285714285714,
    "outputPrice": 2.2857142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "推理"
    ],
    "tendencies": [],
    "parameters": {
      "model": "kimi-k2-thinking"
    },
    "isThinking": true
  },
  {
    "id": "qwen2.5-7b-instruct-1m",
    "name": "qwen2.5-7b-instruct-1m",
    "provider": "通义千问",
    "description": "支持超长篇小说正文与连续章节生成",
    "inputPrice": 0.07142857142857142,
    "outputPrice": 0.14285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen2.5-7b-instruct-1m"
    },
    "isThinking": false
  },
  {
    "id": "qwen-turbo-latest",
    "name": "qwen-turbo-latest",
    "provider": "通义千问",
    "description": "支持小说正文与剧情扩写",
    "inputPrice": 0.04285714285714285,
    "outputPrice": 0.0857142857142857,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "文本生成",
      "推理"
    ],
    "tendencies": [
      "深度思考",
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-turbo-latest"
    },
    "isThinking": true
  },
  {
    "id": "qwen-mt-lite",
    "name": "qwen-mt-lite",
    "provider": "通义千问",
    "description": "支持小说文本翻译",
    "inputPrice": 0.0857142857142857,
    "outputPrice": 0.22857142857142856,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-mt-lite"
    },
    "isThinking": false
  },
  {
    "id": "qwq-32b",
    "name": "qwq-32b",
    "provider": "通义千问",
    "description": "支持复杂剧情结构推理与文本生成",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "深度思考",
      "推理"
    ],
    "tendencies": [
      "深度思考"
    ],
    "parameters": {
      "model": "qwq-32b"
    },
    "isThinking": true
  },
  {
    "id": "qwq-32b-preview",
    "name": "qwq-32b-preview",
    "provider": "通义千问",
    "description": "支持小说文本生成（预览版能力）",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwq-32b-preview"
    },
    "isThinking": false
  },
  {
    "id": "qwen2-0.5b-instruct",
    "name": "qwen2-0.5b-instruct",
    "provider": "通义千问",
    "description": "支持基础小说文本生成",
    "inputPrice": 0.07142857142857142,
    "outputPrice": 0.14285714285714285,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen2-0.5b-instruct"
    },
    "isThinking": false
  },
  {
    "id": "qwen-math-plus-0919",
    "name": "qwen-math-plus-0919",
    "provider": "通义千问",
    "description": "支持包含数学/推演情节的小说内容生成",
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
      "model": "qwen-math-plus-0919"
    },
    "isThinking": false
  },
  {
    "id": "qwen-math-turbo",
    "name": "qwen-math-turbo",
    "provider": "通义千问",
    "description": "支持包含数学推导情节的小说内容生成",
    "inputPrice": 0.2857142857142857,
    "outputPrice": 0.8571428571428571,
    "priceUnit": "per_1m",
    "specialties": [
      "文本生成"
    ],
    "tendencies": [
      "文本生成"
    ],
    "parameters": {
      "model": "qwen-math-turbo"
    },
    "isThinking": false
  },
  {
    "id": "qwen-long-latest",
    "name": "qwen-long-latest",
    "provider": "通义千问",
    "description": "支持超长篇小说创作与多章节连续生成",
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
      "model": "qwen-long-latest"
    },
    "isThinking": false
  }
];
