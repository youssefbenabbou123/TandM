import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "T&M Conciergerie - Gestion Premium de Votre Bien Immobilier",
  description:
    "Service de conciergerie haut de gamme pour la gestion de votre propriété avec sérénité et professionnalisme.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
