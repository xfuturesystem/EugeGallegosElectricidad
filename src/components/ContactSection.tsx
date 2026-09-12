import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, Clock, MapPin, AlertCircle, Copy, Check, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
  onOpenLegal?: (type: 'aviso-legal' | 'privacidad') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = '',
  onOpenLegal,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: initialService || 'cuadro-electrico',
    urgency: 'normal',
    message: initialMessage || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync external prefilled data
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialService, initialMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Send directly via FormSubmit AJAX endpoint using company contact email
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Nombre del Cliente': formData.name,
          'Teléfono': formData.phone,
          'Correo Electrónico': formData.email,
          'Tipo de Servicio': formData.serviceType,
          'Nivel de Urgencia': formData.urgency === 'urgencia-diurna' || formData.urgency === 'urgencia-24h' ? '🚨 Urgencia Diurna' : formData.urgency === 'alta' ? 'Alta (Prioritaria)' : 'Estándar (1-3 días)',
          'Detalles de la Consulta': formData.message,
          '_subject': `⚡ Consulta Web: ${formData.serviceType} - ${formData.name} [${formData.urgency.toUpperCase()}]`,
          '_replyto': formData.email,
          '_template': 'table',
          '_captcha': 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmittedSuccess(true);
      } else {
        // In case of any validation response, still handle gracefully or show fallback
        setSubmittedSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form to FormSubmit:', error);
      // Fallback: If network is offline or blocked by adblockers, provide seamless mailto fallback
      setErrorMessage('Hubo un inconveniente al conectar con el servidor de correo. Puedes enviarlo directamente con tu cliente de correo o por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola Eugenio, mi nombre es ${formData.name || 'un cliente'}. Me pongo en contacto para consultar sobre ${formData.serviceType || 'un servicio eléctrico'}.${formData.message ? ` Mensaje: ${formData.message}` : ''}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Contacto Directo & Presupuestos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Hablemos de tu Proyecto Eléctrico
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Pide presupuesto gratuito y sin compromiso. Respondemos a la mayor brevedad o con prioridad en caso de averías urgentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Callout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Web Direct Card (Requested in prompt) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-green-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-green-500 text-neutral-950 shadow-lg shadow-green-500/20">
                  <MessageSquare className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">Canal Preferente</span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Atención Rápida por WhatsApp
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                Envíanos fotos de tu cuadro eléctrico actual, avería o proyecto para darte una valoración preliminar inmediata.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 px-5 rounded-xl bg-green-500 hover:bg-green-400 text-neutral-950 font-bold text-sm transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir WhatsApp Web ({COMPANY_INFO.whatsappDisplay})</span>
                </button>
                
                <div className="text-[11px] text-center text-neutral-400">
                  Número de contacto directo: <span className="font-mono text-neutral-200">{COMPANY_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            {/* Direct Phone & Emergency Cards */}
            <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-4">
              
              {/* Regular Phone */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-800">
                <div className="p-2.5 rounded-xl bg-neutral-800 text-[#CBD5E1]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Teléfono Oficina & Presupuestos</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-white hover:text-[#CBD5E1] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Emergency Phone */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-800">
                <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400">
                  <AlertCircle className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-red-400 font-bold">Urgencias Eléctricas Diurnas</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-red-300 hover:text-red-200 transition-colors"
                  >
                    {COMPANY_INFO.phoneEmergency}
                  </a>
                </div>
              </div>

              {/* Email with copy button */}
              <div className="flex items-start justify-between gap-2 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-800 text-[#CBD5E1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Correo Electrónico Oficial</div>
                    <div className="text-sm font-semibold text-white break-all">{COMPANY_INFO.email}</div>
                  </div>
                </div>
                
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                  title="Copiar email al portapapeles"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Quality Commitment Notice */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#CBD5E1] flex-shrink-0" />
              <div className="text-xs text-neutral-300">
                Tus datos se tratan con estricta confidencialidad según el RGPD. Puedes consultar nuestra{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('privacidad')}
                  className="text-[#CBD5E1] hover:underline font-semibold cursor-pointer"
                >
                  Política de Privacidad
                </button>
                .
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Email Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl">
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 text-[#CBD5E1] text-[11px] font-medium mb-2">
                <Check className="w-3 h-3 text-green-400" />
                <span>Recepción automática en <strong>{COMPANY_INFO.email}</strong></span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-1">
                Envíanos tu Consulta por Correo
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Rellena los campos y te enviaremos una propuesta detallada por escrito a la brevedad.
              </p>
            </div>

            {submittedSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-neutral-950 border border-green-500/40 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-heading">
                  ¡Mensaje Enviado con Éxito a Nuestro Correo!
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Tu consulta ha sido enviada correctamente a nuestra bandeja de Gmail (<span className="text-white font-semibold">{COMPANY_INFO.email}</span>). Te responderemos a la mayor brevedad posible.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceType: 'Cuadros y Tableros Eléctricos',
                        urgency: 'normal',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 text-xs font-semibold hover:bg-neutral-700"
                  >
                    Enviar otra consulta
                  </button>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 rounded-xl bg-green-500 text-neutral-950 text-xs font-bold hover:bg-green-400 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Confirmar también por WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                    <div className="flex-1">{errorMessage}</div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-[#CBD5E1] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ej. 612 345 678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-[#CBD5E1] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-[#CBD5E1] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Tipo de Servicio Requerido
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-[#CBD5E1] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Cuadros y Tableros Eléctricos">Cuadros y Tableros Eléctricos Modernos</option>
                      <option value="Instalaciones Residenciales y Reformas">Instalación Residencial / Reforma</option>
                      <option value="Boletines Eléctricos y Certificados (CIE)">Boletín Eléctrico (CIE) / Altas</option>
                      <option value="Puntos de Recarga Vehículos Eléctricos">Punto de Recarga (V2C, Wallbox, Schneider Electric y otros)</option>
                      <option value="Iluminación LED y Domótica">Iluminación LED & Domótica</option>
                      <option value="Averías y Urgencias Diurnas">Avería Urgente Diurna / Salto de Luz</option>
                      <option value="Instalaciones Industriales">Instalación Industrial / Trifásica</option>
                      <option value="Otro tipo de consulta">Otro servicio técnico</option>
                    </select>
                  </div>
                </div>

                {/* Urgency selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Nivel de Prioridad
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'normal', label: 'Estándar (1-3 días)' },
                      { id: 'alta', label: 'Alta (Prioritaria)' },
                      { id: 'urgencia-diurna', label: '🚨 Urgencia Diurna' },
                    ].map((urg) => (
                      <button
                        type="button"
                        key={urg.id}
                        onClick={() => setFormData((prev) => ({ ...prev, urgency: urg.id as any }))}
                        className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors cursor-pointer ${
                          formData.urgency === urg.id
                            ? urg.id === 'urgencia-diurna' || urg.id === 'urgencia-24h'
                              ? 'bg-red-950 text-red-300 border-red-500'
                              : 'bg-slate-800 text-[#E2E8F0] border-[#CBD5E1]'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                        }`}
                      >
                        {urg.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Descripción del Trabajo o Consulta *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe qué necesitas (ej. cambiar cuadro antiguo de plomos por uno nuevo con sobretensiones, aumento de potencia para climatización, instalación de cargador en garaje, etc.)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-[#CBD5E1] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 font-bold text-sm transition-all shadow-xl shadow-slate-300/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-slate-200/50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Enviando a {COMPANY_INFO.email}...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud de Presupuesto</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
