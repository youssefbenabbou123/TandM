"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function PrivacyPolicy() {
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
            {t("privacyPolicy.title")}
          </h1>
          <p className={`text-xl text-muted-foreground mx-auto animate-fade-in-up transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ animationDelay: "100ms" }}>
            {t("privacyPolicy.subtitle")}
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
              {/* Introduction */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.introduction.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: t("privacyPolicy.introduction.content") }} />
              </div>

              {/* Responsible */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.responsible.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("privacyPolicy.responsible.content")}</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-lg">{t("privacyPolicy.responsible.name")}</p>
                  <p className="text-muted-foreground text-lg text-justify">{t("privacyPolicy.responsible.address")}</p>
                  <p className="text-muted-foreground text-lg text-justify">{t("privacyPolicy.responsible.email")}</p>
                </div>
              </div>

              {/* Data Collected */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.dataCollected.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("privacyPolicy.dataCollected.content")}</p>
                <ul className="space-y-3 mb-4">
                  {t("privacyPolicy.dataCollected.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4 text-justify">
                  {t("privacyPolicy.dataCollected.voluntary")}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("privacyPolicy.dataCollected.automatic")}
                </p>
              </div>

              {/* Purposes */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.purposes.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("privacyPolicy.purposes.content")}</p>
                <ul className="space-y-3">
                  {t("privacyPolicy.purposes.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recipients */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.recipients.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                  {t("privacyPolicy.recipients.content")}
                </p>
              </div>

              {/* Retention */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.retention.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("privacyPolicy.retention.content")}</p>
                <div className="space-y-2">
                  <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                    {t("privacyPolicy.retention.contact")}
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                    {t("privacyPolicy.retention.cookies")}
                  </p>
                </div>
              </div>

              {/* Rights */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("privacyPolicy.rights.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-justify">{t("privacyPolicy.rights.content")}</p>
                <ul className="space-y-3 mb-4">
                  {t("privacyPolicy.rights.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground text-justify">
                  {t("privacyPolicy.rights.contact")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
