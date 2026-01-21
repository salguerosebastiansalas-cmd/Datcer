import React, { useState } from 'react';
import { HardHat, Ruler, Fan, Building2, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const EngineeringSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const engineeringFeatures = [
    { 
        icon: Building2, 
        color: "text-[#F26722]", 
        bg: "bg-orange-50", 
        title: "Diseño y Supervisión", 
        subtitle: "Control de Obra",
        text: "Arquitectura técnica y control de obra.",
        deepDescription: "Supervisión residente en sitio para garantizar que lo construido coincida milimétricamente con lo diseñado. Control de bitácora, validación de materiales y pruebas de aceptación en fábrica (FAT).",
        details: ["Supervisión 24/7 en sitio.", "Validación de planos As-Built.", "Control de calidad de materiales."],
        msg: "Hola Datcer, requiero supervisión y diseño civil para mi proyecto."
    },
    { 
        icon: HardHat, 
        color: "text-[#636466]", 
        bg: "bg-gray-100", 
        title: "Gestión de Proyectos", 
        subtitle: "PMO Especializada",
        text: "Coordinación integral (PMO).",
        deepDescription: "Utilizamos metodologías PMI y Agile para gestionar cronogramas críticos. Coordinamos múltiples contratistas (eléctrico, civil, mecánico) para evitar colisiones y retrasos en la entrega.",
        details: ["Gestión de cronograma (Gantt).", "Coordinación de contratistas.", "Control de presupuesto (Capex)."],
        msg: "Hola Datcer, necesito una PMO para gestionar la construcción de mi Data Center."
    },
    { 
        icon: Fan, 
        color: "text-[#F26722]", 
        bg: "bg-orange-50", 
        title: "Sistemas HVAC", 
        subtitle: "Ingeniería Mecánica",
        text: "Ventilación de misión crítica.",
        deepDescription: "Cálculo e instalación de ductería, chillers y manejadoras. Aseguramos la presurización correcta del plenum y la limpieza del aire mediante filtrado MERV.",
        details: ["Instalación de Chillers.", "Balanceo de cargas térmicas.", "Filtrado de aire de precisión."],
        msg: "Hola Datcer, me interesa la instalación de sistemas HVAC especializados."
    },
    { 
        icon: Ruler, 
        color: "text-[#636466]", 
        bg: "bg-gray-100", 
        title: "Adecuaciones", 
        subtitle: "Reforzamiento Civil",
        text: "Reforzamiento estructural.",
        deepDescription: "Análisis estructural para soportar cargas pesadas (UPS, baterías, generadores). Reforzamiento de losas y construcción de bunkers de seguridad con muros cortafuego.",
        details: ["Cálculo estructural.", "Muros cortafuego RF-120.", "Cimentación para generadores."],
        msg: "Hola Datcer, necesito adecuaciones civiles y reforzamiento estructural."
    },
  ];

  return (
    <section id={SectionId.ENGINEERING} className="pt-24 pb-32 px-6 bg-[#f5f5f7] snap-start">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-semibold text-zinc-900 tracking-tighter mb-6">
                    Ingeniería Civil Especializada.
                </h2>
                <p className="text-2xl text-[#636466] font-medium leading-tight">
                    La fortaleza física que su data center necesita.
                </p>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-[#F26722] uppercase tracking-widest">Servicios Adicionales</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Feature Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {engineeringFeatures.map((item, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => openModal({
                            title: item.title,
                            subtitle: item.subtitle,
                            description: item.deepDescription,
                            details: item.details,
                            icon: <item.icon className={`w-8 h-8 ${item.color}`} />,
                            msg: item.msg
                        })}
                        className="bg-white rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-200 cursor-pointer active:scale-[0.98] group"
                    >
                        <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`w-7 h-7 ${item.color}`} />
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-[#636466] font-medium leading-snug">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Main Visual - The Foundation (Clickable) */}
            <div 
                onClick={() => openModal({
                    title: "Construcción Especializada",
                    subtitle: "Obra Civil Data Center",
                    description: "Construimos para lo invisible. Desde la cimentación hasta los acabados asépticos.",
                    deepDescription: "La obra civil de un Data Center no es construcción convencional. Requiere pisos antiestáticos, pintura epóxica, sellado hermético contra polvo y humedad, y losas capaces de soportar 1,500 kg/m². Nosotros dominamos estos estándares.",
                    details: ["Pisos técnicos elevados.", "Sellado hermético (Vapor Barrier).", "Acabados asépticos Clean Room."],
                    icon: <Building2 className="w-8 h-8 text-[#F26722]" />,
                    msg: "Hola Datcer, quiero cotizar la construcción civil de mi centro de datos."
                })}
                className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-zinc-200 flex flex-col justify-center overflow-hidden relative group cursor-pointer active:scale-[0.99]"
            >
                <div className="relative z-10 max-w-xl">
                    <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">Construimos para lo invisible.</h3>
                    <p className="text-[#636466] text-xl mb-10 leading-relaxed font-medium">
                        Desde la cimentación hasta los acabados asépticos. Aseguramos que la infraestructura física cumpla con la misma excelencia que el hardware que protege.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                                <CheckCircle2 className="w-5 h-5 text-[#F26722]" />
                            </div>
                            <p className="text-zinc-800 font-semibold text-lg">Cargas estructurales para UPS masivos.</p>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                                <CheckCircle2 className="w-5 h-5 text-[#F26722]" />
                            </div>
                            <p className="text-zinc-800 font-semibold text-lg">Hermeticidad y control de partículas.</p>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex items-center text-[#F26722] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                         Ver especificaciones constructivas →
                    </div>
                </div>
                
                {/* Image blended subtly */}
                <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
                    alt="Industrial Engineering" 
                    className="absolute top-0 right-0 w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none grayscale"
                />
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
            whatsappMessage={selectedItem?.msg || 'Hola Datcer.'}
        />
      </div>
    </section>
  );
};

export default EngineeringSection;