export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  codeUrl?: string;
  caseStudyUrl?: string;
  tags: string[];
  features?: string[];
  challenges?: string;
  solutions?: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string; // lucide icon name
  skills: string[];
}

export interface Service {
  id: string;
  name: string;
  icon: string; // lucide icon name
  description: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}
