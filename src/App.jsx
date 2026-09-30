import React, { useState, useEffect } from 'react';
import { SlideControls } from './components/SlideControls';
import { HeroSection } from './components/HeroSection';
import { ProblematicSection } from './components/ProblematicSection';
import { ReferentSection } from './components/ReferentSection';
import { SolutionSection } from './components/SolutionSection';
import { ExplodedViewSection } from './components/ExplodedViewSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { WifiChallengeSection } from './components/WifiChallengeSection';
import { PrototypeDesignSection } from './components/PrototypeDesignSection';
import { VenezuelaVisionSection } from './components/VenezuelaVisionSection';
import { ImpactSection } from './components/ImpactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slideTitles = [
    'PROYECTO TELECRAWLER',
    'LA PROBLEMÁTICA SUBTERRÁNEA',
    'REFERENTE GLOBAL',
    'LA SOLUCIÓN ROBÓTICA',
    'MODELO 3D DESPIECE (EXPLODED)',
    'ARQUITECTURA DEL SISTEMA',
    'EL DESAFÍO WI-FI & UMBILICAL',
    'DISEÑO DEL PROTOTIPO & LAB',
    'VISIÓN VENEZUELA',
    'IMPACTO TECNOLÓGICO FINAL'
  ];

  const slideIds = [
    'hero',
    'problem',
    'referent',
    'solution',
    'exploded',
    'architecture',
    'wifi',
    'prototype',
    'venezuela',
    'impact'
  ];

  // Scroll to targeted slide element smoothly
  const handleSelectSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    const targetId = slideIds[slideNumber - 1];
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll detection to update active slide number
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < slideIds.length; i++) {
        const el = document.getElementById(slideIds[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSlide(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans snap-y snap-mandatory select-none">
      
      {/* Slide Deck Pages (Full-Bleed 16:9 Presentation Format) */}
      <main className="flex-grow">
        <div id="hero" className="snap-start">
          <HeroSection onExplore={handleSelectSlide} />
        </div>
        
        <div id="problem" className="snap-start">
          <ProblematicSection />
        </div>
        
        <div id="referent" className="snap-start">
          <ReferentSection />
        </div>
        
        <div id="solution" className="snap-start">
          <SolutionSection />
        </div>
        
        <div id="exploded" className="snap-start">
          <ExplodedViewSection />
        </div>
        
        <div id="architecture" className="snap-start">
          <ArchitectureSection />
        </div>
        
        <div id="wifi" className="snap-start">
          <WifiChallengeSection />
        </div>
        
        <div id="prototype" className="snap-start">
          <PrototypeDesignSection />
        </div>
        
        <div id="venezuela" className="snap-start">
          <VenezuelaVisionSection />
        </div>
        
        <div id="impact" className="snap-start">
          <ImpactSection onRestart={handleSelectSlide} />
        </div>
      </main>

      {/* Floating Presentation Slide Controls */}
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={10}
        slideTitles={slideTitles}
        onSlideChange={handleSelectSlide}
      />

      <Footer />
    </div>
  );
}
