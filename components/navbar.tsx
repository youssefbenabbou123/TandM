"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-border" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={scrolled ? "/logo-black.png" : "/logo-gold.png"}
              alt="T&M Conciergerie"
              className="h-28 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link
              href="/"
              className={`transition-colors relative text-lg font-serif tracking-wide ${
                isActive("/")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Accueil
              {isActive("/") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
            </Link>
              <Link
                href="/properties"
                className={`transition-colors relative text-lg font-serif tracking-wide ${
                  isActive("/properties")
                    ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                    : scrolled ? "text-foreground/90 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                Portefeuille
                {isActive("/properties") && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}></div>
                )}
              </Link>
              <Link
                href="/services"
                className={`transition-colors relative text-lg font-serif tracking-wide ${
                  isActive("/services")
                    ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                    : scrolled ? "text-foreground/90 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                Nos Services
                {isActive("/services") && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}></div>
                )}
              </Link>
              <Link
                href="/about"
                className={`transition-colors relative text-lg font-serif tracking-wide ${
                  isActive("/about")
                    ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                    : scrolled ? "text-foreground/90 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                À Propos
                {isActive("/about") && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}></div>
                )}
              </Link>
              <Link
                href="/contact"
                className={`transition-colors relative text-lg font-serif tracking-wide ${
                  isActive("/contact")
                    ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                    : scrolled ? "text-foreground/90 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                Contact
                {isActive("/contact") && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}></div>
                )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className={`md:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className={`block py-2 transition-colors font-serif tracking-wide text-lg ${
                isActive("/")
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/90 hover:text-primary pl-3"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/properties"
              className={`block py-2 transition-colors font-serif tracking-wide text-lg ${
                isActive("/properties")
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/90 hover:text-primary pl-3"
              }`}
            >
              Portefeuille
            </Link>
            <Link
              href="/services"
              className={`block py-2 transition-colors font-serif tracking-wide text-lg ${
                isActive("/services")
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/90 hover:text-primary pl-3"
              }`}
            >
              Nos Services
            </Link>
            <Link
              href="/about"
              className={`block py-2 transition-colors font-serif tracking-wide text-lg ${
                isActive("/about")
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/90 hover:text-primary pl-3"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className={`block py-2 transition-colors font-serif tracking-wide text-lg ${
                isActive("/contact")
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/90 hover:text-primary pl-3"
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
