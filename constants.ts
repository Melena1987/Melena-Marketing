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
    slug: '5-consejos-seo-local-malaga',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'blog2',
    slug: 'como-usar-instagram-para-restaurante',
    imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'blog3',
    slug: 'importancia-logotipo-profesional-pyme',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: 'blog4',
    slug: 'como-editar-roles-pagina-facebook',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'blog5',
    slug: 'ahorra-factura-energetica-servicio-gratuito',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1759772038064_vertical-shot-wooden-fence-with-high-rocky-cliffs-funes-valley-st-italy.jpg?alt=media&token=e34414f0-563b-4367-bebb-2a2e2a3b9e2f',
  },
];


// Navigation links text is now handled by the translation file.
export const NAV_LINKS_STRUCTURE = [
  { key: 'home', href: '/' },
  { key: 'services', href: '#servicios' },
  { key: 'about', href: '#sobre-nosotros' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '#contacto' },
];