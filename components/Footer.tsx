
import React from 'react';
import SocialIcons from './SocialIcons';
import { useTranslations } from '../hooks/useTranslations';

const Footer: React.FC = () => {
  const t = useTranslations();
  return (
    <footer className="bg-blue-800 text-blue-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Melena.</h3>
            <p className="text-yellow-400 text-sm">MARKETING COMPANY</p>
            <p className="mt-2 text-sm">{t.header_slogan}</p>
          </div>
          <div className="mb-6 md:mb-0 text-center">
            <p>&copy; {new Date().getFullYear()} {t.footer_copyright}</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 justify-center md:justify-start">
              <a href="/terminos-y-condiciones" className="text-sm hover:text-white underline">{t.footer_terms}</a>
              <a href="/terminos-y-condiciones#privacy-policy" className="text-sm hover:text-white underline">{t.footer_privacy_policy}</a>
              <a href="/presentacion-corporativa" className="text-sm font-bold text-yellow-400 hover:text-white underline">Descargar Portfolio (PDF)</a>
            </div>
          </div>
          <div>
            <SocialIcons variant="light" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
