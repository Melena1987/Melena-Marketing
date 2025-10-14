import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import { useTranslations } from '../hooks/useTranslations';

const EnergyPromo: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 uppercase mb-4" style={{fontFamily: "'Oswald', sans-serif"}}>
          {t.energy_promo_title}
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          {t.energy_promo_description}
        </p>
        <a
          href="/gestion-de-tu-factura-energetica"
          className="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          {t.energy_promo_cta}
        </a>
      </div>
    </section>
  );
};

const CollaborationCTA: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-medium text-gray-800 mb-4">
          {t.collaboration_title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {t.collaboration_subtitle}
        </p>
        <a
          href="https://forms.gle/MCo8bGSLaMTzSukV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-800 font-medium py-3 px-10 rounded-full text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          {t.collaboration_cta}
        </a>
      </div>
    </section>
  );
}

const HomePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // A timeout ensures the element is rendered and ready before scrolling.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-24">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogPreview />
      <EnergyPromo />
      <Contact />
      <CollaborationCTA />
    </div>
  );
};

export default HomePage;