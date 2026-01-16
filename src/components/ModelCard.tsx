import React, { useState } from 'react';
import { Copy, Check, Terminal, DollarSign, PenTool } from 'lucide-react';
import { ModelInfo } from '../types';

interface ModelCardProps {
  model: ModelInfo;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(model.parameters, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200 p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-slate-900">{model.name}</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              {model.provider}
            </span>
          </div>
          {model.description && (
            <p className="text-sm text-slate-500 line-clamp-2">{model.description}</p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group relative"
          title="Copy Parameters"
        >
          {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
          <span className="absolute right-0 top-full mt-1 w-max px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            {copied ? 'Copied!' : 'Copy Config'}
          </span>
        </button>
      </div>

      <div className="space-y-4 flex-grow">
        {/* Price Section */}
        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
          <DollarSign size={18} className="text-slate-400 mt-0.5" />
          <div className="text-sm">
            <div className="text-slate-600">
              <span className="font-medium text-slate-900">${model.inputPrice}</span> / 1M input
            </div>
            <div className="text-slate-600">
              <span className="font-medium text-slate-900">${model.outputPrice}</span> / 1M output
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
            <PenTool size={16} />
            <span>Best for:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {model.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Terminal size={14} />
          <span className="truncate">Config: {JSON.stringify(model.parameters).slice(0, 30)}...</span>
        </div>
      </div>
    </div>
  );
};
