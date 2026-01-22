import React, { useState } from 'react';
import { Users, Briefcase, Target, Eye, ChevronRight } from 'lucide-react';
import DetailModal from './DetailModal';

const AboutSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = [
    {
      title: "Quiénes Somos",
      subtitle: "Identidad Corporativa",
      icon: Users,
      shortText: "Ingeniería de precisión para la economía digital.",
      description: "Datcer es una firma de ingeniería especializada en infraestructura de misión crítica. Nos dedicamos a diseñar, auditar y materializar los centros de datos que impulsan el mundo actual. No somos solo consultores; somos arquitectos de la continuidad operativa.",
      details: [
        "Especialistas certificados TIA-942.",
        "Experiencia en proyectos Tier III y IV.",
        "Enfoque en alta disponibilidad y eficiencia."
      ],
      whatsappMessage: "Hola, me gustaría conocer más sobre la trayectoria de Datcer."
    },
    {
      title: "Qué Hacemos",
      subtitle: "Nuestro Core",
      icon: Briefcase,
      shortText: "Soluciones integrales de infraestructura crítica.",
      description: "Transformamos necesidades complejas en infraestructura resiliente. Abarcamos todo el ciclo de vida del Data Center: desde la consultoría estratégica y el diseño conceptual, hasta la ingeniería de detalle, construcción y certificación internacional.",
      details: [
        "Diseño y Construcción (Design-Build).",
        "Consultoría y Certificación (Uptime/ICREA).",
        "Auditoría Técnica y Commissioning."
      ],
      whatsappMessage: "Hola, quiero saber más sobre los servicios que ofrece Datcer."
    },
    {
      title: "Misión",
      subtitle: "Nuestro Propósito",
      icon: Target,
      shortText: "Garantizar la continuidad operativa absoluta.",
      description: "Nuestra misión es proveer soluciones de ingeniería que blinden la operación de nuestros clientes. Nos comprometemos a entregar infraestructura que no solo cumpla con los estándares, sino que optimice la inversión (CAPEX) y reduzca los costos operativos (OPEX) a largo plazo.",
      details: [
        "Excelencia técnica innegociable.",
        "Innovación en eficiencia energética.",
        "Compromiso total con el SLA del cliente."
      ],
      whatsappMessage: "Hola, me interesa saber cómo Datcer garantiza la continuidad operativa."
    },
    {
      title: "Visión",
      subtitle: "Hacia el Futuro",
      icon: Eye,
      shortText: "Ser el referente en ingeniería de Data Centers.",
      description: "Aspiramos a ser la firma de referencia en Latinoamérica para el diseño de infraestructura digital. Buscamos liderar la transición hacia Data Centers más sostenibles, densos y automatizados, estableciendo nuevos estándares de calidad en la región.",
      details: [
        "Liderazgo en sostenibilidad (Green IT).",
        "Innovación en tecnologías de enfriamiento.",
        "Expansión y reconocimiento regional."
      ],
      whatsappMessage: "Hola, quiero conocer la visión de futuro de Datcer."
    }
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-[2rem] p-8 text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-zinc-100 flex flex-col h-full relative overflow-hidden active:scale-[0.98]"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-[#F26522]" />
              </div>

              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#636466] group-hover:text-[#F26522] transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-[#636466] font-medium leading-relaxed group-hover:text-zinc-900 transition-colors duration-300">
                {item.shortText}
              </p>
            </button>
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        subtitle={selectedItem?.subtitle || ''}
        description={selectedItem?.description || ''}
        details={selectedItem?.details || []}
        icon={selectedItem ? <selectedItem.icon className="w-8 h-8 text-[#F26522]" /> : null}
        whatsappMessage={selectedItem?.whatsappMessage || ''}
      />
    </section>
  );
};

export default AboutSection;