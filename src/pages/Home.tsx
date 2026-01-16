import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Server, Sparkles } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { ModelTable } from '../components/ModelTable';
import { DMXAPI_MODELS } from '../data/dmxapiModels';
import { GEMINI_SUPPLIER_MODELS } from '../data/geminiSupplierModels';
import { enrichDMXAPIModels } from '../lib/enrichModels';
import { normalizeSpecialties } from '../lib/normalizeSpecialties';

type Station = {
  id: string;
  name: string;
  description: string;
  models: Array<(typeof DMXAPI_MODELS)[number]>;
};

const STATIONS: Station[] = [
  {
    id: 'all',
    name: '全部',
    description: '聚合所有站点的模型',
    models: [
      ...enrichDMXAPIModels(DMXAPI_MODELS, GEMINI_SUPPLIER_MODELS).map(m => ({ ...m, stationTag: 'DMXAPI' })),
      ...GEMINI_SUPPLIER_MODELS.map(m => ({ ...m, stationTag: 'Gemini 供应商' }))
    ],
  },
  {
    id: 'dmxapi',
    name: 'DMXAPI',
    description: '包含 GPT、Claude、Gemini、Grok 等多供应商模型配置',
    models: enrichDMXAPIModels(DMXAPI_MODELS, GEMINI_SUPPLIER_MODELS).map(m => ({ ...m, stationTag: 'DMXAPI' })),
  },
  {
    id: 'gemini_supplier',
    name: 'Gemini 供应商',
    description: 'Gemini 模型（含擅长点与特点）',
    models: GEMINI_SUPPLIER_MODELS.map(m => ({ ...m, stationTag: 'Gemini 供应商' })),
  },
  {
    id: 'other',
    name: '其他中转站',
    description: '示例中转站（待补充数据）',
    models: [],
  },
];

export default function Home() {
  const [activeStationId, setActiveStationId] = useState('dmxapi');
  const [filters, setFilters] = useState({
    provider: 'all',
    series: 'all',
    specialty: 'all',
    sortBy: 'default',
    searchQuery: '',
  });

  const activeStation = useMemo(
    () => STATIONS.find((s) => s.id === activeStationId) ?? STATIONS[0],
    [activeStationId]
  );

  const currentModels = useMemo(
    () => activeStation.models.map((m) => ({ ...m, specialties: normalizeSpecialties(m.specialties) })),
    [activeStation.models]
  );

  useEffect(() => {
    setFilters({
      provider: 'all',
      series: 'all',
      specialty: 'all',
      sortBy: 'default',
      searchQuery: '',
    });
  }, [activeStationId]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const providers = useMemo(
    () => Array.from(new Set(currentModels.map((m) => m.provider))).sort(),
    [currentModels]
  );

  const specialties = useMemo(() => {
    const all = currentModels.flatMap((m) => m.specialties);
    return Array.from(new Set(all)).sort();
  }, [currentModels]);

  const series = useMemo(() => {
    const seriesSet = new Set<string>();
    currentModels.forEach((m) => {
      const text = `${m.id} ${m.name}`.toLowerCase();
      if (text.includes('gpt')) seriesSet.add('GPT');
      else if (text.includes('claude')) seriesSet.add('Claude');
      else if (text.includes('gemini')) seriesSet.add('Gemini');
      else if (text.includes('grok')) seriesSet.add('Grok');
      else if (text.includes('dall-e')) seriesSet.add('DALL-E');
      else if (text.includes('o1') || text.includes('o3') || text.includes('o4')) seriesSet.add('OpenAI o-Series');
      else seriesSet.add('Other');
    });
    return Array.from(seriesSet).sort();
  }, [currentModels]);

  const filteredModels = useMemo(() => {
    let result = [...currentModels];

    const q = filters.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((m) => {
        const hay = `${m.id} ${m.name} ${m.provider} ${m.description ?? ''}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (filters.provider !== 'all') {
      result = result.filter((m) => m.provider === filters.provider);
    }

    if (filters.series !== 'all') {
      const s = filters.series.toLowerCase();
      result = result.filter((m) => {
        const text = `${m.id} ${m.name}`.toLowerCase();
        if (s === 'gpt') return text.includes('gpt');
        if (s === 'claude') return text.includes('claude');
        if (s === 'gemini') return text.includes('gemini');
        if (s === 'grok') return text.includes('grok');
        if (s === 'dall-e') return text.includes('dall-e');
        if (s === 'openai o-series') return text.includes('o1') || text.includes('o3') || text.includes('o4');
        return true;
      });
    }

    if (filters.specialty !== 'all') {
      result = result.filter((m) => m.specialties.includes(filters.specialty));
    }

    if (filters.sortBy === 'price_asc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => metric(a) - metric(b));
    } else if (filters.sortBy === 'price_desc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => metric(b) - metric(a));
    }

    return result;
  }, [currentModels, filters]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {STATIONS.map((station) => (
              <button
                key={station.id}
                onClick={() => setActiveStationId(station.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeStationId === station.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Server size={16} />
                {station.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">AI 小说模型配置 ({activeStation.name})</h1>
          </div>
          <p className="text-slate-600 text-lg flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            {activeStation.description}（共 {currentModels.length} 个模型）
          </p>
        </header>

        <FilterBar
          providers={providers}
          series={series}
          specialties={specialties}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <ModelTable models={filteredModels} />
      </div>
    </div>
  );
}
