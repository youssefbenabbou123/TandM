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

export default function Contact() {
  const formRef = useScrollAnimation()
  const faqRef = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        const description = data?.errors
          ? Object.values<string>(data.errors).join(' \u2022 ')
          : data?.error || 'Une erreur est survenue.'
        toast({ title: 'Échec de l\'envoi', description })
        return
      }

      toast({ title: 'Message envoyé', description: 'Merci ! Nous vous recontacterons bientôt.' })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      toast({ title: 'Erreur réseau', description: 'Veuillez réessayer plus tard.' })
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up text-white">
            Contactez-Nous
          </h1>
          <p className="text-xl text-white/90 mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Nous serions ravis de discuter de votre projet immobilier.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-b from-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={formRef.ref}
            className={`grid lg:grid-cols-2 gap-10 transition-all duration-700 ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {/* Contact Information */}
            <Card
              className={`relative overflow-hidden border-border/60 shadow-md backdrop-blur supports-[backdrop-filter]:bg-card/80 transition-all duration-700 ${formRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(24rem 16rem at 0% 0%, rgba(255,255,255,0.22), rgba(255,255,255,0) 60%), radial-gradient(20rem 14rem at 100% 100%, rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)",
                  mixBlendMode: "screen",
                }}
              />
              <CardHeader className="relative">
                <CardTitle className="text-3xl font-serif text-foreground">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-6">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 items-start p-4 rounded-lg border border-border/60 bg-background/50">
                    <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Téléphone</div>
                      <div className="text-muted-foreground">+33 (0)1 XX XX XX XX</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 items-start p-4 rounded-lg border border-border/60 bg-background/50">
                    <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">info@tmconciergerie.fr</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 items-start p-4 rounded-lg border border-border/60 bg-background/50">
                    <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Adresse</div>
                      <div className="text-muted-foreground">
                        Paris, France
                        <br />
                        Zone de service: Île-de-France
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 items-start p-4 rounded-lg border border-border/60 bg-background/50">
                    <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Disponibilité</div>
                      <div className="text-muted-foreground">Lundi - Dimanche: 24/7</div>
                      <div className="text-xs text-muted-foreground/90 mt-1">Support en temps réel pour les urgences</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card
              className={`relative overflow-hidden border-border/60 shadow-md backdrop-blur supports-[backdrop-filter]:bg-card/80 transition-all duration-700 ${formRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(24rem 16rem at 0% 0%, rgba(255,255,255,0.22), rgba(255,255,255,0) 60%), radial-gradient(20rem 14rem at 100% 100%, rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)",
                  mixBlendMode: "screen",
                }}
              />
              <CardHeader className="relative">
                <CardTitle className="text-3xl font-serif text-foreground">Formulaire de Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 (0)X XX XX XX XX"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Parlez-nous de votre propriété..."
                    />
                  </div>

                  <Separator className="my-2" />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-11 font-semibold disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Envoi en cours…
                      </span>
                    ) : (
                      'Envoyer le Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">Questions Fréquentes</h2>

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
          <div className="text-center text-white/70">
            <p>&copy; 2025 T&M Conciergerie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const faqs = [
  {
    question: "Quelle est la durée minimale de contrat?",
    answer:
      "Nous proposons une flexibilité maximale. Discutons de vos besoins spécifiques lors d'une consultation gratuite.",
  },
  {
    question: "Comment est calculée la commission?",
    answer: "Notre commission est basée sur un pourcentage transparent de vos revenus mensuels. Aucun frais caché.",
  },
  {
    question: "Puis-je arrêter le service à tout moment?",
    answer: "Nous préférons les contrats à long terme, mais discutons de conditions flexibles selon votre situation.",
  },
  {
    question: "Qui gère les urgences la nuit?",
    answer: "Notre équipe est disponible 24/7, y compris les week-ends et jours fériés pour les urgences.",
  },
  {
    question: "Quels types de propriétés gérez-vous?",
    answer: "Nous gérons studios, T2, T3+ luxe. Notre expertise couvre les propriétés de standing premium.",
  },
  {
    question: "Comment mesurez-vous le succès?",
    answer: "Par votre taux d'occupation, vos revenus, et les avis de vos voyageurs. Nous optimisons constamment.",
  },
]
