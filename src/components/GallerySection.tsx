import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X, CheckCircle2, Zap, Play, Pause, ArrowRight } from 'lucide-react';
import { PROJECTS_GALLERY, COMPANY_INFO } from '../data/content';
import { ProjectItem } from '../types';

interface GallerySectionProps {
  onOpenContactWithProject: (projectTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenContactWithProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Trabajos' },
    { id: 'tableros', label: 'Tableros Eléctricos Modernos' },
    { id: 'industrial', label: 'Industrial & Comercial' },
    { id: 'cargadores-ve', label: 'Puntos Recarga VE' },
    { id: 'iluminacion', label: 'Iluminación & Domótica' },
    { id: 'residencial', label: 'Residencial' },
  ];

  const filteredProjects = activeCategory === 'todos'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter((p) => p.category === activeCategory);

  // Auto-play timer for carousel
  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, filteredProjects.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section id="galeria" className="py-24 bg-neutral-900/30 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#E2E8F0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Galería de Trabajos Reales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-3">
            Proyectos Eléctricos & Tableros Modernos
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Descubre la prolijidad de nuestros cableados, la simetría de los armarios y la calidad de los acabados técnicos.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 text-neutral-950 shadow-lg shadow-slate-300/10 border border-slate-200/50'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Interactive Carousel Display */}
        {activeProject && (
          <div className="relative rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              
              {/* Image Container with Zoom trigger */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-black group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.id}
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:hidden" />
                
                {/* Lightbox button overlay */}
                <button
                  onClick={() => setLightboxProject(activeProject)}
                  className="absolute bottom-4 right-4 p-3 rounded-xl bg-neutral-950/80 hover:bg-slate-200 hover:text-neutral-950 text-white border border-neutral-700 backdrop-blur-sm transition-all shadow-xl flex items-center gap-2 text-xs font-semibold"
                  title="Ampliar fotografía y detalles"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Ver en pantalla completa</span>
                </button>

                {/* Category tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-neutral-950/90 text-[#E2E8F0] text-xs font-bold border border-[#CBD5E1]/30 backdrop-blur-sm">
                  {activeProject.categoryLabel}
                </div>
              </div>

              {/* Information and Specifications Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="flex items-center gap-1.5 text-[#E2E8F0] font-semibold">
                      <Zap className="w-3.5 h-3.5 text-[#CBD5E1]" />
                      <span>{activeProject.clientType}</span>
                    </span>
                    <span>Año: {activeProject.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
                    {activeProject.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2.5">
                      Especificaciones Técnicas del Montaje
                    </h4>
                    <div className="space-y-2">
                      {activeProject.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Carousel Controls & Direct Action */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Prev / Next buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 hover:border-[#CBD5E1] transition-colors"
                      aria-label="Anterior trabajo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 transition-colors"
                      title={isAutoPlay ? 'Pausar reproducción automática' : 'Reanudar reproducción automática'}
                    >
                      {isAutoPlay ? <Pause className="w-4 h-4 text-[#CBD5E1]" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 hover:border-[#CBD5E1] transition-colors"
                      aria-label="Siguiente trabajo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <span className="text-xs text-neutral-500 font-mono ml-2">
                      {currentIndex + 1} / {filteredProjects.length}
                    </span>
                  </div>

                  {/* Consult similar quote */}
                  <button
                    onClick={() => onOpenContactWithProject(activeProject.title)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-slate-300/10 cursor-pointer border border-slate-200/50"
                  >
                    <span>Presupuesto similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* Thumbnail Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {filteredProjects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlay(false);
              }}
              className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#CBD5E1] ring-2 ring-[#CBD5E1]/30 scale-[1.03]'
                  : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-700'
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-950/40" />
              <div className="absolute bottom-1 left-1.5 right-1.5 text-[10px] font-medium text-white truncate text-left">
                {project.title}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video max-h-[60vh] w-full bg-black">
                <img
                  src={lightboxProject.imageUrl}
                  alt={lightboxProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setLightboxProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950/80 text-white border border-neutral-800 hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-neutral-950">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#E2E8F0] uppercase tracking-wider">
                      {lightboxProject.categoryLabel} • {lightboxProject.clientType}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading mt-1">
                      {lightboxProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                      {lightboxProject.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola Eugenio, vi la foto de "${lightboxProject.title}" en la web y me gustaría algo similar.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 hover:from-white hover:to-slate-200 text-neutral-950 text-xs font-bold transition-colors border border-slate-200/50"
                    >
                      Consultar este modelo por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
