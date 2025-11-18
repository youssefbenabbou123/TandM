"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const [backgroundSize, setBackgroundSize] = useState("115%")
  const [mounted, setMounted] = useState(false)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const valuesRef = useScrollAnimation()
  const storyRef = useScrollAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const updateBackgroundSize = () => {
      setBackgroundSize(window.innerWidth < 768 ? "180%" : "115%")
    }
    updateBackgroundSize()
    window.addEventListener("resize", updateBackgroundSize)

    return () => {
      window.removeEventListener("resize", updateBackgroundSize)
    }
  }, [])

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

  const valueTheme = {
    accent: "from-neutral-400 via-neutral-200 to-transparent",
    overlay: "linear-gradient(120deg, rgba(148,163,184,0.08), rgba(148,163,184,0) 55%)",
  }

  const narrativeSections = [
    {
      id: "01",
      title: t("about.section1Title"),
      paragraphs: [t("about.section1p1"), t("about.section1p2")],
    },
    {
      id: "02",
      title: t("about.approachTitle"),
      paragraphs: [t("about.approach"), t("about.approach2")],
    },
    {
      id: "03",
      title: t("about.standardsTitle"),
      paragraphs: [t("about.standards"), t("about.standards2")],
    },
    {
      id: "04",
      title: t("about.commitmentTitle"),
      paragraphs: [t("about.commitment"), t("about.commitment2")],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-24 bg-no-repeat relative overflow-hidden"
        style={{ 
          backgroundImage: "url('/04 - PAGE À PROPOS/PAGE A PROPOS.JPG')",
          backgroundPosition: "center 15%",
          backgroundSize: backgroundSize
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-white title-font title-tall title-thin drop-shadow-2xl" style={{ color: '#d9c064' }}>
              {t("about.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mx-auto max-w-3xl leading-relaxed" style={{ 
              transitionDelay: mounted ? "200ms" : "0ms",
              animation: mounted ? "fadeInUp 0.8s ease-out 0.2s both" : "none"
            }}>
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Sections - Interactive layout */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-stone-100 dark:from-background dark:via-background/80 dark:to-background/60"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={storyRef.ref}
            className={`rounded-[40px] border border-border/40 bg-white/80 dark:bg-card/70 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.16)] transition-all duration-1000 ${
              storyRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid gap-10 lg:grid-cols-[280px,1fr] p-8 md:p-10 lg:p-12">
              {/* Left: numbered navigation */}
              <div className="space-y-6 border-b lg:border-b-0 lg:border-r border-border/50 pb-6 lg:pb-0 lg:pr-8">
                <div className="space-y-3">
                  {narrativeSections.map((section, index) => {
                    const isActive = index === activeSectionIndex
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onMouseEnter={() => setActiveSectionIndex(index)}
                        onFocus={() => setActiveSectionIndex(index)}
                        className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
                            : "hover:bg-muted/70 dark:hover:bg-muted/40"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.2em] ${
                            isActive
                              ? "border-white/40 bg-white/10 dark:border-black/20 dark:bg-black/5"
                              : "border-border/70 bg-background/80 dark:bg-card/60"
                          }`}
                        >
                          {section.id}
                        </span>
                        <span className="text-sm font-medium leading-snug line-clamp-3">
                          {section.title}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right: active section content */}
              <div className="relative">
                <div className="pointer-events-none absolute -top-10 -right-6 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(217,192,100,0.35),transparent)] opacity-80" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_0_100%,rgba(148,163,184,0.25),transparent)] opacity-70" />

                <div className="relative z-10">
                  {narrativeSections.map((section, index) => {
                    const isActive = index === activeSectionIndex
                    return (
                      <div
                        key={section.id}
                        className={`space-y-6 transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "pointer-events-none opacity-0 translate-y-4 absolute inset-0"
                        }`}
                      >
                        <div className="space-y-4">
                          <h2
                            className="text-3xl md:text-4xl lg:text-[2.6rem] font-sans font-bold title-font title-tall title-thin leading-tight"
                            style={{ color: "#d9c064" }}
                          >
                            {section.title}
                          </h2>
                          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-100" />
                        </div>
                        <div className="space-y-5 text-lg text-foreground/90 leading-relaxed">
                          {section.paragraphs.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex} className="text-justify">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-background dark:from-background/50 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-foreground title-font title-tall title-thin" style={{ color: '#d9c064' }}>
              {t("about.valuesTitle").replace("T&M Conciergerie", "T&M\u00A0Conciergerie")}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div ref={valuesRef.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              return (
                <div
                  key={i}
                  className={`group relative rounded-[28px] border border-border/60 bg-white/95 dark:bg-card/85 p-8 shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(0,0,0,0.15)] ${
                    valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: valuesRef.isVisible ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[28px] opacity-80 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
                    style={{
                      backgroundImage: valueTheme.overlay,
                    }}
                  />
                  <div className="absolute inset-0 rounded-[28px] border border-white/10 dark:border-white/5 pointer-events-none" />
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center title-font title-tall title-thin">
                      {value.title}
                    </h3>
                    <div className={`mx-auto mb-6 h-px w-16 bg-gradient-to-r ${valueTheme.accent}`} />
                    <p className="text-foreground/80 text-center leading-relaxed flex-1">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
