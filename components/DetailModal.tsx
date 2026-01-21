import React, { useEffect } from 'react';
import { X, MessageCircle, ChevronRight, Check } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon?: React.ReactNode;
  whatsappMessage: string;
  theme?: 'dark' | 'light';
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  description, 
  details,
  icon,
  whatsappMessage,
  theme = 'light'
}) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#1d1d1f]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-[#1d1d1f]';
  const subTextColor = isDark ? 'text-zinc-400' : 'text-[#636466]';
  const borderColor = isDark ? 'border-white/10' : 'border-zinc-200';

  const whatsappUrl = `https://wa.me/573024845350?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`
          relative w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden
          transform transition-all duration-300 scale-100 opacity-100
          ${bgColor} ${borderColor} border
          animate-fade-in-up
        `}
        style={{ maxHeight: '90vh' }}
      >
        
        {/* Header Image/Icon Area (Abstract Gradient) */}
        <div className="h-32 bg-gradient-to-br from-zinc-100 to-zinc-200 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(#F26722 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
             />
             {/* Large faded icon in background */}
             <div className="absolute right-[-20px] bottom-[-20px] opacity-5 scale-[2.5] text-zinc-900">
                {icon}
             </div>
             
             {/* Center Icon */}
             <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative z-10">
                {icon}
             </div>

             {/* Close Button */}
             <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors z-20"
             >
                <X className="w-4 h-4 text-zinc-600" />
             </button>
        </div>

        {/* Body Content */}
        <div className="p-8 md:p-10 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 128px)' }}>
            
            <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${isDark ? 'text-[#F26722]' : 'text-[#F26722]'}`}>
                {subtitle}
            </span>
            
            <h3 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight leading-tight ${textColor}`}>
                {title}
            </h3>

            <p className={`text-lg leading-relaxed mb-8 font-medium ${subTextColor}`}>
                {description}
            </p>

            {/* Technical Details List */}
            <div className={`mb-10 p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/5' : 'bg-zinc-50 border border-zinc-100'}`}>
                <h4 className={`text-sm font-bold uppercase tracking-wide mb-4 ${textColor}`}>Especificaciones Técnicas</h4>
                <ul className="space-y-3">
                    {details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-4 h-4 rounded-full bg-[#29CC46]/20 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-[#29CC46] stroke-[3]" />
                            </div>
                            <span className={`text-sm ${subTextColor}`}>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Button */}
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#F26722] hover:bg-[#d95513] text-white py-4 rounded-2xl transition-all shadow-lg hover:shadow-orange-500/20 hover:scale-[1.01] active:scale-[0.98] group"
            >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span className="font-semibold text-lg">Consultar Especialista</span>
                <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>

        </div>

      </div>
    </div>
  );
};

export default DetailModal;