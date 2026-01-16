import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  providers: string[];
  series: string[];
  filters: {
    provider: string[];
    series: string[];
    sortBy: string;
  };
  onFilterChange: (key: string, value: any) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  providers,
  series,
  filters,
  onFilterChange,
}) => {
  const toggleSelection = (key: 'provider' | 'series', item: string) => {
    const current = filters[key];
    if (item === 'all') {
      onFilterChange(key, []);
      return;
    }
    
    let next: string[];
    if (current.includes(item)) {
      next = current.filter(i => i !== item);
    } else {
      next = [...current, item];
    }
    onFilterChange(key, next);
  };

  const isSelected = (key: 'provider' | 'series', item: string) => {
    if (item === 'all') return filters[key].length === 0;
    return filters[key].includes(item);
  };

  const handleSort = (field: 'price' | 'launch_date') => {
    const currentSort = filters.sortBy;
    let nextSort = 'default';

    if (field === 'price') {
      if (currentSort === 'price_asc') nextSort = 'price_desc';
      else if (currentSort === 'price_desc') nextSort = 'default';
      else nextSort = 'price_asc';
    } else if (field === 'launch_date') {
      if (currentSort === 'launch_date_desc') nextSort = 'launch_date_asc';
      else if (currentSort === 'launch_date_asc') nextSort = 'default';
      else nextSort = 'launch_date_desc';
    }

    onFilterChange('sortBy', nextSort);
  };

  const getSortIcon = (field: 'price' | 'launch_date') => {
    const s = filters.sortBy;
    if (field === 'price') {
      if (s === 'price_asc') return <span className="text-blue-600 ml-1">↑</span>;
      if (s === 'price_desc') return <span className="text-blue-600 ml-1">↓</span>;
    }
    if (field === 'launch_date') {
      if (s === 'launch_date_asc') return <span className="text-blue-600 ml-1">↑</span>;
      if (s === 'launch_date_desc') return <span className="text-blue-600 ml-1">↓</span>;
    }
    return <span className="text-slate-300 ml-1">↕</span>;
  };

  const renderRow = (label: string, items: string[], stateKey: 'provider' | 'series') => (
    <div className="flex items-start gap-4 py-2">
      <span className="text-slate-500 font-medium text-sm whitespace-nowrap mt-1 w-16 flex-shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toggleSelection(stateKey, 'all')}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            isSelected(stateKey, 'all')
              ? 'bg-slate-900 text-white font-medium'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-transparent'
          }`}
        >
          全部
        </button>
        {items.map(item => (
          <button
            key={item}
            onClick={() => toggleSelection(stateKey, item)}
            className={`px-3 py-1 text-sm rounded-full transition-colors border ${
              isSelected(stateKey, item)
                ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
      <div className="space-y-2">
        {renderRow('供应商', providers, 'provider')}
        {renderRow('模型方', series, 'series')}

        <div className="flex items-center gap-4 py-2 mt-2 border-t border-slate-100 pt-4">
          <span className="text-slate-500 font-medium text-sm whitespace-nowrap w-16 flex-shrink-0">排序</span>
          <div className="flex flex-wrap gap-2">
             <button
              onClick={() => handleSort('launch_date')}
              className={`flex items-center px-4 py-1.5 text-sm rounded-full transition-colors border ${
                filters.sortBy.includes('launch_date')
                  ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              上线时间
              {getSortIcon('launch_date')}
            </button>
            <button
              onClick={() => handleSort('price')}
              className={`flex items-center px-4 py-1.5 text-sm rounded-full transition-colors border ${
                filters.sortBy.includes('price')
                  ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              价格
              {getSortIcon('price')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
