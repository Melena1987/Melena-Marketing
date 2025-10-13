import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  const path = window.location.pathname;

  const renderPage = () => {
    switch (path) {
      case '/terminos-y-condiciones':
        return <LegalPage type="terms" />;
      case '/politica-de-privacidad':
        return <LegalPage type="privacy" />;
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
    </div>
  );
};

export default App;