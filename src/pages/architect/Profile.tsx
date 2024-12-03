import React from 'react';
import { Building2, Mail, Phone, Users, Award, MapPin, Globe } from 'lucide-react';
import { StarRating } from '../../components/StarRating';

export function ArchitectProfile() {
  const firm = {
    name: 'Studio Moderna',
    logo: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=200&h=200',
    description: 'Award-winning architecture firm specializing in sustainable urban development and innovative residential projects.',
    location: 'Lagos, Nigeria',
    established: 2010,
    teamSize: 45,
    projects: [
      {
        title: 'Eco Heights',
        type: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=500'
      },
      {
        title: 'Urban Office Hub',
        type: 'Commercial',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&h=500'
      }
    ],
    services: [
      'Architectural Design',
      'Urban Planning',
      'Interior Design',
      'Sustainable Architecture',
      'Project Management'
    ],
    certifications: ['LEED', 'BREEAM'],
    awards: [
      { title: 'Excellence in Design', year: 2023 },
      { title: 'Sustainable Project of the Year', year: 2022 }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src={firm.logo}
            alt={firm.name}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{firm.name}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {firm.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {firm.teamSize} team members
                  </div>
                </div>
              </div>
              <StarRating rating={4.8} showCount count={156} />
            </div>
            <p className="text-gray-600 mb-4">{firm.description}</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                Edit Profile
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Preview Public View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Portfolio */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {firm.projects.map((project) => (
                <div key={project.title} className="group relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <div className="grid grid-cols-2 gap-4">
              {firm.services.map((service) => (
                <div key={service} className="flex items-center">
                  <Building2 className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Awards & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Awards</h3>
                <div className="space-y-2">
                  {firm.awards.map((award) => (
                    <div key={award.title} className="flex items-center">
                      <Award className="w-5 h-5 text-emerald-600 mr-2" />
                      <span>{award.title} ({award.year})</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Certifications</h3>
                <div className="space-y-2">
                  {firm.certifications.map((cert) => (
                    <div key={cert} className="flex items-center">
                      <Award className="w-5 h-5 text-emerald-600 mr-2" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <span>contact@studiomoderna.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-600 mr-3" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-600 mr-3" />
                <span>www.studiomoderna.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}