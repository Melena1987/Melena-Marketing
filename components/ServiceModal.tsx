
import React, { useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { SERVICES_STRUCTURE } from '../constants';

interface ServiceModalProps {
  serviceId: string;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose }) => {
  const t = useTranslations();
  const title = t.services[serviceId];
  const description = t.services_descriptions[serviceId];
  const serviceConfig = SERVICES_STRUCTURE.find(s => s.id === serviceId);

  // Effect to close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const whatsappText = encodeURIComponent(t.service_modal_whatsapp_text.replace('{service}', title));
  const whatsappUrl = `https://api.whatsapp.com/send?phone=34660532823&text=${whatsappText}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      style={{ animationDuration: '0.3s', animationFillMode: 'forwards', opacity: 0 }}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto p-6 relative transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-8">
            <h3 id="service-modal-title" className="text-2xl font-bold text-blue-800" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {title}
            </h3>
            {serviceConfig?.isFree && (
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">GRATIS</span>
            )}
        </div>

        {/* Modal Body */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Modal Footer */}
        <div className="flex flex-col gap-3">
            {serviceConfig?.externalUrl && (
              <a
                href={serviceConfig.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center bg-blue-800 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition duration-300 transform hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                {t.service_modal_external_cta || 'Visitar Herramienta'}
              </a>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-full justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.84 3.08 1.32 4.79 1.32 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.04 3.64c4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24-1.54 0-3.03-.42-4.31-1.22l-.3-.18-3.21.84.86-3.12-.2-.32c-.86-1.31-1.32-2.83-1.32-4.41 0-4.54 3.7-8.24 8.24-8.24m-2.12 4.2c-.22 0-.44.02-.64.06-.2.04-.46.22-.68.46-.22.24-.76.76-.76 1.83 0 1.07.78 2.11.89 2.26.11.15 1.54 2.45 3.79 3.32.55.23 1 .37 1.35.47.35.1.66.09.9-.06.24-.15 1.03-.42 1.18-.83.15-.41.15-.76.1-.83-.05-.07-.18-.11-.38-.21s-1.17-.58-1.35-.64c-.18-.07-.31-.07-.44.07s-.51.64-.63.76c-.12.13-.23.14-.44.05-.2-.1-.84-.31-1.59-1-.59-.52-1-1.17-1.11-1.37s-.01-.31.07-.41c.08-.08.18-.22.27-.32.1-.11.13-.18.2-.31.06-.13.03-.24-.01-.32-.05-.08-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.34" />
              </svg>
              {t.service_modal_cta}
            </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
