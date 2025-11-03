"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Property {
  id: number
  title: string
  type: string
  location: string
  surface: string
  capacity: string
  description: string
  image: string
  airbnbUrl: string
}

const properties: Property[] = [
  {
    id: 1,
    title: "Studio Luxe - Paris 8e",
    type: "Studio Premium",
    location: "Arrondissement 8, Paris",
    surface: "35 m²",
    capacity: "2 voyageurs",
    description:
      "Un magnifique studio entièrement rénové, idéalement situé. Nos services garantissent une occupancy élevée et des revenus optimisés.",
    image: "/luxury-bedroom-apartment-modern-design.jpg",
    airbnbUrl: "https://www.airbnb.fr/rooms/1432505489484954838",
  },
  {
    id: 2,
    title: "Appartement Prestige - Paris 6e",
    type: "Deux Pièces Haut de Gamme",
    location: "Arrondissement 6, Paris",
    surface: "65 m²",
    capacity: "4 voyageurs",
    description:
      "Appartement élégant avec vue sur les toits de Paris. Entièrement équipé, situé à proximité des principales attractions touristiques.",
    image: "/professional-photography-apartment-interior.jpg",
    airbnbUrl: "#",
  },
  {
    id: 3,
    title: "Penthouse Vue Eiffel - Paris 7e",
    type: "Penthouse Luxe",
    location: "Arrondissement 7, Paris",
    surface: "120 m²",
    capacity: "6 voyageurs",
    description:
      "Penthouse spectaculaire avec terrasse panoramique. Finitions haut de gamme et confort exceptionnel pour les voyageurs exigeants.",
    image: "/luxury-apartment-interior-design-modern.jpg",
    airbnbUrl: "#",
  },
  {
    id: 4,
    title: "Studio Cosy - Marais",
    type: "Studio Charme",
    location: "Marais, Paris",
    surface: "30 m²",
    capacity: "2 voyageurs",
    description:
      "Petit studio authentique avec caractère dans le cœur du Marais. Parfait pour les couples et courtes escapades parisiennes.",
    image: "/luxury-hotel-housekeeping-cleaning-preparation.jpg",
    airbnbUrl: "#",
  },
]

export function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
  }

  const currentProperty = properties[currentIndex]

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border">
        <div className="grid md:grid-cols-2 gap-0 min-h-96">
          {/* Image */}
          <div className="relative overflow-hidden h-96 md:h-auto">
            {properties.map((property, index) => (
              <img
                key={property.id}
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="p-12 flex flex-col justify-center">
            <div className="transition-all duration-700">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{currentProperty.title}</h3>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">Type:</span> {currentProperty.type}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">Localisation:</span> {currentProperty.location}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">Surface:</span> {currentProperty.surface}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">Capacité:</span> {currentProperty.capacity}
                </p>
              </div>
              <p className="text-foreground mb-6">{currentProperty.description}</p>
              <a href={currentProperty.airbnbUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">Voir sur Airbnb</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          aria-label="Previous property"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Go to property ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          aria-label="Next property"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Property Counter */}
      <div className="text-center mt-4 text-muted-foreground text-sm">
        Propriété {currentIndex + 1} sur {properties.length}
      </div>
    </div>
  )
}
