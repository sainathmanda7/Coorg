import { Reveal } from '@/components/motion-primitives'
import { ArrowLink } from '@/components/arrow-link'
import { site } from '@/lib/site-data'

export function Location() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="eyebrow text-earth">Finding Us</span>
          </Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
            Above Madikeri, Coorg.
          </h2>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
              North Breeze sits on the northern ridge of Madikeri, an easy base for the viewpoints and
              coffee country of Coorg. Reach out and we will gladly help you plan your route.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <ArrowLink href={site.mapsDirectionsUrl} variant="solid" external>
              Get directions
            </ArrowLink>
            <ArrowLink href="/contact" variant="ghost">
              Contact us
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="aspect-[4/3] w-full overflow-hidden border border-charcoal/10 lg:aspect-auto">
          <iframe
            title="Map showing Madikeri, Coorg"
            src={site.mapsEmbedUrl}
            className="h-full min-h-[320px] w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
