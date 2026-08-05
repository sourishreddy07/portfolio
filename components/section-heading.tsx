import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
