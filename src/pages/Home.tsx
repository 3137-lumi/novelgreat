import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Server, Sparkles } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { ModelTable } from '../components/ModelTable';
import { DMXAPI_MODELS } from '../data/dmxapiModels';
import { GEMINI_SUPPLIER_MODELS } from '../data/geminiSupplierModels';
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
    modelOwner: [] as string[], // Changed from string to string[]
    specialty: [] as string[], // Changed from string to string[]
    sortBy: 'default',
    searchQuery: '',
  });

  // Inject metadata
  const allModels = useMemo(() => {
    const dmx = enrichDMXAPIModels(DMXAPI_MODELS, GEMINI_SUPPLIER_MODELS).map(m => ({
      ...m,
      stationTag: 'DMXAPI',
      region: 'foreign' as const,
      // Attempt to guess launch date or thinking from description/name if possible, otherwise undefined
      isThinking: m.name.toLowerCase().includes('thinking') || m.specialties.includes('Thinking'),
    }));
    
    const gemini = GEMINI_SUPPLIER_MODELS.map(m => ({
      ...m,
      stationTag: 'Gemini',
      region: 'foreign' as const,
      isThinking: m.name.toLowerCase().includes('thinking'),
    }));

    return [...dmx, ...gemini].map(m => ({
      ...m,
      specialties: normalizeSpecialties(m.specialties)
    }));
  }, []);

  const currentModels = useMemo(() => {
    if (activeTab === 'all') return allModels;
    return allModels.filter(m => m.region === activeTab);
  }, [activeTab, allModels]);

  useEffect(() => {
    setFilters(prev => ({ ...prev, provider: [], modelOwner: [], specialty: [] }));
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


  const specialties = useMemo(() => {
    const all = currentModels.flatMap((m) => m.specialties);
    return Array.from(new Set(all)).sort();
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

    // Filter by Supplier (Station)
    if (filters.provider.length > 0) {
      result = result.filter((m) => filters.provider.includes(m.stationTag || 'Unknown'));
    }

    // Filter by Model Owner
    if (filters.modelOwner.length > 0) {
      result = result.filter((m) => filters.modelOwner.includes(m.provider));
    }

    // Filter by Specialty
    if (filters.specialty.length > 0) {
      // Logic: OR (match any selected specialty) or AND (match all)? 
      // Usually filters are OR within a category, but for specialties "Has X OR Y" is common.
      result = result.filter((m) => 
        filters.specialty.some(s => m.specialties.includes(s))
      );
    }

    if (filters.sortBy === 'price_asc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => metric(a) - metric(b));
    } else if (filters.sortBy === 'price_desc') {
      const metric = (m) => (m.priceUnit === 'per_call' ? m.inputPrice : m.outputPrice);
      result.sort((a, b) => metric(b) - metric(a));
    } else if (filters.sortBy === 'launch_date_desc') {
       // Mock sort for now as we don't have real dates yet everywhere, but logic is here
       // Assuming launchDate is YYYY-MM-DD string
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
          providers={suppliers} // Mapping 'suppliers' (Stations) to 'providers' prop of FilterBar for now
          series={modelOwners}  // Mapping 'modelOwners' (Providers) to 'series' prop of FilterBar for now
          specialties={specialties}
          filters={{
             ...filters,
             series: filters.modelOwner // Map back for FilterBar compatibility until we update it
          }}
          onFilterChange={(key, value) => {
             if (key === 'series') handleFilterChange('modelOwner', value);
             else handleFilterChange(key, value);
          }}
        />

        <ModelTable models={filteredModels} />
      </div>
    </div>
  );
}
