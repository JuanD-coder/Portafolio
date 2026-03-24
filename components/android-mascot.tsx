"use client"

import { useEffect, useState } from "react"

export function AndroidMascot() {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 4000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="relative group cursor-help">
      {/* Container for the mascot with a glow effect */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-transform hover:scale-110 duration-500">
        
        {/* Neon glow behind */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full scale-75 group-hover:bg-fuchsia-500/30 transition-colors duration-700"></div>

        {/* Bugdroid SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] transition-all duration-300"
          fill="currentColor"
        >
          {/* Body */}
          <path
            className="text-white group-hover:text-cyan-400 transition-colors duration-500"
            d="M20,45 L80,45 L80,80 C80,85 75,90 70,90 L30,90 C25,90 20,85 20,80 L20,45 Z"
          />
          
          {/* Head (Semi-circle) */}
          <path
            className="text-white group-hover:text-cyan-400 transition-colors duration-500 animate-bounce-subtle"
            d="M20,40 C20,25 33,12 50,12 C67,12 80,25 80,40 L20,40 Z"
          />

          {/* Antennas */}
          <line x1="35" y1="12" x2="28" y2="2" stroke="white" strokeWidth="3" className="group-hover:stroke-cyan-400 transition-colors" />
          <line x1="65" y1="12" x2="72" y2="2" stroke="white" strokeWidth="3" className="group-hover:stroke-cyan-400 transition-colors" />

          {/* Eyes */}
          <circle cx="35" cy="28" r={isBlinking ? 0 : 3} fill="black" className="transition-all duration-100" />
          <circle cx="65" cy="28" r={isBlinking ? 0 : 3} fill="black" className="transition-all duration-100" />

          {/* Arms (Floating) */}
          <rect x="8" y="45" width="8" height="25" rx="4" className="text-white group-hover:text-cyan-400 transition-colors animate-float-slow" />
          <rect x="84" y="45" width="8" height="25" rx="4" className="text-white group-hover:text-cyan-400 transition-colors animate-float-slow delay-100" />

          {/* Legs */}
          <rect x="35" y="90" width="8" height="8" rx="2" className="text-white group-hover:text-cyan-400 transition-colors" />
          <rect x="57" y="90" width="8" height="8" rx="2" className="text-white group-hover:text-cyan-400 transition-colors" />
        </svg>

        {/* Hover Text Tag */}
        <div className="absolute -bottom-2 bg-white text-black text-[0.5rem] font-bold px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
          [ DROID_OS_LOADED ]
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
