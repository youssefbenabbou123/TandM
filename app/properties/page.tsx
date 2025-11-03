"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/luxury-villa-portefeuille-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up text-white">
            Notre Portefeuille
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Découvrez nos propriétés premium sélectionnées et gérées avec excellence
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-secondary hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 animate-scale-in"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
                onClick={() => setSelectedProperty(selectedProperty === i ? null : i)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-card">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{property.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{property.location}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-card p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Surface</p>
                      <p className="font-bold text-foreground">{property.size}m²</p>
                    </div>
                    <div className="bg-card p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Capacité</p>
                      <p className="font-bold text-foreground">{property.capacity} guests</p>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedProperty === i && (
                    <div className="border-t border-border pt-4 mb-4 space-y-2 animate-fade-in">
                      <p className="text-muted-foreground text-sm">{property.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {property.amenities.map((amenity, j) => (
                          <span key={j} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-semibold text-foreground">Taux occupation:</span> {property.occupancy}%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Note moyenne:</span> {property.rating}★
                        </p>
                      </div>
                    </div>
                  )}

                  {/* View Link */}
                  <a href={property.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg transition-all">
                      Voir sur Airbnb
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Nos Résultats en Chiffres</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all animate-slide-in-up"
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <div className="text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Prêt à Rejoindre Notre Portefeuille?</h2>
          <p className="text-lg mb-8 text-white/90">
            Nous recherchons constamment de nouvelles propriétés premium à gérer
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              Proposer Votre Propriété
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/70">
            <p>&copy; 2025 T&M Conciergerie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const properties = [
  {
    name: "Studio Luxe - Paris 8e",
    location: "Champs-Élysées, 8e arrondissement",
    type: "Studio Premium",
    size: 35,
    capacity: 2,
    image: "/luxury-apartment-interior-design-modern.jpg",
    description:
      "Studio entièrement rénové avec vue sur les Champs-Élysées. Parfait pour les voyageurs en quête d'élégance et de confort premium.",
    amenities: ["WiFi Ultra Rapide", "Cuisine Équipée", "Salle de Bains Luxe", "Climatisation"],
    occupancy: 95,
    rating: 4.9,
    link: "https://www.airbnb.fr/rooms/1432505489484954838",
  },
  {
    name: "Appartement 2P - Paris 6e",
    location: "Saint-Germain-des-Prés, 6e arrondissement",
    type: "T2 Très Bien Situé",
    size: 55,
    capacity: 4,
    image: "/luxury-bedroom-apartment-modern-design.jpg",
    description:
      "Charmant T2 au cœur de Saint-Germain. Idéal pour les couples et petites familles découvrant la vie parisienne.",
    amenities: ["Terrasse Privée", "Lave-Linge", "Chauffage Central", "Ascenseur"],
    occupancy: 92,
    rating: 4.8,
    link: "https://www.airbnb.fr",
  },
  {
    name: "Penthouse Prestige - Paris 16e",
    location: "Passy, 16e arrondissement",
    type: "T3 Luxe",
    size: 120,
    capacity: 6,
    image: "/professional-photography-apartment-interior.jpg",
    description: "Penthouse vue Eiffel avec terrasse panoramique. Luxe absolu pour les clients les plus exigeants.",
    amenities: ["Vue Eiffel", "Terrasse Panoramique", "Cuisiniste", "Espace Salon"],
    occupancy: 98,
    rating: 5.0,
    link: "https://www.airbnb.fr",
  },
  {
    name: "Loft Industriel - Paris 4e",
    location: "Marais, 4e arrondissement",
    type: "Studio Design",
    size: 42,
    capacity: 2,
    image: "/luxury-hotel-housekeeping-cleaning-preparation.jpg",
    description: "Loft moderne avec poutres apparentes. Style design parisien pour voyageurs branchés.",
    amenities: ["Mezzanine", "Murs Briques", "Ambiance Design", "Lumineux"],
    occupancy: 94,
    rating: 4.9,
    link: "https://www.airbnb.fr",
  },
  {
    name: "Classique Haussmann - Paris 7e",
    location: "Tour Eiffel, 7e arrondissement",
    type: "T2 Haussmannien",
    size: 65,
    capacity: 4,
    image: "/concierge-service-luxury-welcoming-guests.jpg",
    description: "Authentique appartement haussmannien avec plafonds hauts. Paris intemporel.",
    amenities: ["Plafonds Hauts", "Cheminée", "Parquet Massif", "Balcon"],
    occupancy: 96,
    rating: 4.9,
    link: "https://www.airbnb.fr",
  },
  {
    name: "Contemporary Suite - Paris 1er",
    location: "Louvre, 1er arrondissement",
    type: "T1 Modern",
    size: 48,
    capacity: 2,
    image: "/customer-support-team-helping-guests.jpg",
    description: "Suite contemporaine près du Louvre. Proximité musées et galeries.",
    amenities: ["Art Déco", "Minibar", "Smart TV", "Coffre-Fort"],
    occupancy: 93,
    rating: 4.8,
    link: "https://www.airbnb.fr",
  },
]

const stats = [
  {
    value: "50+",
    label: "Propriétés Actives",
  },
  {
    value: "95%",
    label: "Taux d'Occupation Moyen",
  },
  {
    value: "4.9★",
    label: "Note Moyenne",
  },
  {
    value: "€2.5M+",
    label: "Revenus Gérés/An",
  },
]
