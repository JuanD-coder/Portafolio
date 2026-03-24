import type React from "react"
import type { Metadata } from "next"
import { Pixelify_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { DistortionGrid } from "@/components/distortion-grid"
import "./globals.css"

const pixelifySans = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portafolio - Desarrollador Android & Spring Boot",
  description:
    "Desarrollador móvil Android y backend Java con Spring Boot. Especializado en aplicaciones nativas y APIs escalables.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${pixelifySans.className} antialiased selection:bg-fuchsia-500 selection:text-white`}>
        <div className="crt-bar" />
        <DistortionGrid />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
