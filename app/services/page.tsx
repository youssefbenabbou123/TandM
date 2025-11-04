"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ClipboardCheck, Sparkles, TrendingUp, FileText, Brush, Wallet } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Services() {
  const detailsRef = useScrollAnimation()
  const pricingRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const { t, language } = useLanguage()

  // Get features arrays from translations
  const { translations } = require("@/translations/index")
  const langData = translations[language]

  const detailedServices = [
    {
      title: t("services.detailedServices.announcement.title"),
      description: t("services.detailedServices.announcement.description"),
      image: "/professional-photography-apartment-interior.jpg",
      features: langData.services.detailedServices.announcement.features,
    },
    {
      title: t("services.detailedServices.preparation.title"),
      description: t("services.detailedServices.preparation.description"),
      image: "/luxury-hotel-housekeeping-cleaning-preparation.jpg",
      features: langData.services.detailedServices.preparation.features,
    },
    {
      title: t("services.detailedServices.checkin.title"),
      description: t("services.detailedServices.checkin.description"),
      image: "/concierge-service-luxury-welcoming-guests.jpg",
      features: langData.services.detailedServices.checkin.features,
    },
    {
      title: t("services.detailedServices.support.title"),
      description: t("services.detailedServices.support.description"),
      image: "/customer-support-team-helping-guests.jpg",
      features: langData.services.detailedServices.support.features,
    },
  ]

  const serviceFeatures = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-foreground" />,
      title: t("services.features.admin.title"),
      description: t("services.features.admin.description"),
    },
    {
      icon: <Sparkles className="h-8 w-8 text-foreground" />,
      title: t("services.features.cleaning.title"),
      description: t("services.features.cleaning.description"),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-foreground" />,
      title: t("services.features.finance.title"),
      description: t("services.features.finance.description"),
    },
  ]

  const pricing = [
    {
      type: t("services.pricing.commission.type"),
      description: t("services.pricing.commission.description"),
      items: langData.services.pricing.commission.items,
    },
    {
      type: t("services.pricing.additional.type"),
      description: t("services.pricing.additional.description"),
      items: langData.services.pricing.additional.items,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/luxury-property-services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white">{t("services.title")}</h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {detailedServices.map((service, i) => (
            <div
              key={i}
              ref={i === 0 ? detailsRef.ref : undefined}
              className={`mb-20 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                i === 0 ? (detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") : ""
              } ${i % 2 === 1 ? "md:grid-cols-2" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-sans font-bold text-foreground mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <span className="text-secondary font-bold">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-96 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Features Grid Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">{t("services.detailsTitle")}</h2>

                      <div ref={servicesRef.ref} className="grid md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, i) => (
                <div
                  key={i}
                  className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-700 text-center ${
                    servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    animationDelay: servicesRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">{t("services.pricingTitle")}</h2>

          <div ref={pricingRef.ref} className="grid md:grid-cols-2 gap-8">
            {pricing.map((item, i) => (
              <div
                key={i}
                className={`bg-card p-8 rounded-2xl border-2 border-border hover:border-secondary transition-all duration-700 ${
                  pricingRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: pricingRef.isVisible ? `${i * 150}ms` : "0ms",
                }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.type}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <div className="space-y-3">
                  {item.items.map((sub, j) => (
                    <p key={j} className="text-foreground">
                      {sub}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-sans font-bold mb-6">{t("services.ctaTitle")}</h2>
          <p className="text-lg mb-8 text-white/90">
            {t("services.ctaSubtitle")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              {t("services.ctaButton")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}


