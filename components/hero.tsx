'use client'

import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = [
  'Data Science Student',
  'Python Developer',
  'Machine Learning Enthusiast',
  'Data Analyst',
]

function useTyping() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          )
        },
        deleting ? 45 : 90,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return text
}

const RESUME_URL = '/Pingili-Sourish-Reddy-Resume.docx'
const RESUME_FILENAME = 'Pingili-Sourish-Reddy-Resume.docx'

async function downloadResume() {
  try {
    const res = await fetch(RESUME_URL)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = RESUME_FILENAME
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  } catch {
    // Fallback: open in a new tab if the blob download is blocked
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer')
  }
}

export function Hero() {
  const typed = useTyping()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for internships &amp; collaborations
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Pingili <span className="text-gradient">Sourish Reddy</span>
        </h1>

        <div className="mt-6 flex h-9 items-center justify-center font-mono text-lg text-muted-foreground sm:text-2xl">
          <span aria-live="polite">{typed}</span>
          <span className="caret ml-1 inline-block h-6 w-[2px] bg-primary sm:h-7" />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          B.Tech Computer Science (Data Science) student turning data into
          insight through Python, machine learning, and business intelligence.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={downloadResume}
            className="glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://github.com/sourishreddy07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border bg-secondary/40 p-3 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sourish-reddy-pingili-b0616b3ba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border bg-secondary/40 p-3 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  )
}
