import { ImageReveal, Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'
import { ArrowLink } from '@/components/arrow-link'
import { rooms } from '@/lib/site-data'

export function RoomsPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="The Rooms" title="Simple, restful rooms." />
        <Reveal delay={0.15}>
          <ArrowLink href="/stay" variant="ghost">
            View all rooms
          </ArrowLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:gap-10">
        {rooms.map((room, i) => (
          <Reveal key={room.id} delay={i * 0.1} className="group">
            <article className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ImageReveal
                  src={room.image}
                  alt={`${room.name} at North Breeze homestay`}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-charcoal sm:text-3xl">{room.name}</h3>
                <span className="eyebrow text-earth">{room.label}</span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/65 sm:text-base">
                {room.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
