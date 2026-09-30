import React from 'react';
import { Lightbulb, Box, Cpu, Wrench, CheckCircle, ArrowRight, Shield } from 'lucide-react';

export function PrototypeDesignSection() {
  const steps = [
    { title: 'IDEA', desc: 'Diagnóstico ductos', icon: Lightbulb },
    { title: 'DISEÑO 3D', desc: 'CAD chasis y orugas', icon: Box },
    { title: 'FABRICACIÓN', desc: 'Impresión 3D PETG', icon: Wrench },
    { title: 'ELECTRÓNICA', desc: 'ESP32-CAM y drivers', icon: Cpu },
    { title: 'INTEGRACIÓN', desc: 'Transmisión estanca', icon: Shield },
    { title: 'PRUEBAS', desc: 'Ensayos en tramo PVC', icon: CheckCircle },
    { title: 'TELECRAWLER', desc: 'Prototipo verificado', icon: ArrowRight },
  ];

  const labComponents = [
    'Impresora 3D (PETG & Resina)',
    'Piezas Mecánicas Impresas',
    'Motores DC de Reducción',
    'ESP32-CAM Microcontrolador',
    'Cables & Conectores Estancos',
    'Herramientas de Precisión',
  ];

  return (
    <section id="prototype" className="w-full min-h-screen lg:h-screen pt-10 pb-16 px-6 sm:px-12 lg:px-16 bg-[#060B1E] relative overflow-hidden flex flex-col justify-between snap-start">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-cyan-600/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1700px] mx-auto z-10 my-auto space-y-6">
        
        {/* Slide Header Tag */}
        <div className="flex items-center gap-3 font-tech text-xs tracking-widest text-cyan-400 uppercase">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">LÁMINA 08 / 10</span>
          <span className="w-8 h-[1px] bg-cyan-500/40"></span>
          <span>DISEÑO DEL PROTOTIPO</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Del concepto <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">al prototipo.</span>
          </h2>
          <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Metodología de desarrollo ágil de hardware. Iteraciones rápidas desde bocetos preliminares hasta prototipos probados en laboratorio.
          </p>
        </div>

        {/* 7 Step Timeline Bar */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {steps.map((st, i) => {
              const IconComp = st.icon;
              return (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 mx-auto flex items-center justify-center text-cyan-400 mb-1.5">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[9px] font-tech text-slate-400 mb-0.5">PASO 0{i + 1}</div>
                  <h4 className="text-xs font-tech font-bold text-white uppercase">{st.title}</h4>
                  <p className="text-[10px] text-slate-400 font-sans">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Robotics Lab Workbench Visual Box */}
        <div className="p-6 rounded-3xl bg-slate-950/90 border border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-tech text-cyan-400 uppercase tracking-widest block">
                Ambiente de Laboratorio CyberNova
              </span>
              <h3 className="text-xl font-heading font-bold text-white uppercase">
                Mesa de Trabajo & Componentes de Prototipado
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                El entorno de trabajo combina herramientas de modelado digital 3D con componentes mecánicos y electrónicos estándar, permitiendo reparar o modificar el robot directamente en campo.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {labComponents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-tech text-slate-300 bg-slate-900 p-2 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-44 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 flex items-center justify-center p-4 text-center hud-corner-tr">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 mx-auto flex items-center justify-center text-cyan-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-tech font-bold text-white uppercase">Prototipado Modular V1.0</h4>
                <p className="text-xs text-slate-400 font-sans max-w-xs">
                  Cuerpo central protegido contra humedad con módulos desacoplables.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
