"use client"

import { Mail, Linkedin, Github, FileText, Send, TerminalSquare, ExternalLink } from "lucide-react"

export function Contact() {
  const contactLinks = [
    {
      label: "PING_GITHUB",
      value: "github.com/JuanD-coder",
      url: "https://github.com/JuanD-coder",
      icon: Github,
      color: "hover:bg-cyan-400"
    },
    {
      label: "PING_LINKEDIN",
      value: "linkedin.com/in/tu-perfil",
      url: "https://linkedin.com/in/tu-perfil",
      icon: Linkedin,
      color: "hover:bg-fuchsia-500"
    },
    {
      label: "PING_EMAIL",
      value: "tu@email.com",
      url: "mailto:tu@email.com",
      icon: Mail,
      color: "hover:bg-green-400"
    },
    {
      label: "FETCH_RESUME",
      value: "Descargar CV.pdf",
      url: "#",
      icon: FileText,
      color: "hover:bg-white"
    }
  ]

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-mono z-10">

      {/* HEADER TÍTULO ESTILO TERMINAL */}
      <div className="border-b-4 border-white pb-2 mb-12 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_#FF00FF]">
          PING ./CONTACT
        </h2>
        <div className="hidden md:flex gap-2 mb-2 items-center">
          <TerminalSquare className="w-8 h-8 text-cyan-400" />
          <span className="w-4 h-4 bg-white block animate-pulse"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border-4 border-white bg-black shadow-[10px_10px_0_rgba(255,255,255,0.1)] overflow-hidden">

        {/* PANEL IZQUIERDO: FORMULARIO SIMULADO / CALL TO ACTION (7 Columnas) */}
        <div className="lg:col-span-7 p-6 md:p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-white relative group crt-panel">
          <div className="absolute top-0 left-0 bg-white text-black text-[0.6rem] px-2 py-1 font-bold uppercase">
            [ CONNECTION_PROMPT ]
          </div>

          <div className="mt-6 space-y-8">
            <h3 className="text-3xl md:text-5xl font-black uppercase leading-none text-white drop-shadow-[2px_2px_0_#00FFFF]">
              ¿LISTO PARA <br /> INICIAR EL BOOT?
            </h3>
            <p className="text-gray-400 font-bold text-base md:text-lg leading-relaxed max-w-md">
              Estoy disponible para proyectos de desarrollo <span className="text-white">Android</span> y arquitecturas <span className="text-white">Backend</span>.
              Si buscas código limpio y soluciones robustas, establezcamos contacto.
            </p>

            <a
              href="mailto:tu@email.com"
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all duration-300 shadow-[6px_6px_0_#FF00FF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <Send size={24} /> ESTABLECER CONEXIÓN (EMAIL)
            </a>
          </div>
        </div>

        {/* PANEL DERECHO: REDES / NODOS (5 Columnas) */}
        <div className="lg:col-span-5 flex flex-col bg-[#050505]">
          <div className="p-4 bg-white text-black font-black uppercase text-xs tracking-widest flex items-center gap-2">
            <ExternalLink size={14} /> ACTIVE_NODES
          </div>

          {contactLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 p-6 md:p-8 border-b-4 last:border-b-0 border-white flex flex-col justify-center transition-all duration-300 group ${link.color} hover:text-black text-white`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <link.icon size={28} className="group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[0.65rem] font-black opacity-60 uppercase tracking-widest mb-1">{link.label}</div>
                    <div className="text-lg md:text-xl font-black uppercase tracking-tighter">{link.value}</div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity font-black text-2xl tracking-tighter">
                  -&gt;
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER: INDUSTRIAL HARDWARE STATUS BAR */}
      <footer className="mt-24 border-t-8 border-white pt-10 pb-16 font-mono relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-white text-black text-[0.6rem] px-4 py-1 font-black uppercase z-20 shadow-[-4px_4px_0_#FF00FF]">
          TERMINAL_EOV // 2026
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Node Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-black text-xs uppercase tracking-widest">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              NODE_STATUS: ACTIVE
            </div>
            <div className="text-[0.65rem] text-gray-500 font-bold leading-relaxed uppercase">
              Procesando datos desde <span className="text-white">CO 🇨🇴</span><br />
              Uptime: 24/7/365 <br />
              Latencia: 0.1ms (Direct)
            </div>
          </div>

          {/* System Telemetry (Fake but aesthetic) */}
          <div className="space-y-4">
            <div className="text-fuchsia-500 font-black text-xs uppercase tracking-widest">
              TELEMETRY_LOG
            </div>
            <div className="grid grid-cols-2 gap-2 text-[0.6rem] font-bold text-gray-500 uppercase">
              <div>CPU_LOAD: 12%</div>
              <div className="text-right">MEM: 4.2GB</div>
              <div className="col-span-2 h-1 bg-gray-900 border border-gray-800">
                <div className="h-full bg-fuchsia-500 w-[65%]"></div>
              </div>
              <div>STREAK: 100%</div>
              <div className="text-right">OS: ARCH_X64</div>
            </div>
          </div>

          {/* Social Nodes */}
          <div className="space-y-4">
            <div className="text-white font-black text-xs uppercase tracking-widest">
              SOCIAL_PROTOCOL
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/JuanD-coder" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fuchsia-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tu@email.com" className="text-gray-500 hover:text-green-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Build Info */}
          <div className="space-y-4 flex flex-col lg:items-end">
            <div className="text-gray-400 font-black text-xs uppercase tracking-widest">
              BUILD_METADATA
            </div>
            <div className="flex flex-col lg:items-end gap-1">
              <span className="text-[0.6rem] font-bold bg-white text-black px-2 py-0.5">V1.0.0-STABLE</span>
              <span className="text-[0.6rem] font-bold text-gray-600">STK: NEXT_APP_ROUTER</span>
            </div>
          </div>

        </div>

        {/* Closing Line */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-dashed border-gray-800 pt-8 gap-4">
          <p className="text-[0.65rem] font-black text-gray-600 uppercase tracking-[0.3em]">
            DESIGNED BY <span className="text-white hover:text-cyan-400 cursor-help transition-colors">JUAND-CODER</span> // POWERED BY ARCH LINUX & COFFEE
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[0.65rem] font-black text-white hover:text-fuchsia-500 transition-all uppercase tracking-widest border-2 border-white px-3 py-1 hover:bg-white"
          >
            [ EXECUTE_SCROLL_TOP ]
          </button>
        </div>

        {/* SCANLINE OVERLAY IN FOOTER */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_2px]"></div>
      </footer>

    </section>
  )
}
