
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PartnerSection from '../components/PartnerSection';
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
  const t = useTranslations();

  useEffect(() => {
    // SEO: Title and structured data
    document.title = `Melena Marketing | ${t.hero_title} en el Mundo Digital`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://melenamarketing.com/",
      "name": `Melena Marketing | ${t.hero_title} en el Mundo Digital`,
      "description": t.hero_description,
      "publisher": {
        "@type": "Organization",
        "name": "Melena Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://melenamarketing.com/favicon.svg"
        }
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Melena Marketing",
        "url": "https://melenamarketing.com/",
        "logo": "https://melenamarketing.com/favicon.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-660-532-823",
          "contactType": "customer service",
          "email": "info@melenamarketing.com",
          "areaServed": "ES",
          "availableLanguage": ["es", "en", "ru"]
        },
        "sameAs": [
          "https://www.facebook.com/Melena-100210731713512",
          "https://www.instagram.com/manu.melenamarketing/",
          "https://x.com/Manolo_Ele",
          "https://tevienes.com/es/u/melena-marketing"
        ]
      }
    };

    // Fix: Cast the element to HTMLScriptElement to allow accessing the 'type' property.
    let script = document.getElementById('seo-schema') as HTMLScriptElement | null;
    if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'seo-schema';
        document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema);
    
    // Hash scrolling logic
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => {
      const scriptToRemove = document.getElementById('seo-schema');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [t]);

  return (
    <div className="pt-24">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <PartnerSection />
      <BlogPreview />
      <EnergyPromo />
      <Contact />
      <CollaborationCTA />
    </div>
  );
};

export default HomePage;
