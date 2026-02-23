import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { SectionId } from '../types';
import { useTranslation, Language } from '../contexts/LanguageContext';

/**
 * Componente de Logo Corporativo Datcer OFICIAL
 */
export const DatcerLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center select-none ${className}`}>
    <div className="flex items-center">
        <span 
            className="text-2xl md:text-3xl font-datcer-logo"
            style={{ 
              color: '#F26522',
              lineHeight: '1'
            }}
        >
            DAT
        </span>
        <span 
            className="text-2xl md:text-3xl font-datcer-logo"
            style={{ 
              color: '#636466',
              lineHeight: '1'
            }}
        >
            CER
        </span>
    </div>
  </div>
);

interface NavbarProps {
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav_consultancy'), id: SectionId.SERVICES },
    { label: t('nav_engineering'), id: SectionId.ENGINEERING },
    { label: t('nav_load_banks'), id: SectionId.LOAD_BANKS },
    { label: t('nav_ai'), id: SectionId.AI },
    { label: t('nav_contact'), id: SectionId.CONTACT },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Português' },
    { code: 'it', label: 'Italiano' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-white/95 py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(SectionId.HERO)}
          className="cursor-pointer group hover:opacity-90 transition-opacity"
        >
          <DatcerLogo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-bold text-[#636466] hover:text-[#F26522] transition-colors tracking-widest uppercase whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs font-bold text-[#636466] hover:text-[#F26522] transition-colors tracking-widest uppercase"
            >
              <Globe size={14} />
              <span>{language}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl py-2 min-w-[120px] animate-fade-in-up">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-[#F26522]' : 'text-[#636466]'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-[#636466] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#F26522] transition-all active:scale-95 shadow-md ml-2"
          >
            {t('nav_quote')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => {
              const nextIndex = (languages.findIndex(l => l.code === language) + 1) % languages.length;
              setLanguage(languages[nextIndex].code);
            }}
            className="text-[#636466] p-2 flex items-center gap-1"
          >
            <Globe size={20} />
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#636466] p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fbfbfd] border-b border-gray-200 md:hidden flex flex-col p-8 gap-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className="text-left text-2xl font-bold text-[#636466] uppercase tracking-tighter"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
                scrollToSection(SectionId.CONTACT);
                setIsOpen(false);
            }}
            className="bg-[#F26522] text-white py-4 rounded-2xl font-bold uppercase text-center"
          >
            {t('nav_quote')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
