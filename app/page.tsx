"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ImageIcon, Sparkles, Key, Clock, Wallet, Handshake, TrendingUp, Award, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PropertyCarousel } from "@/components/property-carousel"
import { PropertyDetailModal } from "@/components/property-detail-modal"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function Home() {
  const heroRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const featuredRef = useScrollAnimation()
  const commitmentsRef = useScrollAnimation()
  const joinCtaRef = useScrollAnimation()
  const finalCtaRef = useScrollAnimation()
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Hero background image configuration
  const heroImageConfig = {
    position: '50% 25%', // Options: 'center', 'top', 'bottom', 'left', 'right', or custom like 'center top', '50% 30%'
    zoom: 'cover', // Options: 'cover' (recommended - adapts to all resolutions), 'contain', or percentage like '120%', '150%'
    brightness: 1.13, // 0-2, where 1 is normal
    saturation: 1.6, // 0-2, where 1 is normal
    contrast: 1.05, // 0-2, where 1 is normal
  }

  const services = [
    {
      id: "announcement",
      icon: <ImageIcon className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.announcement.title"),
      description: t("home.services.announcement.description"),
    },
    {
      id: "preparation",
      icon: <Sparkles className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.preparation.title"),
      description: t("home.services.preparation.description"),
    },
    {
      id: "checkin",
      icon: <Key className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.checkin.title"),
      description: t("home.services.checkin.description"),
    },
    {
      id: "assistance",
      icon: <Clock className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.support.title"),
      description: t("home.services.support.description"),
    },
    {
      id: "payment",
      icon: <Wallet className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.payment.title"),
      description: t("home.services.payment.description"),
    },
    {
      id: "preparation",
      icon: <Handshake className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.management.title"),
      description: t("home.services.management.description"),
    },
  ]

  const commitments = [
    {
      icon: <TrendingUp className="h-12 w-12 text-foreground" />,
      title: t("home.commitments.performance.title"),
      description: t("home.commitments.performance.description"),
    },
    {
      icon: <Award className="h-12 w-12 text-foreground" />,
      title: t("home.commitments.quality.title"),
      description: t("home.commitments.quality.description"),
    },
    {
      icon: <Heart className="h-12 w-12 text-foreground" />,
      title: t("home.commitments.proximity.title"),
      description: t("home.commitments.proximity.description"),
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/01 - PAGE D_ACCUEIL/PHOTO PAGE D_ACCUEIL.JPG')",
            backgroundSize: heroImageConfig.zoom === 'cover' || heroImageConfig.zoom === 'contain' 
              ? heroImageConfig.zoom 
              : heroImageConfig.zoom.includes('%') 
                ? heroImageConfig.zoom 
                : `${heroImageConfig.zoom}%`,
            backgroundPosition: heroImageConfig.position,
            backgroundRepeat: 'no-repeat',
            filter: `brightness(${heroImageConfig.brightness}) saturate(${heroImageConfig.saturation}) contrast(${heroImageConfig.contrast})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold title-font title-tall title-thin opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', color: '#d9c064' }}>
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: 'forwards' }}>
            {t("home.heroSubtitle")}
          </p>
          <p className="text-base md:text-lg mb-12 text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: "700ms", animationFillMode: 'forwards' }}>
            {t("home.heroDescription")}
          </p>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1000ms", animationFillMode: 'forwards' }}>
            <Link href="/services">
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gray-400/40 backdrop-blur-lg hover:bg-gray-400/45 text-white rounded-full text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("home.ctaButton")}
                  <svg 
                    className="w-5 h-5 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef.ref}>
            <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-700 title-font title-tall title-thin ${
              servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} style={{ color: '#D4AF37' }}>{t("home.servicesTitle")}</h2>
            <p className={`text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg transition-all duration-700 ${
              servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} style={{
              transitionDelay: servicesRef.isVisible ? "100ms" : "0ms",
            }}>
              {t("home.servicesSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`group relative bg-white dark:bg-card p-8 rounded-lg shadow-sm border border-gray-100 dark:border-border transition-all duration-700 ease-out text-center cursor-pointer transform hover:scale-105 hover:border-black dark:hover:border-white overflow-hidden ${
                    servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: servicesRef.isVisible ? `${300 + i * 200}ms` : "0ms",
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-muted hover:bg-primary/10 dark:hover:bg-primary/20 flex items-center justify-center transition-all duration-700">
                      <div className="hover:scale-110 transition-transform duration-700">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 title-font title-tall title-thin">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-justify">{service.description}</p>
                  <Link href={`/services?service=${service.id}`}>
                    <Button
                      className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-semibold"
                    >
                      {t("home.learnMore")}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section ref={featuredRef.ref} className="py-20 !bg-stone-100 dark:!bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${featuredRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-center mb-4 title-font title-tall title-thin" style={{ color: '#D4AF37' }}>
              {t("home.featuredTitle").replace("T&M Conciergerie", "T&M\u00A0Conciergerie")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("home.featuredSubtitle")}
            </p>
            <PropertyCarousel onLearnMore={() => setIsModalOpen(true)} />
          </div>
        </div>
      </section>

      {/* Commitments Section (replaces Why Us) */}
      <section ref={commitmentsRef.ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-700 title-font title-tall title-thin ${
              commitmentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} style={{ color: '#D4AF37' }}>
              {t("home.commitmentsTitle")}
            </h2>
            <p className={`text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg transition-all duration-700 ${
              commitmentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} style={{
              transitionDelay: commitmentsRef.isVisible ? "100ms" : "0ms",
            }}>
              {t("home.commitmentsSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment, i) => (
                <div
                  key={i}
                  className={`bg-white dark:bg-card p-8 rounded-2xl border border-border dark:border-border hover:shadow-lg transition-all duration-700 text-center ${
                    commitmentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: commitmentsRef.isVisible ? `${200 + i * 100}ms` : "0ms",
                  }}
                >
                  <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-4 title-font title-tall title-thin ${
                    commitment.title === t("home.commitments.performance.title") 
                      ? "whitespace-nowrap" 
                      : ""
                  }`}>{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section - White Background */}
      <section className="py-20 relative overflow-hidden !bg-stone-100 dark:!bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={joinCtaRef.ref} className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            joinCtaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 title-font title-tall title-thin" style={{ color: '#D4AF37' }}>
              {t("home.finalCtaTitle") === "Entrust your property to a trusted partner" ? (
                <>
                  Entrust your property<br />to a trusted partner
                </>
              ) : (
                t("home.finalCtaTitle")
              )}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              {t("home.finalCtaDescription")}
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="relative overflow-hidden group text-white dark:text-black rounded-full font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90"
              >
                <span className="relative z-10">{t("home.finalCtaButton")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 dark:via-black/10"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  )
}
