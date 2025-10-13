import React from 'react';
import { SERVICES_STRUCTURE } from '../constants';
import ServiceCard from './ServiceCard';
import { useTranslations } from '../hooks/useTranslations';

const Services: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-blue-800 uppercase" style={{fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em' }}>
                {t.services_title}
            </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t.services_subtitle }} />
          <div className="inline-block mt-1">
              <div className="h-1 bg-yellow-400 w-32"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 max-w-7xl mx-auto">
          {SERVICES_STRUCTURE.map((service) => (
            <ServiceCard key={service.id} service={service} title={t.services[service.id]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;