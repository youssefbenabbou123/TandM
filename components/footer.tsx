"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 lg:pl-8">
        {/* Grid with fixed-width columns for perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-8 lg:gap-12 xl:gap-16 items-start">

          
          {/* Brand Column */}
          <div className="w-64">
            <div className="flex items-start gap-3 mb-4">
              <Image
                src="/logo-gold.png"
                alt="T&M Conciergerie"
                width={48}
                height={48}
                className="h-12 w-auto -mt-4"
                priority
              />
              <h4 className="font-bold mb-4 text-white whitespace-nowrap title-font title-tall title-thin">T&M Conciergerie</h4>
            </div>
            <p className="text-white/70 text-justify -mt-4">
              {t("footer.brandDescription")}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="w-48 md:ml-16">
            <h4 className="font-bold mb-4 text-white title-font title-tall title-thin">{t("footer.quickLinksTitle")}</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">
                  {t("nav.properties")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="w-60">
            <h4 className="font-bold mb-4 text-white title-font title-tall title-thin">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-white" />
                <a href="tel:0666830814" className="hover:text-white transition-colors">
                  06.66.83.08.14
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-white" />
                <a
                  href="mailto:theo.m.conciergerie@gmail.com"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  theo.m.conciergerie@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-white" />
                <span>{t("footer.location")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 flex-shrink-0 text-white" />
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.review")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Information Column */}
          <div className="w-52 md:ml-8">
            <h4 className="font-bold mb-4 text-white title-font title-tall title-thin">{t("footer.legalTitle")}</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  {t("footer.cookies")}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  {t("footer.legalNotice")}
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white transition-colors whitespace-nowrap">
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} T&M Conciergerie. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
