import React from 'react';
import { Star } from 'lucide-react';
import { FirmCard } from '../components/FirmCard';
import { sampleFirms } from '../data/sampleFirms';

export function Favorites() {
  // In a real app, this would be managed by a state management solution
  const favoriteFirms = sampleFirms.slice(0, 2); // Simulating favorite firms

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Star className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Favorite Firms</h1>
        <p className="text-xl text-gray-600">
          Your saved architectural firms for quick access
        </p>
      </div>

      {favoriteFirms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteFirms.map((firm) => (
            <FirmCard
              key={firm.id}
              firm={firm}
              onViewDetails={() => {}}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Star className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No Favorites Yet</h3>
          <p className="text-gray-600">
            Start adding firms to your favorites for quick access to their profiles.
          </p>
        </div>
      )}
    </div>
  );
}