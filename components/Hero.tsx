
import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const heroBgUrl = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop';

const Hero: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This observer is for the text content fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-cover bg-center bg-fixed text-white py-20 lg:py-32"
      style={{ backgroundImage: `url(${heroBgUrl})` }}
      aria-label={t.hero_title}
    >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-blue-800/80 z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
                <span className="text-base md:text-lg text-yellow-400 tracking-widest font-semibold leading-none">MARKETING COMPANY</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-wider leading-tight">
              {t.hero_title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white">
              {t.hero_subtitle}
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-blue-100">
              {t.hero_description}
            </p>
            <div className="mt-10">
              <a
                href="#contacto"
                className="bg-yellow-400 text-blue-800 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                {t.hero_cta}
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;