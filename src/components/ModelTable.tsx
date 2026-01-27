import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ModelInfo } from '../types';
import { copyToClipboard } from '../lib/clipboard';

interface ModelTableProps {
  models: ModelInfo[];
  onCopyText?: (text: string, okMessage: string) => void | Promise<void>;
}

export const ModelTable: React.FC<ModelTableProps> = ({ models, onCopyText }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const calcRealMultiplier = (model: ModelInfo) => {
    // Keep calculation based on USD to maintain the 'x' scale consistency
    const input = model.inputPrice;
    const output = model.priceUnit === 'per_call' ? 0 : model.outputPrice;
    if (input === null || output === null) return null;
    const value = input * 0.3 + output * 0.7;
    if (!Number.isFinite(value)) return null;
    return value;
  };

  const formatRealDisplay = (model: ModelInfo) => {
    const real = calcRealMultiplier(model);
    if (real === null) return '-';

    const raw = real / 3;
    const roundedUpToHalf = Math.ceil(raw * 2) / 2;
    const clamped = Math.min(Math.max(roundedUpToHalf, 1), 3);
    const text = Number.isInteger(clamped) ? clamped.toFixed(0) : clamped.toFixed(1);
    return `${text}x`;
  };

  const formatRMB = (usdPrice: number | null) => {
    if (usdPrice === null) return '-';
    return `¥${(usdPrice * 7).toFixed(4)}`; // precision for cheap models
  };

  const formatDefaultThinkingMode = (mode: ModelInfo['defaultThinkingMode']) => {
    if (mode === 'enabled') return '开';
    if (mode === 'disabled') return '关';
    if (mode === 'auto') return '自动';
    return '-';
  };

  const getModelParamId = (model: ModelInfo) => {
    return typeof model.parameters.model === 'string' ? model.parameters.model : model.id;
  };

  const copyText = async (text: string, key: string, okMessage: string) => {
    try {
      if (onCopyText) {
        await onCopyText(text, okMessage);
      } else {
        await copyToClipboard(text);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="px-6 py-4">供应商</th>
              <th className="px-6 py-4">模型名</th>
              <th className="px-6 py-4">模型ID</th>
              <th className="px-6 py-4 text-center">思考</th>
              <th className="px-6 py-4 text-center">支持思考模式</th>
              <th className="px-6 py-4 text-center">默认思考模式</th>
              <th className="px-6 py-4">功能倾向</th>
              <th className="px-6 py-4 text-right">输入价格 <span className="normal-case font-normal text-slate-400">(/1M)</span></th>
              <th className="px-6 py-4 text-right">输出价格 <span className="normal-case font-normal text-slate-400">(/1M)</span></th>
              <th className="px-6 py-4 text-center">上线时间</th>
              <th className="px-6 py-4 text-right">真实展示</th>
              <th className="px-6 py-4 text-center">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {models.length > 0 ? (
              models.map((model) => (
                <tr key={`${model.stationTag || 'Unknown'}:${model.id}`} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          model.stationTag || 'Unknown',
                          `supplier:${model.stationTag || 'Unknown'}`,
                          `已复制供应商：${model.stationTag || 'Unknown'}`
                        )
                      }
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${
                        copiedKey === `supplier:${model.stationTag || 'Unknown'}`
                          ? 'bg-green-100 text-green-700 border-green-200'
                          : 'bg-slate-100 text-slate-800 border-slate-100 hover:bg-slate-200'
                      }`}
                      title="点击复制供应商名称"
                      aria-label="复制供应商名称"
                    >
                      {model.stationTag || 'Unknown'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex flex-col">
                        <button
                          type="button"
                          onClick={() =>
                            copyText(getModelParamId(model), `param:${model.id}`, `已复制模型参数：${getModelParamId(model)}`)
                          }
                          className="text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                          title="点击复制模型参数ID"
                          aria-label="复制模型参数ID"
                        >
                          {model.name}
                        </button>
                        <span className="text-xs text-slate-400">{model.provider}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-500">
                    <button
                      type="button"
                      onClick={() =>
                        copyText(getModelParamId(model), `param:${model.id}`, `已复制模型参数：${getModelParamId(model)}`)
                      }
                      className={`text-left font-mono hover:text-blue-600 transition-colors ${
                        copiedKey === `param:${model.id}` ? 'text-green-700' : 'text-slate-500'
                      }`}
                      title="点击复制模型参数ID"
                      aria-label="复制模型参数ID"
                    >
                      {model.id}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {model.isThinking ? (
                        <span className="text-green-500 font-bold">✓</span>
                    ) : (
                        <span className="text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {model.stationTag === 'volc' ? (
                      model.supportsThinkingMode === true ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : model.supportsThinkingMode === false ? (
                        <span className="text-slate-500 font-bold">×</span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {model.stationTag === 'volc' ? (
                      model.supportsThinkingMode === false ? (
                        <span className="text-slate-300">-</span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                          {formatDefaultThinkingMode(model.defaultThinkingMode)}
                        </span>
                      )
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {Array.isArray(model.tendencies) && model.tendencies.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {model.tendencies.slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 border border-indigo-100"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm text-slate-300">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {model.priceUnit === 'per_call'
                      ? model.inputPrice === null
                        ? '-'
                        : `${formatRMB(model.inputPrice)}/次`
                      : formatRMB(model.inputPrice)}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {model.priceUnit === 'per_call' ? (
                      <span className="text-slate-400">-</span>
                    ) : (
                      formatRMB(model.outputPrice)
                    )}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">
                    {model.launchDate || '-'}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700 font-bold">
                    {formatRealDisplay(model)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        copyText(getModelParamId(model), `param:${model.id}`, `已复制模型参数：${getModelParamId(model)}`)
                      }
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        copiedKey === `param:${model.id}`
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600'
                      }`}
                      title="复制模型参数ID"
                    >
                      {copiedKey === `param:${model.id}` ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="px-6 py-12 text-center text-slate-500">
                  没有找到匹配的模型。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
