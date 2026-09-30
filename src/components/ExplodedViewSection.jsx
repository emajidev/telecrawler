import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TeleCrawlerModel } from './3d/TeleCrawlerModel';
import { Layers, Sliders } from 'lucide-react';

export function ExplodedViewSection() {
  const [explosionLevel, setExplosionLevel] = useState(0.65);

  const layersList = [
    { num: '01', title: 'Cubierta Superior', desc: 'Escudo azul PETG impreso en 3D.' },
    { num: '02', title: 'Módulo Óptico', desc: 'Lente gran angular optimizado.' },
    { num: '03', title: 'Matriz Quad LED', desc: 'Focos de luz fría alta intensidad.' },
    { num: '04', title: 'ESP32-CAM Core', desc: 'Microcontrolador transmisor Wi-Fi.' },
    { num: '05', title: 'Placa Electrónica', desc: 'Drivers de motores DC duales.' },
    { num: '06', title: 'Motores DC', desc: 'Motores reducidos alto torque.' },
    { num: '07', title: 'Transmisión', desc: 'Engranajes internos en resina.' },
    { num: '08', title: 'Orugas Continuas', desc: 'Banda de tracción para fango/agua.' },
    { num: '09', title: 'Chasis Estructural', desc: 'Bastidor liviano anti-impacto.' },
    { num: '10', title: 'Protección Base', desc: 'Chasis estanco sellado IP68.' },
  ];

  return (
    <section id="exploded" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#030712] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background radial blue lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-4">
        
        {/* Slide Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 05 / 10</span>
            <span className="w-8 h-[1px] bg-cyan-500/40"></span>
            <span>MODELO 3D DESPIECE</span>
          </div>

          {/* Explosion Slider Controls */}
          <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-1.5 rounded-xl border border-cyan-500/30">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-tech text-slate-300">Despiece:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explosionLevel}
              onChange={(e) => setExplosionLevel(parseFloat(e.target.value))}
              className="w-28 accent-cyan-400 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
            <span className="text-xs font-tech font-bold text-cyan-400 w-8">
              {Math.round(explosionLevel * 100)}%
            </span>
          </div>
        </div>

        {/* Slide Title */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black uppercase tracking-tight text-white">
            Diseñado para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-300">ser construido.</span>
          </h2>
          <p className="mt-1 text-sm font-tech font-bold text-cyan-300 uppercase tracking-wide">
            Impresión 3D + componentes de bajo costo + electrónica accesible
          </p>
        </div>

        {/* 3D Exploded Canvas + 10 Layer Spec List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left 3D Canvas */}
          <div className="lg:col-span-7 h-[420px] sm:h-[460px] rounded-3xl bg-slate-950 border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-3 left-3 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/30 text-[11px] font-tech text-cyan-300 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>VISTA EXPLODED INTERACTIVA</span>
            </div>

            <Canvas camera={{ position: [3.2, 2.2, 3.8], fov: 45 }}>
              <ambientLight intensity={0.6} color="#0B192C" />
              <directionalLight position={[6, 12, 6]} intensity={1.5} color="#00A2FF" />
              <pointLight position={[-4, 2, -4]} intensity={2} color="#00F0FF" />
              <TeleCrawlerModel explodedProgress={explosionLevel} />
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>

          {/* Right 10 Layer List */}
          <div className="lg:col-span-5 h-[420px] sm:h-[460px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {layersList.map((layer) => (
              <div
                key={layer.num}
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-tech font-bold text-xs shrink-0">
                  {layer.num}
                </div>
                <div>
                  <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider">
                    {layer.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-sans leading-tight">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
