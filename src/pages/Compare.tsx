import React from 'react';
import { Scale } from 'lucide-react';
import { sampleFirms } from '../data/sampleFirms';
import { StarRating } from '../components/StarRating';

export function Compare() {
  // In a real app, this would be managed by state management
  const firmsToCompare = sampleFirms.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Scale className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Firms</h1>
        <p className="text-xl text-gray-600">
          Compare architectural firms side by side
        </p>
      </div>

      {firmsToCompare.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="col-span-1"></div>
            {firmsToCompare.map((firm) => (
              <div key={firm.id} className="text-center">
                <img
                  src={firm.logo}
                  alt={firm.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{firm.name}</h3>
                <StarRating rating={4.5} showCount count={42} />
              </div>
            ))}
          </div>

          <div className="border-t">
            {[
              { label: 'Location', key: 'location' },
              { label: 'Team Size', key: 'teamSize' },
              { label: 'Specializations', key: 'specializations' },
              { label: 'Certifications', key: 'certifications' },
              { label: 'Awards', key: 'awards' },
            ].map(({ label, key }) => (
              <div key={key} className="grid grid-cols-3 gap-4 p-6 border-b last:border-b-0">
                <div className="font-medium text-gray-700">{label}</div>
                {firmsToCompare.map((firm) => (
                  <div key={firm.id} className="text-gray-600">
                    {key === 'location' && `${firm.location.city}, ${firm.location.country}`}
                    {key === 'teamSize' && `${firm.teamSize} professionals`}
                    {key === 'specializations' && firm.specializations.join(', ')}
                    {key === 'certifications' && firm.certifications.join(', ')}
                    {key === 'awards' && firm.awards.length + ' awards'}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50">
            <div></div>
            {firmsToCompare.map((firm) => (
              <div key={firm.id} className="text-center">
                <a
                  href={`mailto:${firm.contactInfo.email}`}
                  className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Contact Firm
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Scale className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No Firms to Compare</h3>
          <p className="text-gray-600">
            Add firms to compare their services, expertise, and achievements.
          </p>
        </div>
      )}
    </div>
  );
}