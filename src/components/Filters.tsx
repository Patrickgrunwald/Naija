import React from 'react';
import { Filter } from 'lucide-react';
import type { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  const projectTypes = ['residential', 'commercial', 'public', 'industrial', 'cultural'];
  const regions = ['Europe', 'North America', 'Asia', 'Australia'];
  const cities = ['Berlin', 'Copenhagen', 'Amsterdam', 'London', 'Paris', 'New York', 'Tokyo'];
  const teamSizes = ['1-10', '11-50', '51-200', '200+'];
  const budgetRanges = ['< 1M', '1M - 5M', '5M - 20M', '20M+'];
  const certifications = ['LEED', 'BREEAM', 'DGNB', 'PassivHaus'];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-3">
        <Filter className="w-5 h-5 mr-2" />
        <h2 className="text-xl font-semibold">Filter Firms</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            value={filters.projectType}
            onChange={(e) => onFilterChange({ ...filters, projectType: e.target.value as any })}
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="">All Types</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Team Size
          </label>
          <select
            value={filters.teamSize}
            onChange={(e) => onFilterChange({ ...filters, teamSize: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="">Any Size</option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget Range
          </label>
          <select
            value={filters.budgetRange}
            onChange={(e) => onFilterChange({ ...filters, budgetRange: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="">Any Budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certifications
          </label>
          <div className="space-y-1 text-sm">
            {certifications.map((cert) => (
              <label key={cert} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.certifications.includes(cert)}
                  onChange={(e) => {
                    const newCerts = e.target.checked
                      ? [...filters.certifications, cert]
                      : filters.certifications.filter((c) => c !== cert);
                    onFilterChange({ ...filters, certifications: newCerts });
                  }}
                  className="mr-2"
                />
                <span className="text-sm">{cert}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}