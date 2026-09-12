import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Scale, FileText, Calendar, Building2, Mail, Phone, ExternalLink } from 'lucide-react';
import { AVISO_LEGAL, POLITICA_PRIVACIDAD } from '../data/legal';

export type LegalModalType = 'aviso-legal' | 'privacidad';

interface LegalModalProps {
  isOpen: boolean;
  type: LegalModalType | null;
  onClose: () => void;
  onSelectType: (type: LegalModalType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
  onSelectType,
}) => {
  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const activeDoc = type === 'aviso-legal' ? AVISO_LEGAL : POLITICA_PRIVACIDAD;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden my-auto"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-800 bg-neutral-950/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 text-[#CBD5E1]">
                  {type === 'aviso-legal' ? (
                    <Scale className="w-5 h-5 text-[#CBD5E1]" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-[#CBD5E1]" />
                  )}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#CBD5E1] tracking-wide uppercase mb-0.5">
                    <span>Legislación Española Vigente</span>
                  </div>
                  <h2
                    id="legal-modal-title"
                    className="text-lg sm:text-xl font-bold text-white font-heading"
                  >
                    {activeDoc.title}
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="self-end sm:self-auto p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-neutral-700"
                aria-label="Cerrar ventana legal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Switch Tabs */}
            <div className="px-5 sm:px-6 pt-3 pb-2 bg-neutral-950/50 border-b border-neutral-800/60 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectType('aviso-legal')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  type === 'aviso-legal'
                    ? 'bg-slate-200 text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Aviso Legal (LSSI-CE)</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectType('privacidad')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  type === 'privacidad'
                    ? 'bg-slate-200 text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Política de Privacidad (RGPD)</span>
              </button>
            </div>

            {/* Modal Body - Scrollable Text */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-neutral-300 text-sm leading-relaxed scrollbar-thin">
              {/* Introduction Card */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="font-medium text-neutral-300">
                    {activeDoc.subtitle}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Marco regulatorio: <strong className="text-neutral-400">{activeDoc.lawReference}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#CBD5E1] bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800 flex-shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Actualizado: {activeDoc.lastUpdated}</span>
                </div>
              </div>

              {/* Sections Rendered */}
              <div className="space-y-6">
                {activeDoc.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-800/80 space-y-2.5"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white font-heading flex items-center gap-2">
                      <span className="w-1.5 h-4 rounded-full bg-[#CBD5E1]" />
                      <span>{section.title}</span>
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {section.content.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className={
                            paragraph.startsWith('•')
                              ? 'pl-2 text-neutral-200'
                              : 'leading-relaxed'
                          }
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Help footer notice inside modal */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Building2 className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
                  <span>Eugenio Gallegos Electricidad • N° Instalador 48/CCBT/-6418</span>
                </div>
                <a
                  href="mailto:eugenioelectricistaautorizado@gmail.com"
                  className="text-[#CBD5E1] hover:underline flex items-center gap-1 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>eugenioelectricistaautorizado@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
              <div className="text-[11px] text-neutral-500">
                Documentación redactada conforme a la normativa española y europea.
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors cursor-pointer border border-neutral-700"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
