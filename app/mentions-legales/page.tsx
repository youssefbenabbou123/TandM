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
        className="pt-36 pb-16 relative"
        ref={heroRef.ref}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up title-font title-tall title-thin transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ color: '#d9c064' }}>
            {t("legalNotice.title")}
          </h1>
          <p className={`text-xl text-muted-foreground mx-auto animate-fade-in-up transition-all duration-700 ${
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
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("legalNotice.publisher.content")}</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-lg">{t("legalNotice.publisher.name")}</p>
                  <p className="text-muted-foreground text-lg text-justify">{t("legalNotice.publisher.address")}</p>
                  <p className="text-muted-foreground text-lg text-justify">{t("legalNotice.publisher.email")}</p>
                  <p className="text-muted-foreground mt-4 text-justify">{t("legalNotice.publisher.director")}</p>
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.hosting.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("legalNotice.hosting.content")}</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-lg">{t("legalNotice.hosting.name")}</p>
                  <p className="text-muted-foreground text-lg">{t("legalNotice.hosting.address")}</p>
                  <a href={t("legalNotice.hosting.website")} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline flex items-center gap-2 text-lg">
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
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("legalNotice.intellectualProperty.content")}
                </p>
              </div>

              {/* Personal Data */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.personalData.title")}
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground text-justify">{t("legalNotice.personalData.content")}</p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-justify">{t("legalNotice.personalData.responsible")}</p>
                    <p className="text-muted-foreground text-lg">{t("legalNotice.personalData.responsibleName")}</p>
                    <p className="text-muted-foreground text-justify">{t("legalNotice.personalData.compliance")}</p>
                    <p className="text-muted-foreground text-justify">{t("legalNotice.personalData.details")}</p>
                    <p className="text-muted-foreground text-justify">{t("legalNotice.personalData.rights")}</p>
                    <p className="text-muted-foreground text-justify">{t("legalNotice.personalData.contact")}</p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.cookies.title")}
                </h2>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground text-justify">{t("legalNotice.cookies.content")}</p>
                  <p className="text-lg text-muted-foreground text-justify">{t("legalNotice.cookies.banner")}</p>
                  <p className="text-lg text-muted-foreground text-justify">{t("legalNotice.cookies.moreInfo")}</p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.liability.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("legalNotice.liability.content")}</p>
                <ul className="space-y-3">
                  {t("legalNotice.liability.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.externalLinks.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("legalNotice.externalLinks.content")}
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.modifications.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("legalNotice.modifications.content")}
                </p>
              </div>

              {/* Applicable Law */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.applicableLaw.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("legalNotice.applicableLaw.content")}
                </p>
              </div>

              {/* Credits */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("legalNotice.credits.title")}
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground text-justify">{t("legalNotice.credits.content")}</p>
                  <p className="text-muted-foreground text-justify">{t("legalNotice.credits.siret")}</p>
                  <a href={t("legalNotice.credits.website")} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline flex items-center gap-2 text-lg">
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
