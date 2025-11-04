"use client"

import { Navbar } from "@/components/navbar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Handshake, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const valuesRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const { t } = useLanguage()

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description"),
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t("about.values.passion.title"),
      description: t("about.values.passion.description"),
    },
  ]

  const stats = [
    { number: "50+", label: t("about.stats.properties") },
    { number: "95%", label: t("about.stats.occupancy") },
    { number: "4.9★", label: t("about.stats.rating") },
    { number: "24/7", label: t("about.stats.support") },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/elegant-luxury-interior-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white">
            {t("about.title")}
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold mb-8 text-center text-foreground">{t("about.storyTitle")}</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p>{t("about.story.p3")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">{t("about.valuesTitle")}</h2>

          <div ref={valuesRef.ref} className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-700 ${
                  valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef.ref} className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
