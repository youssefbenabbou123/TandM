import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Cormorant_Garamond, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"
import { SmoothScroll } from "@/components/smooth-scroll"

// Luxury professional serif font for main headings - Libre Baskerville
// More robust and professional than Cormorant, with thicker strokes and better readability
// Perfect for premium concierge and luxury lifestyle brands
const luxurySerif = Libre_Baskerville({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

// Didot style for luxury branding and secondary display
const didot = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

// Poppins for body text
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-sans", 
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

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
      <body className={`${luxurySerif.variable} ${didot.variable} ${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Toaster />
            <Analytics />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
