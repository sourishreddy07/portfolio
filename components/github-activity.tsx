'use client'

import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

const WEEKS = 52
const DAYS = 7

const levelClass = [
  'bg-secondary/60',
  'bg-primary/25',
  'bg-primary/45',
  'bg-primary/70',
  'bg-primary',
]

function useContributions() {
  return useMemo(() => {
    // Deterministic pseudo-random pattern so it is stable across renders.
    const cells: number[] = []
    let seed = 7
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    for (let i = 0; i < WEEKS * DAYS; i++) {
      const r = rand()
      const level = r > 0.82 ? 4 : r > 0.68 ? 3 : r > 0.5 ? 2 : r > 0.32 ? 1 : 0
      cells.push(level)
    }
    return cells
  }, [])
}

export function GithubActivity() {
  const cells = useContributions()
  const total = useMemo(
    () => cells.reduce((sum, c) => sum + c, 0) * 3 + 128,
    [cells],
  )

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Reveal>
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-secondary/60 p-2.5">
                <GithubIcon size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Contribution activity</h3>
                <p className="text-sm text-muted-foreground">
                  {total}+ contributions in the last year
                </p>
              </div>
            </div>
            <a
              href="https://github.com/sourishreddy07"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              @sourishreddy07
            </a>
          </div>

          <div className="mt-6 overflow-x-auto pb-2">
            <div
              className="grid w-max grid-flow-col gap-1"
              style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
              role="img"
              aria-label="GitHub contribution heatmap"
            >
              {cells.map((level, i) => (
                <span
                  key={i}
                  className={cn('h-3 w-3 rounded-[3px]', levelClass[level])}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            {levelClass.map((c, i) => (
              <span key={i} className={cn('h-3 w-3 rounded-[3px]', c)} />
            ))}
            <span>More</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
