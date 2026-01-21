import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Loader2, Bot, ArrowUp } from 'lucide-react';
import { SectionId, ChatMessage } from '../types';
import { generateDatcerResponse } from '../services/geminiService';

const DatcerAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola, es un gusto saludarte. Soy el asistente de ingeniería de Datcer. ¿En qué puedo apoyarte hoy con tu proyecto de Data Center?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    const responseText = await generateDatcerResponse(query);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper function to detect URLs and convert them to clickable links
  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F26722] underline hover:text-white transition-colors font-bold break-all"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id={SectionId.AI} className="pt-24 pb-32 px-6 bg-[#1d1d1f] text-white relative overflow-hidden">
      
      {/* Siri/Apple Intelligence style glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#2a2a2f_100%)] animate-[spin_10s_linear_infinite] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1d1d1f] via-zinc-900 to-[#1d1d1f] z-0 pointer-events-none" />
      
      {/* Color Orbs - Adjusted to Brand Colors */}
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#F26722]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#636466]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Sparkles className="w-4 h-4 text-[#F26722]" />
            <span className="text-xs font-semibold text-zinc-200 uppercase tracking-widest">Datcer Intelligence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500 pb-4">
            Consultoría <br />
            al instante.
          </h2>
          <p className="text-xl text-zinc-400 mt-6 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
            Resuelve dudas sobre normativas, enfriamiento o solicita una cotización con nuestra IA entrenada.
          </p>
        </div>

        {/* Right Side: Glass Chat Interface */}
        <div className="flex-1 w-full max-w-md">
            <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl shadow-black/40 h-[600px] flex flex-col overflow-hidden relative group transition-all duration-500 hover:border-white/20">
            
                {/* Glowing edge effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#F26722]/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar scroll-smooth" ref={scrollRef}>
                    {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                        <div 
                        className={`
                            max-w-[85%] px-6 py-4 rounded-3xl text-[15px] leading-relaxed font-medium shadow-sm whitespace-pre-wrap
                            ${msg.role === 'user' 
                            ? 'bg-[#F26722] text-white'  // User Bubble: Brand Orange
                            : 'bg-zinc-800/80 text-zinc-100 border border-white/5'} // AI Bubble: Dark Gray
                        `}
                        >
                        {msg.role === 'model' && <Bot className="w-4 h-4 mb-2 text-[#636466]" />}
                        {renderMessageText(msg.text)}
                        </div>
                    </div>
                    ))}
                    {loading && (
                    <div className="flex justify-start animate-pulse">
                        <div className="bg-zinc-800/80 px-6 py-4 rounded-3xl flex gap-3 items-center border border-white/5">
                        <Loader2 className="w-4 h-4 animate-spin text-[#F26722]" />
                        <span className="text-zinc-400 text-sm">Escribiendo...</span>
                        </div>
                    </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-zinc-900/60 backdrop-blur-xl border-t border-white/5">
                    <div className="relative flex items-center bg-black/50 border border-white/10 rounded-full px-2 py-2 focus-within:border-[#F26722]/50 transition-all duration-300 shadow-inner">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Pregunta a Datcer..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 h-10 px-4 font-medium"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={loading || !query.trim()}
                        className="w-10 h-10 rounded-full bg-[#F26722] hover:bg-[#d95513] disabled:bg-zinc-800 disabled:text-zinc-600 text-white flex items-center justify-center transition-all active:scale-95"
                    >
                        <ArrowUp className="w-5 h-5 font-bold" />
                    </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default DatcerAI;