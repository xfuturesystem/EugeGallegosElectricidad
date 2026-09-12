import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const MapLocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-neutral-950 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Nuestra Ubicación & Cobertura</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Dónde Encontrarnos & Zona de Servicio
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Con sede en Cruces Barakaldo y unidades móviles preparadas para atender rápidamente en el Gran Bilbao y municipios limítrofes.
          </p>
        </div>

        {/* Grid: Details Cards + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 text-neutral-950 flex-shrink-0 mt-0.5 shadow-md shadow-slate-300/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading mb-1">
                    Oficina Técnica & Taller
                  </h3>
                  <p className="text-sm text-neutral-300 mb-2">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-[#CBD5E1] font-semibold mb-3">
                    N° Instalador Autorizado: 48/CCBT/-6418
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Cómo llegar en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neutral-800 text-[#CBD5E1] flex-shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    Horarios de Atención
                  </h3>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <div className="flex justify-between py-1 border-b border-neutral-800">
                      <span>Lunes a Viernes:</span>
                      <span className="font-semibold text-white">08:00 - 19:30</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-800">
                      <span>Sábados:</span>
                      <span className="font-semibold text-white">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between py-1 text-[#E2E8F0] font-bold">
                      <span>Servicio de Urgencias:</span>
                      <span>Horario Diurno Prioritario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rapid Response Radius */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/80 text-[#CBD5E1] flex-shrink-0 mt-0.5 border border-slate-700/50">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    Zona de Cobertura
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                      <span className="font-medium text-white">Gran Bilbao y Municipios limítrofes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                      <span className="font-medium text-white">Margen Izquierda y Margen Derecha</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                      <span className="font-medium text-white">Con Sede en Cruces Barakaldo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Emergency Phone */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/60 to-neutral-900 border border-red-900/50 flex items-center justify-between">
              <div className="text-xs text-red-200">
                <span className="font-bold text-red-400">¿Avería en tu zona?</span> Acudimos con taller móvil.
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-red-900/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.phoneEmergency}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative min-h-[420px] flex flex-col">
            {/* Top Bar for Map */}
            <div className="p-4 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                <span className="font-medium text-white">Ubicación Verificada en Google Maps</span>
              </div>
              <span className="text-neutral-400">San Vicente de Barakaldo (Bizkaia)</span>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="relative flex-1 w-full min-h-[380px] bg-neutral-900">
              <iframe
                title="Google Maps Location - Eugenio Gallegos Electricidad - Munoa Kalea 22 Barakaldo"
                src="https://maps.google.com/maps?q=Munoa+Kalea+22,+48903+San+Vicente+de+Barakaldo,+Bizkaia,+Espa%C3%B1a&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              
              {/* Overlay Marker Card */}
              <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-neutral-950/95 border border-neutral-700 shadow-2xl backdrop-blur-md max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2 text-[#CBD5E1] font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Eugenio Gallegos Electricidad</span>
                </div>
                <div className="text-[11px] text-neutral-300">
                  {COMPANY_INFO.address}
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px]">
                  <span className="text-green-400 font-semibold">● Abierto ahora</span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CBD5E1] hover:underline font-bold"
                  >
                    Ruta GPS →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
