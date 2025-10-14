import React, { useState, useEffect } from 'react';
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
  <a href="/" className="flex-shrink-0 flex items-center gap-2">
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-blue-800 leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
      <span className="text-[10px] text-yellow-500 tracking-widest font-semibold leading-none">MARKETING COMPANY</span>
    </div>
  </a>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations();
    const isHomePage = window.location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const getLinkHref = (href: string) => {
        if (href.startsWith('#') && !isHomePage) {
            return `/${href}`;
        }
        return href;
    }


    return (
        <>
            <header 
              id="inicio" 
              className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Left Side: Logo */}
                    <div className="flex-1 lg:flex-none">
                        <Logo />
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="hidden lg:flex justify-center items-center gap-6 absolute left-1/2 -translate-x-1/2">
                        {NAV_LINKS_STRUCTURE.map(link => (
                            <a key={link.key} href={getLinkHref(link.href)} className="text-gray-700 hover:text-blue-800 font-medium pb-1 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300">
                                {t.nav_links[link.key]}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side: Language & Social */}
                    <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
                        <LanguageSwitcher />
                        <SocialIcons />
                    </div>

                    {/* Mobile: Hamburger Menu */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-800 focus:outline-none">
                            {isMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="bg-blue-100/95 backdrop-blur-md w-full h-full flex flex-col items-center justify-center">
                    <nav className="flex flex-col items-center gap-6 text-center">
                        {NAV_LINKS_STRUCTURE.map(link => (
                            <a key={link.key} href={getLinkHref(link.href)} onClick={() => setIsMenuOpen(false)} className="text-2xl text-blue-800 font-bold">
                                {t.nav_links[link.key]}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8 flex items-center gap-4">
                       <LanguageSwitcher />
                       <SocialIcons />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;