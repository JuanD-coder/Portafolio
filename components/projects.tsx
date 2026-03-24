"use client"

import { ExternalLink, Github, TerminalSquare, Eye, Code, Smartphone } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: "PROJECT_01",
      executable: "./AppRecconProject.apk",
      title: "AppReccon",
      description: "Optimización de contabilidad agrícola. Gestión offline de recolección de café con persistencia local y sincronización por lotes.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Placeholder tecnológico
      stack: [
        { name: "Kotlin", icon: "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
        { name: "Android", icon: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
        { name: "Room", icon: "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" }
      ],
      type: "MOBILE_APP",
      repo: "#",
      demo: "#"
    },
    {
      id: "PROJECT_02",
      executable: "./Reccon-Web.exe",
      title: "Reccon Web",
      description: "Panel de control administrativo. Visualización de métricas críticas y generación de reportes inteligentes para el sector cafetalero.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      stack: [
        { name: "JavaScript", icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "React JS", icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Tailwind", icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" }
      ],
      type: "WEB_DASHBOARD",
      repo: "#",
      demo: "#"
    },
    {
      id: "PROJECT_03",
      executable: "./XCampoApp.apk",
      title: "XCampo App",
      description: "Marketplace rural directo. Conectando productores campesinos con el consumidor final mediante una interfaz intuitiva y eficiente.",
      image: "https://images.unsplash.com/photo-1512428559083-a40ce1204475?auto=format&fit=crop&q=80&w=800",
      stack: [
        { name: "React Native", icon: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Expo", icon: "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" }
      ],
      type: "MOBILE_APP",
      repo: "#",
      demo: "#"
    },
    {
      id: "PROJECT_04",
      executable: "./Otobit.apk",
      title: "Otobit",
      description: "Reproductor multimedia de alto rendimiento. Arquitectura limpia y sistema de streaming local optimizado para bajo consumo de recursos.",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
      stack: [
        { name: "Kotlin", icon: "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
        { name: "Compose", icon: "https://img.shields.io/badge/Compose-4285F4?style=for-the-badge&logo=android&logoColor=white" },
        { name: "Media3", icon: "https://img.shields.io/badge/Media3-444444?style=for-the-badge&logo=google-play&logoColor=white" }
      ],
      type: "MOBILE_APP",
      repo: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-mono z-10">
      
      {/* HEADER TÍTULO ESTILO TERMINAL */}
      <div className="border-b-4 border-white pb-2 mb-12 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_#FF00FF]">
          LS ./PROJECTS
        </h2>
        <div className="hidden md:flex gap-2 mb-2 items-center">
          <TerminalSquare className="w-8 h-8 text-cyan-400" />
          <span className="w-4 h-4 bg-fuchsia-500 block animate-pulse"></span>
        </div>
      </div>

      {/* GRID DE PROYECTOS */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-white bg-black hover:border-cyan-400 transition-all duration-300 shadow-[10px_10px_0_rgba(255,255,255,0.05)] hover:shadow-[15px_15px_0_rgba(0,255,255,0.2)] crt-panel overflow-hidden"
          >
            {/* PANEL IZQUIERDO: VISUAL / IMAGEN CON MARCO DIFERENCIADO (COL SPAN 4) */}
            <div className="hidden lg:flex lg:col-span-4 relative overflow-hidden bg-[#030303] border-r-4 border-white group-hover:border-cyan-400 min-h-[400px] lg:h-auto items-center justify-center p-6 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-size-[20px_20px]">
               
               {project.type === "MOBILE_APP" ? (
                 /* MOCKUP MÓVIL ESTILO RETRO-HARDWARE (Más angosto) */
                 <div className="relative w-56 h-[420px] border-4 border-white bg-black rounded-4xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] group-hover:border-cyan-400 transition-all flex flex-col">
                   {/* Bozal / Cámara */}
                   <div className="h-6 w-full border-b-2 border-white flex items-center justify-center gap-1 bg-black shrink-0 z-20">
                     <div className="w-1 h-1 rounded-full bg-white opacity-20"></div>
                     <div className="w-6 h-1 rounded-full bg-white opacity-20"></div>
                   </div>
                   
                   {/* Pantalla */}
                   <div className="flex-1 relative overflow-hidden bg-gray-900 border-x-2 border-white">
                     <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity z-10"></div>
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                     />
                     {/* Overlay de HUD móvil */}
                     <div className="absolute top-2 left-2 right-2 flex justify-between z-20 opacity-50 text-[0.35rem] font-bold text-white tracking-widest">
                       <span>LINK_UP</span>
                       <span>BAT:88%</span>
                     </div>
                     
                     <div className="absolute bottom-4 left-4 z-20 bg-white text-black px-2 py-0.5 font-bold text-[0.45rem] uppercase tracking-widest border border-black">
                       [ APP_EXE ]
                     </div>

                     {/* Brillo Ciberpunk (Muy sutil) */}
                     <div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
                   </div>

                   {/* Botón Home */}
                   <div className="h-8 w-full border-t-2 border-white flex items-center justify-center bg-black shrink-0 z-20">
                     <div className="w-6 h-1 border border-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                 </div>

               ) : (
                 /* MOCKUP WEB ESTILO VENTANA DE OS ANTIGUO (Proporción normal) */
                 <div className="relative w-full h-[280px] border-4 border-white bg-black shadow-[6px_6px_0_white] group-hover:shadow-[6px_6px_0_#00FFFF] group-hover:border-cyan-400 transition-all flex flex-col mx-4 overflow-hidden">
                   {/* Barra de Título */}
                   <div className="h-7 bg-white text-black px-2 flex items-center justify-between font-black text-[0.55rem] uppercase tracking-widest border-b-2 border-black shrink-0 z-20">
                     <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 border-2 border-black"></div>
                       {project.executable}
                     </div>
                     <div className="flex gap-1">
                       <div className="w-2.5 h-2.5 border-2 border-black">_</div>
                       <div className="w-2.5 h-2.5 border-2 border-black text-center bg-black text-white px-0.5">X</div>
                     </div>
                   </div>
                   
                   {/* Barra de URL */}
                   <div className="h-5 bg-black border-b-2 border-white flex items-center px-2 shrink-0 z-20">
                     <div className="w-full h-2.5 bg-gray-900 border border-white/30 text-[0.45rem] px-2 text-white/50 flex items-center font-bold">
                       HTTP://WWW.{project.title.toUpperCase().replace(/\s/g, '')}.IO
                     </div>
                   </div>

                   {/* Contenido Pantalla */}
                   <div className="flex-1 relative overflow-hidden bg-gray-900">
                     <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity z-10"></div>
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                     />
                     <div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
                   </div>
                 </div>
               )}

            </div>

             {/* PANEL DERECHO: CONTEXTO / INFO (COL SPAN 8) - ESTILO WHOAMI (HERO) */}
            <div className={`lg:col-span-8 p-6 md:p-10 flex flex-col justify-between bg-black relative group/info overflow-hidden transition-all duration-500 border-l-4 border-white hover:border-cyan-400`}>
               
               {/* ICONO DE FONDO DINÁMICO (Similar a Hero) */}
               <div className="absolute -right-12 -top-12 text-white opacity-[0.05] group-hover:opacity-20 transition-all duration-700 pointer-events-none scale-125 rotate-12 group-hover:rotate-0 z-0">
                 {project.type === "MOBILE_APP" ? (
                   <Smartphone size={280} strokeWidth={1} />
                 ) : (
                   <ExternalLink size={280} strokeWidth={1} />
                 )}
               </div>

               {/* HEADER ESTILO TERMINAL / WHOAMI */}
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-fuchsia-500 font-black text-[0.6rem] uppercase tracking-[0.3em] mb-1">[ EXECUTION_TARGET ]</span>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white group-hover:text-cyan-400 transition-colors tracking-tighter drop-shadow-[4px_4px_0_rgba(255,0,255,0.2)]">
                        &gt; {project.title}
                      </h2>
                    </div>
                    <div className="bg-white text-black px-2 py-1 font-black text-[0.6rem] uppercase shadow-[4px_4px_0_#00FFFF]">
                      {project.id}
                    </div>
                 </div>

                 {/* DESCRIPCIÓN CON ESTILO DE LISTA / DATOS */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                   <div className="space-y-4">
                     <p className="text-gray-300 font-bold text-sm md:text-base leading-relaxed border-l-4 border-cyan-400 pl-4 py-1">
                       {project.description}
                     </p>
                     <div className="flex flex-col gap-2 font-mono text-[0.65rem] font-black uppercase tracking-widest text-gray-500">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-fuchsia-500"></div> TYPE: {project.type.replace('_', ' ')}</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400"></div> EXUTABLE: {project.executable}</span>
                     </div>
                   </div>

                   {/* STACK TÉCNICO COMPLETO */}
                   <div>
                     <span className="block text-[0.6rem] text-fuchsia-400 font-black uppercase mb-4 tracking-widest">&gt; LOADED_DEPENDENCIES:</span>
                     <div className="flex flex-wrap gap-2 group-hover:scale-[1.02] transition-transform origin-left">
                       {project.stack.map(tech => (
                         <div key={tech.name} className="bg-[#111] border border-white/10 p-1 group-hover:border-cyan-400/50 transition-colors">
                           <img 
                             src={tech.icon} 
                             alt={tech.name} 
                             className="h-6 md:h-8 w-auto grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                           />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* BOTONES DE ACCIÓN (PARTE INFERIOR) */}
                 <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                   <a 
                     href={project.repo} 
                     className="flex-1 border-2 border-white bg-black hover:bg-white text-white hover:text-black p-4 flex items-center justify-center gap-3 transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-[6px_6px_0_#FF00FF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                   >
                     <Github size={20} /> [VIEW_SOURCE]
                   </a>
                   <a 
                     href={project.demo} 
                     className="flex-1 border-2 border-white bg-black hover:bg-cyan-400 text-white hover:text-black p-4 flex items-center justify-center gap-3 transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-[6px_6px_0_#FFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                   >
                     <Eye size={20} /> [RUN_APP]
                   </a>
                 </div>
               </div>

               {/* SCANLINE OVERLAY LOCAL (RESTAURADO PERO SUTIL) */}
               <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] group-hover:opacity-10 animate-scanlines bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-size-[100%_4px]"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
