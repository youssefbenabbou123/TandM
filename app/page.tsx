"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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

  const services = [
    {
      icon: <ImageIcon className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.announcement.title"),
      description: t("home.services.announcement.description"),
    },
    {
      icon: <Sparkles className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.preparation.title"),
      description: t("home.services.preparation.description"),
    },
    {
      icon: <Key className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.checkin.title"),
      description: t("home.services.checkin.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.support.title"),
      description: t("home.services.support.description"),
    },
    {
      icon: <Wallet className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.payment.title"),
      description: t("home.services.payment.description"),
    },
    {
      icon: <Handshake className="h-8 w-8 text-foreground transition-transform duration-300" />,
      title: t("home.services.management.title"),
      description: t("home.services.management.description"),
    },
  ]

  const commitments = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: t("home.commitments.performance.title"),
      description: t("home.commitments.performance.description"),
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: t("home.commitments.quality.title"),
      description: t("home.commitments.quality.description"),
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: t("home.commitments.proximity.title"),
      description: t("home.commitments.proximity.description"),
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/01 - PAGE D_ACCUEIL/PHOTO PAGE D_ACCUEIL.JPG')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl mb-4">
            {t("home.heroSubtitle")}
          </p>
          <p className="text-base md:text-lg mb-12 text-gray-200">
            {t("home.heroDescription")}
          </p>
          <Link href="/services">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-lg px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 border border-white/30 animate-spin-gradient"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
                backgroundSize: '200% 100%',
                animation: 'spin-gradient 3s ease infinite',
              }}
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
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef.ref}
            className={`transition-all duration-700 ${servicesRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">{t("home.servicesTitle")}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
              {t("home.servicesSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`group relative bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 text-center cursor-pointer transform hover:scale-105 hover:border-black overflow-hidden ${
                    servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    animationDelay: servicesRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                      <div className="hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-justify">{service.description}</p>
                  <Link href="/services">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
      <section ref={featuredRef.ref} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${featuredRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              {t("home.featuredTitle")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("home.featuredSubtitle")}
            </p>
            <PropertyCarousel onLearnMore={() => setIsModalOpen(true)} />
            <PropertyDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
          </div>
        </div>
      </section>

      {/* Commitments Section (replaces Why Us) */}
      <section ref={commitmentsRef.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${commitmentsRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              {t("home.commitmentsTitle")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
              {t("home.commitmentsSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment, i) => (
                <div
                  key={i}
                  className={`bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-700 text-center ${
                    commitmentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    animationDelay: commitmentsRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <h3 className={`text-xl font-bold text-foreground mb-4 ${
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={joinCtaRef.ref} className={`max-w-2xl transition-all duration-700 ${joinCtaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t("home.joinCtaTitle")}
            </h2>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="relative overflow-hidden group text-white rounded-full font-semibold uppercase px-8 py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 animate-spin-gradient"
                style={{
                  background: 'linear-gradient(90deg, #1A363A 0%, rgba(26, 54, 58, 0.9) 50%, #1A363A 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'spin-gradient 3s ease infinite',
                }}
              >
                <span className="relative z-10">{t("home.joinCtaButton")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
          </div>
        </div>
        {/* Background TM Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] text-[10rem] md:text-[15rem] lg:text-[18rem] xl:text-[20rem] font-serif font-bold text-[#E0E0E0] opacity-30 select-none pointer-events-none z-0 leading-none">
          TM
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={finalCtaRef.ref} className={`transition-all duration-700 ${finalCtaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-4xl font-bold mb-6">{t("home.finalCtaTitle")}</h2>
            <p className="text-lg mb-8 text-white/90">
              {t("home.finalCtaDescription")}
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="relative overflow-hidden group text-primary rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 animate-spin-gradient"
                style={{
                  background: 'linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.95) 50%, #ffffff 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'spin-gradient 3s ease infinite',
                }}
              >
                <span className="relative z-10">{t("home.finalCtaButton")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
