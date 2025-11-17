"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { useSearchParams } from "next/navigation"

function ServicesContent() {
  const ctaRef = useScrollAnimation()
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const [mounted, setMounted] = useState(false)
  const scrollPositionRef = useRef<number>(0)
  
  // Map service IDs to card indices
  const serviceIdToIndex: { [key: string]: number } = {
    "announcement": 0,
    "preparation": 1,
    "checkin": 2,
    "reactivity": 3,
    "assistance": 4,
    "payment": 5,
  }
  
  // Create refs for all cards (cards 4, 5, 6 need proper refs for scrolling)
  const cardRefs = Array.from({ length: 6 }, () => useRef<HTMLDivElement>(null))
  
  // Initialize scroll animations for cards (only first 3 cards have scroll animation)
  const serviceRefs = Array.from({ length: 6 }, (_, i) => 
    i < 3 ? useScrollAnimation() : { ref: cardRefs[i], isVisible: true }
  )

  // Set mounted state after component mounts to prevent flicker
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-expand card based on query parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam && serviceIdToIndex[serviceParam] !== undefined) {
      const cardIndex = serviceIdToIndex[serviceParam]
      setExpandedCards(new Set([cardIndex]))
      
      // Scroll to the card after a delay to ensure it's rendered and expanded
      // For cards 4, 5, 6 (indices 3, 4, 5), use a longer delay since they don't have scroll animations
      const scrollDelay = cardIndex >= 3 ? 1000 : 500
      
      setTimeout(() => {
        const cardElement = cardRefs[cardIndex].current
        if (cardElement) {
          // For cards 4, 5, 6, scroll with more offset to ensure visibility
          if (cardIndex >= 3) {
            const elementTop = cardElement.getBoundingClientRect().top + window.pageYOffset
            const offset = 200 // Extra offset for better visibility
            window.scrollTo({
              top: elementTop - offset,
              behavior: "smooth"
            })
          } else {
            cardElement.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        }
      }, scrollDelay)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Prevent scroll when cards expand/collapse
  useEffect(() => {
    if (scrollPositionRef.current !== 0) {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant'
        })
        scrollPositionRef.current = 0
      })
    }
  }, [expandedCards])

  const toggleCard = (index: number) => {
    // Save current scroll position before any changes
    scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        // If clicking on an already open card, close it
        newSet.delete(index)
      } else {
        // If opening a new card, close all others and open this one
        newSet.clear()
        newSet.add(index)
      }
      return newSet
    })
  }

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
          <h1 className={`text-5xl md:text-6xl font-sans font-bold mb-4 text-white title-font title-tall title-thin transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ color: '#d9c064' }}>{t("services.title")}</h1>
          <p className={`text-xl text-white/90 mx-auto transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: mounted ? "150ms" : "0ms" }}>
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Service Details - Cards Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, i) => {
              const isExpanded = expandedCards.has(i)
              const isCard3Or6 = i === 2 || i === 5
              const isCard1Or4 = i === 0 || i === 3
              const shouldMoveDown = (isCard3Or6 && expandedCards.has(2)) || (isCard3Or6 && expandedCards.has(5))
              
              return (
                <div
                  key={i}
                  ref={i < 3 ? serviceRefs[i].ref : cardRefs[i]}
                  onClick={() => toggleCard(i)}
                  className={`group relative bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border transform hover:scale-105 hover:border-black dark:hover:border-white overflow-hidden flex flex-col transition-all duration-700 ease-out cursor-pointer ${
                    serviceRefs[i].isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${isExpanded ? "lg:col-span-2 z-10 shadow-xl" : ""} ${
                    isExpanded && isCard3Or6 ? "lg:col-start-2" : ""
                  } ${
                    !isExpanded && i === 0 && expandedCards.has(2) ? "lg:row-start-2" : ""
                  } ${
                    !isExpanded && i === 3 && expandedCards.has(5) ? "lg:row-start-3" : ""
                  }`}
                  style={{
                    ...(isExpanded ? {
                      transform: "scale(1.02)",
                    } : {}),
                    transitionDelay: serviceRefs[i].isVisible && i < 3 ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div 
                    className={`${isExpanded ? "p-8 pb-6" : "p-8"} flex flex-col ${isExpanded ? "" : "flex-grow"}`}
                    style={{ transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    <div 
                      className={isExpanded ? "" : "flex-grow mb-6"}
                      style={{ transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                    >
                      <div 
                        className="relative rounded-lg overflow-hidden mb-4"
                        style={{ 
                          height: isExpanded ? "256px" : "192px",
                          transition: "height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                        }}
                      >
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-3 title-font title-tall title-thin" style={{ color: '#D4AF37', lineHeight: '1.3', maxWidth: '100%' }}>
                        {service.title === "Réactivité et suivi continu" ? (
                          <>
                            Réactivité et suivi<br />continu
                          </>
                        ) : (
                          service.title
                        )}
                      </h2>
                      {!isExpanded && (
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature: string, j: number) => {
                            const parts = feature.split(" - ")
                            const title = parts[0]
                            
                            return (
                              <li key={j} className="flex items-start gap-2">
                                <span className="text-primary flex-shrink-0 leading-relaxed">•</span>
                                <span className="text-foreground text-sm leading-relaxed font-semibold">
                                  {title}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                      {isExpanded && (
                        <>
                          <p className="text-sm text-muted-foreground mb-4 text-justify">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature: string, j: number) => {
                              const parts = feature.split(" - ")
                              const title = parts[0]
                              const description = parts.slice(1).join(" - ")
                              
                              return (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-primary flex-shrink-0 leading-relaxed">•</span>
                                  <span className="text-foreground text-sm leading-relaxed text-justify">
                                    <span className="font-semibold">{title}</span>
                                    {description && <span className="text-muted-foreground"> - {description}</span>}
                                  </span>
                                </li>
                              )
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                    {!isExpanded && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleCard(i)
                        }}
                        className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold mt-auto"
                      >
                        Voir plus
                      </Button>
                    )}
                    {isExpanded && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleCard(i)
                        }}
                        className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold mt-4"
                      >
                        Voir moins
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
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

export default function Services() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
        <Footer />
      </main>
    }>
      <ServicesContent />
    </Suspense>
  )
}


