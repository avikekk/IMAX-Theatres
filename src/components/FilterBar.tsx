import React from 'react';
import { FilterType } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  filterValue: string;
  setFilterValue: (value: string) => void;
  uniqueValues: {
    cities: string[];
    projections: string[];
  };
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  setActiveFilter,
  filterValue,
  setFilterValue,
  uniqueValues,
}) => {
  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-4 mb-6 border border-zinc-800">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center">
          <SlidersHorizontal className="w-5 h-5 mr-2 text-gray-400" />
          <span className="font-medium text-gray-300">Filter by:</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('city')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'city'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            City
          </button>
          <button
            onClick={() => setActiveFilter('projection')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'projection'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            Projection
          </button>
        </div>
        
        {activeFilter !== 'all' && (
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="px-4 py-2 rounded-md bg-zinc-800 text-gray-300 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select {activeFilter}</option>
            {activeFilter === 'city' &&
              uniqueValues.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            {activeFilter === 'projection' &&
              uniqueValues.projections.map((projection) => (
                <option key={projection} value={projection}>
                  {projection}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
};