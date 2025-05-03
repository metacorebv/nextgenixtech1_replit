// Content Types
export interface Testimonial {
  metric: string;
  title: string;
  description: string;
  image: string;
  name: string;
  position: string;
  company: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Industry {
  id: string;
  title: string;
  image: string;
  headline: string;
  description: string;
  cta: string;
}

export interface Resource {
  id: string;
  image: string;
  categories: string[];
  title: string;
  description: string;
  date: string;
  type: "article" | "whitepaper" | "case-study";
  url?: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

export interface Solution {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  metric: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Admin Types
export interface LandingPage {
  id: string;
  title: string;
  slug: string;
  headline: string;
  subheadline: string;
  image: string;
  content: any; // This would typically be structured content
  createdAt: string;
  updatedAt: string;
}

export interface ResourceFilter {
  id: string;
  label: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Website Configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Navigation
export interface NavItem {
  text: string;
  href: string;
  dropdown?: NavItem[];
}
