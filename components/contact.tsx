'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'psourishredddy@gmail.com'

function openEmailCompose(subject = '', body = '') {
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const win = window.open(gmail, '_blank', 'noopener,noreferrer')
  // Fallback to the OS mail client if the popup was blocked
  if (!win) {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    onClick: () => openEmailCompose(),
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8919923567',
    href: 'tel:+918919923567',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sourishreddy07',
    href: 'https://github.com/sourishreddy07',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'sourish-reddy-pingili',
    href: 'https://linkedin.com/in/sourish-reddy-pingili-b0616b3ba',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const email = String(data.get('email') ?? '')
    const body = `Hi Sourish,\n\n${message}\n\nFrom: ${name} (${email})`
    openEmailCompose(`Portfolio message from ${name}`, body)
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have an opportunity or an idea? I'd love to hear about it."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="grid content-start gap-4">
          {details.map((d) => {
            const inner = (
              <>
                <span className="rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <d.icon size={20} />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="block truncate font-medium">{d.value}</span>
                </span>
              </>
            )
            const cls =
              'glass group flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1'

            if (d.onClick) {
              return (
                <button
                  key={d.label}
                  type="button"
                  onClick={d.onClick}
                  className={cls}
                >
                  {inner}
                </button>
              )
            }
            return (
              <a
                key={d.label}
                href={d.href}
                target={d.href!.startsWith('http') ? '_blank' : undefined}
                rel={
                  d.href!.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className={cls}
              >
                {inner}
              </a>
            )
          })}
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <span className="rounded-xl bg-accent/15 p-3 text-accent">
              <MapPin size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Location
              </span>
              <span className="block font-medium">Hyderabad, India</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="glow inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Send size={16} />
                {sent ? 'Opening your email...' : 'Send Message'}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
