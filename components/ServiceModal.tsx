import React, { useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface ServiceModalProps {
  serviceId: string;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose }) => {
  const t = useTranslations();
  const title = t.services[serviceId];
  const description = t.services_descriptions[serviceId];

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
        <h3 id="service-modal-title" className="text-2xl font-bold text-blue-800 mb-4 pr-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {title}
        </h3>

        {/* Modal Body */}
        <p className="text-gray-600 mb-6">
          {description}
        </p>

        {/* Modal Footer */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 w-full justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <g transform="scale(1.1) translate(-1.2, -1.2)">
              <path d="M16.6 14.2c-.3-.2-1.8-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-1-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6s.3-.4.4-.5c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.2 4.9 4.3.6.3 1.2.4 1.6.5.6.1 1.1.1 1.5-.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z M12.1 2.1C6.6 2.1 2.2 6.5 2.2 12c0 1.8.5 3.5 1.4 5l-1.5 5.3 5.5-1.4c1.4.9 3 1.3 4.7 1.3h.1c5.5 0 9.9-4.4 9.9-9.9s-4.4-9.8-9.9-9.8zM12.1 20.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.2.8.8-3.1-.2-.3c-.8-1.3-1.2-2.8-1.2-4.4 0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4 1.6 1.5 2.4 3.6 2.4 5.8.1 4.5-3.6 8.2-8.1 8.2z"/>
            </g>
          </svg>
          {t.service_modal_cta}
        </a>
      </div>
    </div>
  );
};

export default ServiceModal;