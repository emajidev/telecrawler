import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SlideControls({ currentSlide, totalSlides = 10, onSlideChange }) {
  
  // Keyboard Arrow Navigation (← / → / PageUp / PageDown)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentSlide < totalSlides) {
          onSlideChange(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentSlide > 1) {
          onSlideChange(currentSlide - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, onSlideChange]);

  const prevSlide = () => {
    if (currentSlide > 1) {
      onSlideChange(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <>
      {/* Ultra-subtle, transparent Left Arrow */}
      <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className={`p-2 rounded-full transition-all duration-300 ${
            currentSlide === 1
              ? 'opacity-0 pointer-events-none'
              : 'opacity-35 hover:opacity-100 text-slate-300 hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]'
          }`}
          aria-label="Lámina Anterior"
          title="Lámina Anterior (Flecha Izquierda)"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
        </button>
      </div>

      {/* Ultra-subtle, transparent Right Arrow */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto">
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className={`p-2 rounded-full transition-all duration-300 ${
            currentSlide === totalSlides
              ? 'opacity-0 pointer-events-none'
              : 'opacity-35 hover:opacity-100 text-slate-300 hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]'
          }`}
          aria-label="Siguiente Lámina"
          title="Siguiente Lámina (Flecha Derecha)"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
        </button>
      </div>
    </>
  );
}
