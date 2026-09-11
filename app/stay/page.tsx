import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { PageHero } from '@/components/page-hero'
import { ImageReveal, Parallax, Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'
import { ArrowLink } from '@/components/arrow-link'
import { amenities, rooms, site, whatsappUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'The Stay | Coorg North Breeze',
  description:
    'Restful rooms and a warm homestay welcome at Coorg North Breeze in Madikeri — comfortable stays surrounded by the hills of Coorg.',
}

export default function StayPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Stay"
        title="Room to breathe."
        intro="Comfortable, uncluttered rooms with warm wood, natural light and the calm of the hills just outside."
        image="/images/room-1.png"
        imageAlt="A warmly lit bedroom with timber ceiling at North Breeze homestay"
      />

      {/* Intro */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading eyebrow="A Family Homestay" title="Stay like you belong." />
          <Reveal delay={0.1} className="flex items-center">
            <p className="text-base leading-relaxed text-charcoal/70 sm:text-lg">
              North Breeze is a lived-in home, not a hotel. Rooms are simple and spotless, mornings are
              slow, and there is always a terrace to sit out on with a warm cup and a long view. Meals
              are home-cooked and hospitality comes naturally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rooms — alternating layout */}
      <section className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-20 sm:gap-28">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <Parallax distance={36} className="aspect-[4/3] w-full overflow-hidden">
                <ImageReveal
                  src={room.image}
                  alt={`${room.name} at North Breeze`}
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Parallax>
              <div className="flex flex-col gap-5">
                <span className="eyebrow text-earth">{room.label}</span>
                <h3 className="font-display text-3xl text-charcoal sm:text-4xl lg:text-5xl">{room.name}</h3>
                <p className="max-w-md text-base leading-relaxed text-charcoal/70">{room.description}</p>
                <ul className="mt-2 flex flex-col gap-3 border-t border-charcoal/12 pt-5">
                  {room.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-charcoal/75">
                      <span className="h-1 w-1 rounded-full bg-earth" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <ArrowLink href={whatsappUrl(`Hi! I'd like to enquire about the ${room.name} at Coorg North Breeze.`)} variant="outline" external>
                    Enquire about this room
                  </ArrowLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-forest text-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="flex flex-col gap-5">
              <span className="eyebrow text-soft/60">What&apos;s Here</span>
              <h2 className="font-display text-4xl leading-[1.05] text-soft sm:text-5xl">
                Everything you need, nothing you don&apos;t.
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-px overflow-hidden border border-soft/15 bg-soft/15 sm:grid-cols-2">
              {amenities.map((a, i) => (
                <Reveal as="li" key={a} delay={(i % 2) * 0.06} className="bg-forest">
                  <div className="flex items-center gap-4 px-6 py-6 text-base text-soft/90">
                    <span className="font-display text-lg text-soft/50 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {a}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Terrace feature */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Parallax distance={40} className="aspect-[16/11] w-full overflow-hidden">
            <ImageReveal
              src="/images/balcony.png"
              alt="Open terrace with potted plants and string lights overlooking Coorg at dusk"
              className="h-full w-full"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </Parallax>
          <div className="flex flex-col gap-5">
            <span className="eyebrow text-earth">The Terrace</span>
            <h2 className="font-display text-3xl leading-[1.05] text-charcoal sm:text-4xl lg:text-5xl">
              The best seat in the house is outside.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-charcoal/70">
              Potted greens, string lights and an uninterrupted view over the valley — the terrace is
              where guests linger longest, morning coffee to evening quiet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/10 bg-soft">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-28">
          <span className="eyebrow text-earth">Ready When You Are</span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl text-balance">
            Check availability for your dates.
          </h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ArrowLink href={whatsappUrl()} variant="solid" external>
              Book on WhatsApp
            </ArrowLink>
            <ArrowLink href={site.phoneHref} variant="outline">
              Call {site.phone}
            </ArrowLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
