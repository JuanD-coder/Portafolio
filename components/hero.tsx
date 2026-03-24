"use client"

import { Github, Linkedin, Mail, Terminal, Coffee, Smartphone } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-transparent text-white px-4 py-20 font-mono overflow-hidden flex items-center justify-center">
      {/* Scanline overlay en el componente (añadido extra para saturación CRT) */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%] opacity-20"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Manga Panel Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-4 border-white bg-white">

          {/* HEADER PANEL */}
          <div className="col-span-1 md:col-span-12 border-b-4 border-white bg-black p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className="text-fuchsia-500" strokeWidth={3} />
              <span className="font-bold tracking-widest text-white uppercase">SYSTEM_BOOT: JuanD-coder</span>
            </div>
            <div className="hidden md:block text-cyan-400 font-bold tracking-widest animate-pulse">
              [ STATUS: ONLINE ]
            </div>
          </div>

          {/* LEFT PANEL: Ascii & Title (Col span 7) */}
          <div className="col-span-1 md:col-span-7 border-b-4 md:border-b-0 md:border-r-4 border-white bg-black p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 md:gap-8 relative group">
            <div className="absolute top-0 right-0 p-2 text-fuchsia-500 text-xs font-bold border-l-4 border-b-4 border-white bg-black z-10 hidden md:block">
              NO. 01
            </div>

            {/* Avatar / Photo Box */}
            {/* NOTA: Para poner tu foto, simplemente borra la etiqueta <pre> y coloca aquí tu <img> con clases "w-full h-full object-cover grayscale" */}
            <div className="w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0 border-4 border-gray-800 bg-[#050505] p-2 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors duration-500">
              <div className="absolute top-0 left-0 bg-gray-800 text-[0.6rem] px-2 py-1 text-gray-400 group-hover:bg-white group-hover:text-black font-bold uppercase transition-colors z-10">
                [ VISUAL_ASSET ]
              </div>
              <pre className="text-[0.45rem] md:text-[0.4rem] lg:text-[0.55rem] leading-[6px] md:leading-[5px] lg:leading-[7px] text-gray-500 font-mono overflow-hidden">
                {`⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕`}
              </pre>
            </div>

            {/* Title Section */}
            <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center h-full">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-[4px_4px_0_#FF00FF] md:drop-shadow-[5px_5px_0_#FF00FF]">
                JUAND-<br />CODER
              </h1>
              <div className="mt-4 md:mt-8 bg-white text-black font-black uppercase py-2 px-3 lg:px-5 inline-block tracking-widest border-2 border-black text-[0.65rem] lg:text-sm mx-auto md:mx-0 w-fit">
                ANDROID & SPRING BOOT
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Details & CTA (Col span 5) */}
          <div className="col-span-1 md:col-span-5 bg-black flex flex-col">

            {/* Context Panel */}
            <div className="border-b-4 border-white p-6 flex-1 relative overflow-hidden group hover:bg-white hover:text-black transition-colors duration-300">
              <div className="absolute -right-10 -top-10 text-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity">
                <Smartphone size={160} strokeWidth={1} />
              </div>
              <h2 className="text-2xl font-bold uppercase mb-4 text-cyan-400 group-hover:text-black">
                &gt; WHOAMI
              </h2>
              <p className="text-lg leading-relaxed font-bold z-10 relative">
                Desarrollador apasionado por crear aplicaciones móviles nativas y APIs robustas.
                Basado en Colombia.
              </p>
              <ul className="mt-4 space-y-2 font-bold z-10 relative">
                <li><span className="text-fuchsia-500 group-hover:text-fuchsia-600">[OS]</span> Arch Linux</li>
                <li><span className="text-fuchsia-500 group-hover:text-fuchsia-600">[DEV]</span> Java, Kotlin</li>
                <li><span className="text-fuchsia-500 group-hover:text-fuchsia-600">[LRN]</span> React, Python</li>
              </ul>
            </div>

            {/* Action Links Panel */}
            <div className="grid grid-cols-3 md:grid-cols-3 h-24">
              <a href="https://github.com/JuanD-coder" target="_blank" rel="noopener noreferrer"
                className="border-r-4 border-white flex items-center justify-center bg-black hover:bg-cyan-400 hover:text-black transition-colors group">
                <Github size={32} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer"
                className="border-r-4 border-white flex items-center justify-center bg-black hover:bg-fuchsia-500 hover:text-black transition-colors group">
                <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:tu@email.com"
                className="flex items-center justify-center bg-black hover:bg-green-400 hover:text-black transition-colors group">
                <Mail size={32} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* DECORATIVE BAR BELOW */}
        <div className="w-full h-8 bg-white mt-4 flex justify-between items-center px-4">
          <span className="text-black font-bold uppercase tracking-widest text-sm">WARNING: UNDER CONSTRUCTION</span>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-fuchsia-500"></div>
            <div className="w-4 h-4 bg-cyan-400"></div>
            <div className="w-4 h-4 bg-black"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
