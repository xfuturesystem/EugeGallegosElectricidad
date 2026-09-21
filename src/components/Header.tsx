import React, { useState, useEffect } from 'react';
import { Zap, Phone, MessageSquare, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { LogoEG } from './LogoEG';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos & Galería', href: '#galeria' },
    { name: 'Reseñas Google', href: '#resenas-google' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div id="top-bar" className="bg-neutral-900 border-b border-neutral-800 text-xs text-neutral-300 py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#E2E8F0] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#CBD5E1]" />
              <span>Instalador Autorizado Categoría Especialista</span>
            </span>
            <span className="hidden sm:inline-block text-neutral-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span>Urgencias diurnas: Atención profesional de averías</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <a
              id="top-emergency-phone"
              href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-[#E2E8F0] hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Urgencias diurnas: {COMPANY_INFO.phoneEmergency}</span>
            </a>
            <span className="hidden lg:inline text-neutral-600">•</span>
            <span className="hidden lg:inline text-neutral-400">{COMPANY_INFO.email}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-[37px] z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            id="brand-logo"
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center group focus:outline-none py-1"
            aria-label="Electricidad Gallegos - Inicio"
          >
            <LogoEG className="h-8 sm:h-9 w-auto text-white group-hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-neutral-300 hover:text-[#E2E8F0] hover:bg-neutral-900/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-contact-btn"
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-[#CBD5E1]/60 hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contactar</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Eugenio, me gustaría solicitar información sobre servicios eléctricos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 text-neutral-950 hover:from-white hover:to-slate-200 transition-all shadow-md shadow-slate-300/10 flex items-center gap-1.5 border border-slate-200/50"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="xl:hidden border-t border-neutral-800 bg-neutral-950/98 px-4 pt-3 pb-6 space-y-2 mt-2">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#E2E8F0] hover:bg-neutral-900 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-neutral-600 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Eugenio, necesito asistencia eléctrica.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-bold rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 text-neutral-950 hover:from-white hover:to-slate-200 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 text-center text-sm font-bold rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 animate-pulse text-red-400" />
                <span>Llamar Urgencias diurnas ({COMPANY_INFO.phoneEmergency})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
