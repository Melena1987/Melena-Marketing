import React from 'react';

export interface Service {
  title: string;
  color: 'blue' | 'yellow';
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

export interface SocialLink {
  name: string;
  // Fix: Replaced JSX.Element with React.ReactNode to resolve issues with JSX namespace resolution.
  icon: React.ReactNode;
  href: string;
}
