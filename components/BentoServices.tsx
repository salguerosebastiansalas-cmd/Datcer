import React, { useState } from 'react';
import { Cpu, Shield, Wind, Server, ClipboardCheck, Leaf, BarChart3, Globe, Zap, Network, Layers, Gauge, FileCheck, Activity, Wrench, CircuitBoard, BoxSelect, FileSpreadsheet, Thermometer, Spline, PencilRuler, Truck, Waves } from 'lucide-react';
import { SectionId } from '../types';
import DetailModal from './DetailModal';

const BentoServices: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Data Definitions
  const mainServices = [
    {
        id: 'arch',
        title: "Diseño integral de los proyectos.",
        subtitle: "Diseño & Planificación",
        description: "Diseñamos el núcleo de su operación. Integración perfecta de potencia, enfriamiento y espacio físico para máxima eficiencia y redundancia.",
        deepDescription: "Nuestro enfoque de diseño va más allá de la estética. Realizamos análisis de dinámica de fluidos computacional (CFD) pre-construcción para garantizar cero puntos calientes. Diseñamos rutas de cableado aéreo y bajo piso falso optimizadas para el flujo de aire.",
        details: [
            "Análisis CFD (Computational Fluid Dynamics).",
            "Diseño de blindaje electromagnético.",
            "Planificación de escalabilidad modular.",
            "Optimización de pasillos fríos y calientes."
        ],
        icon: <Layers className="w-8 h-8 text-[#F26722]" />,
        iconSm: <Layers className="w-8 h-8 text-[#F26722]" />,
        msg: "Hola Datcer, me interesa saber más sobre sus servicios de Diseño integral de proyectos para Data Centers."
    },
    {
        id: 'power',
        title: "Energía Crítica.",
        subtitle: "Potencia & Respaldo",
        description: "Sistemas UPS redundantes, plantas de emergencia y distribución eléctrica inteligente. Garantía de Uptime 99.999%.",
        deepDescription: "Implementamos cadenas de suministro eléctrico robustas. Desde la subestación hasta el PDU del rack. Utilizamos sistemas de transferencia estática (STS) y UPS de doble conversión en topologías 2N o N+1 para asegurar que su carga crítica nunca vea una fluctuación.",
        details: [
            "Topologías 2N y N+1 distribuidas.",
            "Sistemas UPS de doble conversión y Li-Ion.",
            "Tableros de distribución inteligente (RPP).",
            "Generadores con autonomía extendida."
        ],
        icon: <Zap className="w-8 h-8 text-[#F26722]" />,
        iconSm: <Zap className="w-8 h-8 text-[#F26722]" />,
        msg: "Hola Datcer, requiero asesoría sobre sistemas de Energía Crítica y respaldo eléctrico."
    },
    {
        id: 'hvac',
        title: "Climatización.",
        subtitle: "Control Térmico",
        description: "Control térmico de precisión (In-Row / Perimetral) diseñado para entornos de alta densidad y eficiencia energética.",
        deepDescription: "El enfriamiento representa el mayor costo operativo después de la carga IT. Implementamos soluciones de Free-Cooling indirecto y sistemas In-Row de acoplamiento cerrado que ajustan dinámicamente la velocidad de los ventiladores según la carga real del servidor.",
        details: [
            "Sistemas In-Row y Perimetrales de precisión.",
            "Confinamiento de pasillos (Aisle Containment).",
            "Cumplimiento con ASHRAE TC 9.9.",
            "Eficiencia PUE < 1.3 garantizada."
        ],
        icon: <Wind className="w-8 h-8 text-[#636466]" />,
        iconSm: <Wind className="w-8 h-8 text-[#636466]" />,
        msg: "Hola Datcer, me interesa optimizar la Climatización y el PUE de mi centro de datos."
    },
    {
        id: 'sec',
        title: "Seguridad Física.",
        subtitle: "Protección de Activos",
        description: "Protocolos estrictos, accesos biométricos, esclusas mantrap y monitoreo 24/7 para protección de activos.",
        deepDescription: "Aplicamos el concepto de 'Anillos de Seguridad'. Desde el perímetro exterior hasta la jaula del servidor. Integramos control de acceso biométrico vascular, videovigilancia con analítica de comportamiento y sistemas de detección temprana de humo (VESDA).",
        details: [
            "Biometría vascular y facial.",
            "Esclusas Mantrap unipersonales.",
            "Videovigilancia con analítica AI.",
            "Sistemas de extinción por agente limpio (Novec 1230)."
        ],
        icon: <Shield className="w-8 h-8 text-[#F26722]" />,
        iconSm: <Shield className="w-8 h-8 text-[#F26722]" />,
        msg: "Hola Datcer, quiero reforzar la Seguridad Física de mi infraestructura."
    }
  ];

  // Combined Services List
  const secondaryServices = [
    // --- Servicios de Operación y Gestión ---
    { 
        title: "Capacity Planning", 
        icon: BarChart3, 
        details: ["Proyección de crecimiento IT", "Análisis de carga eléctrica futura", "Optimización de espacio en rack", "Planificación de expansión modular"], 
        msg: "Me interesa el servicio de Capacity Planning." 
    },
    { 
        title: "Virtualización", 
        icon: Server, 
        details: ["Consolidación de servidores", "Alta disponibilidad (HA)", "Migración P2V", "Optimización de recursos"], 
        msg: "Quiero información sobre Virtualización de servidores." 
    },
    { 
        title: "Análisis PUE & Eficiencia", 
        icon: Gauge, 
        details: ["Medición de Power Usage Effectiveness", "Detección de ineficiencias energéticas", "Estrategias de ahorro", "Benchmarking"], 
        msg: "Necesito un análisis de PUE y eficiencia energética." 
    },
    { 
        title: "Commissioning (Cx)", 
        icon: FileCheck, 
        details: ["Pruebas de aceptación en sitio (SAT)", "Validación de redundancia", "Protocolos de arranque", "Certificación de operación"], 
        msg: "Requiero servicios de Commissioning (Cx) para mi Data Center." 
    },
    { 
        title: "Monitoreo DCIM", 
        icon: Activity, 
        details: ["Implementación de software DCIM", "Monitoreo ambiental en tiempo real", "Gestión de activos", "Alertas preventivas"], 
        msg: "Información sobre soluciones de Monitoreo DCIM." 
    },
    { 
        title: "Mantenimiento Crítico", 
        icon: Wrench, 
        details: ["Mantenimiento preventivo y correctivo", "Atención de emergencias 24/7", "Limpieza técnica especializada", "Gestión de garantías"], 
        msg: "Quiero cotizar un plan de Mantenimiento Crítico." 
    },

    // --- Servicios de Ingeniería de Diseño ---
    { 
        title: "Diagramas Unifilares", 
        icon: CircuitBoard, 
        details: ["Diseño eléctrico detallado", "Cuadros de cargas y balanceo", "Coordinación de protecciones", "Especificación de UPS/Generadores"], 
        msg: "Requiero diseño de Diagramas Unifilares y Cuadros de Carga." 
    },
    { 
        title: "Planometría & Layout", 
        icon: BoxSelect, 
        details: ["Distribución de planta", "Cortes arquitectónicos", "Ubicación de racks y pasillos", "Rutas de evacuación"], 
        msg: "Necesito apoyo con la Planometría y Layout de mi Data Center." 
    },
    { 
        title: "Memorias de Cálculo", 
        icon: FileSpreadsheet, 
        details: ["Cálculo de conductores y canaletas", "Caída de tensión", "Selección de transformadores", "Justificación técnica normativa"], 
        msg: "Necesito las Memorias de Cálculo para mi proyecto." 
    },
    { 
        title: "Cálculo Térmico", 
        icon: Thermometer, 
        details: ["Estimación de carga térmica (BTU/h)", "Selección de equipos HVAC", "Flujo de aire (CFM)", "Control de humedad"], 
        msg: "Info sobre Cálculo Térmico y selección de aires." 
    },
    { 
        title: "Modelado BIM / Revit", 
        icon: Spline, 
        details: ["Modelado 3D de instalaciones", "Detección de interferencias (Clash)", "Recorridos virtuales", "Planos AS-BUILT"], 
        msg: "Me interesa el servicio de Modelado BIM y Revit MEP." 
    },
    { 
        title: "Sistemas de Tierras", 
        icon: PencilRuler, 
        details: ["Diseño de malla de tierra", "Equipotencialidad en racks", "Protección contra rayos", "Medición de resistividad"], 
        msg: "Requiero diseño de Sistemas de Puesta a Tierra." 
    },
    { 
        title: "Cableado Estructurado", 
        icon: Network, 
        details: ["Diseño de rutas de fibra/cobre", "Cálculo de escalerillas", "Topología Spine-Leaf", "Diagramas de conexión"], 
        msg: "Info sobre diseño de Cableado Estructurado." 
    },
    { 
        title: "Detección Incendios", 
        icon: Shield, 
        details: ["Matriz de causa-efecto", "Isométricos de tubería", "Cálculo de agente limpio", "Ubicación de sensores"], 
        msg: "Info sobre diseño de Detección y Extinción de Incendios." 
    },
    // --- Servicios Adicionales (Nuevos) ---
    {
        title: "Calidad de Energía",
        icon: Waves,
        details: ["Análisis de armónicos (THD)", "Corrección de factor de potencia", "Estudios de transientes", "Cumplimiento IEEE 519"],
        msg: "Requiero un estudio de Calidad de Energía para mi red."
    },
    {
        title: "Migración de Data Center",
        icon: Truck,
        details: ["Planificación logística detallada", "Movimiento de activos críticos", "Seguros de carga especializada", "Desmontaje y montaje certificado"],
        msg: "Necesito cotizar una Migración de Data Center."
    }
  ];

  return (
    <section id={SectionId.SERVICES} className="pt-24 pb-40 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-semibold text-zinc-900 tracking-tighter mb-8">
            Expertise.
          </h2>
          <p className="text-3xl md:text-4xl text-[#636466] max-w-4xl font-semibold tracking-tight leading-tight">
            Dos pilares fundamentales. <span className="text-[#F26722]">Un ecosistema de continuidad total.</span>
          </p>
        </div>

        {/* Section 1: Design */}
        <div className="mb-40">
            <div className="flex items-baseline gap-4 mb-10 border-b border-zinc-200 pb-6">
                <span className="text-sm font-bold bg-[#636466] text-white px-3 py-1 rounded-full uppercase tracking-wider">01</span>
                <h3 className="text-4xl font-semibold text-zinc-900 tracking-tight">Diseño de Data Centers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {mainServices.map((service) => (
                    <div 
                        key={service.id}
                        onClick={() => openModal(service)}
                        className="bg-zinc-50 border border-zinc-200 shadow-md rounded-[2.5rem] p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer active:scale-[0.98]"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">
                            {service.iconSm}
                        </div>
                        <h4 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                            {service.title}
                        </h4>
                        <p className="text-[#636466] text-lg font-medium leading-relaxed">
                            {service.description}
                        </p>
                        <div className="mt-6 flex items-center text-[#F26722] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Ver detalles <span className="ml-1 text-lg">→</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Small Features Row - Grid 4x4 for full coverage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {secondaryServices.map((item, i) => (
                     <div 
                        key={i} 
                        onClick={() => openModal({
                            title: item.title,
                            subtitle: "Servicio Especializado",
                            description: "Soluciones técnicas de alta precisión para la infraestructura y operación de Data Centers.",
                            deepDescription: `Nuestro servicio de ${item.title} está diseñado para cumplir con los más altos estándares de disponibilidad y eficiencia operativa.`,
                            details: item.details,
                            icon: <item.icon className="w-8 h-8 text-[#F26722]" />,
                            msg: item.msg
                        })}
                        className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer active:scale-[0.98] group"
                    >
                        <item.icon className="w-5 h-5 text-[#636466] group-hover:text-[#F26722] transition-colors shrink-0" />
                        <span className="font-semibold text-zinc-700 text-sm group-hover:text-zinc-900 transition-colors leading-tight">{item.title}</span>
                     </div>
                 ))}
            </div>
        </div>

        {/* Section 2: Consulting */}
        <div>
            <div className="flex items-baseline gap-4 mb-10 border-b border-zinc-200 pb-6">
                <span className="text-sm font-bold bg-[#636466] text-white px-3 py-1 rounded-full uppercase tracking-wider">02</span>
                <h3 className="text-4xl font-semibold text-zinc-900 tracking-tight">Consultoría Estratégica</h3>
            </div>

            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h4 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tighter leading-tight">
                            Certidumbre <br/>
                            <span className="text-[#98989d]">Operativa.</span>
                        </h4>
                        <p className="text-zinc-300 text-xl font-light leading-relaxed mb-10 max-w-md">
                            No solo entregamos informes. Entregamos la tranquilidad de saber que su infraestructura cumple con los estándares globales más rigurosos.
                        </p>
                        
                        <div className="space-y-6">
                            <div 
                                className="flex gap-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-colors -ml-4"
                                onClick={() => openModal({
                                    title: "Evaluación de Sitios",
                                    subtitle: "Site Assessment",
                                    description: "Selección geográfica basada en latencia y riesgos naturales.",
                                    deepDescription: "Realizamos un análisis exhaustivo de riesgos geológicos, hidrológicos y antrópicos. Evaluamos la calidad de la red eléctrica local y la conectividad de fibra óptica disponible antes de poner la primera piedra.",
                                    details: ["Análisis de riesgos naturales.", "Disponibilidad de Carrier Neutral.", "Estabilidad de la red eléctrica."],
                                    icon: <Globe className="w-8 h-8 text-[#F26722]" />,
                                    msg: "Hola, requiero una Evaluación de Sitio para un nuevo proyecto."
                                })}
                            >
                                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 shadow-lg">
                                    <Globe className="w-6 h-6 text-[#F26722]" />
                                </div>
                                <div>
                                    <strong className="block text-white text-lg mb-1">Evaluación de Sitios</strong>
                                    <span className="text-zinc-400 text-sm leading-relaxed block">Selección geográfica basada en latencia y riesgos naturales.</span>
                                </div>
                            </div>
                            
                            <div 
                                className="flex gap-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-colors -ml-4"
                                onClick={() => openModal({
                                    title: "Optimización Operativa",
                                    subtitle: "Eficiencia & PUE",
                                    description: "Refinamiento de procesos para reducir el PUE y costos operativos.",
                                    deepDescription: "Auditamos sus instalaciones actuales para detectar fugas de aire, ineficiencias en UPS y puntos de mejora en la configuración térmica. El objetivo: reducir el OPEX sin sacrificar disponibilidad.",
                                    details: ["Cálculo y reducción de PUE.", "Ajuste de Set-Points térmicos.", "Balanceo de cargas eléctricas."],
                                    icon: <Cpu className="w-8 h-8 text-[#F26722]" />,
                                    msg: "Hola, me interesa optimizar la operación de mi Data Center actual."
                                })}
                            >
                                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 shadow-lg">
                                    <Cpu className="w-6 h-6 text-[#F26722]" />
                                </div>
                                <div>
                                    <strong className="block text-white text-lg mb-1">Optimización</strong>
                                    <span className="text-zinc-400 text-sm leading-relaxed block">Refinamiento de procesos para reducir el PUE.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Compliance Card */}
                        <div 
                            onClick={() => openModal({
                                title: "Compliance & Normativa",
                                subtitle: "Auditoría Estándar",
                                description: "Auditoría y alineación total con estándares TIA-942, ICREA y Uptime Institute.",
                                deepDescription: "Preparamos su infraestructura para la certificación. Revisamos planos, diagramas unifilares y memorias de cálculo contra los checklists oficiales de los organismos internacionales.",
                                details: ["Gap Analysis TIA-942.", "Preparación para ISO 27001.", "Revisión de topología Uptime."],
                                icon: <ClipboardCheck className="w-8 h-8 text-[#F26722]" />,
                                msg: "Hola, necesito apoyo con el Compliance y certificación de mi DC."
                            })}
                            className="bg-zinc-800/80 backdrop-blur-sm rounded-[2rem] p-8 border border-zinc-600 hover:border-[#F26722] transition-colors shadow-xl cursor-pointer active:scale-[0.98] group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h5 className="text-2xl font-semibold text-white">Compliance</h5>
                                <ClipboardCheck className="w-8 h-8 text-[#F26722] group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Auditoría y alineación total con estándares <span className="text-white font-medium">TIA-942</span>, <span className="text-white font-medium">ICREA</span> y <span className="text-white font-medium">Uptime Institute</span>.
                            </p>
                        </div>

                        {/* Green IT Card */}
                        <div 
                            onClick={() => openModal({
                                title: "Green IT & Sostenibilidad",
                                subtitle: "Eficiencia Energética",
                                description: "Estrategias de sostenibilidad para la reducción de huella de carbono y eficiencia energética.",
                                deepDescription: "El futuro es verde. Diseñamos estrategias para la recuperación de calor, uso de energías renovables y reducción del consumo de agua (WUE), alineando su data center con los objetivos ESG corporativos.",
                                details: ["Reducción de huella de carbono.", "Sistemas de Free-Cooling.", "Gestión de residuos electrónicos."],
                                icon: <Leaf className="w-8 h-8 text-[#29CC46]" />,
                                msg: "Hola, quiero implementar estrategias de Green IT en mi infraestructura."
                            })}
                            className="bg-zinc-800/80 backdrop-blur-sm rounded-[2rem] p-8 border border-zinc-600 hover:border-[#29CC46] transition-colors shadow-xl cursor-pointer active:scale-[0.98] group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h5 className="text-2xl font-semibold text-white">Green IT</h5>
                                <Leaf className="w-8 h-8 text-[#29CC46] group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Estrategias de sostenibilidad para la reducción de huella de carbono y eficiencia energética.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Render Modal */}
        <DetailModal 
            isOpen={!!selectedItem}
            onClose={closeModal}
            title={selectedItem?.title || ''}
            subtitle={selectedItem?.subtitle || 'Información Detallada'}
            description={selectedItem?.deepDescription || selectedItem?.description || ''}
            details={selectedItem?.details || []}
            icon={selectedItem?.icon}
            whatsappMessage={selectedItem?.msg || 'Hola Datcer.'}
            theme={selectedItem?.id === 'compliance' || selectedItem?.id === 'green' ? 'dark' : 'light'}
        />

      </div>
    </section>
  );
};

export default BentoServices;