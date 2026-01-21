import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, Award, Check, FileCheck, ShieldAlert } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const CertificationSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section id={SectionId.CERTIFICATION} className="pt-24 pb-32 px-6 bg-[#000000] text-white relative overflow-hidden snap-start">
      
      {/* Background Texture - Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
            backgroundSize: '20px 20px'
        }} 
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-[#2E6894] opacity-[0.1] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <ShieldCheck className="w-4 h-4 text-[#F26722]" />
             <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">Certificación Internacional</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl tracking-tight mb-8" style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700 }}>
            <span className="text-white">uptime</span>
            <span className="text-[#3b8bc6]">institute</span>
            <br />
            <span className="text-[#F26722]" style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800 }}>Tier III</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ingeniería de precisión alineada estrictamente a la topología de <span className="text-white font-medium">Mantenimiento Concurrente</span>. 
            Garantizamos la resiliencia operativa de su infraestructura crítica.
          </p>
        </div>

        {/* Main Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Metric / KPI (Span 5) */}
            <div 
                onClick={() => openModal({
                    title: "Disponibilidad & SLA",
                    subtitle: "Garantía de Uptime",
                    description: "El estándar Tier III garantiza un 99.982% de disponibilidad anual. Esto se traduce en un máximo de 1.6 horas de inactividad al año.",
                    details: [
                        "Redundancia N+1 en componentes.",
                        "Rutas de distribución independientes.",
                        "Tolerancia a fallos durante mantenimiento.",
                        "Soporte para operaciones 24/7/365."
                    ],
                    icon: <ShieldCheck className="w-8 h-8 text-[#F26722]" />,
                    whatsappMessage: "Hola, me interesa conocer más sobre las garantías de disponibilidad Tier III.",
                    theme: 'dark'
                })}
                className="md:col-span-5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:border-[#3b8bc6]/30 transition-colors duration-500 cursor-pointer active:scale-[0.98]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b8bc6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Outfit", sans-serif' }}>
                        99.982<span className="text-[#F26722] text-4xl">%</span>
                    </span>
                </div>
                
                <span className="text-lg font-medium text-zinc-300 tracking-wide uppercase mb-6 border-b border-white/10 pb-6 inline-block w-full">Disponibilidad SLA</span>
                
                <div className="space-y-4">
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        <strong className="text-white block mb-1 text-base">Redundancia N+1</strong>
                        Cada componente de capacidad posee un respaldo activo. El fallo de un módulo no detiene el sistema.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        <strong className="text-white block mb-1 text-base">Rutas de Distribución Activas</strong>
                        Capacidad de aislar componentes de la red eléctrica o de enfriamiento sin afectar la carga IT.
                    </p>
                </div>
            </div>

            {/* Card 2: Professional Definition (Span 7) */}
            <div 
                onClick={() => openModal({
                    title: "Concurrent Maintainability",
                    subtitle: "Mantenimiento Concurrente",
                    description: "La capacidad de realizar mantenimiento planificado a cualquier componente de la infraestructura sin interrumpir la operación del hardware de cómputo.",
                    details: [
                        "Reemplazo de UPS en caliente.",
                        "Mantenimiento de generadores sin corte.",
                        "Bypass de tableros eléctricos.",
                        "Certificación TCDD y TCCF."
                    ],
                    icon: <RefreshCw className="w-8 h-8 text-[#F26722]" />,
                    whatsappMessage: "Hola, quiero saber cómo lograr la certificación Tier III y el Mantenimiento Concurrente.",
                    theme: 'dark'
                })}
                className="md:col-span-7 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#F26722]/30 transition-colors duration-500 cursor-pointer active:scale-[0.98]"
            >
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#F26722] flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <RefreshCw className="w-6 h-6 text-white animate-[spin_10s_linear_infinite]" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: '"Outfit", sans-serif' }}>
                            Concurrent Maintainability
                        </h3>
                    </div>
                    
                    <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                        La distinción fundamental del Tier III. A diferencia del Tier II, esta topología permite la <span className="text-white">intervención planificada</span> de cualquier componente de la infraestructura (mantenimiento, reparación o reemplazo) manteniendo el 100% de la continuidad en los servicios de cómputo.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            <FileCheck className="w-5 h-5 text-[#3b8bc6]" />
                            <span className="font-bold text-white text-sm">Diseño (TCDD)</span>
                        </div>
                        <p className="text-xs text-zinc-500">Tier Certification of Design Documents. Validación de planos y diagramas unifilares.</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldAlert className="w-5 h-5 text-[#F26722]" />
                            <span className="font-bold text-white text-sm">Construcción (TCCF)</span>
                        </div>
                        <p className="text-xs text-zinc-500">Tier Certification of Constructed Facility. Pruebas de estrés y comisionamiento en sitio.</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Footer Statement */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6">
            <p className="text-zinc-500 text-xs font-medium tracking-wide uppercase">
                Compliance estricto con TIA-942 e ICREA Std-131-2019
            </p>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simplified representation of partner logos via text/icons for now */}
                <span className="text-zinc-400 font-bold tracking-widest text-xs border border-white/20 px-3 py-1 rounded">TIA-942 RATED 3</span>
                <span className="text-zinc-400 font-bold tracking-widest text-xs border border-white/20 px-3 py-1 rounded">ISO 27001</span>
            </div>
        </div>

        <DetailModal 
            isOpen={!!selectedItem}
            onClose={closeModal}
            title={selectedItem?.title || ''}
            subtitle={selectedItem?.subtitle || ''}
            description={selectedItem?.description || ''}
            details={selectedItem?.details || []}
            icon={selectedItem?.icon}
            whatsappMessage={selectedItem?.whatsappMessage || 'Hola Datcer.'}
            theme={selectedItem?.theme || 'dark'}
        />

      </div>
    </section>
  );
};

export default CertificationSection;