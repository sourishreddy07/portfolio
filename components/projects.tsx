import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon } from '@/components/brand-icons'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'EyeDeep-Net',
    description:
      'A CNN-based retinal disease detection system capable of classifying multiple retinal diseases using fundus images.',
    image: '/projects/eyedeep-net.png',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV'],
    repo: 'https://github.com/sourishreddy07',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Real-world builds where machine learning meets a genuine problem."
      />

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="glass group grid overflow-hidden rounded-3xl md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden md:aspect-auto">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                  >
                    <GithubIcon size={16} />
                    View Code
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
