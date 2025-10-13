import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import CookieConsent from './components/CookieConsent';

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
      
      // If path is different, push to history and update state.
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        window.history.pushState({}, '', anchor.href);
        onLocationChange();
      } else if (url.hash !== window.location.hash) {
        // If only hash is different, scroll to it and update URL hash.
        const element = document.getElementById(url.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Use replaceState for hash changes to not clutter browser history
        window.history.replaceState(null, '', anchor.href);
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