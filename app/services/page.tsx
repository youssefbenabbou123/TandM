"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export default function Services() {
  const detailsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()
  const { t, language } = useLanguage()

  // Get features arrays from translations
  const { translations } = require("@/translations/index")
  const langData = translations[language]

  const detailedServices = [
    {
      title: t("services.detailedServices.announcement.title"),
      description: t("services.detailedServices.announcement.description"),
      image: "/02 - PAGE NOS SERVICES/02 - CREATION DE L_ANNONCE A à Z.JPG",
      features: langData.services.detailedServices.announcement.features,
    },
    {
      title: t("services.detailedServices.preparation.title"),
      description: t("services.detailedServices.preparation.description"),
      image: "/02 - PAGE NOS SERVICES/03 - MISE EN PLACE ET PREPARATION DU SEJOUR.JPG",
      features: langData.services.detailedServices.preparation.features,
    },
    {
      title: t("services.detailedServices.checkin.title"),
      description: t("services.detailedServices.checkin.description"),
      image: "/02 - PAGE NOS SERVICES/04 - ACCUEIL PERSONNALISÉ DES VOYAGEURS.JPG",
      features: langData.services.detailedServices.checkin.features,
    },
    {
      title: t("services.detailedServices.reactivity.title"),
      description: t("services.detailedServices.reactivity.description"),
      image: "/02 - PAGE NOS SERVICES/05 - REACTIVITE ET SUIVI CONTINU.JPG",
      features: langData.services.detailedServices.reactivity.features,
    },
    {
      title: t("services.detailedServices.assistance.title"),
      description: t("services.detailedServices.assistance.description"),
      image: "/02 - PAGE NOS SERVICES/06 - ASSISTANCE ET SUIVI DES IMPREVUS.jpg",
      features: langData.services.detailedServices.assistance.features,
    },
    {
      title: t("services.detailedServices.payment.title"),
      description: t("services.detailedServices.payment.description"),
      image: "/02 - PAGE NOS SERVICES/07 - GESTION TRANSPARENTE DES PAIEMENTS.JPG",
      features: langData.services.detailedServices.payment.features,
    },
  ]


  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/02 - PAGE NOS SERVICES/01 - NOS SERVICES.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white title-font title-tall title-thin">{t("services.title")}</h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {detailedServices.map((service, i) => (
            <div
              key={i}
              ref={i === 0 ? detailsRef.ref : undefined}
              className={`mb-20 ${i === 0 ? "mt-12 md:mt-16" : ""} ${i === 3 ? "mt-8 md:mt-12" : ""} grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:grid-cols-2" : ""} transition-all duration-700 ${
                detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: detailsRef.isVisible ? `${i * 300}ms` : "0ms"
              }}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-4 title-font title-tall title-thin text-justify">{service.title}</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-5 text-justify">{service.description}</p>
                <ul className="space-y-3 text-justify">
                  {service.features.map((feature: string, j: number) => (
                    <li key={j} className="text-justify">
                      <span className="text-foreground text-sm md:text-base leading-relaxed text-justify">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${
                i === 0 ? "h-[500px] md:h-[750px]" : 
                i === 1 ? "h-[500px] md:h-[700px]" : 
                i === 2 ? "h-[500px] md:h-[650px]" : 
                i === 3 ? "h-[500px] md:h-[400px]" : 
                i === 4 ? "h-[500px] md:h-[550px]" : 
                "h-[500px] md:h-[500px]"
              } ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className={`object-cover rounded-2xl shadow-lg ${i === 4 ? "object-[center_30%]" : ""}`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={ctaRef.ref} className={`transition-all duration-700 ${ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-4xl font-sans font-bold mb-6 title-font title-tall title-thin text-white">{t("services.ctaTitle")}</h2>
            <p className="text-lg mb-8 text-white/90">
              {t("services.ctaSubtitle")}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full font-semibold">
                {t("services.ctaButton")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}


