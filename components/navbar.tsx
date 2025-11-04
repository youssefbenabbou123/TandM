"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Languages } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

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

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
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
          <div className="hidden md:flex space-x-12 items-center">
            <Link
              href="/"
              className={`transition-colors relative text-lg font-sans tracking-wide group ${
                isActive("/")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.home")}
              {/* Active line */}
              {isActive("/") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
              {/* Hover line animation */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out origin-left ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </Link>
            <Link
              href="/services"
              className={`transition-colors relative text-lg font-sans tracking-wide group ${
                isActive("/services")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.services")}
              {/* Active line */}
              {isActive("/services") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
              {/* Hover line animation */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out origin-left ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </Link>
            <Link
              href="/properties"
              className={`transition-colors relative text-lg font-sans tracking-wide group ${
                isActive("/properties")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.properties")}
              {/* Active line */}
              {isActive("/properties") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
              {/* Hover line animation */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out origin-left ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </Link>
            <Link
              href="/about"
              className={`transition-colors relative text-lg font-sans tracking-wide group ${
                isActive("/about")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.about")}
              {/* Active line */}
              {isActive("/about") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
              {/* Hover line animation */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out origin-left ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </Link>
            <Link
              href="/contact"
              className={`transition-colors relative text-lg font-sans tracking-wide group ${
                isActive("/contact")
                  ? scrolled
                    ? "text-foreground font-medium"
                    : "text-white font-medium"
                  : scrolled
                  ? "text-foreground/90 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.contact")}
              {/* Active line */}
              {isActive("/contact") && (
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              )}
              {/* Hover line animation */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out origin-left ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </Link>
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Languages className="h-5 w-5" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-foreground hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`block text-lg font-sans ${
                isActive("/") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/services"
              onClick={toggleMenu}
              className={`block text-lg font-sans ${
                isActive("/services") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/properties"
              onClick={toggleMenu}
              className={`block text-lg font-sans ${
                isActive("/properties") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {t("nav.properties")}
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`block text-lg font-sans ${
                isActive("/about") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={`block text-lg font-sans ${
                isActive("/contact") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
