"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink } from "lucide-react"

export default function LegalNotice() {
  const { t } = useLanguage()
  const heroRef = useScrollAnimation()
  const contentRef = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-stone-50 dark:from-background dark:to-background/80">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
        }}
        ref={heroRef.ref}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className={`text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white title-font title-tall title-thin transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {t("legalNotice.title")}
          </h1>
          <p className={`text-xl text-white/90 mx-auto animate-fade-in-up transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ animationDelay: "100ms" }}>
            {t("legalNotice.subtitle")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={contentRef.ref}
            className={`transition-all duration-700 ${
              contentRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-12">
              {/* Publisher */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.publisher.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">{t("legalNotice.publisher.content")}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground text-lg">{t("legalNotice.publisher.name")}</p>
                  <p className="text-muted-foreground text-lg">{t("legalNotice.publisher.address")}</p>
                  <p className="text-muted-foreground text-lg">{t("legalNotice.publisher.email")}</p>
                  <p className="text-muted-foreground mt-4">{t("legalNotice.publisher.director")}</p>
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.hosting.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">{t("legalNotice.hosting.content")}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground text-lg">{t("legalNotice.hosting.name")}</p>
                  <p className="text-muted-foreground text-lg">{t("legalNotice.hosting.address")}</p>
                  <a href={t("legalNotice.hosting.website")} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 text-lg">
                    <ExternalLink className="h-4 w-4" />
                    {t("legalNotice.hosting.website")}
                  </a>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.intellectualProperty.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("legalNotice.intellectualProperty.content")}
                </p>
              </div>

              {/* Personal Data */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.personalData.title")}
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">{t("legalNotice.personalData.content")}</p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{t("legalNotice.personalData.responsible")}</p>
                    <p className="font-semibold text-foreground text-lg">{t("legalNotice.personalData.responsibleName")}</p>
                    <p className="text-muted-foreground">{t("legalNotice.personalData.compliance")}</p>
                    <p className="text-muted-foreground">{t("legalNotice.personalData.details")}</p>
                    <p className="text-muted-foreground">{t("legalNotice.personalData.rights")}</p>
                    <p className="font-medium text-foreground">{t("legalNotice.personalData.contact")}</p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.cookies.title")}
                </h2>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground">{t("legalNotice.cookies.content")}</p>
                  <p className="text-lg text-muted-foreground">{t("legalNotice.cookies.banner")}</p>
                  <p className="text-lg text-muted-foreground">{t("legalNotice.cookies.moreInfo")}</p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.liability.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">{t("legalNotice.liability.content")}</p>
                <ul className="space-y-3">
                  {t("legalNotice.liability.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.externalLinks.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("legalNotice.externalLinks.content")}
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.modifications.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("legalNotice.modifications.content")}
                </p>
              </div>

              {/* Applicable Law */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.applicableLaw.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("legalNotice.applicableLaw.content")}
                </p>
              </div>

              {/* Credits */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.credits.title")}
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">{t("legalNotice.credits.content")}</p>
                  <p className="text-muted-foreground">{t("legalNotice.credits.siret")}</p>
                  <a href={t("legalNotice.credits.website")} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 text-lg">
                    <ExternalLink className="h-4 w-4" />
                    {t("legalNotice.credits.website")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
