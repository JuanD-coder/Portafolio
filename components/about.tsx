"use client"

import { Code2, Smartphone, Server, TerminalSquare } from "lucide-react"
import { AndroidMascot } from "./android-mascot"

export function About() {
  const features = [
    {
      icon: Smartphone,
      title: "MOBILE_DEV",
      description: "Desarrollo Android Nativo (Kotlin/Java) y Jetpack Compose.",
    },
    {
      icon: Server,
      title: "BACKEND_ENG",
      description: "APIs RESTful, arquitectura y escalabilidad con Spring Boot.",
    },
    {
      icon: Code2,
      title: "CLEAN_CODE",
      description: "Patrones de diseño, MVVM y código estrictamente tipado.",
    },
  ]

  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-mono z-10">

      {/* HEADER TÍTULO ESTILO TERMINAL */}
      <div className="border-b-4 border-white pb-2 mb-8 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_#FF00FF]">
          $ WHOAMI_
        </h2>
        <div className="hidden md:flex gap-2 mb-2 items-center">
          <TerminalSquare className="w-8 h-8 text-fuchsia-500" />
          <span className="w-4 h-4 bg-white block animate-pulse"></span>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL TIPO MANGA PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-white bg-black shadow-[10px_10px_0_rgba(255,255,255,0.1)]">

        {/* PANEL IZQUIERDO: TEXTO (8 Columnas) */}
        <div className="lg:col-span-8 p-6 md:p-10 lg:border-r-4 border-b-4 lg:border-b-0 border-white relative">
          <div className="absolute top-0 right-0 bg-white text-black text-[0.6rem] px-2 py-1 font-bold uppercase">
            [ BIO_DATA ]
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-6 overflow-hidden">
            <div className="space-y-6 text-base md:text-lg font-bold text-gray-300 leading-relaxed flex-1 order-2 lg:order-1">
              <p>
                Hola, soy <span className="bg-white text-black px-2 py-1 mx-1 border border-black uppercase tracking-widest">Juan David</span>.
                Desarrollador de software basado en Colombia.
              </p>
              <p>
                Mi enfoque principal y mayor pasión radica en el ecosistema <span className="text-cyan-400">Android</span>. Construyo interfaces fluidas y aplicaciones robustas utilizando tecnologías modernas como Kotlin y Jetpack Compose.
              </p>
              <p>
                No le temo a asomarme al servidor; construyo arquitecturas de backend sólidas y seguras con <span className="text-fuchsia-500">Spring Boot (Java)</span> para dar vida a los sistemas desde las raíces.
              </p>
              <div className="border-l-4 border-cyan-400 pl-4 mt-6 py-2 bg-gray-900/50">
                <p className="text-cyan-400 text-sm md:text-base italic uppercase tracking-wider">
                  "Entusiasta del código limpio, arquitectura MVVM y usuario fiel de Arch Linux."
                </p>
              </div>
            </div>
            
            <div className="lg:order-2 shrink-0 animate-fade-in order-1">
              <AndroidMascot />
            </div>
          </div>
        </div>

        {/* PANEL DERECHO: CARACTERÍSTICAS (4 Columnas) */}
        <div className="lg:col-span-4 flex flex-col bg-[#050505]">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex-1 p-6 border-b-4 border-white last:border-b-0 hover:bg-white hover:text-black transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute right-[-10px] top-[-10px] opacity-10 group-hover:opacity-30 transition-opacity">
                <feature.icon className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <feature.icon className="w-6 h-6 text-fuchsia-500 group-hover:text-black transition-colors" />
                <h3 className="text-lg font-black uppercase tracking-widest">{feature.title}</h3>
              </div>
              <p className="text-xs font-bold opacity-80 leading-relaxed uppercase relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOQUE 'NEOFETCH' SIMULADO (SISTEMA REAL DE UN USUARIO ARCH) */}
      <div className="mt-8 border-4 border-white bg-black p-6 md:p-8 font-mono relative group crt-panel hover:border-cyan-400 shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0_#00FFFF] transition-all overflow-hidden flex flex-col gap-8 text-xs md:text-sm lg:text-base">
        <div className="absolute top-0 right-0 bg-white text-black text-[0.6rem] px-2 py-1 font-bold uppercase group-hover:bg-cyan-400 transition-colors z-20">
          [ SYSTEM_FETCH ]
        </div>

        {/* LOGO ASCIIQUARIUM (ACUARIO DE TERMINAL FULL-WIDTH) */}
        <pre className="text-cyan-400 tracking-tighter leading-none font-bold mt-2 select-none group-hover:text-fuchsia-500 transition-colors text-[0.4rem] sm:text-[0.6rem] md:text-sm overflow-hidden text-center mx-auto">
          {`      o                 O                                          o
   .                     .           <*}}}>=<                 . 
      <*}}}>=<              o                            ><>        o
  ><>               .                        .              
         O                       ><>             o               O
             ><>         <*}}}>=<                             ><>
    .                 o                               .
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`}
        </pre>

        {/* METADATOS ESTILO LINUX */}
        <div className="w-full text-gray-300 mt-2 border-t-2 border-dashed border-gray-700 pt-6">
          <div className="text-fuchsia-500 font-bold mb-1 text-lg">juand<span className="text-white">@</span>coder-machine</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mt-4">
            <div><span className="text-cyan-400 font-bold">OS:</span> Arch Linux x86_64</div>
            <div><span className="text-cyan-400 font-bold">Host:</span> Dev Machine Profile</div>
            <div><span className="text-cyan-400 font-bold">Kernel:</span> Brain 2.0 (Coffee)</div>
            <div><span className="text-cyan-400 font-bold">Uptime:</span> Consciente 24/7</div>
            <div><span className="text-cyan-400 font-bold">IDE:</span> Android Studio / IntelliJ</div>
            <div><span className="text-cyan-400 font-bold">Shell:</span> bash / zsh</div>
            <div><span className="text-cyan-400 font-bold">Terminal:</span> Cyber-Terminal</div>
            <div><span className="text-cyan-400 font-bold">Env:</span> Android + JVM</div>
          </div>

          <div className="mt-6 flex justify-start gap-2">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-black border border-gray-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-red-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-green-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-indigo-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-fuchsia-500"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-cyan-400"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-white"></div>
          </div>
        </div>
      </div>

    </section>
  )
}
