import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Server, Sparkles } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { ModelTable } from '../components/ModelTable';
import { Toast } from '../components/Toast';
import { DMXAPI_MODELS } from '../data/dmxapiModels';
import { GEMINI_SUPPLIER_MODELS } from '../data/geminiSupplierModels';
import { QIANFAN_SUPPLIER_MODELS } from '../data/qianfanSupplierModels';
import { TONGYI_SUPPLIER_MODELS } from '../data/tongyiSupplierModels';
import { VOLCANO_SUPPLIER_MODELS } from '../data/volcanoSupplierModels';
import { copyToClipboard } from '../lib/clipboard';
import { enrichDMXAPIModels } from '../lib/enrichModels';
import { normalizeSpecialties } from '../lib/normalizeSpecialties';

type TabId = 'all' | 'domestic' | 'foreign';

const TABS: { id: TabId; name: string }[] = [
  { id: 'all', name: '全部' },
  { id: 'domestic', name: '国内' },
  { id: 'foreign', name: '国外' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [filters, setFilters] = useState({
    provider: [] as string[], // Changed from string to string[]
    series: [] as string[], // Changed from string to string[]
    sortBy: 'default',
  });
  const toastTimerRef = useRef<number | null>(null);
  const [toast, setToast] = useState<{ message: string; tone: 'success' | 'error' } | null>(null);

  const showToast = (message: string, tone: 'success' | 'error' = 'success') => {
    const compact = message.length > 80 ? `${message.slice(0, 77)}...` : message;
    setToast({ message: compact, tone });
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 1400);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  const copyAndToast = async (text: string, okMessage: string) => {
    const ok = await copyToClipboard(text);
    if (ok) showToast(okMessage, 'success');
    else showToast('复制失败（浏览器权限限制）', 'error');
  };

  // Inject metadata
  const allModels = useMemo(() => {
    const dmx = enrichDMXAPIModels(DMXAPI_MODELS, GEMINI_SUPPLIER_MODELS).map(m => ({
      ...m,
      stationTag: 'dmxapi',
      region: 'foreign' as const,
      // Attempt to guess launch date or thinking from description/name if possible, otherwise undefined
      isThinking: m.isThinking ?? (m.name.toLowerCase().includes('thinking') || m.specialties.includes('Thinking')),
    }));
    
    const gemini = GEMINI_SUPPLIER_MODELS.map(m => ({
      ...m,
      stationTag: 'gemini',
      region: 'foreign' as const,
      isThinking: m.isThinking ?? m.name.toLowerCase().includes('thinking'),
    }));

    const tongyi = TONGYI_SUPPLIER_MODELS.map((m) => ({
      ...m,
      stationTag: 'tongyi',
      region: 'domestic' as const,
      isThinking: m.isThinking ?? m.name.toLowerCase().includes('thinking'),
    }));

    const qianfan = QIANFAN_SUPPLIER_MODELS.map((m) => ({
      ...m,
      stationTag: 'qianfan',
      region: 'domestic' as const,
      isThinking: m.isThinking ?? m.name.toLowerCase().includes('think'),
    }));

    const volcano = VOLCANO_SUPPLIER_MODELS.map((m) => ({
      ...m,
      stationTag: 'volc',
      region: 'domestic' as const,
      isThinking: m.isThinking ?? m.name.toLowerCase().includes('thinking'),
    }));

    return [...dmx, ...gemini, ...tongyi, ...qianfan, ...volcano].map(m => ({
      ...m,
      specialties: normalizeSpecialties(m.specialties)
    }));
  }, [DMXAPI_MODELS, GEMINI_SUPPLIER_MODELS, TONGYI_SUPPLIER_MODELS, QIANFAN_SUPPLIER_MODELS, VOLCANO_SUPPLIER_MODELS]);

  const currentModels = useMemo(() => {
    if (activeTab === 'all') return allModels;
    return allModels.filter(m => m.region === activeTab);
  }, [activeTab, allModels]);

  useEffect(() => {
    setFilters(prev => ({ ...prev, provider: [], series: [] }));
  }, [activeTab]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Unique Suppliers (Station Tags)
  const suppliers = useMemo(
    () => Array.from(new Set(currentModels.map((m) => m.stationTag || 'Unknown'))).sort(),
    [currentModels]
  );

  // Unique Model Owners (Providers)
  const modelOwners = useMemo(
    () => Array.from(new Set(currentModels.map((m) => m.provider))).sort(),
    [currentModels]
  );


  const filteredModels = useMemo(() => {
    let result = [...currentModels];

    // Filter by Supplier (Station)
    if (filters.provider.length > 0) {
      result = result.filter((m) => filters.provider.includes(m.stationTag || 'Unknown'));
    }

    // Filter by Model Owner
    if (filters.series.length > 0) {
      result = result.filter((m) => filters.series.includes(m.provider));
    }

    if (filters.sortBy === 'default') {
      const supplierOrder = new Map(filters.provider.map((x, i) => [x, i]));
      const ownerOrder = new Map(filters.series.map((x, i) => [x, i]));

      if (filters.provider.length > 0 || filters.series.length > 0) {
        result.sort((a, b) => {
          if (filters.provider.length > 0) {
            const sa = supplierOrder.get(a.stationTag || 'Unknown') ?? Number.POSITIVE_INFINITY;
            const sb = supplierOrder.get(b.stationTag || 'Unknown') ?? Number.POSITIVE_INFINITY;
            if (sa !== sb) return sa - sb;
          }

          if (filters.series.length > 0) {
            const oa = ownerOrder.get(a.provider) ?? Number.POSITIVE_INFINITY;
            const ob = ownerOrder.get(b.provider) ?? Number.POSITIVE_INFINITY;
            if (oa !== ob) return oa - ob;
          }

          return 0;
        });
      }
    }

    if (filters.sortBy === 'price_asc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => {
        const ma = metric(a);
        const mb = metric(b);
        if (ma === null && mb === null) return 0;
        if (ma === null) return 1;
        if (mb === null) return -1;
        return ma - mb;
      });
    } else if (filters.sortBy === 'price_desc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => {
        const ma = metric(a);
        const mb = metric(b);
        if (ma === null && mb === null) return 0;
        if (ma === null) return 1;
        if (mb === null) return -1;
        return mb - ma;
      });
    } else if (filters.sortBy === 'launch_date_desc') {
       result.sort((a, b) => (b.launchDate || '').localeCompare(a.launchDate || ''));
    } else if (filters.sortBy === 'launch_date_asc') {
       result.sort((a, b) => (a.launchDate || '').localeCompare(b.launchDate || ''));
    }

    return result;
  }, [currentModels, filters]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Server size={16} />
                {tab.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">AI 小说模型配置 ({TABS.find(t => t.id === activeTab)?.name})</h1>
          </div>
          <p className="text-slate-600 text-lg flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            聚合所有站点的模型配置（共 {currentModels.length} 个模型）
          </p>
        </header>

        <FilterBar
          providers={suppliers}
          series={modelOwners}
          filters={filters}
          onFilterChange={handleFilterChange}
          onCopyText={copyAndToast}
        />

        <ModelTable models={filteredModels} onCopyText={copyAndToast} />
      </div>
      <Toast message={toast?.message ?? null} tone={toast?.tone ?? 'success'} />
    </div>
  );
}
