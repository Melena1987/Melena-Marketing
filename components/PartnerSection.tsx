import React, { useState, useRef } from 'react';
import { PARTNERS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const PartnerCard: React.FC<{ 
  id: string; 
  name: string; 
  description: string; 
  url: string;
  isActive: boolean;
  isFree?: boolean;
  onToggle: (e: React.MouseEvent) => void;
}> = ({ id, name, description, url, isActive, isFree, onToggle }) => {
  return (
    <a 
      href={url} 
      onClick={onToggle}
      target={url.startsWith('http') ? "_blank" : "_self"}
      rel={url.startsWith('http') ? "noopener noreferrer" : ""}
      className={`group relative block bg-white border border-gray-100 p-10 text-center transition-all duration-700 hover:shadow-2xl overflow-hidden h-full flex flex-col items-center justify-center ${isActive ? 'shadow-2xl' : ''}`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-yellow-400 transform transition-transform duration-700 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></div>
      
      {isFree && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-red-600 text-white text-[10px] font-bold px-4 py-1 transform rotate-45 translate-x-4 translate-y-1 shadow-md">
            GRATIS
          </div>
        </div>
      )}

      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-[0.08]' : 'opacity-[0.03] group-hover:opacity-[0.08]'}`}>
        <span className="text-8xl font-black uppercase tracking-tighter select-none">
          {name.split(' ')[0]}
        </span>
      </div>

      <div className={`relative z-10 transition-transform duration-500 ${isActive ? '-translate-y-2' : 'group-hover:-translate-y-2'}`}>
        <h3 
          className={`text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight transition-all duration-500 ${isActive ? 'text-blue-700' : 'text-blue-900 group-hover:text-blue-700'}`}
          style={{ 
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: '-0.02em'
          }}
        >
          {name}
        </h3>
      </div>

      <div className={`relative z-10 transition-all duration-700 ease-in-out overflow-hidden ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4'}`}>
        <p className="text-sm text-gray-500 italic leading-relaxed px-2">
          {description}
        </p>
      </div>

      <div className="mt-6 relative w-12 h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className={`absolute inset-0 bg-yellow-400 transform transition-transform duration-500 ${isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></div>
      </div>
      
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-0.5 bg-yellow-400 transition-all duration-700 delay-100 ${isActive ? 'h-1/2' : 'h-0 group-hover:h-1/2'}`}></div>
    </a>
  );
};

const PartnerSection: React.FC = () => {
  const t = useTranslations();
  const [activePartnerId, setActivePartnerId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePartnerToggle = (id: string, e: React.MouseEvent) => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice && activePartnerId !== id) {
      e.preventDefault();
      setActivePartnerId(id);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Networking</span>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t.group_services_title}
          </h2>
          <div className="h-1.5 bg-yellow-400 w-20 mx-auto mt-6 mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t.group_services_subtitle}
          </p>
        </div>

        <div className="relative">
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
            >
            {PARTNERS_STRUCTURE.map((partner) => (
                <div key={partner.id} className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-auto snap-center animate-fade-in-up">
                <PartnerCard 
                    id={partner.id}
                    name={t.partners[partner.id]?.name}
                    description={t.partners[partner.id]?.description}
                    url={partner.url}
                    isFree={(partner as any).isFree}
                    isActive={activePartnerId === partner.id}
                    onToggle={(e) => handlePartnerToggle(partner.id, e)}
                />
                </div>
            ))}
            </div>

            {/* Pagination Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-2 md:hidden">
                {PARTNERS_STRUCTURE.map((_, index) => (
                <div 
                    key={index}
                    className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 bg-yellow-400' : 'w-2 bg-gray-200'}`}
                />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;