import React from 'react';
import { MessageSquare } from 'lucide-react';
import { StarRating } from '../components/StarRating';
import { sampleFirms } from '../data/sampleFirms';

export function Reviews() {
  const firms = sampleFirms;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <MessageSquare className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Firm Reviews</h1>
        <p className="text-xl text-gray-600">
          Read and write reviews for architectural firms
        </p>
      </div>

      <div className="grid gap-8">
        {firms.map((firm) => (
          <div key={firm.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={firm.logo}
                    alt={firm.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{firm.name}</h3>
                    <StarRating rating={4.5} showCount count={42} />
                  </div>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                  Write Review
                </button>
              </div>

              <div className="space-y-6">
                {[1, 2].map((review) => (
                  <div key={review} className="border-t pt-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">John Doe</h4>
                        <p className="text-sm text-gray-500">Project: Office Building</p>
                      </div>
                      <StarRating rating={5} size="sm" />
                    </div>
                    <p className="text-gray-600">
                      Exceptional work on our office building project. The team was professional,
                      innovative, and delivered beyond our expectations. Would highly recommend
                      for any commercial project.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}