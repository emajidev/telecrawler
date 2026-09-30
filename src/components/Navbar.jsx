import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Navbar({ currentSlide = 1, totalSlides = 10, onSelectSlide }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    { num: 1, label: 'Proyecto' },
    { num: 2, label: 'Problemática' },
    { num: 3, label: 'Referente' },
    { num: 4, label: 'Solución' },
    { num: 5, label: 'Modelo 3D' },
    { num: 6, label: 'Arquitectura' },
    { num: 7, label: 'Wi-Fi & Cable' },
    { num: 8, label: 'Prototipo' },
    { num: 9, label: 'Visión Venezuela' },
    { num: 10, label: 'Impacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/20 transition-all">
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo CyberNova + TeleCrawler */}
        <button onClick={() => onSelectSlide(1)} className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <img src="/logo-icon.svg" alt="CyberNova Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                CyberNova
              </span>
              <span className="text-[10px] font-tech tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
                PROTOTIPO
              </span>
            </div>
            <span className="text-xs font-tech text-slate-400 tracking-widest uppercase block -mt-1">
              TeleCrawler
            </span>
          </div>
        </button>

        {/* Desktop Slide Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-4">
          {slides.map((s) => {
            const isActive = currentSlide === s.num;
            return (
              <button
                key={s.num}
                onClick={() => onSelectSlide(s.num)}
                className={`text-xs font-tech uppercase tracking-wider transition-all py-1 px-2.5 rounded-md relative ${
                  isActive
                    ? 'text-cyan-300 font-bold bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section Counter & Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center gap-2 text-xs font-tech text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
          </div>

          <button
            onClick={() => onSelectSlide(10)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 hover:from-blue-500 hover:to-cyan-400 text-white font-tech font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,162,255,0.4)] flex items-center gap-1.5"
          >
            <span>Ver Impacto</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-slate-800 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060B1E]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {slides.map((s) => (
              <button
                key={s.num}
                onClick={() => {
                  onSelectSlide(s.num);
                  setMobileMenuOpen(false);
                }}
                className={`text-xs font-tech uppercase tracking-wider text-left p-2.5 rounded-lg border transition-all ${
                  currentSlide === s.num
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800'
                }`}
              >
                0{s.num}. {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
