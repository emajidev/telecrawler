import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

export function ImpactSection({ onRestart }) {
  const beforeSteps = [
    { title: 'EXCAVACIÓN', sub: 'Ruptura de asfalto y vía pública' },
    { title: 'OBSTRUCCIÓN', sub: 'Localización imprecisa por tanteo' },
    { title: 'DIAGNÓSTICO INCIERTO', sub: 'Falta de visibilidad directa' },
  ];

  const afterSteps = [
    { title: 'TELECRAWLER', sub: 'Ingreso no destructivo por tanquilla' },
    { title: 'INSPECCIÓN HD', sub: 'Iluminación y video continuo' },
    { title: 'DIAGNÓSTICO', sub: 'Identificación exacta del punto de falla' },
    { title: 'REPARACIÓN PRECISA', sub: 'Excavación puntual únicamente necesaria' },
  ];

  return (
    <section id="impact" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#060B1E] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background Cinematic Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-sky-400/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Tag */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 10 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>IMPACTO TECNOLÓGICO</span>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-heading font-black uppercase tracking-tight text-white leading-tight">
            El impacto de la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300">inspección inteligente</span>
          </h2>
          <p className="mt-2 text-slate-300 font-sans text-xs sm:text-sm">
            Transformando el mantenimiento preventivo y correctivo de infraestructuras subterráneas.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: ANTES */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950/90 border border-red-500/30 relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
              <span className="text-xs font-tech font-bold text-red-400 uppercase tracking-widest">
                MÉTODO TRADICIONAL
              </span>
              <span className="text-[10px] font-tech text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                ANTES
              </span>
            </div>

            <div className="space-y-3">
              {beforeSteps.map((b, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-tech font-bold text-red-400 uppercase">{b.title}</h4>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Arrow */}
          <div className="lg:col-span-2 flex items-center justify-center py-2 lg:py-0">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
            </div>
          </div>

          {/* Right: DESPUÉS */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-slate-950 to-cyan-950/40 border border-cyan-400/50 relative shadow-[0_0_50px_rgba(0,162,255,0.25)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/30">
              <span className="text-xs font-tech font-bold text-cyan-300 uppercase tracking-widest">
                MÉTODO CON TELECRAWLER
              </span>
              <span className="text-[10px] font-tech text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/40 font-bold">
                DESPUÉS
              </span>
            </div>

            <div className="space-y-2.5">
              {afterSteps.map((a, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <h4 className="text-xs font-tech font-bold text-white uppercase">{a.title}</h4>
                  </div>
                  <p className="text-[10px] text-slate-300 font-sans mt-0.5 pl-5.5">{a.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Final Impact Message Banner */}
        <div className="p-6 rounded-3xl bg-slate-950/90 border border-cyan-400/60 text-center shadow-[0_0_60px_rgba(0,162,255,0.3)] relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-tech text-[10px] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROPUESTA DE INNOVACIÓN ROBÓTICA</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              Menos excavación. — Más precisión. — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">Mayor conectividad.</span>
            </h3>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => onRestart && onRestart(1)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white font-tech font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(0,162,255,0.6)] hover:shadow-[0_0_45px_rgba(0,240,255,0.9)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Volver a la primera lámina</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
