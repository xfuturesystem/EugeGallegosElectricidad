import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, CheckCircle2, Wrench, FileSpreadsheet, Sparkles, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="nosotros" className="py-20 bg-neutral-900/40 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Trayectoria & Compromiso</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Electricistas Autorizados con Pasión por el Orden y la Seguridad
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            En <span className="text-white font-medium">{COMPANY_INFO.name}</span> transformamos la complejidad de la electricidad en instalaciones limpias, seguras, eficientes y rigurosamente normadas.
          </p>
        </div>

        {/* Content Grid: Story + Feature Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Ingeniero electricista instalando tablero técnico de alta precisión"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Registro de Industria</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.licenseNumber}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge floating */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-neutral-950 border border-[#CBD5E1]/40 p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-lg font-heading">
                <Sparkles className="w-5 h-5 text-[#CBD5E1]" />
                <span>100% Homologado</span>
              </div>
              <div className="text-xs text-neutral-400">Normativa REBT Vigente</div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Artesanía técnica en cada cable, cada borne y cada diferencial
            </h3>
            
            <p className="text-neutral-300 leading-relaxed">
              Con más de quince años en el sector eléctrico, hemos consolidado una reputación basada en la <strong>precisión absoluta</strong>, el <strong>respeto por los plazos</strong> y la <strong>limpieza impecable</strong> de nuestros montajes. No nos limitamos a que una instalación "funcione"; nos aseguramos de que cada conductor esté peinado con pulcritud milimétrica, dimensionado con holgura térmica y rotulado para que cualquier intervención futura sea inmediata y segura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1]" />
                  <span>Equipos Schneider & Hager</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Trabajamos exclusivamente con componentes de primera calidad para garantizar una vida útil superior a 25 años.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-sm mb-1.5">
                  <Wrench className="w-4 h-4 text-[#CBD5E1]" />
                  <span>Instrumental de Calibración</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Comprobadores de aislamiento, telurómetros para tomas de tierra y cámaras termográficas para detectar puntos calientes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-sm mb-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-[#CBD5E1]" />
                  <span>Boletines CIE Directos</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Tramitación directa con Industria y distribuidoras (Iberdrola, Endesa, UFD, e-redes) sin intermediarios.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#CBD5E1]" />
                  <span>Seguro de Responsabilidad Civil</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Todas nuestras intervenciones cuentan con póliza de cobertura integral y garantía oficial de 3 años por escrito.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-slate-300/10 border border-slate-200/50"
              >
                <span>Hablar con un Electricista Autorizado</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <div className="text-xs text-neutral-400">
                Sede en Cruces Barakaldo • Cobertura en Gran Bilbao, Margen Izquierda y Margen Derecha
              </div>
            </div>

          </div>

        </div>

        {/* Quality Comparison Card: Standard vs Eugenio Gallegos */}
        <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
              ¿Por qué confiar en Eugenio Gallegos Electricidad?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Compara la diferencia entre un trabajo artesanal certificado y una instalación convencional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Eugenio Gallegos Standard */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/40 border border-slate-700/60">
              <div className="flex items-center gap-2 text-[#E2E8F0] font-bold text-base mb-4 font-heading">
                <Zap className="w-5 h-5 text-[#CBD5E1]" />
                <span>Estándar Eugenio Gallegos</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] mt-0.5 flex-shrink-0" />
                  <span>Tableros limpios con peines aislados y cableado con punteras prensadas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] mt-0.5 flex-shrink-0" />
                  <span>Diferenciales superinmunizados de alta inmunidad contra falsos saltos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] mt-0.5 flex-shrink-0" />
                  <span>Cálculo exacto de caídas de tensión y protecciones térmicas sobredimensionadas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] mt-0.5 flex-shrink-0" />
                  <span>Memoria técnica, plano unifilar y certificado oficial emitido al finalizar.</span>
                </li>
              </ul>
            </div>

            {/* Typical generic installations */}
            <div className="p-5 sm:p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-neutral-400 font-bold text-base mb-4 font-heading">
                Instalaciones Convencionales No Certificadas
              </div>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>Maraña de cables sueltos, conexiones sin prensar y bornes sobrecalentados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>Diferenciales básicos tipo AC que saltan con cualquier ordenador o tormenta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>Sin comprobación reglamentaria de picas de tierra ni aislamiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>Sin respaldo documental ni cobertura de seguro ante accidentes.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
