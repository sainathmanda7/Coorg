import { ImageReveal, Parallax, Reveal, TextReveal } from '@/components/motion-primitives'
import { ArrowLink } from '@/components/arrow-link'

export function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="eyebrow text-earth">Welcome to North Breeze</span>
          </Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-[3.75rem]">
            <TextReveal text="A home in the hills, made for slow days." />
          </h2>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Set on a ridge above Madikeri, North Breeze looks out across the rolling green of Coorg.
              Days begin with mist over the valley and end with the town glowing far below. Between them
              are open terraces, quiet rooms and the easy warmth of a family homestay.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="pt-2">
              <ArrowLink href="/stay" variant="outline">
                Discover the stay
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <Parallax distance={40} className="aspect-[4/5] w-full overflow-hidden lg:aspect-[5/6]">
          <ImageReveal
            src="/images/property-exterior.png"
            alt="The North Breeze homestay in golden evening light, with its terracotta tiled roof"
            className="h-full w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Parallax>
      </div>
    </section>
  )
}
