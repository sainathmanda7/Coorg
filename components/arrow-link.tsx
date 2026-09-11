import Link from 'next/link'
import type { ComponentProps } from 'react'

type Variant = 'solid' | 'outline' | 'ghost' | 'light'

const base =
  'group inline-flex items-center gap-2.5 text-[0.8125rem] font-medium uppercase tracking-[0.16em] transition-colors duration-500'

const variants: Record<Variant, string> = {
  solid: 'bg-charcoal text-soft px-7 py-4 hover:bg-forest',
  outline: 'border border-charcoal/30 text-charcoal px-7 py-4 hover:border-charcoal hover:bg-charcoal hover:text-soft',
  light: 'border border-soft/40 text-soft px-7 py-4 hover:bg-soft hover:text-charcoal',
  ghost: 'text-charcoal hover:text-earth',
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"
    >
      ↗
    </span>
  )
}

export function ArrowLink({
  href,
  children,
  variant = 'solid',
  className,
  external,
  ...rest
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  className?: string
  external?: boolean
} & Omit<ComponentProps<typeof Link>, 'href'>) {
  const cls = `${base} ${variants[variant]} ${className ?? ''}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Arrow />
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
      <Arrow />
    </Link>
  )
}
