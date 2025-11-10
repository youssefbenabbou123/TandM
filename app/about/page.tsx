"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Target, Briefcase, Heart, Sparkles, Handshake, Award, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const valuesRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const section1Ref = useScrollAnimation()
  const approachRef = useScrollAnimation()
  const standardsRef = useScrollAnimation()
  const commitmentRef = useScrollAnimation()
  const { t } = useLanguage()

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: t("about.values.confiance.title"),
      description: t("about.values.confiance.description"),
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: t("about.values.exigence.title"),
      description: t("about.values.exigence.description"),
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: t("about.values.professionnalisme.title"),
      description: t("about.values.professionnalisme.description"),
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t("about.values.engagement.title"),
      description: t("about.values.engagement.description"),
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
        style={{ backgroundImage: "url('/04 - PAGE À PROPOS/PAGE A PROPOS.JPG')" }}
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

      {/* Section 1: L'exigence au service de votre sérénité */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={section1Ref.ref} className={`transition-all duration-700 ${
            section1Ref.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground">
              {t("about.section1Title")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p className="text-xl text-foreground font-medium">{t("about.section1Intro")}</p>
              <p>{t("about.section1p1")}</p>
              <p>{t("about.section1p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Une approche sur mesure */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={approachRef.ref} className={`transition-all duration-700 ${
            approachRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground">
              {t("about.approachTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>{t("about.approach")}</p>
              <p>{t("about.approach2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Des standards hôteliers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={standardsRef.ref} className={`transition-all duration-700 ${
            standardsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground">
              {t("about.standardsTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>{t("about.standards")}</p>
              <p>{t("about.standards2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Notre engagement */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={commitmentRef.ref} className={`transition-all duration-700 ${
            commitmentRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground">
              {t("about.commitmentTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>{t("about.commitment")}</p>
              <p>{t("about.commitment2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">{t("about.valuesTitle")}</h2>

          <div ref={valuesRef.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-12 h-12 mb-4 text-foreground mx-auto flex items-center justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-center">{value.description}</p>
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
      <Footer />
    </main>
  )
}
