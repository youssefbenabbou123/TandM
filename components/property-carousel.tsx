"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Users, Bed, Bath, Home, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface PropertyCarouselProps {
  onLearnMore?: () => void
}

export function PropertyCarousel({ onLearnMore }: PropertyCarouselProps) {
  const { t, language } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
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
    <div className="relative">
      {/* Carousel Container */}
      <div className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-xl border border-border dark:border-border">
        <div className="grid md:grid-cols-2 gap-0 min-h-96">
          {/* Image Carousel */}
          <div className="relative overflow-hidden h-96 md:h-auto group">
            {/* Images */}
            <div className="relative h-full w-full">
              {images.map((image: string, index: number) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
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
          <div className="p-12 flex flex-col justify-center">
            <div className="transition-all duration-700">
              <h3 className="text-3xl font-sans font-bold text-foreground mb-4 title-font title-tall title-thin">{property.title}</h3>
              <p className="text-muted-foreground mb-4 font-semibold">{property.type}</p>
              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>{property.location}</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{property.guests}</span>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms} • {property.beds}</span>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </p>
                </div>
              </div>
              <p className="text-foreground mb-6 line-clamp-3">{property.about}</p>
              <div className="flex gap-4">
                {onLearnMore && (
                  <Button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onLearnMore()
                    }}
                    className="bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-black rounded-full font-semibold"
                  >
                    {t("properties.learnMore")}
                  </Button>
                )}
                <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-black rounded-full font-semibold">
                    {t("properties.viewOnAirbnb")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
