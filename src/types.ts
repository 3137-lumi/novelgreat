export interface ModelParameter {
  [key: string]: string | number | boolean;
}

export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  description?: string;
  inputPrice: number; // Price per 1M tokens in USD
  outputPrice: number; // Price per 1M tokens in USD
  priceUnit?: 'per_1m' | 'per_call';
  specialties: string[];
  stationTag?: string; // e.g. 'DMXAPI' or 'Gemini 供应商'
  region?: 'domestic' | 'foreign'; // Region classification
  launchDate?: string; // YYYY-MM-DD
  isThinking?: boolean; // Whether it supports thinking/reasoning
  parameters: ModelParameter; // The JSON blob to copy
}
