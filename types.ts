
export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string;
  description: string;
  image: string;
  type: 'raw' | 'oem';
}

export interface ServiceStep {
  title: string;
  description: string;
  enDescription?: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Case {
  id: string | number;
  title: string;
  category: string;
  image: string;
  date: string;
  excerpt: string;
  content?: string[]; // Paragraphs for detailed view
  features?: string[]; // Optional additional features list
  result?: string; // Optional result description
}

export interface SolutionFeature {
  title: string;
  items: string[];
  flavors: string[];
  image: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: SolutionFeature[];
  bannerVideo: string;
}

export interface CatalogProduct {
  id: string;
  title: string;
  description: string;
  features: string;
  ingredients: string;
  usage: string;
  mainImage: string;
  edmImage: string;
}
