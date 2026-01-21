import React, { useState } from 'react';
import { Zap, Activity, ChevronRight, Settings, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const LoadBanksSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const productDetails = {
    title: "Bancos de Carga Profesionales",
    subtitle: "Solución Datcer Power 100kW",
    description: "Diseñados para la validación rigurosa de infraestructura crítica. Nuestra solución combina portabilidad extrema con precisión de laboratorio para pruebas de UPS, generadores y sistemas de distribución.",
    details: [
        "Capacidad de 100kW Resistivos por unidad.",
        "Diseño modular: Unidades portátiles y estacionarias.",
        "Panel de control con HMI digital e interfaz de PC.",
        "Monitoreo de parámetros eléctricos en tiempo real.",
        "Generación automática de reportes de cumplimiento."
    ],
    whatsappMessage: "Hola Datcer, solicito información técnica y disponibilidad de los Bancos de Carga de 100kW.",
    theme: 'dark' as const
  };

  return (
    <section id={SectionId.LOAD_BANKS} className="py-24 md:py-32 px-6 bg-[#0a0a0b] text-white relative overflow-hidden">
      
      {/* Luces de ambiente */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-[#F26722] opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#636466] opacity-[0.05] blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                DATCER <br /> <span className="text-[#F26722]">LOAD BANKS</span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mx-auto font-semibold leading-tight tracking-tight">
                Ingeniería de pruebas para <span className="text-white">misión crítica.</span>
            </p>
        </div>

        {/* Galería de Producto Dual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            
            {/* Visual Izquierdo: Unidades Portátiles (Flight Cases) */}
            <div 
                onClick={() => setShowModal(true)}
                className="lg:col-span-7 group cursor-pointer"
            >
                <div className="bg-zinc-900/40 rounded-[3rem] border border-white/5 p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-[#F26722]/30 shadow-2xl flex flex-col">
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26722] mb-4 block">Portabilidad Extrema</span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Deployment Ready</h3>
                        <p className="text-zinc-400 max-w-sm mb-12">Unidades encapsuladas en flight cases de alta resistencia para transporte seguro.</p>
                    </div>

                    {/* Representación Visual de los Flight Cases (Fiel a la imagen) */}
                    <div className="flex-1 flex items-center justify-center pt-10 pb-20 relative">
                        <div className="grid grid-cols-3 gap-x-6 gap-y-10 transform -rotate-12 scale-90 lg:scale-110">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <div 
                                    key={i} 
                                    className="w-24 h-44 bg-[#0d0d0d] border-[4px] border-[#a1a1aa] rounded-sm relative shadow-[20px_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1"
                                    style={{ 
                                        zIndex: 10 - i,
                                    }}
                                >
                                    {/* Esquinas reforzadas (Metallic Caps) */}
                                    <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-[#a1a1aa] rounded-tl-sm shadow-inner"></div>
                                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#a1a1aa] rounded-tr-sm shadow-inner"></div>
                                    <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 bg-[#a1a1aa] rounded-bl-sm shadow-inner"></div>
                                    <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-[#a1a1aa] rounded-br-sm shadow-inner"></div>
                                    
                                    {/* Cierre de Mariposa (Latches) */}
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#8e8e8e] rounded-sm border border-black/20 flex items-center justify-center">
                                        <div className="w-1 h-4 bg-black/10"></div>
                                    </div>
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#8e8e8e] rounded-sm border border-black/20 flex items-center justify-center">
                                        <div className="w-1 h-4 bg-black/10"></div>
                                    </div>
                                    
                                    {/* Manija empotrada (Recessed Handle) */}
                                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-12 bg-[#222] rounded-l-md border border-[#444]"></div>
                                    
                                    {/* Textura superficie */}
                                    <div className="absolute inset-2 bg-gradient-to-br from-white/5 to-transparent rounded-sm pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold text-zinc-300 border border-white/10">
                        Configuración Interna: 100kW
                    </div>
                </div>
            </div>

            {/* Visual Derecho: Unidad de Control (Gabinete Gris Metálico) */}
            <div 
                onClick={() => setShowModal(true)}
                className="lg:col-span-5 group cursor-pointer"
            >
                <div className="bg-zinc-900/40 rounded-[3rem] border border-white/5 p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-[#29CC46]/30 shadow-2xl flex flex-col">
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#29CC46] mb-4 block">Precisión Digital</span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Main Controller</h3>
                        <p className="text-zinc-400 max-w-sm mb-12">Unidad principal con interfaz de usuario avanzada y seguridad redundante.</p>
                    </div>

                    {/* Representación Visual del Gabinete (Muy fiel a la imagen derecha) */}
                    <div className="flex-1 flex items-center justify-center py-10">
                        <div className="w-52 h-[420px] flex relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1">
                            
                            {/* Lateral del gabinete (Sombreado) */}
                            <div className="w-12 h-full bg-[#3d5a57] rounded-l-lg border-y border-l border-zinc-600">
                                {/* Rejilla lateral */}
                                <div className="mt-12 mx-2 space-y-1">
                                    {[...Array(15)].map((_, i) => (
                                        <div key={i} className="h-4 bg-black/20 w-full rounded-sm"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Frente del gabinete (Metálico) */}
                            <div className="flex-1 h-full bg-gradient-to-b from-[#ced4da] via-[#adb5bd] to-[#6c757d] rounded-r-lg border-y border-r border-zinc-400 p-4">
                                
                                {/* Top Screen Area */}
                                <div className="mt-6 mb-8 relative">
                                    {/* Pantalla HMI */}
                                    <div className="mx-auto w-24 h-20 bg-[#2b2b2b] rounded border-[4px] border-[#555] flex flex-col items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-[#1e2a1e] flex items-center justify-center relative">
                                            <div className="absolute inset-0 bg-green-500/5 animate-pulse"></div>
                                            <Activity className="w-10 h-10 text-[#29CC46] opacity-60" />
                                        </div>
                                    </div>
                                    
                                    {/* CARACTERÍSTICA: Manillares laterales negros (Handles) */}
                                    <div className="absolute top-0 -left-6 w-2 h-20 bg-black rounded-full shadow-lg border border-zinc-800"></div>
                                    <div className="absolute top-0 -right-6 w-2 h-20 bg-black rounded-full shadow-lg border border-zinc-800"></div>
                                </div>

                                {/* Botón de Emergencia (E-Stop) */}
                                <div className="flex justify-center mb-10">
                                    <div className="w-10 h-10 rounded-full bg-red-700 border-4 border-[#eee] shadow-xl flex items-center justify-center">
                                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-inner"></div>
                                    </div>
                                </div>

                                {/* Botonera y controles */}
                                <div className="bg-black/5 rounded-md p-3 space-y-4">
                                    <div className="flex justify-center gap-2">
                                        <div className="w-3 h-3 bg-zinc-600 rounded-full border border-zinc-400"></div>
                                        <div className="w-3 h-3 bg-zinc-600 rounded-full border border-zinc-400"></div>
                                        <div className="w-3 h-3 bg-zinc-600 rounded-full border border-zinc-400"></div>
                                        <div className="w-3 h-3 bg-zinc-600 rounded-full border border-zinc-400"></div>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <div className="w-2 h-6 bg-zinc-800 rounded-sm"></div>
                                        <div className="w-2 h-6 bg-zinc-800 rounded-sm"></div>
                                    </div>
                                </div>

                                {/* Puerto inferior */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-12 bg-[#222] rounded border border-zinc-600 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-500/20 rounded-full border border-blue-500/30"></div>
                                </div>

                                {/* Asa superior */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-800 rounded-full border-t border-zinc-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold text-zinc-300 border border-white/10">
                        Configuración Externa: HMI
                    </div>
                </div>
            </div>

        </div>

        {/* Specs Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                <Settings className="w-8 h-8 text-[#F26722] mb-4" />
                <h4 className="font-bold mb-2 text-white">Precisión Milimétrica</h4>
                <p className="text-sm text-zinc-500">Pasos de carga configurables desde 1kW hasta 100kW por unidad.</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-[#29CC46] mb-4" />
                <h4 className="font-bold mb-2 text-white">Protección Total</h4>
                <p className="text-sm text-zinc-500">Sistemas de parada de emergencia y sensores de flujo de aire integrados.</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                <FileSpreadsheet className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-bold mb-2 text-white">Smart Logging</h4>
                <p className="text-sm text-zinc-500">Almacenamiento de datos histórico para análisis de curvas de descarga.</p>
            </div>
        </div>

        <div className="flex justify-center">
            <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-4 shadow-2xl"
            >
                Solicitar Especificaciones <ChevronRight />
            </button>
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
