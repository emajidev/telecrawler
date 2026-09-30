import React from 'react';
import { WifiOff, Cable } from 'lucide-react';

export function WifiChallengeSection() {
  return (
    <section id="wifi" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#030712] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 07 / 10</span>
            <span className="w-8 h-[1px] bg-cyan-500/40"></span>
            <span>EL DESAFÍO DEL WI-FI</span>
          </div>
          <span className="text-xs font-tech text-amber-300 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30 font-bold uppercase">
            DISEÑO PROPUESTO / EN DESARROLLO
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Bajo tierra, la <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-300">conectividad cambia.</span>
          </h2>
          <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Las ondas Wi-Fi experimentan drástica atenuación al atravesar tierra densa, concreto reforzado y tuberías húmedas.
          </p>
        </div>

        {/* Signal Attenuation Flow */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30">
          <div className="flex items-center gap-2 text-xs font-tech font-bold text-amber-400 uppercase tracking-widest mb-4">
            <WifiOff className="w-4 h-4 text-amber-400" />
            <span>ATENUACIÓN DE SEÑAL SUBTERRÁNEA</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-tech text-slate-400 block mb-0.5">ORIGEN</span>
              <span className="text-xs font-tech font-bold text-white uppercase">OPERADOR</span>
              <span className="text-[10px] text-cyan-400 block mt-0.5">100% Señal</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/20">
              <span className="text-[10px] font-tech text-slate-400 block mb-0.5">TRANSMISIÓN</span>
              <span className="text-xs font-tech font-bold text-amber-300 uppercase">SEÑAL Wi-Fi</span>
              <span className="text-[10px] text-amber-400 block mt-0.5">Reflexión en Paredes</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-red-500/30">
              <span className="text-[10px] font-tech text-slate-400 block mb-0.5">MEDIO</span>
              <span className="text-xs font-tech font-bold text-red-400 uppercase">DUCTO SUBTERRÁNEO</span>
              <span className="text-[10px] text-red-400 block mt-0.5">Atenuación Severa</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-tech text-slate-400 block mb-0.5">RECEPTOR</span>
              <span className="text-xs font-tech font-bold text-white uppercase">TELECRAWLER</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Pérdida de Enlace</span>
            </div>
          </div>
        </div>

        {/* Cable Umbilical Solution Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,162,255,0.2)]">
          <div className="flex items-center gap-2 text-cyan-400 font-tech text-xs uppercase mb-3">
            <Cable className="w-4 h-4 text-cyan-400" />
            <span>SOLUCIÓN TÉCNICA PROPUESTA: CABLE UMBILICAL DE RESPALDO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  01
                </div>
                <h4 className="text-sm font-tech font-bold text-white uppercase">COMUNICACIÓN ESTABLE</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Garantiza transmisión fluida de video y telemetría de control sin interferencias producidas por la masa terrestre o ductos metálicos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  02
                </div>
                <h4 className="text-sm font-tech font-bold text-white uppercase">RECUPERACIÓN FÍSICA</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Permite la extracción manual segura del robot en caso de colapso del ducto, atasco o agotamiento accidental de batería.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
