"use client"

import { Suspense, lazy } from "react"
import { Navigation } from "@/components/navigation"
import { RetroLoader } from "@/components/retro-loader"
import { ComponentLoader } from "@/components/component-loader"

const Hero = lazy(() => import("@/components/hero").then((mod) => ({ default: mod.Hero })))
const About = lazy(() => import("@/components/about").then((mod) => ({ default: mod.About })))
const Skills = lazy(() => import("@/components/skills").then((mod) => ({ default: mod.Skills })))
const Projects = lazy(() => import("@/components/projects").then((mod) => ({ default: mod.Projects })))
const Contact = lazy(() => import("@/components/contact").then((mod) => ({ default: mod.Contact })))

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <RetroLoader />
      <Navigation />

      <Suspense fallback={<ComponentLoader name="HERO" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<ComponentLoader name="ABOUT" />}>
        <About />
      </Suspense>

      <Suspense fallback={<ComponentLoader name="SKILLS" />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<ComponentLoader name="PROYECTOS" />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<ComponentLoader name="CONTACTO" />}>
        <Contact />
      </Suspense>
    </div>
  )
}
