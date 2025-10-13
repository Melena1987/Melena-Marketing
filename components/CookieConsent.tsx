import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    // Check if the user has already given consent.
    // We wrap this in a try-catch block for environments where localStorage might not be available.
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        // If no consent is found in localStorage, show the banner.
        setIsVisible(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      // If localStorage is not available, we might still want to show the banner,
      // though consent persistence won't work.
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      // When the user accepts, store the consent in localStorage.
      localStorage.setItem('cookie_consent', 'true');
    } catch (error) {
      console.error("Could not write to localStorage:", error);
    }
    // Hide the banner with a smooth transition.
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="container mx-auto max-w-4xl bg-blue-900/95 backdrop-blur-sm text-white rounded-lg shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-100 text-center sm:text-left">
          {t.cookie_message}{' '}
          <a href="/terminos-y-condiciones#privacy-policy" className="underline hover:text-yellow-300 transition-colors">
            {t.cookie_learn_more}
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          {t.cookie_accept}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
