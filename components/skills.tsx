import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BarChart3, Brain, Code2, Wrench } from 'lucide-react'

const groups = [
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'Java', 'C'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    items: ['Power BI', 'Tableau', 'Excel', 'SQL'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['TensorFlow', 'Keras', 'CNN', 'OpenCV'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools of the trade"
        description="A toolkit spanning the full data workflow — from raw code to polished insight."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow">
              <div className="inline-flex rounded-xl bg-accent/15 p-2.5 text-accent">
                <g.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
