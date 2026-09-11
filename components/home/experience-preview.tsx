import { Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'
import { ArrowLink } from '@/components/arrow-link'
import { experiences } from '@/lib/site-data'

export function ExperiencePreview() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Around Coorg" title="Places worth the drive.">
            The homestay is a calm base for exploring the viewpoints, forts and coffee country that make
            Coorg what it is.
          </SectionHeading>
          <Reveal delay={0.15}>
            <ArrowLink href="/experience" variant="ghost">
              All experiences
            </ArrowLink>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-charcoal/12 sm:mt-20">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.number} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-charcoal/12 py-7 transition-colors duration-500 hover:bg-charcoal/[0.03] sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-9">
                <span className="font-display text-xl text-earth tabular-nums sm:text-2xl">{exp.number}</span>
                <h3 className="font-display text-2xl text-charcoal sm:text-4xl">{exp.title}</h3>
                <p className="col-span-2 max-w-sm text-sm leading-relaxed text-charcoal/60 sm:col-span-1 sm:text-right sm:text-base">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
