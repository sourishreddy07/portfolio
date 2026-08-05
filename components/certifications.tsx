import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award } from 'lucide-react'

const certs = [
  { issuer: 'IBM', title: 'Getting Started With Artificial Intelligence' },
  { issuer: 'IBM', title: 'Project Management Fundamentals' },
  { issuer: 'Deloitte', title: 'Data Analytics Job Simulation' },
]

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & training"
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div className="glass flex h-full items-start gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="rounded-xl bg-primary/15 p-2.5 text-primary">
                <Award size={20} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  {c.issuer}
                </p>
                <h3 className="mt-1 font-semibold leading-snug">{c.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
