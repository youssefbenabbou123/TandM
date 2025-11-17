"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Cookies() {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')",
        }}
        ref={heroRef.ref}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className={`text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white title-font title-tall title-thin transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {t("cookies.title")}
          </h1>
          <p className={`text-xl text-white/90 mx-auto animate-fade-in-up transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ animationDelay: "100ms" }}>
            {t("cookies.subtitle")}
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
              {/* Usage */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("cookies.usage.title")}
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  {t("cookies.usage.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-lg leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consent */}
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("cookies.consent")}
                </p>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("cookies.security.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("cookies.security.content")}
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground title-font title-tall title-thin">
                  {t("cookies.modifications.title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("cookies.modifications.content")}
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
