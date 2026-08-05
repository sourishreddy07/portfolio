import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Footer } from '@/components/footer'
import { GithubActivity } from '@/components/github-activity'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { ParticleBackground } from '@/components/particle-background'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubActivity />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
