
import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const optimizeImageUrl = (url: string, width: number = 400, quality: number = 80): string => {
    const proxyUrl = 'https://images.weserv.nl/';
    const encodedUrl = encodeURIComponent(url);
    return `${proxyUrl}?url=${encodedUrl}&w=${width}&q=${quality}&output=jpg`;
};


const ProjectCard: React.FC<{ 
    title: string; 
    description: string; 
    imageUrl: string; 
    href?: string;
    objectPosition?: string;
}> = ({ title, description, imageUrl, href, objectPosition = 'object-center' }) => {
    const cardContent = (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transform hover:-translate-y-2 transition-transform duration-300">
            <div className="overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title} 
                className={`w-full h-48 ${objectPosition} object-cover bg-gray-200 transform group-hover:scale-110 transition-transform duration-500`} 
                loading="lazy" 
                width="288" 
                height="192"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-800 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{title}</h3>
                <p className="text-gray-700 text-sm flex-grow">{description}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {cardContent}
            </a>
        );
    }
    
    return cardContent;
};

const Testimonials: React.FC = () => {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const originalProjectImages = [
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1759258933122_idP_MARBELLA-116.jpg?alt=media&token=d1f9faf0-f992-49b4-b572-cac41ad9e7a3',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760372783660_ATALAYA-263.jpg?alt=media&token=ed30545d-d387-4330-abfc-fa67e97c7ab9',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757279516770_COPA-144.jpg?alt=media&token=cad899d1-3ef2-4b32-9644-b127058bfd37',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1758464596036_DSC_8149.JPG?alt=media&token=e4a6919b-2261-4d42-b558-65e1e230aae4',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_1.jpg?alt=media&token=41a8229a-907d-42c5-9652-608fbba59b73',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764058889805_dron-7_400x400.jpg?alt=media&token=b9826791-08fe-4119-8d40-e07daa9de4a5',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12_400x400.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764344002071_noe_masia_sport.jpeg?alt=media&token=1c1ce43f-93cc-4f90-b48f-ae33234934d3'
  ];

  const projectImages = originalProjectImages.map(url => optimizeImageUrl(url));

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 bg-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.projects_title}</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
            {t.projects_subtitle}
          </p>
        </div>

        {/* Swipeable Container on Mobile, Grid on Desktop */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
          >
            {t.projects_list.map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-auto snap-center"
              >
                <ProjectCard 
                  title={project.title} 
                  description={project.description} 
                  imageUrl={projectImages[index]}
                  href={project.link}
                  objectPosition={project.title.toLowerCase().includes('noe') ? 'object-top' : 'object-center'}
                />
              </div>
            ))}
          </div>

          {/* Visual Indicators (Dots) - Only visible on Mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {t.projects_list.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 bg-yellow-400' : 'w-2 bg-blue-400'}`}
              />
            ))}
          </div>
          
          {/* Swipe Hint Overlay on Mobile (Fades out after scroll) */}
          {activeIndex === 0 && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden pointer-events-none animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;