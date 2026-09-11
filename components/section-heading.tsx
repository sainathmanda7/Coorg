import type { ReactNode } from 'react'
import { Reveal, TextReveal } from '@/components/motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
  children,
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className ?? ''}`}
    >
      <Reveal>
        <span className="eyebrow text-earth">{eyebrow}</span>
      </Reveal>
      <h2 className="font-display text-4xl leading-[1.02] text-charcoal sm:text-5xl lg:text-6xl">
        <TextReveal text={title} />
      </h2>
      {children ? (
        <Reveal delay={0.1} className={align === 'center' ? 'max-w-xl' : 'max-w-md'}>
          <div className="text-base leading-relaxed text-charcoal/70 sm:text-lg">{children}</div>
        </Reveal>
      ) : null}
    </div>
  )
}
