import type { ModelInfo } from '../types';

export const GEMINI_SUPPLIER_MODELS: ModelInfo[] = [
  {
    "id": "gemini-2.0-flash",
    "name": "gemini-2.0-flash",
    "provider": "Google",
    "description": "速度快，低成本",
    "inputPrice": 0.012,
    "outputPrice": 0.048,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "正文草稿",
      "改写",
      "速度快",
      "低成本"
    ],
    "tendencies": [
      "章纲",
      "正文草稿",
      "改写"
    ],
    "parameters": {
      "model": "gemini-2.0-flash"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.0-flash-001",
    "name": "gemini-2.0-flash-001",
    "provider": "Google",
    "description": "稳定版",
    "inputPrice": 0.012,
    "outputPrice": 0.048,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "正文草稿",
      "改写",
      "稳定版"
    ],
    "tendencies": [
      "章纲",
      "正文草稿",
      "改写"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-001"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.0-flash-lite",
    "name": "gemini-2.0-flash-lite",
    "provider": "Google",
    "description": "极低成本",
    "inputPrice": 0.009,
    "outputPrice": 0.036,
    "priceUnit": "per_1m",
    "specialties": [
      "大规模草稿生成",
      "极低成本"
    ],
    "tendencies": [
      "大规模草稿生成"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-lite"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.0-flash-lite-001",
    "name": "gemini-2.0-flash-lite-001",
    "provider": "Google",
    "description": "评测稳定版",
    "inputPrice": 0.012,
    "outputPrice": 0.048,
    "priceUnit": "per_1m",
    "specialties": [
      "大规模草稿生成",
      "评测稳定版"
    ],
    "tendencies": [
      "大规模草稿生成"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-lite-001"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash",
    "name": "gemini-2.5-flash",
    "provider": "Google",
    "description": "主力均衡模型",
    "inputPrice": 0.036,
    "outputPrice": 0.3,
    "priceUnit": "per_1m",
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "主力均衡模型"
    ],
    "tendencies": [
      "设定",
      "章纲",
      "正文"
    ],
    "parameters": {
      "model": "gemini-2.5-flash"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-flash-lite",
    "name": "gemini-2.5-flash-lite",
    "provider": "Google",
    "description": "性价比",
    "inputPrice": 0.012,
    "outputPrice": 0.048,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲跑量",
      "正文草稿",
      "性价比"
    ],
    "tendencies": [
      "章纲跑量",
      "正文草稿"
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
    "description": "纯写作",
    "inputPrice": 0.036,
    "outputPrice": 0.3,
    "priceUnit": "per_1m",
    "specialties": [
      "正文生成",
      "纯写作"
    ],
    "tendencies": [
      "正文生成"
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
    "description": "结构增强",
    "inputPrice": 0.036,
    "outputPrice": 0.3,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "逻辑校验",
      "结构增强",
      "推理"
    ],
    "tendencies": [
      "章纲",
      "逻辑校验"
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
    "inputPrice": 0.15,
    "outputPrice": 1.2,
    "priceUnit": "per_1m",
    "specialties": [
      "设定定稿",
      "高质量正文"
    ],
    "tendencies": [
      "设定定稿",
      "高质量正文"
    ],
    "parameters": {
      "model": "gemini-2.5-pro"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-pro-nothinking",
    "name": "gemini-2.5-pro-nothinking",
    "provider": "Google",
    "description": "偏创作",
    "inputPrice": 0.15,
    "outputPrice": 1.2,
    "priceUnit": "per_1m",
    "specialties": [
      "正文",
      "文风",
      "偏创作"
    ],
    "tendencies": [
      "正文",
      "文风"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-nothinking"
    },
    "isThinking": false
  },
  {
    "id": "gemini-2.5-pro-thinking",
    "name": "gemini-2.5-pro-thinking",
    "provider": "Google",
    "description": "逻辑最强",
    "inputPrice": 0.15,
    "outputPrice": 1.2,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂剧情推演",
      "QC",
      "逻辑最强",
      "推理"
    ],
    "tendencies": [
      "复杂剧情推演",
      "QC"
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
    "inputPrice": 0.06,
    "outputPrice": 0.36,
    "priceUnit": "per_1m",
    "specialties": [
      "新文风",
      "章纲测试"
    ],
    "tendencies": [
      "新文风",
      "章纲测试"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview"
    },
    "isThinking": false
  },
  {
    "id": "gemini-3-flash-preview-thinking",
    "name": "gemini-3-flash-preview-thinking",
    "provider": "Google",
    "description": "推理增强",
    "inputPrice": 0.06,
    "outputPrice": 0.36,
    "priceUnit": "per_1m",
    "specialties": [
      "剧情结构测试",
      "推理增强",
      "推理"
    ],
    "tendencies": [
      "剧情结构测试"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-3-pro-preview",
    "name": "gemini-3-pro-preview",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.24,
    "outputPrice": 1.44,
    "priceUnit": "per_1m",
    "specialties": [
      "高质量正文测试"
    ],
    "tendencies": [
      "高质量正文测试"
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
    "description": "高级推理",
    "inputPrice": 0.24,
    "outputPrice": 1.44,
    "priceUnit": "per_1m",
    "specialties": [
      "复杂结构验证",
      "高级推理",
      "推理"
    ],
    "tendencies": [
      "复杂结构验证"
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
    "inputPrice": 0.036,
    "outputPrice": 0.144,
    "priceUnit": "per_1m",
    "specialties": [
      "通用写作",
      "草稿"
    ],
    "tendencies": [
      "通用写作",
      "草稿"
    ],
    "parameters": {
      "model": "gemini-flash-latest"
    },
    "isThinking": false
  },
  {
    "id": "gemini-flash-latest-thinking",
    "name": "gemini-flash-latest-thinking",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.036,
    "outputPrice": 0.144,
    "priceUnit": "per_1m",
    "specialties": [
      "章纲",
      "结构辅助",
      "推理"
    ],
    "tendencies": [
      "章纲",
      "结构辅助"
    ],
    "parameters": {
      "model": "gemini-flash-latest-thinking"
    },
    "isThinking": true
  },
  {
    "id": "gemini-flash-lite-latest",
    "name": "gemini-flash-lite-latest",
    "provider": "Google",
    "description": "",
    "inputPrice": 0.012,
    "outputPrice": 0.048,
    "priceUnit": "per_1m",
    "specialties": [
      "草稿",
      "跑量"
    ],
    "tendencies": [
      "草稿",
      "跑量"
    ],
    "parameters": {
      "model": "gemini-flash-lite-latest"
    },
    "isThinking": false
  },
  {
    "id": "gemini-pro-latest",
    "name": "gemini-pro-latest",
    "provider": "Google",
    "description": "",
    "inputPrice": 9,
    "outputPrice": 36,
    "priceUnit": "per_1m",
    "specialties": [
      "旗舰级正文",
      "终稿"
    ],
    "tendencies": [
      "旗舰级正文",
      "终稿"
    ],
    "parameters": {
      "model": "gemini-pro-latest"
    },
    "isThinking": false
  },
  {
    "id": "gemini-pro-latest-thinking",
    "name": "gemini-pro-latest-thinking",
    "provider": "Google",
    "description": "最强推理",
    "inputPrice": 9,
    "outputPrice": 36,
    "priceUnit": "per_1m",
    "specialties": [
      "全书逻辑校验",
      "最强推理",
      "推理"
    ],
    "tendencies": [
      "全书逻辑校验"
    ],
    "parameters": {
      "model": "gemini-pro-latest-thinking"
    },
    "isThinking": true
  }
];
