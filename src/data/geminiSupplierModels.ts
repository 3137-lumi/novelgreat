import type { ModelInfo } from '../types';

export const GEMINI_SUPPLIER_MODELS: ModelInfo[] = [
  {
    "id": "gemini-2.0-flash",
    "name": "gemini-2.0-flash",
    "provider": "Gemini",
    "description": "速度快，成本低，适合跑量",
    "inputPrice": 0.04,
    "outputPrice": 0.16,
    "specialties": [
      "章纲",
      "正文草稿",
      "改写",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.0-flash"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.0-flash-001",
    "name": "gemini-2.0-flash-001",
    "provider": "Gemini",
    "description": "固定快照版本，结果更稳定",
    "inputPrice": 0.04,
    "outputPrice": 0.16,
    "specialties": [
      "章纲",
      "正文草稿",
      "改写",
      "Flash",
      "快照"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-001"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.0-flash-lite",
    "name": "gemini-2.0-flash-lite",
    "provider": "Gemini",
    "description": "极低成本，质量略低",
    "inputPrice": 0.03,
    "outputPrice": 0.12,
    "specialties": [
      "大规模草稿生成",
      "Lite",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-lite"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.0-flash-lite-001",
    "name": "gemini-2.0-flash-lite-001",
    "provider": "Gemini",
    "description": "固定版本，适合评测",
    "inputPrice": 0.04,
    "outputPrice": 0.16,
    "specialties": [
      "大规模草稿生成",
      "Lite",
      "Flash",
      "快照"
    ],
    "parameters": {
      "model": "gemini-2.0-flash-lite-001"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash",
    "name": "gemini-2.5-flash",
    "provider": "Gemini",
    "description": "质量与成本平衡，主力模型",
    "inputPrice": 0.12,
    "outputPrice": 1,
    "specialties": [
      "设定",
      "章纲",
      "正文",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-2.5-flash"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-flash-lite",
    "name": "gemini-2.5-flash-lite",
    "provider": "Gemini",
    "description": "性价比极高",
    "inputPrice": 0.04,
    "outputPrice": 0.16,
    "specialties": [
      "章纲跑量",
      "正文草稿",
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
    "provider": "Gemini",
    "description": "关闭推理，更像纯写作",
    "inputPrice": 0.12,
    "outputPrice": 1,
    "specialties": [
      "正文生成",
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
    "provider": "Gemini",
    "description": "结构与一致性更强",
    "inputPrice": 0.12,
    "outputPrice": 1,
    "specialties": [
      "章纲",
      "逻辑校验",
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
    "provider": "Gemini",
    "description": "高质量写作能力",
    "inputPrice": 0.5,
    "outputPrice": 4,
    "specialties": [
      "设定定稿",
      "高质量正文",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-2.5-pro"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-pro-nothinking",
    "name": "gemini-2.5-pro-nothinking",
    "provider": "Gemini",
    "description": "更偏创作表达",
    "inputPrice": 0.5,
    "outputPrice": 4,
    "specialties": [
      "正文",
      "文风",
      "推理",
      "非推理",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-2.5-pro-nothinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-2.5-pro-thinking",
    "name": "gemini-2.5-pro-thinking",
    "provider": "Gemini",
    "description": "逻辑与结构最强",
    "inputPrice": 0.5,
    "outputPrice": 4,
    "specialties": [
      "复杂剧情推演",
      "QC",
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
    "provider": "Gemini",
    "description": "新一代模型预览",
    "inputPrice": 0.2,
    "outputPrice": 1.2,
    "specialties": [
      "测试新文风",
      "章纲",
      "Preview",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-3-flash-preview-thinking",
    "name": "gemini-3-flash-preview-thinking",
    "provider": "Gemini",
    "description": "推理能力增强",
    "inputPrice": 0.2,
    "outputPrice": 1.2,
    "specialties": [
      "剧情结构测试",
      "推理",
      "Preview",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-3-flash-preview-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-3-pro-preview",
    "name": "gemini-3-pro-preview",
    "provider": "Gemini",
    "description": "更强表达能力",
    "inputPrice": 0.8,
    "outputPrice": 4.8,
    "specialties": [
      "高质量正文测试",
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
    "provider": "Gemini",
    "description": "高级推理",
    "inputPrice": 0.8,
    "outputPrice": 4.8,
    "specialties": [
      "复杂结构验证",
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
    "provider": "Gemini",
    "description": "滚动更新版本",
    "inputPrice": 0.12,
    "outputPrice": 0.48,
    "specialties": [
      "通用写作",
      "草稿",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-flash-latest"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-flash-latest-thinking",
    "name": "gemini-flash-latest-thinking",
    "provider": "Gemini",
    "description": "带推理",
    "inputPrice": 0.12,
    "outputPrice": 0.48,
    "specialties": [
      "章纲",
      "结构",
      "推理",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-flash-latest-thinking"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-flash-lite-latest",
    "name": "gemini-flash-lite-latest",
    "provider": "Gemini",
    "description": "最低成本",
    "inputPrice": 0.04,
    "outputPrice": 0.16,
    "specialties": [
      "草稿",
      "跑量",
      "Lite",
      "Flash"
    ],
    "parameters": {
      "model": "gemini-flash-lite-latest"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-pro-latest",
    "name": "gemini-pro-latest",
    "provider": "Gemini",
    "description": "成本极高，顶级能力",
    "inputPrice": 30,
    "outputPrice": 120,
    "specialties": [
      "旗舰级正文",
      "终稿",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-pro-latest"
    },
    "priceUnit": "per_1m"
  },
  {
    "id": "gemini-pro-latest-thinking",
    "name": "gemini-pro-latest-thinking",
    "provider": "Gemini",
    "description": "推理最强，成本最高",
    "inputPrice": 30,
    "outputPrice": 120,
    "specialties": [
      "全书逻辑校验",
      "推理",
      "Pro"
    ],
    "parameters": {
      "model": "gemini-pro-latest-thinking"
    },
    "priceUnit": "per_1m"
  }
];
