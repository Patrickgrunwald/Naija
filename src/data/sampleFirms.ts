import type { ArchitectureFirm } from '../types';

export const sampleFirms: ArchitectureFirm[] = [
  {
    id: '1',
    name: 'Studio Moderna',
    logo: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=100&h=100',
    profile: 'Award-winning architecture firm specializing in sustainable urban development and innovative residential projects. Our approach combines modern aesthetics with environmental responsibility.',
    specializations: ['Sustainable Architecture', 'Urban Planning', 'Residential', 'Commercial'],
    location: {
      city: 'Berlin',
      country: 'Germany',
      coordinates: [52.520008, 13.404954],
    },
    projects: [
      {
        id: 'p1',
        title: 'Eco Heights',
        type: 'residential',
        description: 'Sustainable apartment complex with integrated green spaces',
        images: [
          'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&h=500',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=500',
        ],
        year: 2022,
        budget: 15000000,
        location: 'Berlin',
      },
      {
        id: 'p2',
        title: 'Urban Office Hub',
        type: 'commercial',
        description: 'Modern office complex with focus on employee wellbeing',
        images: [
          'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&h=500',
        ],
        year: 2021,
        budget: 25000000,
        location: 'Hamburg',
      },
    ],
    teamSize: 45,
    certifications: ['LEED', 'DGNB'],
    awards: [
      {
        title: 'German Design Award',
        year: 2022,
        organization: 'German Design Council',
      },
      {
        title: 'European Green Building Award',
        year: 2021,
        organization: 'EU Green Building Initiative',
      },
    ],
    budgetRange: {
      min: 5000000,
      max: 30000000,
    },
    contactInfo: {
      email: 'contact@studiomoderna.com',
      phone: '+49 30 1234567',
      website: 'https://studiomoderna.com',
    },
    portfolioUrl: '/portfolios/studio-moderna-2023.pdf',
  },
  {
    id: '2',
    name: 'Nordic Spaces',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&h=100',
    profile: 'Leading Scandinavian architecture practice known for minimalist design and functional spaces. We create harmonious environments that reflect the Nordic design tradition.',
    specializations: ['Minimalist Design', 'Cultural Buildings', 'Interior Architecture'],
    location: {
      city: 'Copenhagen',
      country: 'Denmark',
      coordinates: [55.676098, 12.568337],
    },
    projects: [
      {
        id: 'p3',
        title: 'Cultural Center Nord',
        type: 'cultural',
        description: 'Contemporary cultural center with flexible exhibition spaces',
        images: [
          'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500',
        ],
        year: 2023,
        budget: 18000000,
        location: 'Copenhagen',
      },
    ],
    teamSize: 28,
    certifications: ['BREEAM', 'PassivHaus'],
    awards: [
      {
        title: 'Danish Design Award',
        year: 2023,
        organization: 'Danish Design Center',
      },
    ],
    budgetRange: {
      min: 3000000,
      max: 20000000,
    },
    contactInfo: {
      email: 'info@nordicspaces.dk',
      phone: '+45 1234567',
      website: 'https://nordicspaces.dk',
    },
  },
  {
    id: '3',
    name: 'Future Build Associates',
    logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=100&h=100',
    profile: 'Innovation-driven architecture firm specializing in smart buildings and sustainable urban development. Pioneers in integrating technology with architectural design.',
    specializations: ['Smart Buildings', 'Sustainable Design', 'Urban Innovation'],
    location: {
      city: 'Amsterdam',
      country: 'Netherlands',
      coordinates: [52.370216, 4.895168],
    },
    projects: [
      {
        id: 'p4',
        title: 'Smart City Hub',
        type: 'public',
        description: 'Mixed-use development with integrated smart technology',
        images: [
          'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&h=500',
          'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&h=500',
        ],
        year: 2023,
        budget: 45000000,
        location: 'Amsterdam',
      },
    ],
    teamSize: 75,
    certifications: ['LEED', 'BREEAM', 'DGNB'],
    awards: [
      {
        title: 'European Architecture Award',
        year: 2023,
        organization: 'European Union of Architects',
      },
      {
        title: 'Innovation in Architecture',
        year: 2022,
        organization: 'World Architecture Festival',
      },
    ],
    budgetRange: {
      min: 10000000,
      max: 50000000,
    },
    contactInfo: {
      email: 'contact@futurebuild.nl',
      phone: '+31 20 1234567',
      website: 'https://futurebuild.nl',
    },
    portfolioUrl: '/portfolios/futurebuild-2023.pdf',
  },
];