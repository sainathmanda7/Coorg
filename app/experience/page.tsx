import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { PageHero } from '@/components/page-hero'
import { ImageReveal, Parallax, Reveal } from '@/components/motion-primitives'
import { ArrowLink } from '@/components/arrow-link'
import { experiences, whatsappUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Experience Coorg | Coorg North Breeze',
  description:
    'Viewpoints, forts, waterfalls and coffee country — the experiences around Coorg North Breeze in Madikeri, Coorg.',
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Experience Coorg"
        title="The hills, up close."
        intro="From sunset viewpoints to coffee estates, North Breeze is a calm base for the best of Coorg."
        image="/images/coorg-town-day.png"
        imageAlt="Green hills and colourful homes of Coorg under a wide sky"
      />

      {/* Alternating feature list */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex flex-col gap-20 sm:gap-28">
          {experiences.map((exp, i) => (
            <div
              key={exp.number}
              className={`grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Parallax distance={36} className="aspect-[4/3] w-full overflow-hidden">
                <ImageReveal
                  src={exp.image ?? '/images/coorg-town-day.png'}
                  alt={exp.title}
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </Parallax>
              <div className="flex flex-col gap-5">
                <span className="font-display text-3xl text-earth tabular-nums">{exp.number}</span>
                <h2 className="font-display text-3xl leading-[1.05] text-charcoal sm:text-4xl lg:text-5xl">
                  {exp.title}
                </h2>
                <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-forest text-soft">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <span className="eyebrow text-soft/60">Plan With Us</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 font-display text-3xl leading-[1.2] text-soft sm:text-4xl lg:text-5xl text-balance">
              Tell us what you would love to see, and we will help map your days around Coorg.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <ArrowLink href={whatsappUrl('Hi! I would love some help planning things to do around Coorg during my stay.')} variant="light" external>
              Ask us anything
            </ArrowLink>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
