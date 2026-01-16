import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ModelInfo } from '../types';

interface ModelTableProps {
  models: ModelInfo[];
}

export const ModelTable: React.FC<ModelTableProps> = ({ models }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const calcRealMultiplier = (model: ModelInfo) => {
    const input = model.inputPrice;
    const output = model.priceUnit === 'per_call' ? 0 : model.outputPrice;
    const value = input * 0.3 + output * 0.7;
    if (!Number.isFinite(value)) return null;
    return value;
  };

  const formatRealMultiplier = (model: ModelInfo) => {
    const value = calcRealMultiplier(model);
    if (value === null) return '-';
    return value.toFixed(2);
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

  const handleCopy = async (model: ModelInfo) => {
    try {
      // Copy the model parameter ID (e.g. 'gpt-4o') instead of the full JSON
      // If parameters.model exists, use it, otherwise use the top-level id.
      const textToCopy = typeof model.parameters.model === 'string' 
        ? model.parameters.model 
        : model.id;
        
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(model.id);
      setTimeout(() => setCopiedId(null), 2000);
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
              <th className="px-6 py-4">供应商 / 模型</th>
              <th className="px-6 py-4 w-1/3">模型特征</th>
              <th className="px-6 py-4 text-right">输入价格 <span className="normal-case font-normal text-slate-400">(/1M)</span></th>
              <th className="px-6 py-4 text-right">输出价格 <span className="normal-case font-normal text-slate-400">(/1M)</span></th>
              <th className="px-6 py-4 text-right">真实消耗倍率</th>
              <th className="px-6 py-4 text-right">真实展示</th>
              <th className="px-6 py-4 text-center">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {models.length > 0 ? (
              models.map((model) => (
                <tr key={model.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-500 mb-1">
                        {model.stationTag && (
                          <span className="inline-block mr-2 px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200">
                            {model.stationTag}
                          </span>
                        )}
                        {model.provider}
                      </span>
                      <span className="font-semibold text-slate-900">{model.name}</span>
                      <span className="text-xs text-slate-400 mt-1 line-clamp-1">{model.description}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {model.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 whitespace-nowrap"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {model.priceUnit === 'per_call' ? `$${model.inputPrice.toFixed(2)}/次` : `$${model.inputPrice.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {model.priceUnit === 'per_call' ? (
                      <span className="text-slate-400">-</span>
                    ) : (
                      `$${model.outputPrice.toFixed(2)}`
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {formatRealMultiplier(model)}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-slate-700">
                    {formatRealDisplay(model)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleCopy(model)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        copiedId === model.id
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600'
                      }`}
                      title="复制模型参数ID"
                    >
                      {copiedId === model.id ? (
                        <>
                          <Check size={14} />
                          <span>已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>复制ID</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
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
