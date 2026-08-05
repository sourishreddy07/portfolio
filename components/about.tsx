import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BrainCircuit, Database, LineChart, Terminal } from 'lucide-react'

const highlights = [
  {
    icon: LineChart,
    title: 'Data Analytics',
    desc: 'Power BI, Tableau, SQL & Excel dashboards.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    desc: 'CNNs, deep learning & computer vision.',
  },
  {
    icon: Terminal,
    title: 'Python Development',
    desc: 'Clean, production-minded Python code.',
  },
  {
    icon: Database,
    title: 'Business Intelligence',
    desc: 'Turning raw data into decisions.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="About"
        title="A student obsessed with data"
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            I am a passionate{' '}
            <span className="text-foreground">
              B.Tech Computer Science (Data Science)
            </span>{' '}
            student interested in Data Analytics, Machine Learning, AI, Python
            Development, and Business Intelligence. I enjoy building real-world
            projects using{' '}
            <span className="text-foreground">
              Python, Power BI, Tableau, SQL, and Deep Learning
            </span>
            .
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My focus is on bridging the gap between complex data and clear,
            actionable insight — whether that&apos;s a neural network for
            medical imaging or an interactive dashboard for a business.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <div className="glass group h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="inline-flex rounded-xl bg-primary/15 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <h.icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
