import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Phone, MessageSquare, ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-8 pb-16">
      {/* Background High Quality Commercial Electrical Panel Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=85"
          alt="Tablero eléctrico moderno y limpio de alta precisión"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered dark gradients for maximum contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-950/85 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(38,38,38,0.6),transparent_50%)]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Authorised Certification Chip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#CBD5E1]/30 text-[#E2E8F0] text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/50 backdrop-blur-sm"
        >
          <Award className="w-4 h-4 text-[#CBD5E1]" />
          <span>Instalador Electricista Autorizado • REBT & Boletines Oficiales</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></span>
          <span className="hidden sm:inline-block text-neutral-300">N° {COMPANY_INFO.licenseNumber.split(' ')[0]}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl font-heading leading-tight mb-6"
        >
          Instalaciones Eléctricas, Cuadros Modernos y Seguridad Garantizada
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mb-10 leading-relaxed font-normal"
        >
          Servicio técnico profesional de electricidad para hogares, locales y naves industriales.
          Especialistas en montaje de tableros eléctricos ordenados, legalizaciones CIE, recarga de vehículos eléctricos y atención de averías.
        </motion.p>

        {/* Action Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-2xl mb-12"
        >
          <button
            id="hero-quote-btn"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 text-neutral-950 font-bold text-base hover:from-white hover:to-slate-200 shadow-xl shadow-slate-300/10 transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer border border-slate-200/50"
          >
            <span>Pedir Presupuesto Gratuito</span>
            <ArrowRight className="w-5 h-5 text-neutral-950" />
          </button>

          <a
            id="hero-whatsapp-link"
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Eugenio, deseo solicitar un presupuesto para una instalación/reparación eléctrica.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#CBD5E1]/60 text-white font-semibold text-base hover:bg-neutral-800 transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-black/50"
          >
            <MessageSquare className="w-5 h-5 text-[#CBD5E1]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-neutral-400 mb-14"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
            <span>Materiales Homologados de Primeras Marcas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
            <span>Presupuestos Cerrados Sin Sorpresas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
            <span>Garantía Oficial por Escrito</span>
          </div>
        </motion.div>

        {/* Key Numerical Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-900"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E2E8F0] font-heading mb-1">+15</div>
            <div className="text-sm font-semibold text-white">Años de Trayectoria</div>
            <div className="text-xs text-neutral-400">Instalaciones seguras y certificadas</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-1">+2.500</div>
            <div className="text-sm font-semibold text-white">Trabajos Realizados</div>
            <div className="text-xs text-neutral-400">En hogares, comercios e industrias</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E2E8F0] font-heading mb-1 flex items-center gap-1">
              <span>4.9</span>
              <span className="text-xl text-[#CBD5E1]">★</span>
            </div>
            <div className="text-sm font-semibold text-white">En Google Reviews</div>
            <div className="text-xs text-neutral-400">+148 opiniones verificadas</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-1 flex items-center gap-1.5">
              <span>Prioritaria</span>
            </div>
            <div className="text-sm font-semibold text-white">Atención de Urgencias</div>
            <div className="text-xs text-neutral-400">Urgencias diurnas y averías</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
