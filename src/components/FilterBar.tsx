import React from 'react';
import { Filter, ArrowUpDown, Search } from 'lucide-react';

interface FilterBarProps {
  providers: string[];
  series: string[];
  specialties: string[];
  filters: {
    provider: string;
    series: string;
    specialty: string;
    sortBy: string;
    searchQuery: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  providers,
  series,
  specialties,
  filters,
  onFilterChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 flex-wrap">
      <div className="relative w-full md:w-auto md:min-w-[200px] mb-2 md:mb-0 mr-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className="text-slate-400" />
        </div>
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => onFilterChange('searchQuery', e.target.value)}
          placeholder="搜索模型..."
          className="pl-9 pr-3 py-2 w-full bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-2 text-slate-500 mr-2">
        <Filter size={18} />

        <span className="font-medium text-sm">筛选:</span>
      </div>

      <select
        value={filters.provider}
        onChange={(e) => onFilterChange('provider', e.target.value)}
        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
      >
        <option value="all">所有供应商</option>
        {providers.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        value={filters.series}
        onChange={(e) => onFilterChange('series', e.target.value)}
        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
      >
        <option value="all">所有模型方</option>
        {series.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        value={filters.specialty}
        onChange={(e) => onFilterChange('specialty', e.target.value)}
        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
      >
        <option value="all">所有擅长点</option>
        {specialties.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div className="flex-grow md:border-l md:border-slate-200 md:pl-4 md:ml-auto flex items-center gap-2">
        <div className="flex items-center gap-2 text-slate-500 mr-2">
          <ArrowUpDown size={16} />
          <span className="font-medium text-sm">排序:</span>
        </div>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow md:flex-grow-0 md:min-w-[180px]"
        >
          <option value="default">默认</option>
          <option value="launch_date">上线时间</option>
          <option value="price_asc">价格: 从低到高</option>
          <option value="price_desc">价格: 从高到低</option>
        </select>
      </div>
    </div>
  );
};
