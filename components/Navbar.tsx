import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  scrollToSection: (id: SectionId) => void;
}

// Custom Datcer Logo Component based on corporate identity
// Orange: #F26722 (RGB 242, 103, 34)
// Gray: #636466 (RGB 99, 100, 102)
// Font: Swis721 Ex BT style (using Encode Sans Expanded)
const DatcerLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    {/* Text: DAT - Orange, Italic */}
    <span 
        className="text-3xl text-[#F26722] italic"
        style={{ 
          fontFamily: '"Encode Sans", sans-serif', 
          fontVariationSettings: '"wdth" 125, "wght" 800',
          letterSpacing: '-0.03em',
        }}
    >
        DAT
    </span>
    {/* Text: CER - Gray, Italic */}
    <span 
        className="text-3xl text-[#636466] italic"
        style={{ 
          fontFamily: '"Encode Sans", sans-serif', 
          fontVariationSettings: '"wdth" 125, "wght" 800',
          letterSpacing: '-0.03em',
        }}
    >
        CER
    </span>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Consultoría', id: SectionId.SERVICES },
    { label: 'Ingeniería', id: SectionId.ENGINEERING },
    { label: 'Bancos de Carga', id: SectionId.LOAD_BANKS },
    { label: 'Datcer AI', id: SectionId.AI },
    { label: 'Contacto', id: SectionId.CONTACT },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-white/90 py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(SectionId.HERO)}
          className="cursor-pointer group hover:opacity-80 transition-opacity"
        >
          <DatcerLogo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-bold text-[#636466] hover:text-[#F26722] transition-colors tracking-widest uppercase whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-[#636466] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#F26722] transition-all active:scale-95 shadow-md ml-2"
          >
            Cotizar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#636466]">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fbfbfd] border-b border-gray-200 md:hidden flex flex-col p-6 gap-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className="text-left text-lg font-bold text-[#636466] uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;