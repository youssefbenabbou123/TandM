"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { PropertyDetailModal } from "@/components/property-detail-modal"
import { Users, Bed, Bath, Home, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Properties() {
  const propertyRef = useScrollAnimation()
  const commentsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t, language } = useLanguage()
  
  // Get property data from translations
  const translations = require("@/translations/index").translations
  const property = translations[language as "fr" | "en"].properties.property

  const images = property.images || []

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/03 - PAGE PORTEFEUILLE/PAGE PORTEFEUILLE.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white">
            {t("properties.title")}
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("properties.subtitle")}
          </p>
        </div>
      </section>

      {/* Property Card */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={propertyRef.ref} className={`bg-white rounded-2xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-700 ${propertyRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {/* Image Carousel Container */}
            <div className="relative h-96 overflow-hidden group">
              {/* Images */}
              <div className="relative h-full w-full">
                {images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Type Badge */}
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                {property.type}
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 w-2 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">{property.title}</h2>
              <p className="text-muted-foreground mb-6 flex items-center gap-2">
                <Home className="h-4 w-4" />
                {property.location}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Voyageurs</p>
                  <p className="font-bold text-foreground">{property.guests}</p>
                </div>
                <div className="text-center">
                  <Bed className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Chambres • Lits</p>
                  <p className="font-bold text-foreground">{property.bedrooms} • {property.beds}</p>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Salle de bain</p>
                  <p className="font-bold text-foreground">{property.bathrooms}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground mb-6 line-clamp-3">{property.about}</p>

              {/* Ratings */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">5.0</span>
                  <span className="text-muted-foreground text-sm">{t("properties.exceptionalRatings")}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.values(property.ratings).map((rating: any, index: number) => (
                    <div key={index} className="flex flex-col gap-1.5 p-3 border rounded-lg bg-gray-50/50">
                      <span className="text-muted-foreground text-xs font-medium">{rating.label}</span>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <span className="font-bold text-base">{rating.score.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full flex-1"
                >
                  {t("properties.learnMore")}
                </Button>
                <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full w-full">
                    {t("properties.viewOnAirbnb")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      {property.comments && property.comments.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={commentsRef.ref} className={`transition-all duration-700 ${commentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h2 className="text-4xl font-sans font-bold text-center mb-4 text-foreground">{t("properties.commentsTitle")}</h2>
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                {t("properties.commentsSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {property.comments.map((comment: any, i: number) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border border-border p-6 hover:shadow-xl transition-all duration-700 ${
                    commentsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    animationDelay: commentsRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {comment.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground leading-tight">{comment.name}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: comment.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={ctaRef.ref} className={`transition-all duration-700 ${ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-4xl font-sans font-bold mb-6">{t("properties.ctaTitle")}</h2>
          <p className="text-lg mb-8 text-white/90">
            {t("properties.ctaSubtitle")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              {t("properties.ctaButton")}
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
