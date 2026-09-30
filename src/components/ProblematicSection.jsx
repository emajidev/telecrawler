import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CutawayScene } from './3d/CutawayScene';
import { OrbitControls } from '@react-three/drei';
import { AlertTriangle, AlertOctagon, Layers, Trash2, Trees, ShieldAlert, Disc } from 'lucide-react';

export function ProblematicSection() {
  const causes = [
    { title: 'Escombros', desc: 'Residuos en ducto', icon: Trash2 },
    { title: 'Raíces', desc: 'Vegetación invasiva', icon: Trees },
    { title: 'Fauna Local', desc: 'Ingreso de fauna', icon: ShieldAlert },
    { title: 'Tapa Tanquilla', desc: 'Exposición y robo', icon: Disc },
  ];

  const processFlow = [
    { step: '01', title: 'DIAGNÓSTICO A CIEGAS', sub: 'Técnicos sin visibilidad' },
    { step: '02', title: 'EXCAVACIÓN', sub: 'Ruptura de asfalto' },
    { step: '03', title: 'TIEMPO ELEVADO', sub: 'Búsqueda por tanteo' },
    { step: '04', title: 'INTERRUPCIÓN', sub: 'Servicio caído' },
  ];

  const consequences = [
    'Tiempos de respuesta elevados al localizar fallas.',
    'Excavaciones imprecisas y destructivas en calles.',
    'Deterioro continuo del asfaltado vial comunitario.',
    'Interrupción del servicio de fibra óptica y telefonía.',
  ];

  return (
    <section id="problem" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#060B1E] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Slide Grid */}
      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Badge */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 02 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>LA PROBLEMÁTICA</span>
        </div>

        {/* Content Layout: Left 50% Text, Right 50% Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Problematic Pitch */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
                El desafío de las <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">infraestructuras subterráneas</span>
              </h2>
              <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                En Venezuela, una parte significativa del cableado de fibra óptica y telefonía se encuentra en ductos subterráneos que colapsan recurrentemente debido a escombros, raíces o fauna local.
              </p>
              <p className="mt-2 text-slate-400 font-sans text-xs sm:text-sm leading-relaxed">
                Ante una falla, los técnicos enfrentan tiempos de respuesta elevados al localizar obstrucciones, viéndose obligados a realizar excavaciones imprecisas que prolongan la interrupción del servicio en las comunidades afectadas.
              </p>
            </div>

            {/* 4 Causes Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {causes.map((c, idx) => {
                const IconComp = c.icon;
                return (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-tech font-bold text-white uppercase">{c.title}</h4>
                      <span className="text-[10px] text-slate-400 font-sans block">{c.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Norm Badge */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-slate-300 font-sans leading-tight">
                <span className="font-tech font-bold text-amber-400">Norma COVENIN 3830:2003:</span> Canalizaciones de PVC 4" propensas a obstrucciones severas.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Subsoil Cutaway Canvas + HUD Box */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            
            {/* 3D Cutaway Box */}
            <div className="h-[300px] sm:h-[340px] rounded-2xl bg-slate-950 border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-3 left-3 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/30 text-[11px] font-tech text-cyan-300 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>CORTE TRANSVERSAL SUBTERRÁNEO 3D</span>
              </div>
              <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
                <CutawayScene />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
              <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between text-[10px] font-tech text-slate-300 bg-slate-950/80 p-2 rounded-md border border-slate-800">
                <span className="text-cyan-400 font-bold">1. Tanquilla de Inspección</span>
                <span className="text-amber-400 font-bold">2. Obstáculos y Raíces</span>
                <span className="text-sky-400 font-bold">3. Ductos PVC 4"</span>
              </div>
            </div>

            {/* Consequences HUD Panel */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hud-corner-tl">
              <div className="flex items-center gap-2 text-cyan-400 font-tech font-bold text-xs uppercase tracking-wider mb-2">
                <AlertOctagon className="w-4 h-4" />
                <span>CONSECUENCIAS EN LA RED DE TELECOMUNICACIONES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                {consequences.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <span className="text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Process Sequence Flow Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {processFlow.map((step, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-xl font-heading font-black text-cyan-500/40 mb-0.5">{step.step}</div>
              <h4 className="text-xs font-tech font-bold text-white uppercase">{step.title}</h4>
              <p className="text-[10px] text-slate-400 font-sans">{step.sub}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
