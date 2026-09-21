import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { LogoEG } from './LogoEG';

interface FooterProps {
  onOpenLegal?: (type: 'aviso-legal' | 'privacidad') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 text-sm relative">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <a
              href="#inicio"
              onClick={scrollToTop}
              className="inline-block group focus:outline-none py-1"
              aria-label="Electricidad Gallegos - Inicio"
            >
              <LogoEG className="h-8 sm:h-9 w-auto text-white group-hover:opacity-90 transition-opacity" />
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Empresa instaladora autorizada en Baja Tensión. Especialistas en cuadros eléctricos limpios, boletines CIE oficiales, recargas de vehículos eléctricos y mantenimiento preventivo.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] text-[#E2E8F0] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#CBD5E1]" />
                <span>N° Registro: {COMPANY_INFO.licenseNumber.split(' ')[0]}</span>
              </div>
            </div>

            {/* Código QR oficial */}
            <div className="pt-2">
              <div className="p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 inline-flex items-center gap-3.5 max-w-[280px]">
                <div className="p-1.5 bg-white rounded-xl shadow-md flex-shrink-0">
                  <img
                    src="/qrEG.jpeg"
                    alt="Código QR Eugenio Gallegos Electricidad"
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded"
                    style={{ maxWidth: '140px', maxHeight: '140px' }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white tracking-wide">
                    Escanea el QR
                  </p>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Contacto directo en tu móvil para consultas y presupuestos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Quiénes Somos', href: '#nosotros' },
                { name: 'Servicios Especializados', href: '#servicios' },
                { name: 'Galería de Trabajos & Tableros', href: '#galeria' },
                { name: 'Reseñas Verificadas en Google', href: '#resenas-google' },
                { name: 'Testimonios de Clientes', href: '#testimonios' },
                { name: 'Ubicación & Cobertura', href: '#ubicacion' },
                { name: 'Contacto & Presupuesto', href: '#contacto' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#E2E8F0] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-neutral-600">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
              Servicios Eléctricos
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="hover:text-[#E2E8F0] transition-colors flex items-center gap-1.5">
                    <span className="text-[#CBD5E1]">⚡</span>
                    <span className="truncate">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
              Atención Directa
            </h4>
            
            <div className="text-xs space-y-2.5">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#CBD5E1] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-red-300 font-bold">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0 animate-pulse" />
                <a href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`} className="hover:text-red-200">
                  Urgencias diurnas: {COMPANY_INFO.phoneEmergency}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400">
                ⚡ Cumplimiento estricto del REBT (R.D. 842/2002).
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-neutral-900 bg-neutral-950 py-6 px-4 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => onOpenLegal?.('aviso-legal')}
              className="hover:text-neutral-300 transition-colors cursor-pointer text-xs"
            >
              Aviso Legal
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal?.('privacidad')}
              className="hover:text-neutral-300 transition-colors cursor-pointer text-xs"
            >
              Política de Privacidad
            </button>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Subir</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
