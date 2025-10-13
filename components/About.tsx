import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const aboutBgUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop';

const About: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Observe only once
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the element is visible
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
    <section ref={sectionRef} id="sobre-nosotros" className="relative py-24 md:py-32 bg-blue-800 overflow-hidden">
      {/* Background Image & Overlay with Reveal Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url(${aboutBgUrl})`,
            animation: isVisible ? 'reveal-bg 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <h2 
            className="text-5xl md:text-7xl font-extrabold text-white uppercase mb-10" 
            style={{fontFamily: "'Oswald', sans-serif"}}
          >
            {t.about_title}
          </h2>
          <div className="space-y-6 text-blue-100 md:text-lg leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about_p3 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
