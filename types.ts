import React from 'react';

export interface Service {
  id: string;
  title: string;
  color: 'blue' | 'yellow';
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}