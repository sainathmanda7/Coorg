import { ImageReveal, Parallax, Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'

export function Property() {
  return (
    <section className="bg-forest text-soft">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-soft/60">The Setting</span>
          </Reveal>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-soft sm:text-5xl lg:text-6xl">
            From first light to the last lamp of the day.
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-soft/70 sm:text-lg">
              The same view changes hour by hour — green hills under a wide morning sky, then a scatter
              of golden lights as Madikeri settles into the night.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6">
          <Parallax distance={30} className="aspect-[4/3] overflow-hidden">
            <ImageReveal
              src="/images/coorg-town-day.png"
              alt="Daytime view across the colourful homes and green hills of Coorg"
              className="h-full w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </Parallax>
          <Parallax distance={30} className="aspect-[4/3] overflow-hidden sm:mt-16">
            <ImageReveal
              src="/images/coorg-night.png"
              alt="Coorg town glittering with lights at night beneath a moody sky"
              className="h-full w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </Parallax>
        </div>

        <div className="mt-14 grid gap-8 border-t border-soft/15 pt-10 sm:grid-cols-3">
          {[
            { k: 'Day', v: 'Panoramic hill and valley views from every terrace.' },
            { k: 'Dusk', v: 'String-lit evenings as the sky turns over the ridge.' },
            { k: 'Night', v: 'The quiet glow of the town spread out below.' },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 0.08}>
              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl text-soft">{item.k}</span>
                <span className="text-sm leading-relaxed text-soft/65">{item.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
