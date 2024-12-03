import React from 'react';
import { Building2, Users, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Naija Architect</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting Nigeria's finest architectural talent with clients worldwide, fostering innovation
          and excellence in architectural design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Building2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">200+ Firms</h3>
          <p className="text-gray-600">Vetted architectural practices across Nigeria</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">5000+ Projects</h3>
          <p className="text-gray-600">Successfully completed projects</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-600">Connecting with clients worldwide</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p className="text-gray-600">Award-winning architectural practices</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="mb-6">
          At Naija Architect, we're dedicated to showcasing the incredible architectural talent
          that Nigeria has to offer. Our platform serves as a bridge between innovative architectural
          firms and clients seeking exceptional design solutions.
        </p>
        <p className="mb-6">
          We believe in promoting sustainable, culturally-rich architecture that reflects both our
          heritage and our future. By connecting clients with the right architectural partners,
          we're helping to shape the built environment of tomorrow.
        </p>
        <p>
          Our commitment to excellence extends beyond just connecting clients and architects. We
          provide resources, insights, and tools that help both parties make informed decisions
          and achieve outstanding results in their architectural projects.
        </p>
      </div>
    </div>
  );
}