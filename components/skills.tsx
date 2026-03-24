"use client"

import { TerminalSquare } from "lucide-react"

export function Skills() {
  // Ordenado lógicamente: Lenguajes -> Frameworks -> BD -> Herramientas/IDEs
  const orderedSkills = [
    // Lenguajes
    { name: "Kotlin", icon: "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
    { name: "Java", icon: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
    
    // Frameworks & Librerías
    { name: "Android", icon: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
    { name: "Jetpack Compose", icon: "https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white" },
    { name: "Material Design", icon: "https://img.shields.io/badge/Material_Design-757575?style=for-the-badge&logo=material-design&logoColor=white" },
    { name: "Spring Boot", icon: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
    { name: "Spring Security", icon: "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" },
    { name: "Hibernate", icon: "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white" },
    
    // Databases
    { name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "Room", icon: "https://img.shields.io/badge/Room-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
    
    // Herramientas, DevOps y Entornos
    { name: "Git", icon: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "Docker", icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "Firebase", icon: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
    { name: "Postman", icon: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "Android Studio", icon: "https://img.shields.io/badge/Android%20Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white" },
  ]

  const learningSkills = [
    { name: "Python", icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "React JS", icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "Next.js", icon: "https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
  ]

  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-mono z-10">
      
      {/* HEADER TÍTULO ESTILO TERMINAL */}
      <div className="border-b-4 border-white pb-2 mb-12 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_#FF00FF]">
          /SYS/SKILLS
        </h2>
        <div className="hidden md:flex gap-2 mb-2 items-center">
          <span className="text-gray-500 font-bold uppercase tracking-widest text-xs hidden lg:block mr-2">
            Loading dependencies...
          </span>
          <TerminalSquare className="w-8 h-8 text-cyan-400" />
          <span className="w-4 h-4 bg-white block animate-pulse"></span>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL MASIVO DE TECNOLOGÍAS */}
      <div className="border-4 border-white bg-black shadow-[10px_10px_0_rgba(255,255,255,0.1)] p-6 md:p-10 relative group hover:border-cyan-400 hover:shadow-[10px_10px_0_#00FFFF] transition-all duration-500">
        <div className="absolute top-0 right-0 bg-white text-black text-[0.6rem] px-2 py-1 font-bold uppercase group-hover:bg-cyan-400 transition-colors">
          [ CORE_STACK_MODULE ]
        </div>
        
        <div className="flex flex-wrap gap-3 md:gap-5 mt-4 justify-start">
          {orderedSkills.map(skill => (
            <img 
              key={skill.name}
              src={skill.icon} 
              alt={skill.name} 
              className="h-8 md:h-10 w-auto transition-all cursor-crosshair transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(255,0,255,0.5)]" 
            />
          ))}
        </div>
      </div>

      {/* BLOQUES COMPLEMENTARIOS: PATRONES Y APRENDIZAJE ACTUAL */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Patrones y Enfoque */}
        <div className="border-2 border-dashed border-gray-600 p-6 relative group hover:border-cyan-400 transition-colors bg-[#050505]">
          <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
             &gt; FOCUS_AND_PATTERNS
          </h3>
          <ul className="space-y-3 text-gray-300 text-xs md:text-sm uppercase tracking-wider font-bold">
             <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white inline-block"></span> Arquitectura MVVM</li>
             <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white inline-block"></span> Clean Architecture / SOLID</li>
             <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white inline-block"></span> Bases de datos reactivas</li>
             <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white inline-block"></span> Interfaces Nativas optimizadas</li>
          </ul>
        </div>

        {/* Aprendizaje Actual */}
        <div className="border-2 border-dashed border-gray-600 p-6 relative group hover:border-fuchsia-500 transition-colors bg-[#050505]">
          <h3 className="text-fuchsia-500 font-bold uppercase tracking-widest text-sm mb-4">
             &gt; CURRENTLY_LEARNING
          </h3>
          <div className="flex flex-wrap gap-4 mt-6">
            {learningSkills.map(skill => (
              <img 
                key={skill.name}
                src={skill.icon} 
                alt={skill.name} 
                className="h-8 md:h-9 w-auto transition-all cursor-crosshair transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(255,0,255,0.5)]" 
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
