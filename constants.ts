import { Service } from './types';

// The text 'title' is now handled by the translation file. We use an 'id' for mapping.
export const SERVICES_STRUCTURE: Omit<Service, 'title'>[] = [
  { id: 'graphic_design', color: 'blue' },
  { id: 'web_page', color: 'yellow' },
  { id: 'google_management', color: 'blue' },
  { id: 'social_media', color: 'yellow' },
  { id: 'logo_brand', color: 'blue' },
  { id: 'corp_emails', color: 'yellow' },
  { id: 'online_ads', color: 'blue' },
  { id: 'translations', color: 'yellow' },
  { id: 'press_articles', color: 'blue' },
  { id: 'online_store', color: 'yellow' },
  { id: 'signage_design', color: 'blue' },
  { id: 'smart_cards', color: 'yellow' },
  { id: 'photo_sessions', color: 'blue' },
  { id: 'video_reports', color: 'yellow' },
  { id: 'energy_management', color: 'blue' },
];

// Text content for these is now in i18n/translations.ts
export const TESTIMONIALS_KEYS = ['testimonial1', 'testimonial2', 'testimonial3'];

// Text content is in i18n/translations.ts, images are kept here.
export const BLOG_POSTS_STRUCTURE = [
  {
    id: 'blog1',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: '#',
  },
  {
    id: 'blog2',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: '#',
  },
  {
    id: 'blog3',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: '#',
  },
];


// Navigation links text is now handled by the translation file.
export const NAV_LINKS_STRUCTURE = [
  { key: 'home', href: '/' },
  { key: 'services', href: '#servicios' },
  { key: 'about', href: '#sobre-nosotros' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contacto' },
];