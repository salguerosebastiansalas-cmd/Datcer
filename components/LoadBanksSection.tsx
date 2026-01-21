import React, { useState } from 'react';
import { Zap, Activity, ChevronRight, Settings, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const LoadBanksSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const productDetails = {
    title: "Ecosistema de Bancos de Carga",
    subtitle: "Solución Integral 1.0 MW",
    description: "La configuración definitiva para validación de Data Centers. Este ecosistema modular permite realizar pruebas de estrés sincronizadas hasta 1,000kW (1.0 MW) controladas desde una sola consola maestra.",
    details: [
        "Capacidad escalable hasta 1.0 MW.",
        "10 unidades portátiles de 100kW cada una.",
        "Consola maestra con sincronización cableada de alta velocidad.",
        "Certificación de pruebas según TIA-942 e ICREA.",
        "Análisis de transitorios y estabilidad de voltaje.",
        "Reportes automatizados con telemetría de precisión."
    ],
    whatsappMessage: "Hola Datcer, me interesa conocer más sobre el ecosistema completo de bancos de carga de 1.0 MW.",
    theme: 'dark' as const
  };

  return (
    <section id={SectionId.LOAD_BANKS} className="py-24 md:py-32 px-6 bg-[#0a0a0b] text-white relative overflow-hidden">
      
      {/* Reflejos de ambiente sutiles */}
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-[#F26722] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#636466] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Título de Producto */}
        <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-xs font-bold text-[#F26722] uppercase tracking-[0.5em] mb-4 block">Hardware Showcase</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                DATCER Load Systems.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium tracking-tight">
                Validación de potencia para <span className="text-white">misión crítica.</span>
            </p>
        </div>

        {/* Contenedor de Imagen de Alta Visibilidad */}
        <div className="relative mb-20 group">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#111] to-[#000] border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
                
                {/* 
                  IMPORTANTE: Aquí se carga la imagen. 
                  He puesto una de referencia de alta calidad que simula un entorno industrial limpio.
                */}
                <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=2400&q=80" 
                    alt="Ecosistema Datcer Load Banks" 
                    className="w-full h-auto object-cover opacity-100 transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                
                {/* Overlay de degradado inferior para integración suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60"></div>

                {/* Badge de Tecnología */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#29CC46] animate-pulse"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Sincronización Activa</span>
                    </div>
                </div>
            </div>

            {/* Texto de Pie de Foto */}
            <div className="text-center mt-6">
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">Configuración Modular 1.0 MW — Fotografía Real</p>
            </div>
        </div>

        {/* Especificaciones en Estilo Apple Pro */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
            {[
                { icon: Zap, title: "1.0 MW", desc: "Capacidad de prueba masiva.", color: "#F26722" },
                { icon: Activity, title: "HMI 4.0", desc: "Monitoreo en tiempo real.", color: "#ffffff" },
                { icon: Settings, title: "Modular", desc: "Despliegue rápido en sitio.", color: "#ffffff" },
                { icon: ShieldCheck, title: "Certificado", desc: "Normas IEEE y TIA-942.", color: "#29CC46" }
            ].map((item, i) => (
                <div key={i} className="bg-[#151516] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                    <item.icon className="w-6 h-6 mb-4" style={{ color: item.color }} />
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm font-medium">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Botón de Acción */}
        <div className="flex justify-center">
            <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-4 shadow-xl"
            >
                Solicitar Especificaciones Técnicas <ChevronRight className="w-5 h-5" />
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