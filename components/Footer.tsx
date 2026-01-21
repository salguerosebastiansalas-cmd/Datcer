import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SectionId } from '../types';

// Duplicated Logo component for footer to ensure self-containment
const FooterLogo = () => (
  <div className="flex items-center">
    {/* Text: DAT - Orange, Italic */}
    <span 
        className="text-2xl text-[#F26722] italic"
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
        className="text-2xl text-[#636466] italic"
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

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-white pt-20 pb-10 border-t border-gray-200 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <FooterLogo />
            </div>
            <p className="max-w-sm text-[#636466] leading-relaxed mb-6">
              Expertos en la creación de ecosistemas de datos resilientes y eficientes. Transformamos la complejidad técnica en infraestructura confiable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1d1d1f] mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#F26722] transition-colors">Diseño de Data Center</a></li>
              <li><a href="#" className="hover:text-[#F26722] transition-colors">Consultoría Tier</a></li>
              <li><a href="#" className="hover:text-[#F26722] transition-colors">Ingeniería Civil</a></li>
              <li><a href="#" className="hover:text-[#F26722] transition-colors">Instalaciones Mecánicas</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1d1d1f] mb-1">Contacto Directo</h4>
            
            {/* Button: WhatsApp */}
            <a 
              href="https://wa.me/573024845350" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebc57] text-white py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium opacity-90 uppercase tracking-wider">WhatsApp</span>
                <span className="text-sm font-bold">+57 302 484 5350</span>
              </div>
            </a>

            {/* Button: Email */}
            <a 
              href="mailto:gerencia@datcer.com"
              className="group flex items-center justify-center gap-3 w-full bg-[#1d1d1f] hover:bg-[#636466] text-white py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Mail className="w-5 h-5" />
              <div className="flex flex-col items-start leading-none">
                 <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Correo</span>
                 <span className="text-sm font-bold">gerencia@datcer.com</span>
              </div>
            </a>

            <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
               <MapPin className="w-3 h-3" />
               <span>Operaciones Globales</span>
            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            Copyright © {new Date().getFullYear()} Datcer S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-zinc-400">
            <a href="#" className="hover:text-[#636466]">Política de Privacidad</a>
            <a href="#" className="hover:text-[#636466]">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;