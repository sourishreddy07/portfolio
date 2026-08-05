import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold">
            <span className="text-gradient">Pingili Sourish Reddy</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Data Science Student · Python Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sourishreddy07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sourish-reddy-pingili-b0616b3ba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:psourishredddy@gmail.com"
            aria-label="Email"
            className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pingili Sourish Reddy. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
