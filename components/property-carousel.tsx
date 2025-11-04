"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Users, Bed, Bath, Home } from "lucide-react"

interface PropertyCarouselProps {
  onLearnMore?: () => void
}

export function PropertyCarousel({ onLearnMore }: PropertyCarouselProps) {
  const { t, language } = useLanguage()
  
  // Get property data from translations
  const translations = require("@/translations/index").translations
  const property = translations[language as "fr" | "en"].properties.property

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border">
        <div className="grid md:grid-cols-2 gap-0 min-h-96">
          {/* Image */}
          <div className="relative overflow-hidden h-96 md:h-auto">
            <img
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-12 flex flex-col justify-center">
            <div className="transition-all duration-700">
              <h3 className="text-3xl font-sans font-bold text-foreground mb-4">{property.title}</h3>
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
                    onClick={onLearnMore}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    {t("properties.learnMore")}
                  </Button>
                )}
                <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
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
