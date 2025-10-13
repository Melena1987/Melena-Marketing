
import { Service, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  { title: 'DISEÑO GRÁFICO', color: 'blue' },
  { title: 'PÁGINA WEB', color: 'yellow' },
  { title: 'GESTIÓN DE GOOGLE', color: 'blue' },
  { title: 'REDES SOCIALES', color: 'yellow' },
  { title: 'LOGOTIPO Y MARCA', color: 'yellow' },
  { title: 'EMAILS CORPORATIVOS', color: 'blue' },
  { title: 'PUBLICIDAD ONLINE', color: 'yellow' },
  { title: 'TRADUCCIONES INGLÉS ESPAÑOL RUSO', color: 'blue' },
  { title: 'ARTÍCULOS DE PRENSA', color: 'blue' },
  { title: 'TIENDA ONLINE', color: 'yellow' },
  { title: 'DISEÑOS DE CARTELERÍA', color: 'blue' },
  { title: 'TARJETAS DE VISITA INTELIGENTES', color: 'yellow' },
  { title: 'SESIONES FOTOGRÁFICAS', color: 'blue' },
  { title: 'VIDEO REPORTAJES', color: 'yellow' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Melena Marketing transformó nuestra presencia online. Su enfoque en PYMES es justo lo que necesitábamos. ¡Los resultados hablan por sí solos!",
        author: "Ana García",
        company: "CEO de Tienda Local"
    },
    {
        quote: "El equipo es increíblemente profesional y cercano. Entendieron nuestras necesidades desde el primer día y nos guiaron en cada paso del proceso.",
        author: "Carlos Pérez",
        company: "Fundador de Café del Sol"
    },
    {
        quote: "Gracias a su gestión de redes sociales y publicidad, hemos visto un aumento significativo en nuestras ventas. Totalmente recomendados.",
        author: "Lucía Fernández",
        company: "Gerente de Boutique Chic"
    }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '5 Consejos de SEO Local para Tiendas en Málaga',
    excerpt: 'Atrae a más clientes de tu zona optimizando tu presencia en búsquedas locales. Te mostramos cómo empezar hoy mismo.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: '#',
  },
  {
    title: 'Cómo Usar Instagram para tu Restaurante y Llenar Mesas',
    excerpt: 'Descubre estrategias visuales y de contenido para convertir seguidores en comensales fieles para tu negocio de hostelería.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: '#',
  },
  {
    title: 'La Importancia de un Logotipo Profesional para tu PYME',
    excerpt: 'Tu marca es más que un nombre. Analizamos por qué una identidad visual sólida es una inversión crucial para el éxito.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: '#',
  },
];

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contacto', href: '#contacto' },
];
