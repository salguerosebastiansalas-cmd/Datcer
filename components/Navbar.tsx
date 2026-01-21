import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

/**
 * Componente de Logo Corporativo Datcer OFICIAL
 * - Diseño puramente tipográfico (Solo letras)
 * - Colores exactos: Naranja #F26522, Gris #636466
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
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-[#636466] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#F26522] transition-all active:scale-95 shadow-md ml-2"
          >
            Cotizar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            Iniciar Proyecto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;