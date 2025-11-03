"use client"

import { Navbar } from "@/components/navbar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Handshake, Heart } from "lucide-react"

export default function About() {
  const valuesRef = useScrollAnimation()
  const teamRef = useScrollAnimation()
  const statsRef = useScrollAnimation()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/elegant-luxury-interior-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up text-white">
            À Propos de T&M
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Passion pour l'excellence et engagement envers nos propriétaires.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center text-foreground">Notre Histoire</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              T&M Conciergerie est née d'une conviction simple: la gestion immobilière de qualité ne devrait pas être
              compliquée. Fondée par des professionnels du secteur du luxe et de l'hôtellerie, notre équipe apporte
              expertise et dévouement à chaque propriété.
            </p>
            <p>
              Nous avons lancé T&M Conciergerie pour servir les propriétaires qui souhaitent une gestion haut de gamme
              sans les tracas. Chaque bien est traité comme s'il nous appartenait, avec attention, rigueur et passion
              pour l'excellence.
            </p>
            <p>
              Aujourd'hui, nous gérons un portefeuille de propriétés premium et continuons de croître avec le même
              engagement: assurer le succès financier et la tranquillité d'esprit de nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Nos Valeurs</h2>

          <div ref={valuesRef.ref} className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-1000 ${
                  valuesRef.isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: valuesRef.isVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="w-12 h-12 mb-4 text-foreground">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">L'Équipe</h2>

          <div
            ref={teamRef.ref}
            className={`bg-background p-12 rounded-2xl border border-border text-center transition-all duration-1000 ${
              teamRef.isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Théo & Marie</h3>
            <p className="text-lg text-secondary mb-4">Fondateurs & Directeurs</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Avec plus de 15 ans d'expérience combinée dans le secteur du luxe et de la gestion immobilière, Théo et
              Marie ont créé T&M Conciergerie pour apporter un service sans compromis aux propriétaires.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef.ref} className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`transition-all duration-1000 ${
                  statsRef.isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: statsRef.isVisible ? `${i * 150}ms` : "0ms",
                }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
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

const values = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Excellence",
    description: "Nous ne transigeons jamais sur la qualité. Chaque détail compte pour offrir un service 5 étoiles.",
  },
  {
    icon: <Handshake className="w-12 h-12" />,
    title: "Transparence",
    description: "Pas de frais cachés, pas de surprises. Vous savez exactement ce que vous payez et pourquoi.",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Passion",
    description: "Nous aimons ce que nous faisons et cela se ressent dans chaque interaction avec nos clients.",
  },
]

const stats = [
  { number: "50+", label: "Propriétés Gérées" },
  { number: "95%", label: "Taux d'Occupation" },
  { number: "4.9★", label: "Note Moyenne" },
  { number: "24/7", label: "Support Disponible" },
]
