"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function Contact() {
  const formRef = useScrollAnimation()
  const faqRef = useScrollAnimation()
  const { t } = useLanguage()

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
  ]

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        const description = data?.errors
          ? Object.values<string>(data.errors).join(' • ')
          : data?.error || t("contact.form.error")
        toast({ title: t("contact.form.error"), description })
        return
      }

      toast({ title: t("contact.form.success"), description: t("contact.form.successDescription") })
      setFormData({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      toast({ title: t("contact.form.error"), description: t("contact.form.networkError") })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-36 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/customer-support-team-helping-guests.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={formRef.ref}
            className={`grid lg:grid-cols-2 gap-10 transition-all duration-700 ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{t("contact.info.phone")}</h3>
                  <p className="text-muted-foreground text-lg">+33 (0)1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{t("contact.info.email")}</h3>
                  <p className="text-muted-foreground text-lg">info@tmconciergerie.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{t("contact.info.hours")}</h3>
                  <p className="text-muted-foreground text-lg">{t("contact.info.hoursValue")}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-sans font-bold text-foreground">{t("contact.formTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstname">{t("contact.form.firstname")}</Label>
                      <Input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.firstnamePlaceholder")}
                        className="bg-gray-100 border-gray-400"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lastname">{t("contact.form.lastname")}</Label>
                      <Input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.lastnamePlaceholder")}
                        className="bg-gray-100 border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.emailPlaceholder")}
                        className="bg-gray-100 border-gray-400"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("contact.form.phoneLabel")}
                        className="bg-gray-100 border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="service">{t("contact.form.service")}</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-400 bg-gray-100 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">{t("contact.form.servicePlaceholder")}</option>
                      <option value="gestion-complete">{t("contact.form.serviceOptions.gestionComplete")}</option>
                      <option value="creation-annonce">{t("contact.form.serviceOptions.creationAnnonce")}</option>
                      <option value="preparation-sejour">{t("contact.form.serviceOptions.preparationSejour")}</option>
                      <option value="checkin-checkout">{t("contact.form.serviceOptions.checkinCheckout")}</option>
                      <option value="support-24-7">{t("contact.form.serviceOptions.support247")}</option>
                      <option value="autre">{t("contact.form.serviceOptions.autre")}</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className="min-h-[150px] bg-gray-100 border-gray-400"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-11 font-semibold disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("contact.form.submitting")}
                      </span>
                    ) : (
                      t("contact.form.submit")
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-sm border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46323.76274033073!2d7.208943!3d43.7101728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-16 text-foreground">{t("contact.faqTitle")}</h2>

          <div ref={faqRef.ref} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-lg border border-border transition-all duration-700 ${
                  faqRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  animationDelay: faqRef.isVisible ? `${i * 75}ms` : "0ms",
                }}
              >
                <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">T&M Conciergerie</h4>
              <p className="text-white/70">Service premium de gestion immobilière.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="/services" className="hover:text-white">
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("nav.contact")}</h4>
              <p className="text-white/70">Email: info@tmconciergerie.fr</p>
              <p className="text-white/70">Tél: +33 (0)1 23 45 67 89</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Politique de Confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 T&M Conciergerie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
