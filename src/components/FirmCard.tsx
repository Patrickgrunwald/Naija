import React from 'react';
import { Building2, Mail, Phone, Globe, Users, Award } from 'lucide-react';
import type { ArchitectureFirm } from '../types';

interface FirmCardProps {
  firm: ArchitectureFirm;
  onViewDetails: (firmId: string) => void;
}

export function FirmCard({ firm, onViewDetails }: FirmCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        {firm.projects[0]?.images[0] && (
          <img
            src={firm.projects[0].images[0]}
            alt={`${firm.name} featured project`}
            className="w-full h-full object-cover"
          />
        )}
        <img
          src={firm.logo}
          alt={`${firm.name} logo`}
          className="absolute bottom-4 left-4 h-12 w-12 rounded-full border-2 border-white bg-white"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{firm.name}</h2>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{firm.profile}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{firm.location.city}, {firm.location.country}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{firm.teamSize} team members</span>
          </div>
          {firm.awards.length > 0 && (
            <div className="flex items-center text-gray-600">
              <Award className="w-4 h-4 mr-2" />
              <span>{firm.awards.length} awards</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {firm.specializations.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex space-x-4">
            <a href={`mailto:${firm.contactInfo.email}`} className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
            <a href={`tel:${firm.contactInfo.phone}`} className="text-gray-600 hover:text-gray-900">
              <Phone className="w-5 h-5" />
            </a>
            <a href={firm.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Globe className="w-5 h-5" />
            </a>
          </div>
          
          <button
            onClick={() => onViewDetails(firm.id)}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}