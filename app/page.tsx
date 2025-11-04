"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageIcon, Sparkles, Key, Clock, Wallet, Layers, TrendingUp, Award, Heart } from "lucide-react"
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
      icon: <Layers className="h-8 w-8 text-foreground transition-transform duration-300" />,
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
            backgroundImage: "url('/hero-luxury-apartment.jpg')",
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
          <h1 className="text-5xl md:text-7xl mb-6">
            {t("home.heroTitle")}
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            {t("home.heroSubtitle")}
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            {t("home.heroDescription")}
          </p>
          <Link href="/services">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-lg px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 border border-white/30"
            >
              <span className="relative z-10">{t("home.ctaButton")}</span>
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
                  className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 text-center cursor-pointer transform hover:scale-105 hover:border-black ${
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
                  <p className="text-muted-foreground">{service.description}</p>
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
                  <div className="w-12 h-12 mb-4 text-foreground mx-auto flex items-center justify-center">{commitment.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.finalCtaTitle")}</h2>
          <p className="text-lg mb-8 text-white/90">
            {t("home.finalCtaDescription")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              {t("home.finalCtaButton")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  )
}
