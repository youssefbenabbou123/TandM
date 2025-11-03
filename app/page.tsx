"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Key, Zap, DollarSign, Smartphone } from "lucide-react"
import { HomeIcon } from "lucide-react" // Renamed Home to HomeIcon to avoid redeclaration
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PropertyCarousel } from "@/components/property-carousel"

export default function Home() {
  const heroRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const featuredRef = useScrollAnimation()
  const whyUsRef = useScrollAnimation()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-transparent min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            ref={heroRef.ref}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${heroRef.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                T&M Conciergerie
              </h1>
              <p className="text-xl text-muted-foreground mb-4">Gestion Premium de Votre Bien Immobilier</p>
              <p className="text-lg text-muted-foreground mb-8">
                Sérénité pour les propriétaires, expérience 5 étoiles pour vos voyageurs
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  Contactez-nous
                </Button>
              </Link>
            </div>
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              <img
                src="/luxury-apartment-interior-design-modern.jpg"
                alt="Luxury property"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef.ref}
            className={`transition-all duration-1000 ${servicesRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-serif font-bold text-center mb-4 text-foreground">Nos Services</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services pour transformer votre bien immobilier en une source de
              revenus stable et sécurisée.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`group bg-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-border hover:border-primary text-center ${servicesRef.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: servicesRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Découvrir Tous les Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Property Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center text-foreground">Bien en Vedette</h2>
          <p className="text-muted-foreground mb-12 text-center">
            Découvrez un exemple de propriété que nous gérons avec excellence
          </p>

          <PropertyCarousel />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Pourquoi Nous Choisir?</h2>

          <div ref={whyUsRef.ref} className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-1000 ${whyUsRef.isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: whyUsRef.isVisible ? `${i * 150}ms` : "0ms",
                }}
              >
                <div className="text-5xl mb-4 text-secondary">{reason.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Prêt à Confier Votre Bien?</h2>
          <p className="text-lg mb-8 text-white/90">
            Rejoignez nos propriétaires satisfaits et commencez à générer des revenus immédiatement
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              Demander une Consultation Gratuite
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
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/70">Email: info@tmconciergerie.fr</p>
              <p className="text-white/70">Tél: +33 (0)1 XX XX XX XX</p>
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

const services = [
  {
    icon: <Camera className="w-10 h-10 mb-4 text-foreground" />,
    title: "Création d'Annonce",
    description:
      "Photos professionnelles et descriptions optimisées pour maximiser votre visibilité sur Airbnb et autres plateformes.",
  },
  {
    icon: <HomeIcon className="w-10 h-10 mb-4 text-foreground" />, // Updated Home to HomeIcon
    title: "Préparation du Séjour",
    description:
      "Ménage, linge de maison, panier bienvenue. Chaque détail est soigné pour offrir une expérience 5 étoiles.",
  },
  {
    icon: <Key className="w-10 h-10 mb-4 text-foreground" />,
    title: "Check-in / Check-out",
    description: "Accueil personnel et départ sans stress. Nous gérons chaque interaction pour maximiser vos avis.",
  },
  {
    icon: <Zap className="w-10 h-10 mb-4 text-foreground" />,
    title: "Réactivité & Assistance",
    description: "Support 24/7 pour vos voyageurs et gestion des urgences. Nous répondons en moins de 10 minutes.",
  },
  {
    icon: <DollarSign className="w-10 h-10 mb-4 text-foreground" />,
    title: "Paiement Transparent",
    description: "Paiements directs sur votre compte sans intermédiaires. Commissions claires et justifiées.",
  },
  {
    icon: <Smartphone className="w-10 h-10 mb-4 text-foreground" />,
    title: "Gestion Complète",
    description: "Livret numérique, QR codes, wifi, directions. Tout est inclus pour un séjour sans tracas.",
  },
]

const reasons = [
  {
    number: "95%",
    title: "Taux d'Occupation",
    description: "Nous optimisons votre calendrier et vos tarifs pour une occupation maximale.",
  },
  {
    number: "4.9★",
    title: "Note Moyenne",
    description: "Nos propriétés obtiennent les meilleures notes grâce à notre excellence opérationnelle.",
  },
  {
    number: "24/7",
    title: "Support Disponible",
    description: "Nous sommes toujours là pour vous et vos voyageurs, jour et nuit.",
  },
]
