"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export function RetroLoader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // API de red (Network Information API)
    // Se usa 'any' porque TypeScript a veces no tiene definidos estos campos experimentales
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    const downlink = connection ? connection.downlink : 10 // Mbps estimado
    
    // Si la conexión es menor a 2 Mbps, reducimos drásticamente la velocidad del contador
    const speedFactor = downlink < 2 ? 0.3 : (downlink < 5 ? 0.6 : 1.5)

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Si el DOM ya cargó totalmente, podemos forzar el pase a 100% rápidamente
        if (document.readyState === "complete" && prev >= 90) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 800)
          return 100
        }

        // Si la conexión es lenta y aún no cargan los assets, se estanca en el 90-95%
        if (prev >= 95 && document.readyState !== "complete") {
          return 95 + Math.random() * 2 // Se mueve un poquito pero no pasa del 98%
        }

        // Incremento matemático basado en la velocidad de conexión del usuario
        return prev + (Math.random() * 10 * speedFactor)
      })
    }, 150)

    // Escuchador real de cuando la página termina de descargar las imágenes pesadas
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => setIsComplete(true), 600)
      clearInterval(interval)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-sm flex items-center justify-center font-mono">
      <div className="w-full max-w-md px-6 space-y-6">
        
        <div className="border-4 border-white bg-[#050505] p-6 md:p-8 relative overflow-hidden shadow-[10px_10px_0_#FF00FF]">
          <div className="absolute top-0 left-0 bg-white text-black text-[0.65rem] px-2 py-1 font-bold uppercase">
            [ SYSTEM_INIT ]
          </div>

          {/* CHIBI AVATAR SPACE */}
          {/* NOTA: Para colocar tu gif/imagen chibi, descomenta la etiqueta <img> y pon tu ruta */}
          <div className="flex justify-center mt-6 mb-6">
            <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-white bg-black flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,0,255,0.1)_4px,rgba(255,0,255,0.1)_8px)] opacity-50"></div>
              <span className="text-[0.5rem] font-bold text-fuchsia-500 uppercase tracking-widest z-10 text-center px-2 animate-pulse">
                INSERT<br/>CHIBI<br/>HERE
              </span>
              {/* <img src="/chibi.gif" alt="Chibi Loader" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all z-20" /> */}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 border-2 border-fuchsia-500 bg-black flex items-center justify-center animate-pulse">
              <Terminal className="text-fuchsia-500 w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                LOADING_OS...
              </h2>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">
                &gt; JUAND-CODER ENV
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-1">
              <span className="text-white">LOADING_ASSETS</span>
              <span className="text-cyan-400">{Math.floor(Math.min(progress, 100))}%</span>
            </div>
            <div className="border-2 border-white bg-black p-1">
              <div
                className="h-6 bg-white transition-all duration-200 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Rayas negras diagonales simulando barra de carga clásica */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
              </div>
            </div>
          </div>

          {/* Loading messages */}
          <div className="mt-6 space-y-2 text-xs md:text-[0.7rem] font-bold uppercase tracking-widest bg-black border-2 border-gray-800 p-4">
            <p className="text-fuchsia-500 opacity-80">&gt; WARNING: LOW_BANDWIDTH_DETECTED</p>
            <p className="text-cyan-400">&gt; DESCARGANDO ASSETS PESADOS DEL PORTAFOLIO...</p>
            <p className="text-white animate-pulse">&gt; TEN PACIENCIA, LA INTERFAZ ESTÁ CASI LISTA_</p>
          </div>
        </div>

        {/* Retro loading decorative bits */}
        <div className="flex justify-between items-center px-2">
          <div className="text-fuchsia-500 font-bold text-[0.65rem] tracking-widest">DO NOT CLOSE TAB</div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-cyan-400"></div>
            <div className="w-4 h-4 bg-white animate-pulse"></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
