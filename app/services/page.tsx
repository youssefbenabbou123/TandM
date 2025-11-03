"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { FileText, Sparkles, TrendingUp } from "lucide-react"

export default function Services() {
  const detailsRef = useScrollAnimation()
  const pricingRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/luxury-property-services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up text-white">Nos Services</h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Une gestion complète et professionnelle de votre propriété pour des résultats garantis.
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
              className={`mb-20 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                i === 0 && detailsRef.isVisible ? "animate-fade-in-up" : i === 0 ? "opacity-0" : ""
              } ${i % 2 === 1 ? "md:grid-cols-2" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">{service.title}</h2>
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
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Services Essentiels</h2>

          <div ref={servicesRef.ref} className="grid md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-1000 ${
                  servicesRef.isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: servicesRef.isVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Tarification Transparente</h2>

          <div ref={pricingRef.ref} className="grid md:grid-cols-2 gap-8">
            {pricing.map((item, i) => (
              <div
                key={i}
                className={`bg-card p-8 rounded-2xl border-2 border-border hover:border-secondary transition-all duration-1000 ${
                  pricingRef.isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"
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
          <h2 className="text-4xl font-serif font-bold mb-6">Commencez Dès Aujourd'hui</h2>
          <p className="text-lg mb-8 text-white/90">
            Parlons de votre propriété et comment nous pouvons maximiser vos revenus
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
              Prendre RDV Gratuit
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

const detailedServices = [
  {
    title: "Création de l'Annonce de A à Z",
    description:
      "Nous créons une annonce professionnelle et optimisée qui met en valeur votre bien et attire les meilleurs voyageurs.",
    image: "/professional-photography-apartment-interior.jpg",
    features: [
      "Photos professionnelles (ou assistance si vous utilisez vos photos)",
      "Rédaction optimisée pour les moteurs de recherche",
      "Stratégie tarifaire personnalisée",
      "Mise en ligne sur toutes plateformes",
      "Mises à jour mensuelles pour maintenir la visibilité",
    ],
  },
  {
    title: "Préparation de Chaque Séjour",
    description:
      "Chaque détail compte pour offrir une expérience 5 étoiles à vos voyageurs et garantir des avis excellents.",
    image: "/luxury-hotel-housekeeping-cleaning-preparation.jpg",
    features: [
      "Ménage complet selon normes hôtelières",
      "Linge de maison premium",
      "Panier de bienvenue personnalisé",
      "Livret d'accueil numérique avec QR code",
      "Vérification personnelle avant l'arrivée",
    ],
  },
  {
    title: "Check-in / Check-out Personnel",
    description:
      "Une accueil chaleureux et un départ sans stress. Notre présence garantit des avis 5 étoiles et une gestion fluide.",
    image: "/concierge-service-luxury-welcoming-guests.jpg",
    features: [
      "Accueil personnel 95% des séjours",
      "Visite guidée de la propriété",
      "Résolution des questions immédiates",
      "Vérification de l'état des lieux",
      "Assistance au départ",
    ],
  },
  {
    title: "Réactivité & Assistance 24/7",
    description: "Nous sommes toujours disponibles pour répondre aux demandes de vos voyageurs en moins de 10 minutes.",
    image: "/customer-support-team-helping-guests.jpg",
    features: [
      "Support client 24h/24, 7j/7",
      "Gestion des urgences immédiate",
      "Coordination des dépannages",
      "Communication transparente avec propriétaires",
      "Résolution proactive des problèmes",
    ],
  },
]

const serviceFeatures = [
  {
    icon: <FileText className="w-12 h-12 text-foreground mx-auto" />,
    title: "Gestion Administrative",
    description:
      "Nous gérons toute la documentation, les contrats, les déclarations fiscales et la conformité légale pour vous simplifier la vie et assurer la sécurité de votre investissement.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-foreground mx-auto" />,
    title: "Nettoyage Professionnel",
    description:
      "Chaque séjour commence par un nettoyage impeccable selon les standards hôteliers 5 étoiles. Notre équipe garantit une propriété toujours prête à accueillir vos voyageurs.",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-foreground mx-auto" />,
    title: "Gestion Financière",
    description:
      "Suivi transparent de tous vos revenus, paiements et dépenses avec des rapports détaillés chaque mois. Vous voyez exactement comment votre propriété génère des revenus.",
  },
]

const pricing = [
  {
    type: "Commission Concierge",
    description: "Pourcentage mensuel basé sur vos revenus",
    items: [
      "Variable selon les revenus mensuels",
      "Calcul transparent et détaillé",
      "Aucun frais caché",
      "Paiement direct sur votre compte",
    ],
  },
  {
    type: "Services Additionnels",
    description: "Facturés mensuellement aux propriétaires",
    items: [
      "Ménage: inclus dans le service",
      "Livret d'accueil digital: inclus",
      "Support priorité: gratuit",
      "Services spéciaux sur demande",
    ],
  },
]
