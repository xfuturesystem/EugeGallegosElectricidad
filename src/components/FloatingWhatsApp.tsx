import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickOptions = [
    'Hola Eugenio, necesito presupuesto para un cuadro eléctrico nuevo.',
    'Hola, tengo una avería eléctrica urgente y necesito asistencia.',
    'Hola, solicito información para instalar un cargador de coche eléctrico.',
    'Hola, necesito tramitar un boletín eléctrico (CIE).',
  ];

  const handleSend = (text: string) => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-neutral-950 p-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-neutral-950 font-bold">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-neutral-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Eugenio Gallegos
                </h4>
                <p className="text-[11px] text-green-400 font-medium">
                  ● En línea (Atención directa)
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick presets */}
          <div className="p-4 bg-neutral-900/90 space-y-2 max-h-60 overflow-y-auto">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
              Selecciona una consulta rápida:
            </div>
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSend(opt)}
                className="w-full text-left p-2.5 rounded-xl bg-neutral-950/70 hover:bg-neutral-800 border border-neutral-800 hover:border-slate-400/50 text-xs text-neutral-200 transition-all flex items-start gap-2 group cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-[#CBD5E1] flex-shrink-0 mt-0.5" />
                <span className="group-hover:text-white">{opt}</span>
              </button>
            ))}
          </div>

          {/* Custom input bar */}
          <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje personal..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg);
                }
              }}
              className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500"
            />
            <button
              onClick={() => customMsg.trim() && handleSend(customMsg)}
              className="p-2 rounded-lg bg-green-500 text-neutral-950 hover:bg-green-400 transition-colors"
              title="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Pulsing indicator */}
        <span className="absolute -inset-1 rounded-full bg-green-500/40 animate-ping duration-1000 pointer-events-none" />

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-neutral-950 shadow-2xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer focus:outline-none"
          aria-label="Abrir chat de WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-7 h-7 fill-current" />
          )}
          
          {/* Notification badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-200 border-2 border-neutral-950 text-[10px] font-extrabold flex items-center justify-center text-neutral-950">
              1
            </span>
          )}
        </button>
      </div>

    </div>
  );
};
