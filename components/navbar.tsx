"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-primary">T&M</div>
            <div className="text-sm font-medium text-muted-foreground hidden sm:block">Conciergerie</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors relative ${
                isActive("/") ? "text-foreground font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Accueil
              {isActive("/") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>}
            </Link>
            <Link
              href="/properties"
              className={`transition-colors relative ${
                isActive("/properties") ? "text-foreground font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Portefeuille
              {isActive("/properties") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>}
            </Link>
            <Link
              href="/services"
              className={`transition-colors relative ${
                isActive("/services") ? "text-foreground font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Nos Services
              {isActive("/services") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>}
            </Link>
            <Link
              href="/about"
              className={`transition-colors relative ${
                isActive("/about") ? "text-foreground font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              À Propos
              {isActive("/about") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>}
            </Link>
            <Link
              href="/contact"
              className={`transition-colors relative ${
                isActive("/contact") ? "text-foreground font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
              {isActive("/contact") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block py-2 transition-colors ${
                isActive("/")
                  ? "text-foreground font-semibold border-l-2 border-black pl-2"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/properties"
              className={`block py-2 transition-colors ${
                isActive("/properties")
                  ? "text-foreground font-semibold border-l-2 border-black pl-2"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Portefeuille
            </Link>
            <Link
              href="/services"
              className={`block py-2 transition-colors ${
                isActive("/services")
                  ? "text-foreground font-semibold border-l-2 border-black pl-2"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Nos Services
            </Link>
            <Link
              href="/about"
              className={`block py-2 transition-colors ${
                isActive("/about")
                  ? "text-foreground font-semibold border-l-2 border-black pl-2"
                  : "text-foreground hover:text-primary"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className={`block py-2 transition-colors ${
                isActive("/contact")
                  ? "text-foreground font-semibold border-l-2 border-black pl-2"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
