
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
  { id: 'pdf_flipbook', color: 'yellow', isFree: true, externalUrl: 'https://revistapdf.com' },
  { id: 'translations', color: 'blue' },
  { id: 'press_articles', color: 'yellow' },
  { id: 'online_store', color: 'blue' },
  { id: 'signage_design', color: 'yellow' },
  { id: 'smart_cards', color: 'blue' },
  { id: 'photo_sessions', color: 'yellow' },
  { id: 'video_reports', color: 'blue' },
];

export const PARTNERS_STRUCTURE = [
  { 
    id: 'az_juridicos', 
    url: 'https://www.azjuridicos.es/', 
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'tramisur', 
    url: 'https://tramisur.netlify.app/', 
    imageUrl: 'https://images.unsplash.com/photo-1554224155-169641357599?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'beta_asesores', 
    url: 'https://betaasesores.es/', 
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'energy_group', 
    url: '/gestion-de-tu-factura-energetica', 
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=200&auto=format&fit=crop',
    isFree: true
  },
  { 
    id: 'the_embassy', 
    url: 'https://www.theembassytc.com/', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_1.jpg?alt=media&token=41a8229a-907d-42c5-9652-608fbba59b73' 
  },
  { 
    id: 'irina_teacher', 
    url: 'https://www.irinateacher.com/', 
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'noe_masia', 
    url: 'https://www.noemasia.com/', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764344002071_noe_masia_sport.jpeg?alt=media&token=1c1ce43f-93cc-4f90-b48f-ae33234934d3' 
  },
  { 
    id: 'best_ai', 
    url: 'https://www.bestai.es/', 
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'aedificia_nobile', 
    url: 'https://www.aedificianobile.com/', 
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'racket_monteros', 
    url: 'https://www.racketmonteros.com/', 
    imageUrl: 'https://images.unsplash.com/photo-1595435064212-c48482bc8c05?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'showtime_experience', 
    url: 'https://www.showtimeexperience.com/', 
    imageUrl: 'https://images.unsplash.com/photo-1461896715004-9475947b73bb?q=80&w=200&auto=format&fit=crop' 
  },
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
  {
    id: 'blog6',
    slug: 'como-configurar-email-corporativo-hostinger',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/Jq4dWecMBJANS7xpBbv35j-970-80.jpg',
  }
];


// Navigation links text is now handled by the translation file.
export const NAV_LINKS_STRUCTURE = [
  { key: 'home', href: '/' },
  { key: 'services', href: '#servicios' },
  { key: 'about', href: '#sobre-nosotros' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '#contacto' },
];
