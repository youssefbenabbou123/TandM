"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const valuesRef = useScrollAnimation()
  const section1Ref = useScrollAnimation()
  const approachRef = useScrollAnimation()
  const standardsRef = useScrollAnimation()
  const commitmentRef = useScrollAnimation()
  const faqRef = useScrollAnimation()
  const { t } = useLanguage()

  const values = [
    {
      title: t("about.values.confiance.title"),
      description: t("about.values.confiance.description"),
    },
    {
      title: t("about.values.exigence.title"),
      description: t("about.values.exigence.description"),
    },
    {
      title: t("about.values.professionnalisme.title"),
      description: t("about.values.professionnalisme.description"),
    },
    {
      title: t("about.values.engagement.title"),
      description: t("about.values.engagement.description"),
    },
  ]

  const faqs = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
    {
      question: t("contact.faq.q4"),
      answer: t("contact.faq.a4"),
    },
    {
      question: t("contact.faq.q5"),
      answer: t("contact.faq.a5"),
    },
    {
      question: t("contact.faq.q6"),
      answer: t("contact.faq.a6"),
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-no-repeat relative"
        style={{ 
          backgroundImage: "url('/04 - PAGE À PROPOS/PAGE A PROPOS.JPG')",
          backgroundPosition: "center 15%",
          backgroundSize: "115%"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white title-font title-tall title-thin">
            {t("about.title")}
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Section 1: L'exigence au service de votre sérénité */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={section1Ref.ref} className={`transition-all duration-700 ${
            section1Ref.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground title-font title-tall title-thin">
              {t("about.section1Title")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground">
              <p className="text-xl font-medium text-justify">{t("about.section1Intro")}</p>
              <p className="text-justify">{t("about.section1p1")}</p>
              <p className="text-justify">{t("about.section1p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Une approche sur mesure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={approachRef.ref} className={`transition-all duration-700 ${
            approachRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground title-font title-tall title-thin">
              {t("about.approachTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground">
              <p className="text-justify">{t("about.approach")}</p>
              <p className="text-justify">{t("about.approach2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Des standards hôteliers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={standardsRef.ref} className={`transition-all duration-700 ${
            standardsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground title-font title-tall title-thin">
              {t("about.standardsTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground">
              <p className="text-justify">{t("about.standards")}</p>
              <p className="text-justify">{t("about.standards2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Notre engagement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={commitmentRef.ref} className={`transition-all duration-700 ${
            commitmentRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center text-foreground title-font title-tall title-thin">
              {t("about.commitmentTitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground">
              <p className="text-justify">{t("about.commitment")}</p>
              <p className="text-justify">{t("about.commitment2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground title-font title-tall title-thin">{t("about.valuesTitle")}</h2>

          <div ref={valuesRef.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-card p-8 rounded-2xl border border-border dark:border-border hover:shadow-lg transition-all duration-700 ${
                  valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  animationDelay: valuesRef.isVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center title-font title-tall title-thin">{value.title}</h3>
                <p className="text-foreground text-justify">{value.description}</p>
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
