import React from 'react';
import { useState } from 'react';
import { FirmCard } from '../components/FirmCard';
import { Filters } from '../components/Filters';
import { FirmDetails } from '../components/FirmDetails';
import type { ArchitectureFirm, FilterState } from '../types';
import { sampleFirms } from '../data/sampleFirms';

export function Home() {
  const [filters, setFilters] = useState<FilterState>({
    projectType: '',
    region: '',
    city: '',
    postcode: '',
    teamSize: '',
    budgetRange: '',
    certifications: [],
  });

  const [selectedFirm, setSelectedFirm] = useState<ArchitectureFirm | null>(null);

  const filteredFirms = sampleFirms.filter((firm) => {
    if (filters.projectType && !firm.projects.some(p => p.type === filters.projectType)) {
      return false;
    }
    if (filters.region && !firm.location.country.includes(filters.region)) {
      return false;
    }
    if (filters.city && firm.location.city !== filters.city) {
      return false;
    }
    if (filters.postcode && firm.location.postcode?.includes(filters.postcode)) {
      return false;
    }
    if (filters.teamSize) {
      const [min, max] = filters.teamSize.split('-').map(Number);
      if (max && (firm.teamSize < min || firm.teamSize > max)) {
        return false;
      }
      if (!max && firm.teamSize < min) {
        return false;
      }
    }
    if (filters.budgetRange) {
      const range = filters.budgetRange;
      const budget = firm.budgetRange.max;
      if (
        (range === '< 1M' && budget >= 1000000) ||
        (range === '1M - 5M' && (budget < 1000000 || budget > 5000000)) ||
        (range === '5M - 20M' && (budget < 5000000 || budget > 20000000)) ||
        (range === '20M+' && budget < 20000000)
      ) {
        return false;
      }
    }
    if (filters.certifications.length > 0) {
      return filters.certifications.every(cert => 
        firm.certifications.includes(cert)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      <Filters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {filteredFirms.map((firm) => (
          <FirmCard
            key={firm.id}
            firm={firm}
            onViewDetails={(id) => setSelectedFirm(firm)}
          />
        ))}
      </div>

      {filteredFirms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No firms match your current filters. Try adjusting your criteria.
          </p>
        </div>
      )}

      {selectedFirm && (
        <FirmDetails
          firm={selectedFirm}
          onClose={() => setSelectedFirm(null)}
        />
      )}
    </div>
  );
}