import React from 'react';
import { X, MapPin, Users, Award, Download, Mail } from 'lucide-react';
import type { ArchitectureFirm } from '../types';

interface FirmDetailsProps {
  firm: ArchitectureFirm;
  onClose: () => void;
}

export function FirmDetails({ firm, onClose }: FirmDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{firm.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <span>{firm.location.city}, {firm.location.country}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-600" />
              <span>{firm.teamSize} Professionals</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-gray-600" />
              <span>{firm.awards.length} Awards</span>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600">{firm.profile}</p>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {firm.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {firm.projects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Awards & Recognition</h3>
            <div className="space-y-2">
              {firm.awards.map((award, index) => (
                <div key={index} className="flex items-start">
                  <Award className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">{award.title}</p>
                    <p className="text-sm text-gray-600">
                      {award.organization} - {award.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Download */}
          <div className="flex flex-wrap gap-4 pt-6 border-t">
            <a
              href={`mailto:${firm.contactInfo.email}`}
              className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Firm
            </a>
            {firm.portfolioUrl && (
              <a
                href={firm.portfolioUrl}
                download
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}