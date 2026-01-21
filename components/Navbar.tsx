
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

/**
 * Componente de Logo Corporativo Datcer OFICIAL
 * - Incluye el símbolo gráfico entrelazado (D naranja / C gris)
 * - Texto Datcer en estilo Apple/Swiss
 */
export const DatcerLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    {/* Símbolo Gráfico Datcer (Basado en la imagen proporcionada) */}
    <svg className="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="white" stroke="#636466" strokeWidth="1.5"/>
      {/* Forma D Naranja */}
      <path d="M30 35 H55 C65 35 70 40 70 50 C70 60 65 65 55 65 H45 L40 75 H55 C75 75 85 65 85 50 C85 35 75 25 55 25 H30 L25 35 Z" fill="#F26722"/>
      {/* Forma C Gris */}
      <path d="M70 65 H45 C35 65 30 60 30 50 C30 40 35 35 45 35 H55 L60 25 H45 C25 25 15 35 15 50 C15 65 25 75 45 75 H70 L75 65 Z" fill="#636466"/>
    </svg>
    
    <div className="flex items-center">
        <span 
            className="text-2xl md:text-3xl font-datcer-logo"
            style={{ 
              color: 'rgb(242, 103, 34)',
              lineHeight: '1'
            }}
        >
            DAT
        </span>
        <span 
            className="text-2xl md:text-3xl font-datcer-logo"
            style={{ 
              color: 'rgb(99, 100, 102)',
              lineHeight: '1'
            }}
        >
            CER
        </span>
    </div>
  </div>
);

// Define missing NavbarProps interface to satisfy React.FC type argument
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
              className="text-xs font-bold text-[#636466] hover:text-[#F26722] transition-colors tracking-widest uppercase whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-[#636466] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#F26722] transition-all active:scale-95 shadow-md ml-2"
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
            className="bg-[#F26722] text-white py-4 rounded-2xl font-bold uppercase text-center"
          >
            Iniciar Proyecto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
