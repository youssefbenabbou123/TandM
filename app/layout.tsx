import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const poppins = Poppins({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "T&M Conciergerie - Gestion premium de votre bien immobilier",
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
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Toaster />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
