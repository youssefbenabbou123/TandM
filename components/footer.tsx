"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Star, Cookie, FileText, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-gold.png"
                alt="T&M Conciergerie"
                className="h-10 w-auto"
              />
              <h4 className="text-xl font-bold text-white">T&M Conciergerie</h4>
            </div>
            <p className="text-white/70 mb-3">
              {t("footer.brandDescription")}
            </p>
            <p className="text-white/70 text-sm">
              {t("footer.brandMission")}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t("footer.quickLinksTitle")}</h4>
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
          <div>
            <h4 className="font-bold mb-4 text-white">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-white" />
                <a href="tel:0666830814" className="hover:text-white transition-colors">
                  06.66.83.08.14
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-white" />
                <a href="mailto:theo.m.conciergerie@gmail.com" className="hover:text-white transition-colors break-all">
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
          <div>
            <h4 className="font-bold mb-4 text-white">{t("footer.legalTitle")}</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors flex items-center gap-2">
                  <Cookie className="h-4 w-4" />
                  {t("footer.cookies")}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {t("footer.legalNotice")}
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4" />
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
