"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Key, Zap, DollarSign, Smartphone, HomeIcon, ImageIcon, Sparkles, Clock, ShieldCheck, Wallet, Layers, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PropertyCarousel } from "@/components/property-carousel"
import { PropertyDetailModal } from "@/components/property-detail-modal"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function Home() {
  const heroRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const featuredRef = useScrollAnimation()
  const whyUsRef = useScrollAnimation()
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

  const reasons = [
    {
      number: t("home.stats.occupancy.number"),
      title: t("home.stats.occupancy.title"),
      description: t("home.stats.occupancy.description"),
    },
    {
      number: t("home.stats.rating.number"),
      title: t("home.stats.rating.title"),
      description: t("home.stats.rating.description"),
    },
    {
      number: t("home.stats.support.number"),
      title: t("home.stats.support.title"),
      description: t("home.stats.support.description"),
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
          <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6">
            {t("home.heroTitle")}
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            {t("home.heroSubtitle")}
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            {t("home.heroDescription")}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-lg px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 border border-white/30"
            >
              <span
                className="pointer-events-none absolute -inset-px rounded-full opacity-0 group-hover:opacity-90 scale-110 group-hover:scale-100 blur-[12px] transition-all duration-700 ease-out animate-[spin_3s_linear_infinite] mix-blend-screen bg-[conic-gradient(from_0deg,rgba(255,255,255,0.7)_0%,rgba(56,189,248,0.6)_25%,rgba(244,114,182,0.6)_50%,rgba(250,204,21,0.6)_75%,rgba(255,255,255,0.7)_100%)]"
                aria-hidden="true"
              />
              <span className="relative z-10">{t("home.contactUs")}</span>
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
            <h2 className="text-4xl font-sans font-bold text-center mb-4 text-foreground">{t("home.servicesTitle")}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("home.servicesSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href="/services"
                  className={`group bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 text-center cursor-pointer transform hover:scale-105 hover:border-black ${
                    servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    animationDelay: servicesRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-primary font-semibold">
                    <span>{t("home.learnMore")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button className="rounded-full font-semibold">
                  {t("home.discoverServices")}
                </Button>
              </Link>
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
            <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">
              {t("home.featuredTitle")}
            </h2>
            <PropertyCarousel onLearnMore={() => setIsModalOpen(true)} />
            <PropertyDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section ref={whyUsRef.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${whyUsRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">
              {t("home.whyUsTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="text-center"
                  style={{
                    animationDelay: whyUsRef.isVisible ? `${i * 150}ms` : "0ms",
                  }}
                >
                  <div className="text-6xl font-bold text-primary mb-4">{reason.number}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-sans font-bold mb-6">{t("home.ctaTitle")}</h2>
          <p className="text-lg mb-8 text-white/90">
            {t("home.ctaSubtitle")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              {t("home.ctaButton")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">T&M Conciergerie</h4>
              <p className="text-white/70">Service premium de gestion immobilière.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="/services" className="hover:text-white">
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("nav.contact")}</h4>
              <p className="text-white/70">Email: info@tmconciergerie.fr</p>
              <p className="text-white/70">Tél: +33 (0)1 23 45 67 89</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Politique de Confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 T&M Conciergerie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
