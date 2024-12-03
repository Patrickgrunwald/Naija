export interface ArchitectureFirm {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  logo: string;
  profile: string;
  specializations: string[];
  location: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  projects: Project[];
  teamSize: number;
  certifications: string[];
  awards: Award[];
  budgetRange: {
    min: number;
    max: number;
  };
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  portfolioUrl?: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  projectId?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  date: string;
  read: boolean;
  type: 'inquiry' | 'response' | 'system';
}

export interface UserSettings {
  id: string;
  email: string;
  name: string;
  notifications: {
    email: boolean;
    messages: boolean;
    reviews: boolean;
    newsletter: boolean;
  };
  favorites: string[];
  theme: 'light' | 'dark';
  language: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  images: string[];
  year: number;
  budget: number;
  location: string;
}

export interface Award {
  title: string;
  year: number;
  organization: string;
}

export type ProjectType = 'residential' | 'commercial' | 'public' | 'industrial' | 'cultural';

export interface FilterState {
  projectType: ProjectType | '';
  region: string;
  city: string;
  postcode: string;
  teamSize: string;
  budgetRange: string;
  certifications: string[];
}