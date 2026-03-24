"use client"

import { useEffect, useRef } from "react"

export function DistortionGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Initial mouse position outside the screen
  const mouseRef = useRef({ x: -2000, y: -2000, targetX: -2000, targetY: -2000 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let animationFrameId: number
    
    // Low resolution for a pixelated retro feel (similar to 109ichiki's grid)
    const RES_FACTOR = 0.5 // Scale down to 50% for chunkier lines
    let width = window.innerWidth
    let height = window.innerHeight

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      
      // We don't use DPR here to keep it "crunchy" and pixelated
      canvas.width = Math.floor(width * RES_FACTOR)
      canvas.height = Math.floor(height * RES_FACTOR)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Map screen coordinates to low-res canvas coordinates
      mouseRef.current.targetX = e.clientX * RES_FACTOR
      mouseRef.current.targetY = e.clientY * RES_FACTOR
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()

    // Grid size proportional to resolution factor
    const GRID_SIZE = 40 * RES_FACTOR
    const DISTORTION_RADIUS = 250 * RES_FACTOR
    const DISTORTION_STRENGTH = 80 * RES_FACTOR

    const draw = (t: number) => {
      timeRef.current = t / 1000
      
      // Smooth mouse movement with damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12

      const cw = canvas.width
      const ch = canvas.height

      // Clear the background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, cw, ch)

      // Random "glitch" probability
      const isGlitching = Math.random() > 0.98

      const getDistortedPoint = (x: number, y: number) => {
        const dx = x - mouseRef.current.x
        const dy = y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        let offsetX = 0
        let offsetY = 0

        const factor = distance < DISTORTION_RADIUS ? Math.pow(1 - distance / DISTORTION_RADIUS, 1.5) : 0
        
        if (factor > 0) {
          // Wave effect that pulses from center
          const wave = Math.sin(distance * 0.05 - timeRef.current * 8) * (8 * factor)
          offsetX = (dx / (distance || 1)) * factor * DISTORTION_STRENGTH + wave
          offsetY = (dy / (distance || 1)) * factor * DISTORTION_STRENGTH + wave
        }

        // Add some noise (shaking for that glitchy terminal feel)
        const shakeX = isGlitching ? (Math.random() - 0.5) * 4 : 0
        const shakeY = isGlitching ? (Math.random() - 0.5) * 4 : 0

        return { 
          x: x + offsetX + shakeX, 
          y: y + offsetY + shakeY, 
          factor 
        }
      }

      ctx.lineWidth = 1
      ctx.imageSmoothingEnabled = false

      // Draw horizontal grid lines
      for (let y = -GRID_SIZE; y <= ch + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath()
        let startPoint = getDistortedPoint(-GRID_SIZE, y)
        ctx.moveTo(startPoint.x, startPoint.y)

        for (let x = -GRID_SIZE; x <= cw + GRID_SIZE; x += 10 * RES_FACTOR) {
          const point = getDistortedPoint(x, y)
          ctx.lineTo(point.x, point.y)
        }
        
        // Dynamic opacity based on glitching or hover
        ctx.strokeStyle = isGlitching ? "rgba(0, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.12)"
        ctx.stroke()
      }

      // Draw vertical grid lines
      for (let x = -GRID_SIZE; x <= cw + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath()
        let startPoint = getDistortedPoint(x, -GRID_SIZE)
        ctx.moveTo(startPoint.x, startPoint.y)

        for (let y = -GRID_SIZE; y <= ch + GRID_SIZE; y += 10 * RES_FACTOR) {
          const point = getDistortedPoint(x, y)
          ctx.lineTo(point.x, point.y)
        }
        ctx.strokeStyle = isGlitching ? "rgba(255, 0, 255, 0.3)" : "rgba(255, 255, 255, 0.12)"
        ctx.stroke()
      }

      // Draw active intersection points
      for (let y = 0; y <= ch; y += GRID_SIZE) {
          for (let x = 0; x <= cw; x += GRID_SIZE) {
              const p = getDistortedPoint(x, y)
              if (p.factor > 0.7) {
                  // High distortion points glow
                  ctx.fillStyle = p.factor > 0.9 && Math.random() > 0.5 ? "#00FFFF" : "rgba(255, 255, 255, 0.4)"
                  ctx.fillRect(p.x - 1, p.y - 1, 2, 2)
              }
          }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
      style={{ imageRendering: "pixelated" }}
    />
  )
}
