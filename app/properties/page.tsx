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
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
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
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-secondary hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105"
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

      {/* Témoignages Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 text-foreground">Ils ont séjourné chez nous</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Des avis spontanés de voyageurs sur l’accueil, la propreté et l’emplacement.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl transition-all"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.stay}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground mb-4">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div className="text-secondary">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t.label}</span>
                </div>
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
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80",
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
    image: "/elegant-luxury-interior-hero.jpg",
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
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1920&q=80",
    description: "Suite contemporaine près du Louvre. Proximité musées et galeries.",
    amenities: ["Art Déco", "Minibar", "Smart TV", "Coffre-Fort"],
    occupancy: 93,
    rating: 4.8,
    link: "https://www.airbnb.fr",
  },
]

const testimonials = [
  {
    name: "Nicolas, Lyon",
    avatar: "/placeholder-user.jpg",
    stay: "Studio Luxe – 3 nuits",
    text:
      "Appartement impeccable et super bien situé. Check‑in très fluide, hôte réactif, on reviendra !",
    stars: 5,
    label: "Séjour court",
  },
  {
    name: "Sofia, Madrid",
    avatar: "/placeholder-user.jpg",
    stay: "T2 Saint‑Germain – 1 semaine",
    text:
      "Très calme et propre. Les conseils de quartier étaient top et l'accueil vraiment chaleureux.",
    stars: 5,
    label: "Confort",
  },
  {
    name: "Adam, Londres",
    avatar: "/placeholder-user.jpg",
    stay: "Penthouse – 4 nuits",
    text:
      "Vue incroyable. Organisation parfaite, tout est simple et premium, exactement ce qu'on cherchait.",
    stars: 5,
    label: "Premium",
  },
  {
    name: "Élise, Nantes",
    avatar: "/placeholder-user.jpg",
    stay: "Loft Marais – Week‑end",
    text:
      "Décoration magnifique, lit confortable, ménage impeccable. Communication rapide, merci !",
    stars: 5,
    label: "Propreté",
  },
  {
    name: "Marco, Rome",
    avatar: "/placeholder-user.jpg",
    stay: "Haussmann 7e – 5 nuits",
    text:
      "Proche de tout, très pratique avec les enfants. Hôte très arrangeant sur les horaires.",
    stars: 4,
    label: "Famille",
  },
  {
    name: "Hannah, Berlin",
    avatar: "/placeholder-user.jpg",
    stay: "Suite Louvre – 2 nuits",
    text:
      "Check‑in tardif sans problème, appartement silencieux, literie de qualité. Recommandé !",
    stars: 5,
    label: "Business",
  },
]
