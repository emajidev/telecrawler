import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TeleCrawlerModel } from './3d/TeleCrawlerModel';
import { PipeEnvironment } from './3d/PipeEnvironment';
import { Camera, Lightbulb, Compass, Cpu, Wifi, Shield } from 'lucide-react';

export function SolutionSection() {
  const [selectedTag, setSelectedTag] = useState(null);

  const tags = [
    {
      id: 'camera',
      name: 'CÁMARA',
      detail: 'ESP32-CAM',
      desc: 'Módulo de captura con lente focalizado para ductos oscuros.',
      icon: Camera,
      pos: 'top-8 left-4 sm:left-10'
    },
    {
      id: 'vision',
      name: 'VISIÓN',
      detail: 'Iluminación LED',
      desc: 'Matriz de 4 LEDs ultra-brillantes de bajo consumo.',
      icon: Lightbulb,
      pos: 'top-8 right-4 sm:right-10'
    },
    {
      id: 'mobility',
      name: 'MOVILIDAD',
      detail: 'Tracción tipo oruga',
      desc: 'Orugas laterales continuas para superar fango y agua.',
      icon: Compass,
      pos: 'top-1/2 left-4 sm:left-6 -translate-y-1/2'
    },
    {
      id: 'control',
      name: 'CONTROL',
      detail: 'Microcontrolador',
      desc: 'Procesador integrado con gestión de potencia dual.',
      icon: Cpu,
      pos: 'top-1/2 right-4 sm:right-6 -translate-y-1/2'
    },
    {
      id: 'connectivity',
      name: 'CONECTIVIDAD',
      detail: 'Wi-Fi + Umbilical',
      desc: 'Enlace dual para estabilidad de transmisión y tracción.',
      icon: Wifi,
      pos: 'bottom-10 left-4 sm:left-10'
    },
    {
      id: 'protection',
      name: 'PROTECCIÓN',
      detail: 'Cuerpo sellado',
      desc: 'Chasis estanco IP68 para ambientes húmedos.',
      icon: Shield,
      pos: 'bottom-10 right-4 sm:right-10'
    }
  ];

  return (
    <section id="solution" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#060B1E] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-4">
        
        {/* Slide Header Badge */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 04 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>LA SOLUCIÓN</span>
        </div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black uppercase tracking-tight text-white">
              Tele<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">Crawler</span>
            </h2>
            <p className="text-lg font-tech font-bold text-cyan-300 uppercase tracking-widest mt-1">
              Ver. Diagnosticar. Actuar.
            </p>
          </div>
          <p className="text-slate-300 font-sans text-xs sm:text-sm max-w-md">
            Un objeto técnico concebido con arquitectura modular, bajo costo y alta adaptabilidad a ductos de telecomunicaciones.
          </p>
        </div>

        {/* 3D Robot Interactive Canvas with Spatial Floating HUD Callout Cards */}
        <div className="relative w-full h-[460px] sm:h-[520px] rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,162,255,0.2)] overflow-hidden">
          
          {/* Spatial Callout HUD Cards positioned around the 3D model */}
          {tags.map((tag) => {
            const IconComponent = tag.icon;
            const isSelected = selectedTag === tag.id;
            return (
              <div
                key={tag.id}
                onClick={() => setSelectedTag(isSelected ? null : tag.id)}
                className={`absolute ${tag.pos} z-20 cursor-pointer max-w-[200px] transition-all duration-300 ${
                  isSelected ? 'scale-105 z-30' : 'hover:scale-102'
                }`}
              >
                <div className={`p-3 rounded-xl backdrop-blur-xl border transition-all ${
                  isSelected 
                    ? 'bg-cyan-950/90 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'bg-slate-900/85 border-cyan-500/30 hover:border-cyan-400/60'
                }`}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-tech text-cyan-400 font-bold block uppercase leading-none">
                        {tag.name}
                      </span>
                      <span className="text-xs font-tech text-white font-extrabold uppercase leading-tight">
                        {tag.detail}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-300 font-sans leading-tight mt-1">
                    {tag.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Three.js Interactive Canvas */}
          <Canvas camera={{ position: [2.8, 1.6, 3.2], fov: 45 }}>
            <PipeEnvironment />
            <TeleCrawlerModel autoRotate={true} />
            <OrbitControls enableZoom={true} maxDistance={6} minDistance={1.8} />
          </Canvas>

        </div>

      </div>
    </section>
  );
}
