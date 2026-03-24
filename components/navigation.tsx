"use client"

import { useState, useEffect } from "react"
import { Menu, X, TerminalSquare, User, Cpu, Folder, Briefcase, Mail } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "$ whoami", desc: "Sobre mí", icon: User },
    { id: "skills", label: "/sys/skills", desc: "Habilidades", icon: Cpu },
    { id: "projects", label: "ls ./projects", desc: "Proyectos", icon: Folder },
    { id: "contact", label: "ping contact", desc: "Contacto", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 font-mono ${isScrolled ? "bg-black border-b-4 border-white shadow-[0_5px_0_#000,0_9px_0_#00FFFF]" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg md:text-xl font-black tracking-tighter text-white uppercase flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <TerminalSquare className="w-6 h-6" />
            <span className="drop-shadow-[2px_2px_0_#FF00FF]">ROOT@JUAND:~#</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-2 text-xs lg:text-sm font-bold text-gray-400 hover:text-black hover:bg-white px-3 py-2 transition-all uppercase tracking-widest border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0_#FF00FF]"
                >
                  <Icon className="w-4 h-4 text-fuchsia-500 group-hover:text-black transition-colors" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white bg-black border-2 border-white hover:text-black hover:bg-white hover:shadow-[4px_4px_0_#FF00FF] transition-all"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full py-4 border-b-4 border-white bg-black shadow-[0_10px_0_#FF00FF]">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-mono font-bold text-sm text-gray-300 hover:text-black hover:bg-white p-4 border-l-4 border-gray-800 hover:border-cyan-400 transition-colors flex justify-between items-center group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-cyan-400 group-hover:text-black transition-colors" />
                      <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
                    </div>
                    <span className="text-[0.65rem] uppercase opacity-50 tracking-widest">{item.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
