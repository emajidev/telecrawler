import React from 'react';
import { Smartphone, Radio, Cpu, Camera, Video, Zap, Activity } from 'lucide-react';

export function ArchitectureSection() {
  const dataFlow = [
    { name: 'OPERADOR', sub: 'Técnico de Campo', icon: Activity, color: 'border-blue-500' },
    { name: 'DISPOSITIVO MÓVIL', sub: 'Interfaz Web / Tablet', icon: Smartphone, color: 'border-cyan-500' },
    { name: 'COMUNICACIÓN', sub: 'Wi-Fi 2.4GHz + Tether', icon: Radio, color: 'border-sky-500' },
    { name: 'TELECRAWLER', sub: 'Microvehículo Robótico', icon: Cpu, color: 'border-blue-400' },
    { name: 'ESP32-CAM', sub: 'Procesamiento Video', icon: Camera, color: 'border-cyan-400' },
    { name: 'CÁMARA / LEDS', sub: 'Captura Óptica', icon: Video, color: 'border-sky-400' },
  ];

  const motorDrive = [
    { name: 'MOTOR IZQUIERDO', detail: 'Control PWM Independiente' },
    { name: 'MOTOR DERECHO', detail: 'Control PWM Independiente' },
  ];

  return (
    <section id="architecture" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#060B1E] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background Grid */}
      <div className="absolute inset-0 tech-bg-grid opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Tag */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 06 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>ARQUITECTURA DEL SISTEMA</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Flujo de datos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">control teleoperado</span>
          </h2>
          <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Diagrama técnico que ilustra la transmisión de video y el enlace bidireccional de instrucciones de movimiento en tiempo real.
          </p>
        </div>

        {/* Pipeline Container Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,162,255,0.15)] relative space-y-6">
          
          <div className="text-xs font-tech font-bold text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>PIPELINE TELEMETRÍA Y CONTROL DE MOVIMIENTO</span>
          </div>

          {/* Main 6 Node Data Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {dataFlow.map((node, idx) => {
              const IconComponent = node.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border ${node.color} flex flex-col items-center text-center relative">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-tech font-bold text-white uppercase mb-0.5">
                    {node.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans">
                    {node.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Subsystem Drive */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-3">
              SUBSISTEMA DE PROPULSIÓN DIFERENCIAL
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
              {motorDrive.map((mot, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-center">
                  <h4 className="text-xs font-tech font-bold text-cyan-300 uppercase">{mot.name}</h4>
                  <p className="text-[10px] text-slate-400 font-sans">{mot.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-tech font-bold text-xs uppercase tracking-widest">
                ↓ TRACCIÓN TIPO ORUGA (GIRO 360° SOBRE SU EJE)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
