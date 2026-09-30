import React, { useState } from 'react';
import { Video, Scan, MapPin, Eye, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';

export function ReferentSection() {
  const [activeTab, setActiveTab] = useState(0);

  const concepts = [
    {
      id: 'crawlers',
      title: 'Crawler Robots',
      desc: 'Robots sobre orugas o ruedas diseñados para conductos confinados.',
      icon: Scan,
      tag: 'MOVILIDAD SUBTERRÁNEA'
    },
    {
      id: 'vision',
      title: 'Cámaras Internas',
      desc: 'Módulos ópticos de alta sensibilidad e iluminación LED focalizada.',
      icon: Eye,
      tag: 'OPTICA ESPECIALIZADA'
    },
    {
      id: 'video',
      title: 'Transmisión Video',
      desc: 'Envío de señal en tiempo real hacia la superficie para monitoreo.',
      icon: Video,
      tag: 'TELEMETRÍA EN VIVO'
    },
    {
      id: 'mapping',
      title: 'Mapeo de Ductos',
      desc: 'Localización del punto exacto donde reside la obstrucción.',
      icon: MapPin,
      tag: 'DIAGNÓSTICO DE PRECISIÓN'
    }
  ];

  const steps = [
    { label: 'CÁMARA', detail: 'Captura en oscuridad total' },
    { label: 'VIDEO EN TIEMPO REAL', detail: 'Transmisión sin latencia' },
    { label: 'DIAGNÓSTICO', detail: 'Identificación de raíz u obstrucción' },
    { label: 'MAPEO DE DISTANCIA', detail: 'Ubicación con exactitud' },
  ];

  return (
    <section id="referent" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#030712] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background radial cyan glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 03 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>REFERENTE GLOBAL</span>
        </div>

        {/* Slide Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Una tecnología que ya existe. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ahora podemos adaptarla.</span>
          </h2>
          <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            A nivel mundial, la robótica de inspección en tuberías ha transformado el mantenimiento de infraestructura crítica bajo el paradigma:
          </p>
          <div className="mt-3 inline-block px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-tech font-bold text-sm tracking-wider uppercase">
            INSPECCIONAR SIN EXCAVAR
          </div>
        </div>

        {/* 4 Concept Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {concepts.map((item, idx) => {
            const IconComp = item.icon;
            const isActive = activeTab === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative ${
                  isActive
                    ? 'bg-slate-900 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,210,255,0.25)]'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase mb-1.5">
                  {item.tag}
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-tech font-bold text-white uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Pipeline Simulation Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-500/30 relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest block mb-0.5">
                Flujo Tecnológico Adaptado
              </span>
              <h3 className="text-lg font-heading font-bold text-white uppercase">
                De la inspección tradicional a TeleCrawler
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
              <span>Simulación de Inspección en Vivo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            {steps.map((st, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-tech text-slate-400">PASO 0{i + 1}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xs font-tech font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                  {st.label}
                </div>
                <div className="text-[11px] text-slate-400 font-sans">
                  {st.detail}
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-cyan-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
