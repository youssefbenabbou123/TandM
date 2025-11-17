"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Languages, Moon, Sun } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

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
        ? "bg-white/95 dark:bg-card/95 backdrop-blur-sm border-b border-border dark:border-border" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4">
            <Image
              src="/logo-gold.png"
              alt="T&M Conciergerie"
              width={88}
              height={88}
              className="h-[88px] w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link
              href="/"
              className={`transition-colors text-lg font-sans tracking-wide ${
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
            </Link>
            <Link
              href="/services"
              className={`transition-colors text-lg font-sans tracking-wide ${
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
            </Link>
            <Link
              href="/properties"
              className={`transition-colors text-lg font-sans tracking-wide ${
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
            </Link>
            <Link
              href="/about"
              className={`transition-colors text-lg font-sans tracking-wide ${
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
            </Link>
            <Link
              href="/contact"
              className={`transition-colors text-lg font-sans tracking-wide ${
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
            </Link>
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
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
        <div className="md:hidden bg-white dark:bg-card border-t border-border dark:border-border">
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
            
            {/* Mobile Dark Mode and Language Toggles */}
            <div className="flex items-center gap-4 pt-4 border-t border-border dark:border-border">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  toggleMenu()
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">
                  {mounted && theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
