export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'tableros' | 'industrial' | 'residencial' | 'iluminacion' | 'cargadores-ve' | 'todos';
  categoryLabel: string;
  description: string;
  specs: string[];
  imageUrl: string;
  clientType: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  projectType: string;
  avatarUrl?: string;
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  text: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  urgency: 'normal' | 'alta' | 'urgencia-24h';
  message: string;
}
