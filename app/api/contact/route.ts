import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
export const runtime = 'nodejs'


type Body = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Body

    const nom = (data.name ?? '').trim()
    const email = (data.email ?? '').trim()
    const telephone = (data.phone ?? '').trim()
    const message = (data.message ?? '').trim()

    // Basic validation
    const errors: Record<string, string> = {}
    if (!nom) errors.name = 'Nom requis'
    if (!email) errors.email = 'Email requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email invalide'
    if (!message) errors.message = 'Message requis'

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }

    await query(
      `INSERT INTO contact_form (nom, email, telephone, message) VALUES ($1, $2, $3, $4)`,
      [nom, email, telephone || null, message],
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error', err)
    const message = process.env.NODE_ENV !== 'production' && err instanceof Error ? err.message : 'Erreur serveur'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


