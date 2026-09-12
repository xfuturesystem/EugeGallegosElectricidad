import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, ThumbsUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS, COMPANY_INFO } from '../data/content';

export const GoogleReviewsSection: React.FC = () => {
  const getInitials = (name: string) => {
    return name
      .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join('');
  };

  return (
    <section id="resenas-google" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Official Google Style Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-neutral-900">
          
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-4">
              <span className="flex items-center font-bold">
                <span className="text-blue-400">G</span>
                <span className="text-red-400">o</span>
                <span className="text-slate-200">o</span>
                <span className="text-blue-400">g</span>
                <span className="text-green-400">l</span>
                <span className="text-red-400">e</span>
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-[#E2E8F0]">Reseñas Verificadas</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
              La Opinión de Nuestros Clientes en Google
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              La satisfacción de quienes confían en nosotros es nuestro mayor aval. Descubre por qué mantenemos una puntuación sobresaliente.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="flex-shrink-0 p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-5xl font-extrabold text-white font-heading">{COMPANY_INFO.googleRating}</span>
                <div className="flex flex-col">
                  <div className="flex items-center text-[#CBD5E1]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#CBD5E1] text-[#CBD5E1]" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 mt-1">Excelente en Google</span>
                </div>
              </div>
              <div className="text-xs text-neutral-400 mt-2">
                Basado en <strong>{COMPANY_INFO.googleReviewsCount} reseñas</strong> de clientes reales
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-200/50 shadow-md shadow-slate-300/10"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver en Google Maps</span>
              </a>
            </div>

          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GOOGLE_REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* User Info Header with Initials Badge (No photo) */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-800 to-neutral-900 border border-slate-700/80 flex items-center justify-center text-xs font-bold text-[#E2E8F0] shadow-inner tracking-wider">
                      {getInitials(rev.author)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                        {rev.isLocalGuide && (
                          <span className="text-[#E2E8F0] font-semibold flex items-center gap-0.5">
                            ★ Local Guide ({rev.reviewCount})
                          </span>
                        )}
                        <span>•</span>
                        <span>{rev.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G mini badge */}
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold">
                    <span className="text-blue-400">G</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#CBD5E1] text-[#CBD5E1]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified badge bottom */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1 text-green-400 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Reseña verificada</span>
                </span>
                <span className="flex items-center gap-1 text-neutral-400 text-[11px]">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Útil</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Link Banner to Google Business */}
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-slate-800 text-[#E2E8F0]">
              <ShieldCheck className="w-6 h-6 text-[#CBD5E1]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Opiniones 100% Reales y Auditadas en Google</div>
              <div className="text-xs text-neutral-400">Todas las valoraciones corresponden a clientes reales con trabajos certificados en Bizkaia.</div>
            </div>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-semibold text-xs transition-colors whitespace-nowrap border border-neutral-700 flex items-center gap-2"
          >
            <span>Ver perfil en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
