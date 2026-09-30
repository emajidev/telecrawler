import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TeleCrawlerModel } from './3d/TeleCrawlerModel';
import { PipeEnvironment } from './3d/PipeEnvironment';
import { Camera, Lightbulb, Compass, Wifi, ShieldCheck, RotateCw, ZoomIn, Eye } from 'lucide-react';

export function HeroSection({ onExplore }) {
  const [autoRotate, setAutoRotate] = useState(false);

  const features = [
    { icon: Camera, title: 'Cámara HD', desc: 'ESP32-CAM' },
    { icon: Lightbulb, title: 'Iluminación LED', desc: '4 luces focalizadas' },
    { icon: Compass, title: 'Tracción Oruga', desc: 'Terrenos complejos' },
    { icon: Wifi, title: 'Conectividad', desc: 'Wi-Fi + Umbilical' },
    { icon: ShieldCheck, title: 'Impermeabilidad', desc: 'Chasis sellado IP68' },
  ];

  return (
    <section id="hero" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#030712] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background HUD Grid & Radial Blue Glow */}
      <div className="absolute inset-0 tech-bg-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Slide Grid: Left 50% Content, Right 50% 3D Canvas */}
      <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto z-10">
        
        {/* Left Column: Hero Slide Text */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Metadata Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-tech text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>PROYECTO TELECRAWLER — VENEZUELA 2026</span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white uppercase leading-none">
              Tele<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 drop-shadow-[0_0_25px_rgba(0,162,255,0.6)]">Crawler</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-sans font-semibold text-cyan-200 tracking-wide">
              Robótica al servicio de las telecomunicaciones.
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
            Un microvehículo terrestre teleoperado diseñado para inspeccionar y diagnosticar fallas en ductos subterráneos de fibra óptica y telefonía.
          </p>

          {/* Team Tag */}
          <div className="pt-2 flex items-center gap-6 text-xs font-tech tracking-wider text-slate-400 uppercase border-t border-slate-800/80 pt-4 max-w-xl">
            <div>
              <span className="text-slate-500 block">DESARROLLADO POR</span>
              <span className="text-cyan-400 font-bold text-sm">EQUIPO CYBERNOVA</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div>
              <span className="text-slate-500 block">APLICACIÓN</span>
              <span className="text-white font-bold text-sm">INSPECCIÓN EN TELECOMUNICACIONES</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onExplore && onExplore(4)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(0,162,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Explorar Solución</span>
            </button>
            <button
              onClick={() => onExplore && onExplore(2)}
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-tech font-semibold text-xs sm:text-sm uppercase tracking-widest border border-cyan-500/30 hover:border-cyan-400 transition-all"
            >
              Ver Problemática
            </button>
          </div>

        </div>

        {/* Right Column: 3D Interactive Canvas Slide Container */}
        <div className="lg:col-span-6 h-[420px] sm:h-[480px] lg:h-[520px] w-full relative rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,119,255,0.25)] overflow-hidden">
          
          {/* Top HUD Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500/20 text-xs font-tech text-cyan-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>RENDER 3D INTERACTIVO THREE.JS</span>
            </div>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 transition-colors"
            >
              <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
              <span>{autoRotate ? 'Detener' : 'Rotar Robot'}</span>
            </button>
          </div>

          {/* Three.js Canvas */}
          <Canvas
            camera={{ position: [2.5, 1.8, 3.5], fov: 45 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <PipeEnvironment />
            <TeleCrawlerModel autoRotate={autoRotate} />
            <OrbitControls enableZoom={true} maxDistance={6} minDistance={1.8} maxPolarAngle={Math.PI / 2 + 0.1} />
          </Canvas>

          {/* Bottom HUD Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500/20 text-[11px] font-tech text-slate-300">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><RotateCw className="w-3.5 h-3.5 text-cyan-400" /> Clic + Arrastrar</span>
              <span className="flex items-center gap-1"><ZoomIn className="w-3.5 h-3.5 text-cyan-400" /> Rueda: Zoom</span>
            </div>
            <span className="text-cyan-400 font-bold uppercase">MODELO 3D REALISTA</span>
          </div>

        </div>

      </div>

      {/* Bottom Features Spec Bar */}
      <div className="w-full max-w-[1700px] mx-auto z-10 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-tech font-bold text-white uppercase tracking-wider">
                    {feat.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans leading-tight">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
