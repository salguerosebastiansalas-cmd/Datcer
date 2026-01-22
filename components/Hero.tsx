import React from 'react';
import { ChevronRight, Server, FileText } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HERO} className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-6 overflow-hidden relative bg-[#f5f5f7]">
      
      {/* 
        BACKGROUND IMAGE LAYER (New)
        Subtle, grayscale, industrial texture behind everything
      */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=2000&q=80" 
            alt="Data Center Infrastructure" 
            className="w-full h-full object-cover opacity-[0.15] grayscale mix-blend-multiply"
        />
        {/* Gradient Mask to fade image into background color for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f7]/90 via-transparent to-[#f5f5f7]/90"></div>
      </div>

      {/* 
        DATA CENTER ATMOSPHERE LAYER 
        Concept: "Living Structure" - Grid lines representing racks + Data flowing
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
          
          {/* 1. Technical Grid Background (The "Floor Plan") */}
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ 
                backgroundImage: 'linear-gradient(#636466 1px, transparent 1px), linear-gradient(90deg, #636466 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }} 
          />

          {/* 2. Moving Data Beams (The "Life") - Vertical lines falling */}
          {/* Beam 1: Orange, Fast */}
          <div className="absolute top-0 left-[15%] w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-[#F26722] to-transparent animate-data-stream opacity-40" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
          
          {/* Beam 2: Gray, Slow */}
          <div className="absolute top-0 left-[25%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-[#636466] to-transparent animate-data-stream opacity-20" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
          
          {/* Beam 3: Orange, Medium */}
          <div className="absolute top-0 right-[20%] w-[1px] h-[25vh] bg-gradient-to-b from-transparent via-[#F26722] to-transparent animate-data-stream opacity-30" style={{ animationDuration: '4.5s', animationDelay: '2s' }}></div>
          
          {/* Beam 4: Gray, Fast */}
          <div className="absolute top-0 right-[10%] w-[1px] h-[35vh] bg-gradient-to-b from-transparent via-[#636466] to-transparent animate-data-stream opacity-20" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

          {/* 3. Subtle Server Rack Glows (Static Atmosphere) */}
          <div className="absolute bottom-0 left-[-10%] w-[50vw] h-[50vh] bg-[#F26722] opacity-[0.03] blur-[100px] rounded-full"></div>
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vh] bg-[#636466] opacity-[0.05] blur-[100px] rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-6xl mx-auto space-y-6 animate-fade-in-up relative">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#636466]/10 bg-white/70 backdrop-blur-md mb-4 shadow-sm ring-1 ring-white/50">
          <div className="w-1.5 h-1.5 rounded-full bg-[#29CC46] animate-pulse"></div>
          <span className="text-xs font-bold text-[#636466] tracking-wide uppercase">Sistemas Activos</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-[#1d1d1f] leading-[0.95] mb-6 drop-shadow-sm">
          Datcer. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#636466] via-[#4a4a4a] to-[#F26722]">
            Ingeniería Pura.
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-[#636466] max-w-3xl mx-auto font-medium leading-normal tracking-tight drop-shadow-sm">
          Diseño de Data Centers de clase mundial. <br className="hidden md:block"/>
          Infraestructura crítica pensada para el futuro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pb-16">
          <button 
            onClick={() => scrollToSection(SectionId.SERVICES)}
            className="bg-[#F26722] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#d95513] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/20 flex items-center gap-3"
          >
            Explorar Soluciones
          </button>
          
          <a 
            href="https://datcer-brochure.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-sm text-[#1d1d1f] border border-[#d2d2d7] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#f5f5f7] hover:border-[#F26722]/30 transition-all hover:scale-[1.02] active:scale-95 shadow-sm flex items-center gap-3"
          >
            <FileText className="w-5 h-5 text-[#F26722]" />
            Ver Brochure
          </a>

          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="text-[#F26722] hover:text-[#d95513] font-semibold flex items-center gap-1 px-6 py-4 transition-colors group text-lg"
          >
            Contactar Especialistas <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;