import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import CookieConsent from './components/CookieConsent';
import EnergyPage from './pages/EnergyPage';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    // This function will be called when the user clicks the back/forward buttons.
    const onLocationChange = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    
    // This function will handle clicks on all <a> tags to enable client-side routing
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Find the closest <a> tag
      const anchor = target.closest('a');
      
      if (!anchor) {
        return;
      }

      // Let browser handle special cases like new tabs, external links, etc.
      if (
        anchor.target === '_blank' ||
        anchor.rel === 'noopener noreferrer' ||
        event.metaKey || 
        event.ctrlKey || 
        event.button !== 0
      ) {
        return;
      }

      const url = new URL(anchor.href);
      
      // Let browser handle external links and special protocols
      if (url.origin !== window.location.origin || url.protocol === 'mailto:' || url.protocol === 'tel:') {
        return;
      }
      
      event.preventDefault();
      
      // If path is different, push to history and update state to navigate.
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        window.history.pushState({}, '', anchor.href);
        onLocationChange();
      } else { // If path is the same, we handle scrolling.
        if (url.hash) {
          // If there is a hash, scroll to that element.
          const element = document.getElementById(url.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', anchor.href);
          }
        } else {
          // If there is no hash, scroll to the top of the page.
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // Also remove any existing hash from the URL
          window.history.replaceState(null, '', url.pathname + url.search);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Clean up the event listeners when the component unmounts.
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    switch (pathname) {
      case '/terminos-y-condiciones':
        // The privacy policy is a hash on this page, so it should render the same component
        return <LegalPage />;
      case '/gestion-de-tu-factura-energetica':
        return <EnergyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;