import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MapLocationSection } from './components/MapLocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal, LegalModalType } from './components/LegalModal';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [quoteMessagePreset, setQuoteMessagePreset] = useState('');
  const [legalModalType, setLegalModalType] = useState<LegalModalType | null>(null);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setQuoteMessagePreset(`Hola Eugenio, me gustaría solicitar un presupuesto detallado para el servicio: ${serviceTitle}.`);
    handleOpenContact();
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setSelectedServiceForQuote('Cuadros y Tableros Eléctricos');
    setQuoteMessagePreset(`Hola Eugenio, he visto el trabajo "${projectTitle}" en la galería de vuestra web y me gustaría solicitar una valoración similar para mi instalación.`);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-slate-300 selection:text-neutral-950">
      {/* Sticky Header with Navigation and Emergency Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Background Image & Quick Actions */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Who We Are & Credentials */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* 3. Electrical Services & Emergency Banner */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Real Projects & Electric Panel Carousel Gallery */}
        <GallerySection onOpenContactWithProject={handleSelectProjectForQuote} />

        {/* 5. Google Reviews & Rating Hub */}
        <GoogleReviewsSection />

        {/* 6. Client Testimonials */}
        <TestimonialsSection />

        {/* 7. FAQ Knowledge Section */}
        <FaqSection />

        {/* 8. Google Maps & Service Coverage Area */}
        <MapLocationSection />

        {/* 9. Contact Form & WhatsApp Web Channel */}
        <ContactSection
          initialService={selectedServiceForQuote}
          initialMessage={quoteMessagePreset}
          onOpenLegal={setLegalModalType}
        />
      </main>

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onOpenLegal={setLegalModalType} />

      {/* Legal Modal: Aviso Legal & Política de Privacidad */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSelectType={setLegalModalType}
      />
    </div>
  );
}
