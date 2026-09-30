import React from 'react';
import { Shield, ChevronUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-cyan-500/20 py-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Left */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center">
                <img src="/logo-icon.svg" alt="CyberNova" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                  CyberNova
                </span>
                <span className="text-xs font-tech text-cyan-400 tracking-widest uppercase block -mt-1">
                  TeleCrawler
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Microvehículo terrestre teleoperado diseñado para la inspección y diagnóstico de fallas en ductos subterráneos de fibra óptica y telefonía.
            </p>

            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Equipo CyberNova — Venezuela 2026</span>
            </div>
          </div>

          {/* Nav Quick Links Right */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider mb-3">
              Navegación
            </h4>
            <ul className="space-y-1.5 text-xs font-tech">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Proyecto</a></li>
              <li><a href="#problem" className="hover:text-cyan-400 transition-colors">Problemática</a></li>
              <li><a href="#referent" className="hover:text-cyan-400 transition-colors">Referente Global</a></li>
              <li><a href="#solution" className="hover:text-cyan-400 transition-colors">La Solución</a></li>
              <li><a href="#exploded" className="hover:text-cyan-400 transition-colors">Exploded View 3D</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider mb-3">
              Especificaciones
            </h4>
            <ul className="space-y-1.5 text-xs font-tech">
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Arquitectura de Datos</a></li>
              <li><a href="#wifi" className="hover:text-cyan-400 transition-colors">Wi-Fi & Umbilical</a></li>
              <li><a href="#prototype" className="hover:text-cyan-400 transition-colors">Prototipo & Lab</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors">Impacto Tecnológico</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech">
          <span>&copy; 2026 CyberNova. Todos los derechos reservados.</span>
          
          <a
            href="#hero"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-400 text-cyan-400 transition-colors"
          >
            <span>Subir al Inicio</span>
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
