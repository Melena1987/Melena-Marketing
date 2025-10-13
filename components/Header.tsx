import React, { useState } from 'react';
import { NAV_LINKS_STRUCTURE } from '../constants';
import SocialIcons from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const languages = [
        { code: 'es', flag: 'https://flagcdn.com/es.svg', alt: 'Español' },
        { code: 'en', flag: 'https://flagcdn.com/gb.svg', alt: 'English' },
        { code: 'ru', flag: 'https://flagcdn.com/ru.svg', alt: 'Русский' },
    ];

    return (
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm shadow-md rounded-full px-3 py-1.5">
            {languages.map(lang => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'es' | 'en' | 'ru')}
                    className={`transition-opacity duration-300 ${language === lang.code ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                    <img src={lang.flag} width="24" alt={lang.alt} />
                </button>
            ))}
        </div>
    );
};

const Logo: React.FC = () => (
  <div className="flex-shrink-0">
    <div className="bg-white rounded-full shadow-lg p-4 flex flex-col items-center justify-center w-36 h-36 border-4 border-blue-100">
      <span className="text-3xl font-bold text-blue-800" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
      <span className="text-xs text-yellow-500 tracking-widest font-semibold">MARKETING COMPANY</span>
    </div>
  </div>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations();

    return (
        <header id="inicio" className="relative pt-8 pb-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mt-4">
                <div className="bg-blue-200/80 backdrop-blur-lg rounded-full shadow-xl p-4">
                    <div className="flex items-center justify-between px-4">
                        {/* Desktop: Left side */}
                        <div className="hidden lg:flex items-center gap-4">
                           <LanguageSwitcher />
                        </div>

                        {/* Mobile: Hamburger Menu */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-800 focus:outline-none">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>

                         {/* Center Logo */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:bottom-0">
                           <Logo />
                        </div>
                        
                        {/* Desktop: Right side */}
                        <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                            <SocialIcons />
                            <p className="text-blue-800 font-bold text-lg tracking-wide">{t.header_slogan}</p>
                        </div>
                         {/* Mobile: Right Side (Language) */}
                        <div className="lg:hidden">
                           <LanguageSwitcher />
                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex justify-between items-center mt-20 px-8">
                       <div className="flex space-x-8">
                            {NAV_LINKS_STRUCTURE.slice(0, 2).map(link => (
                                <a key={link.key} href={link.href} className="text-gray-700 hover:text-blue-800 font-medium pb-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300">
                                    {t.nav_links[link.key]}
                                </a>
                            ))}
                       </div>
                       <div className="flex space-x-8">
                             {NAV_LINKS_STRUCTURE.slice(2).map(link => (
                                <a key={link.key} href={link.href} className="text-gray-700 hover:text-blue-800 font-medium pb-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300">
                                    {t.nav_links[link.key]}
                                </a>
                            ))}
                       </div>
                    </nav>
                </div>
            </div>
            {/* Mobile Menu */}
             {isMenuOpen && (
                <div className="lg:hidden bg-blue-100/95 backdrop-blur-md fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-blue-800">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <nav className="flex flex-col items-center gap-6">
                        {NAV_LINKS_STRUCTURE.map(link => (
                            <a key={link.key} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl text-blue-800 font-bold">
                                {t.nav_links[link.key]}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8">
                       <SocialIcons />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;