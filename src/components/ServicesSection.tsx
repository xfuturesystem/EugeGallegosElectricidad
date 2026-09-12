import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Home, FileCheck, AlertTriangle, BatteryCharging, Cpu, ArrowRight, Check, X, Shield, Phone, MessageSquare } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#CBD5E1]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#CBD5E1]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#CBD5E1]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-[#CBD5E1]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-[#CBD5E1]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#CBD5E1]" />;
      default:
        return <Zap className="w-6 h-6 text-[#CBD5E1]" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Nuestros Servicios Eléctricos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Soluciones Integrales para Todo Tipo de Instalaciones
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Desde la instalación de un cuadro eléctrico moderno hasta la legalización de boletines y cargadores de vehículos eléctricos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#CBD5E1]/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-slate-300/5"
            >
              {/* Image Preview Header */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                
                {/* Badge if available */}
                {service.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/90 border border-[#CBD5E1]/40 text-[#E2E8F0] text-[11px] font-bold tracking-wide backdrop-blur-sm">
                    {service.badge}
                  </div>
                )}

                {/* Icon Container */}
                <div className="absolute -bottom-4 left-6 p-3 rounded-xl bg-neutral-950 border border-neutral-800 shadow-xl group-hover:border-[#CBD5E1] transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 pt-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E2E8F0] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Quick Feature Checklist */}
                <ul className="space-y-1.5 pt-2 border-t border-neutral-800/80">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-[#CBD5E1] flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#CBD5E1] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Ver detalles técnicos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-slate-200 hover:text-neutral-950 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgencias Diurnas Banner Highlight */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/70 via-neutral-900 to-neutral-950 border border-red-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                Servicio de Urgencias Diurnas
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
                ¿Te has quedado sin luz o huele a quemado en el cuadro eléctrico?
              </h4>
              <p className="text-sm text-neutral-300 mt-1">
                Disponemos de instrumental especializado para localizar y solucionar la avería con la máxima prioridad.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Llamar Urgencias: {COMPANY_INFO.phoneEmergency}</span>
            </a>
            
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('URGENCIA ELÉCTRICA: Necesito asistencia inmediata.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-[#CBD5E1] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#CBD5E1]" />
              <span>WhatsApp Urgente</span>
            </a>
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-48 w-full bg-neutral-950 overflow-hidden">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950/80 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950">
                      {getServiceIcon(selectedService.iconName)}
                    </span>
                    {selectedService.badge && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-[#E2E8F0] border border-slate-700">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                    Descripción Técnica del Servicio
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-3">
                    Alcance & Trabajos Incluidos
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800">
                        <Check className="w-4 h-4 text-[#CBD5E1] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#CBD5E1] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-300">
                    <span className="font-semibold text-white">Garantía y Normativa: </span>
                    Cumplimiento íntegro del REBT. Seguro de Responsabilidad Civil y garantía oficial de 3 años por escrito en instalaciones y materiales.
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Cerrar
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola Eugenio, me interesa solicitar presupuesto para: ${selectedService.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 hover:border-[#CBD5E1] hover:text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#CBD5E1]" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onSelectServiceForQuote(title);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-slate-300/10 border border-slate-200/50"
                  >
                    <span>Solicitar Presupuesto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
