import React, { useState } from 'react';
import { SERVICES_STRUCTURE } from '../constants';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { useTranslations } from '../hooks/useTranslations';

const Services: React.FC = () => {
  const t = useTranslations();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleCardClick = (serviceId: string) => {
    if (serviceId === 'energy_management') {
      const path = '/gestion-de-tu-factura-energetica';
      if (path !== window.location.pathname) {
        window.history.pushState({}, '', path);
        // Dispatch popstate event to trigger the router in App.tsx
        window.dispatchEvent(new PopStateEvent('popstate'));
        // Scroll to top of the new page
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      setSelectedServiceId(serviceId);
    }
  };

  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };


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
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(service.id)}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              role="button"
              tabIndex={0}
              aria-label={`Más información sobre ${t.services[service.id]}`}
            >
              <ServiceCard service={service} title={t.services[service.id]} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedServiceId && (
        <ServiceModal serviceId={selectedServiceId} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Services;