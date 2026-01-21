import React, { useState } from 'react';
import { Zap, Activity, ChevronRight, Settings, ShieldCheck, FileSpreadsheet, Monitor, Cpu, Weight, MoveDiagonal, Clock } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const LoadBanksSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const productDetails = {
    title: "Servicio de Alquiler: Banco de Carga Datcer 100kW",
    subtitle: "Especificaciones Técnicas — Misión Crítica",
    description: "Ofrecemos el servicio de alquiler de bancos de carga compactos para pruebas de validación de infraestructura crítica. Diseñados para ser transportados fácilmente y operar en condiciones de alta exigencia.",
    details: [
        "Potencia: 100kW (Pasos desde 1kW hasta 100kW)",
        "Voltaje de Operación: 400V CA, 3 fases, 50/60Hz",
        "Configuración: Carga resistiva pura (Factor de Potencia: 1.0)",
        "Precisión de medición: Clase 0.5 (Tolerancia ±3%)",
        "Peso del equipo: 35kg (Portabilidad extrema)",
        "Control: Dual (Manual local o Software PC vía RS485)",
        "Registro de Datos: Intervalos de 2s con exportación a Excel",
        "Enfriamiento: Aire forzado (entrada y salida horizontal)",
        "Ciclo de trabajo: Operación continua (Clase de aislamiento F)",
        "Construcción: Aleación de aluminio con argollas de izaje",
        "Disponibilidad: ALQUILER inmediato para proyectos en todo el país"
    ],
    whatsappMessage: "Hola Datcer, me interesa el servicio de ALQUILER de bancos de carga de 100kW. ¿Podrían enviarme disponibilidad y ficha técnica?",
    theme: 'dark' as const
  };

  return (
    <section id={SectionId.LOAD_BANKS} className="py-24 px-6 bg-[#0a0a0b] text-white relative overflow-hidden">
      
      {/* Fondo Industrial Sutil - Ahora se ve como una textura de alta gama */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=2400&q=80" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Fondo Industrial"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Encabezado Estilo Apple / Datcer */}
        <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="flex flex-col items-center leading-[0.85] tracking-tighter mb-8">
                <span className="text-4xl md:text-5xl font-black text-white uppercase italic">DATCER</span>
                <span className="text-5xl md:text-7xl font-black text-[#F26722] uppercase italic">BANCOS DE CARGA</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26722]/10 border border-[#F26722]/30 mb-6">
                <Clock className="w-4 h-4 text-[#F26722]" />
                <span className="text-xs font-black text-white uppercase tracking-widest">ESPECIALISTAS EN ALQUILER</span>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium tracking-tight">
                Validación de sistemas de energía con <span className="text-white font-bold">precisión de laboratorio.</span>
            </p>
        </div>

        {/* Galería de Equipos CSS Restaurada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            
            {/* Tarjeta Izquierda: Flight Cases CSS */}
            <div 
                onClick={() => setShowModal(true)}
                className="lg:col-span-7 group cursor-pointer"
            >
                <div className="bg-zinc-900/60 backdrop-blur-md rounded-[3rem] border border-white/5 p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-[#F26722]/30 shadow-2xl flex flex-col">
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26722] mb-4 block">Portabilidad Extrema</span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Listos para Despliegue</h3>
                        <p className="text-zinc-400 max-w-sm mb-12">Unidades ligeras de 35kg encapsuladas en flight cases de alta resistencia para alquiler.</p>
                    </div>

                    <div className="flex-1 flex items-center justify-center pt-10 pb-20 relative">
                        <div className="grid grid-cols-3 gap-x-6 gap-y-10 transform -rotate-12 scale-90 lg:scale-105 transition-transform duration-700 group-hover:scale-110">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <div 
                                    key={i} 
                                    className="w-20 h-36 bg-[#0d0d0d] border-[3px] border-[#a1a1aa] rounded-sm relative shadow-[20px_20px_40px_rgba(0,0,0,0.8)]"
                                >
                                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#a1a1aa] rounded-tl-sm"></div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#a1a1aa] rounded-tr-sm"></div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#a1a1aa] rounded-bl-sm"></div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#a1a1aa] rounded-br-sm"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-zinc-800/50 rounded flex items-center justify-center">
                                        <div className="w-1 h-6 bg-white/5"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tarjeta Derecha: Gabinete Controlador CSS */}
            <div 
                onClick={() => setShowModal(true)}
                className="lg:col-span-5 group cursor-pointer"
            >
                <div className="bg-zinc-900/60 backdrop-blur-md rounded-[3rem] border border-white/5 p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-[#29CC46]/30 shadow-2xl flex flex-col">
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#29CC46] mb-4 block">Control de Precisión</span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Software Datcer Core</h3>
                        <p className="text-zinc-400 max-w-sm mb-12">Monitoreo en tiempo real RS485 y reportes automáticos en Excel/JPG.</p>
                    </div>

                    <div className="flex-1 flex items-center justify-center py-10">
                        <div className="w-48 h-[380px] bg-gradient-to-b from-[#ced4da] via-[#adb5bd] to-[#6c757d] rounded-lg border-2 border-zinc-400 p-4 relative shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                            <div className="mt-4 mb-6">
                                <div className="mx-auto w-20 h-16 bg-[#1e2a1e] rounded border-[3px] border-[#555] flex items-center justify-center">
                                    <Activity className="w-8 h-8 text-[#29CC46] opacity-60 animate-pulse" />
                                </div>
                            </div>
                            <div className="flex justify-center mb-8">
                                <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-[#eee] flex items-center justify-center">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-6 bg-zinc-600/20 rounded flex items-center px-2">
                                        <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Resumen de Especificaciones (Slide 3 del PDF) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-zinc-900/40 p-6 rounded-3xl border border-white/5 group hover:bg-zinc-800/50 transition-colors">
                <Zap className="w-5 h-5 text-[#F26722] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Capacidad</p>
                <p className="text-lg font-bold">100kW (Steps 1kW)</p>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-3xl border border-white/5 group hover:bg-zinc-800/50 transition-colors">
                <MoveDiagonal className="w-5 h-5 text-[#F26722] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Precisión</p>
                <p className="text-lg font-bold">Clase 0.5 (±3%)</p>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-3xl border border-white/5 group hover:bg-zinc-800/50 transition-colors">
                <Weight className="w-5 h-5 text-[#F26722] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Peso</p>
                <p className="text-lg font-bold">35kg (Ultra Ligero)</p>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-3xl border border-white/5 group hover:bg-zinc-800/50 transition-colors">
                <Monitor className="w-5 h-5 text-[#F26722] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Control</p>
                <p className="text-lg font-bold">Local o Remoto</p>
            </div>
        </div>

        {/* Botón de Acción Principal */}
        <div className="flex justify-center">
            <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-black px-12 py-4 rounded-xl font-black text-lg hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-4 shadow-2xl uppercase italic"
            >
                Ficha Técnica <ChevronRight className="w-5 h-5" />
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
            theme="dark"
        />

      </div>
    </section>
  );
};

export default LoadBanksSection;