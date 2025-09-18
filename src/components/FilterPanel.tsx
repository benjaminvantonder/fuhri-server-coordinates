import React from 'react';
import { Search, Filter, Globe, Flame, Eye } from 'lucide-react';
import { FilterType, DimensionFilter } from '../types/coordinates';

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  typeFilter: FilterType;
  setTypeFilter: (filter: FilterType) => void;
  dimensionFilter: DimensionFilter;
  setDimensionFilter: (filter: DimensionFilter) => void;
  totalCount: number;
  filteredCount: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  typeFilter,
  setTypeFilter,
  dimensionFilter,
  setDimensionFilter,
  totalCount,
  filteredCount
}) => {
  const typeFilters: { value: FilterType; label: string; icon: React.ReactNode }[] = [
    { value: 'all', label: 'All Locations', icon: <Filter className="w-4 h-4" /> },
    { value: 'natural', label: 'Natural', icon: <Globe className="w-4 h-4" /> },
    { value: 'man-made', label: 'Man-made', icon: <Eye className="w-4 h-4" /> }
  ];

  const dimensionFilters: { value: DimensionFilter; label: string; color: string }[] = [
    { value: 'all', label: 'All Dimensions', color: 'text-slate-400' },
    { value: 'overworld', label: 'Overworld', color: 'text-green-400' },
    { value: 'nether', label: 'Nether', color: 'text-red-400' },
    { value: 'end', label: 'The End', color: 'text-purple-400' }
  ];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8 animate-fadeInUp">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white flex items-center space-x-2">
          <Filter className="w-5 h-5 text-emerald-400" />
          <span>Filter & Search</span>
        </h2>
        <div className="text-sm text-slate-400">
          Showing <span className="text-emerald-400 font-medium">{filteredCount}</span> of{' '}
          <span className="text-slate-300">{totalCount}</span> locations
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Bar */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Search Locations
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Type Filter */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Location Type
          </label>
          <div className="flex space-x-2">
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTypeFilter(filter.value)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  typeFilter === filter.value
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {filter.icon}
                <span className="hidden sm:inline">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dimension Filter */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Dimension
          </label>
          <select
            value={dimensionFilter}
            onChange={(e) => setDimensionFilter(e.target.value as DimensionFilter)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
          >
            {dimensionFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;