import React, { useState } from 'react';
import { Zap, Monitor, FileSpreadsheet, Box, ChevronRight, Activity } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const LoadBanksSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const productDetails = {
    title: "Bancos de Carga Inteligentes",
    subtitle: "Datcer Power Solutions",
    description: "Optimice sus pruebas de mantenimiento y puesta en marcha con la solución definitiva de Datcer. Equipos robustos diseñados para validar la integridad de su infraestructura crítica.",
    details: [
        "Capacidad: 100kW Resistivos.",
        "Diseño compacto para fácil transporte.",
        "Control Inteligente (Local o PC).",
        "Operación de carga/descarga 'One-Button'.",
        "Reportes automáticos en Excel y JPG."
    ],
    whatsappMessage: "Hola Datcer, estoy interesado en alquilar o comprar sus Bancos de Carga de 100kW.",
    theme: 'dark' as const
  };

  return (
    <section id={SectionId.LOAD_BANKS} className="py-32 px-6 bg-[#121212] text-white snap-start relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26722] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#636466] opacity-[0.1] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <Zap className="w-4 h-4 text-[#F26722] fill-current" />
                <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">Servicio Estrella</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Potencia bajo control.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
                Pruebas de carga precisas, informes instantáneos y portabilidad total.
            </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Representation (Abstracted Product) */}
            <div 
                onClick={() => setShowModal(true)}
                className="relative aspect-square md:aspect-[4/3] rounded-[3rem] bg-gradient-to-b from-zinc-800 to-[#1d1d1f] border border-white/10 overflow-hidden group cursor-pointer shadow-2xl flex items-center justify-center p-8"
            >
                {/* Radial gradient background inside card */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/30 via-[#121212] to-[#121212] opacity-80" />
                
                {/* Placeholder for the actual device - Stylized */}
                <div className="relative z-10 w-full max-w-sm">
                    {/* The Box */}
                    <div className="aspect-[3/4] bg-zinc-400 rounded-xl relative shadow-2xl border-t border-white/20 transform group-hover:scale-105 transition-transform duration-500">
                        {/* Front Panel Grid */}
                        <div className="absolute inset-2 border-2 border-dashed border-zinc-500/30 rounded-lg bg-[#2a2a2a] flex flex-col p-4">
                            {/* Top Vent */}
                            <div className="h-1/4 w-full bg-black/40 rounded mb-4 flex items-center justify-center">
                                <div className="w-full h-[1px] bg-zinc-700 my-1"></div>
                                <div className="w-full h-[1px] bg-zinc-700 my-1"></div>
                            </div>
                            {/* Screen */}
                            <div className="h-1/3 w-full bg-[#0a0a0a] border border-zinc-600 rounded mb-4 flex items-center justify-center relative overflow-hidden">
                                <div className="text-[#F26722] font-mono text-2xl font-bold animate-pulse">100.0 kW</div>
                                <div className="absolute bottom-2 right-2 flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-green-500"></div>
                                    <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                                </div>
                            </div>
                            {/* Controls */}
                            <div className="grid grid-cols-4 gap-2 mt-auto">
                                <div className="bg-zinc-600 h-8 rounded-full"></div>
                                <div className="bg-zinc-600 h-8 rounded-full"></div>
                                <div className="bg-[#F26722] h-8 rounded-full col-span-2 flex items-center justify-center text-[8px] font-bold uppercase tracking-wider text-black">Start</div>
                            </div>
                        </div>
                        {/* Side reflection */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none rounded-r-xl"></div>
                    </div>
                    {/* Shadow */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/60 blur-xl rounded-full"></div>
                </div>

                {/* Floating Tags */}
                <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-[#F26722]">
                    100 kW Resistivos
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Feature 1 */}
                <div 
                    onClick={() => setShowModal(true)}
                    className="bg-zinc-900/50 hover:bg-zinc-800 transition-colors border border-white/5 rounded-3xl p-6 cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#F26722]/20 transition-colors">
                        <Box className="w-6 h-6 text-zinc-300 group-hover:text-[#F26722]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Diseño Compacto</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Ligeros y fáciles de transportar. Ideales para sitios con acceso restringido.
                    </p>
                </div>

                {/* Feature 2 */}
                <div 
                    onClick={() => setShowModal(true)}
                    className="bg-zinc-900/50 hover:bg-zinc-800 transition-colors border border-white/5 rounded-3xl p-6 cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#F26722]/20 transition-colors">
                        <Monitor className="w-6 h-6 text-zinc-300 group-hover:text-[#F26722]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Control Inteligente</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Operación local o remota por PC. Carga y descarga con un solo botón.
                    </p>
                </div>

                {/* Feature 3 */}
                <div 
                    onClick={() => setShowModal(true)}
                    className="bg-zinc-900/50 hover:bg-zinc-800 transition-colors border border-white/5 rounded-3xl p-6 cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#F26722]/20 transition-colors">
                        <Activity className="w-6 h-6 text-zinc-300 group-hover:text-[#F26722]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Monitoreo Real</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Lectura precisa de voltaje, corriente y potencia en tiempo real.
                    </p>
                </div>

                {/* Feature 4 */}
                <div 
                    onClick={() => setShowModal(true)}
                    className="bg-zinc-900/50 hover:bg-zinc-800 transition-colors border border-white/5 rounded-3xl p-6 cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#29CC46]/20 transition-colors">
                        <FileSpreadsheet className="w-6 h-6 text-zinc-300 group-hover:text-[#29CC46]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Reportes Auto</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Generación automática de informes exportables en <span className="text-[#29CC46] font-bold">Excel</span> y JPG.
                    </p>
                </div>

            </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
             <button 
                onClick={() => setShowModal(true)}
                className="bg-[#F26722] hover:bg-[#d95513] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-600/20 inline-flex items-center gap-2"
             >
                Ver Especificaciones Completas <ChevronRight className="w-5 h-5" />
             </button>
             <p className="mt-6 text-zinc-500 text-sm font-medium tracking-wide">
                DATCER: Expertos en infraestructura crítica.
             </p>
        </div>

        <DetailModal 
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={productDetails.title}
            subtitle={productDetails.subtitle}
            description={productDetails.description}
            details={productDetails.details}
            icon={<Zap className="w-8 h-8 text-[#F26722]" />}
            whatsappMessage={productDetails.whatsappMessage}
            theme={productDetails.theme}
        />

      </div>
    </section>
  );
};

export default LoadBanksSection;