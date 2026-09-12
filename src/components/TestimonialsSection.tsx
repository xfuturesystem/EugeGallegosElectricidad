import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, UserCheck, Sparkles, Building, Home, Factory } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const getInitials = (name: string) => {
    return name
      .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join('');
  };

  const getProjectIcon = (projectType: string) => {
    if (projectType.includes('Industrial') || projectType.includes('Trifásicos')) {
      return <Factory className="w-4 h-4 text-[#CBD5E1]" />;
    }
    if (projectType.includes('Comunidad') || projectType.includes('Contadores')) {
      return <Building className="w-4 h-4 text-[#CBD5E1]" />;
    }
    return <Home className="w-4 h-4 text-[#CBD5E1]" />;
  };

  return (
    <section id="testimonios" className="py-24 bg-neutral-900/30 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Casos de Éxito & Clientes Satisfechos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Historias Reales de Confianza y Seguridad
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Testimonios de propietarios, comunidades de vecinos y directores técnicos que han transformado sus instalaciones con nosotros.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#CBD5E1]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-6 text-neutral-800 group-hover:text-[#CBD5E1]/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* Project Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 mb-6">
                  {getProjectIcon(item.projectType)}
                  <span className="truncate max-w-[200px]">{item.projectType}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#CBD5E1] text-[#CBD5E1]" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer (No photo, initials badge) */}
              <div className="pt-6 border-t border-neutral-900 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-neutral-900 border border-slate-700/80 flex items-center justify-center text-sm font-bold text-[#E2E8F0] shadow-inner tracking-wider flex-shrink-0">
                  {getInitials(item.author)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-heading">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#E2E8F0] font-medium">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {item.location} • {item.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Sin Desorden</div>
              <div className="text-xs text-neutral-400">Dejamos todo limpio y recogido tras finalizar</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Trato Directo</div>
              <div className="text-xs text-neutral-400">Hablas directamente con el instalador técnico</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Garantía Certificada</div>
              <div className="text-xs text-neutral-400">Cobertura total en materiales y mano de obra</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
