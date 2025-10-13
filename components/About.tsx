import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Logo: React.FC = () => (
    <div className="flex flex-col items-center px-4 py-2">
      <span className="text-3xl font-bold text-blue-800 leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
      <span className="text-xs text-yellow-500 tracking-widest font-semibold leading-none">MARKETING COMPANY</span>
    </div>
);

// Using pre-cutout image placeholders for a clean look, mimicking the screenshot.
const womanImageUrl = 'https://i.ibb.co/68v8z50/founder-woman-cutout.png';
const manImageUrl = 'https://i.ibb.co/d2FFVtk/founder-man-cutout.png';


const About: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="sobre-nosotros" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visuals */}
          <div className="flex flex-col items-center text-center">
            <h2 
              className="title-lined text-7xl md:text-8xl font-extrabold text-blue-800 uppercase mb-10" 
              style={{fontFamily: "'Oswald', sans-serif", lineHeight: '1'}}
            >
              {t.about_title}
            </h2>
            <div className="relative w-full max-w-lg h-64 md:h-80 mt-8">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 z-10 bg-white rounded-full shadow-xl border-2 border-blue-200"
                style={{
                  clipPath: 'ellipse(50% 40% at 50% 50%)'
                }}
              >
                  <Logo />
              </div>
              
              <div className="absolute bottom-0 left-0 w-[45%] h-full">
                  <img src={womanImageUrl} alt={t.about_founder_alt_female} className="w-full h-full object-contain object-bottom" />
              </div>
              <div className="absolute bottom-0 right-0 w-[45%] h-full">
                  <img src={manImageUrl} alt={t.about_founder_alt_male} className="w-full h-full object-contain object-bottom" />
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6 text-gray-700 md:text-lg leading-relaxed">
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