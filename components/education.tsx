import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GraduationCap, School } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    title: 'B.Tech — Computer Science (Data Science)',
    place: 'Malla Reddy College of Engineering',
    detail:
      'Currently in my 4th year, building a strong foundation in data science, machine learning, and software engineering.',
    tag: '4th Year',
  },
  {
    icon: School,
    title: 'Intermediate — MPC',
    place: 'Narayana Junior College, Kukatpally, Hyderabad',
    detail:
      'Mathematics, Physics & Chemistry — laying the analytical groundwork for engineering.',
    tag: 'Completed',
  },
  {
    icon: School,
    title: 'Schooling — CBSE',
    place: 'Kendriya Vidyalaya, Gachibowli',
    detail: 'Completed secondary education under the CBSE curriculum.',
    tag: 'Completed',
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-4 py-24">
      <SectionHeading eyebrow="Education" title="My journey" />

      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-6" />

        <ul className="space-y-8">
          {timeline.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100}>
              <div className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary sm:h-12 sm:w-12">
                  <item.icon size={18} />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-accent">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{item.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
