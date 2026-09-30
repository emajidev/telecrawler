import React from 'react';
import { DollarSign, Factory, Wrench, MapPin } from 'lucide-react';

export function VenezuelaVisionSection() {
  const pillars = [
    {
      title: 'BAJO COSTO',
      desc: 'Optimización presupuestaria mediante componentes electrónicos comerciales accesibles y piezas fabricables localmente.',
      icon: DollarSign,
      color: 'border-cyan-500'
    },
    {
      title: 'FABRICACIÓN LOCAL',
      desc: 'Estructura adaptable producida íntegramente mediante impresión 3D en laboratorios y talleres venezolanos.',
      icon: Factory,
      color: 'border-blue-500'
    },
    {
      title: 'MANTENIMIENTO ACCESIBLE',
      desc: 'Sustitución rápida de repuestos sin depender de importaciones complejas ni tiempos de espera prolongados.',
      icon: Wrench,
      color: 'border-sky-500'
    }
  ];

  return (
    <section className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#030712] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Tag */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 09 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>VISIÓN VENEZUELA</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Tecnología construida para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">nuestro contexto.</span>
          </h2>
          <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            El proyecto TeleCrawler responde directamente a la realidad técnica de las empresas de telecomunicaciones y comunidades en Venezuela, democratizando el acceso a herramientas de inspección robótica.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => {
            const IconComp = pil.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-slate-900/80 border ${pil.color} shadow-[0_0_30px_rgba(0,162,255,0.15)] hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all`}
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-tech font-bold text-white uppercase mb-2 tracking-wider">
                  {pil.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="text-xs font-tech text-cyan-400 uppercase tracking-widest block">
                INNOVACIÓN NACIONAL EN ROBÓTICA
              </span>
              <span className="text-xs font-sans text-white font-medium">
                Plataforma abierta diseñada para ser ensamblada por ingenieros y estudiantes venezolanos.
              </span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 font-tech text-xs uppercase font-bold border border-cyan-500/30 whitespace-nowrap">
            CyberNova TeleCrawler
          </span>
        </div>

      </div>
    </section>
  );
}
