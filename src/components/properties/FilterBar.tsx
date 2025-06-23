'use client';

import React from 'react';
import Select from 'react-select';
import { FiFilter } from 'react-icons/fi';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const propertyTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
];

const priceRanges = [
  { value: 'all', label: 'Any Price' },
  { value: '0-500000', label: 'Up to $500,000' },
  { value: '500000-1000000', label: '$500,000 - $1,000,000' },
  { value: '1000000-2000000', label: '$1,000,000 - $2,000,000' },
  { value: '2000000+', label: 'Over $2,000,000' },
];

const bedroomOptions = [
  { value: 'all', label: 'Any' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
  { value: '5', label: '5+' },
];

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState({
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all',
  });

  const handleChange = (name: string, value: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Search by location, property type, or keyword"
            onChange={(e) => handleChange('search', e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiFilter className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
          Search
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <Select
            options={propertyTypes}
            defaultValue={propertyTypes[0]}
            onChange={(option) => option && handleChange('propertyType', option.value)}
            className="text-sm"
            classNamePrefix="select"
            isSearchable={false}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <Select
            options={priceRanges}
            defaultValue={priceRanges[0]}
            onChange={(option) => option && handleChange('priceRange', option.value)}
            className="text-sm"
            classNamePrefix="select"
            isSearchable={false}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
          <Select
            options={bedroomOptions}
            defaultValue={bedroomOptions[0]}
            onChange={(option) => option && handleChange('bedrooms', option.value)}
            className="text-sm"
            classNamePrefix="select"
            isSearchable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
