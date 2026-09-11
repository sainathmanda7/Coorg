import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/motion-primitives'
import { EnquiryForm } from '@/components/enquiry-form'
import { site, whatsappUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact & Booking | Coorg North Breeze',
  description:
    'Get in touch to book your stay at Coorg North Breeze in Madikeri, Coorg. Call or message us on WhatsApp, or send an enquiry.',
}

const contactLinks = [
  { label: 'Call', value: site.phone, href: site.phoneHref },
  { label: 'WhatsApp', value: 'Message us', href: whatsappUrl(), external: true },
  { label: 'Location', value: site.location, href: site.mapsSearchUrl, external: true },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact & Booking"
        title="Let's plan your stay."
        intro="Reach out with your dates and we will get back to you personally. We are happy to help with directions and anything else."
        image="/images/night-terrace.png"
        imageAlt="Warmly lit terrace of North Breeze at dusk"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Contact details */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-5">
                <span className="eyebrow text-earth">Get In Touch</span>
                <h2 className="font-display text-3xl leading-[1.05] text-charcoal sm:text-4xl">
                  We would love to hear from you.
                </h2>
                <p className="max-w-md text-base leading-relaxed text-charcoal/70">
                  The quickest way to reach us is WhatsApp or a call. For enquiries, use the form and it
                  will open a pre-filled message for you to send.
                </p>
              </div>
            </Reveal>

            <ul className="flex flex-col border-t border-charcoal/12">
              {contactLinks.map((c, i) => (
                <Reveal as="li" key={c.label} delay={i * 0.07}>
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-6 border-b border-charcoal/12 py-6 transition-colors duration-500 hover:bg-charcoal/[0.03]"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="eyebrow text-charcoal/45">{c.label}</span>
                      <span className="font-display text-2xl text-charcoal sm:text-3xl">{c.value}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-earth transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1} className="aspect-[16/10] w-full overflow-hidden border border-charcoal/10">
              <iframe
                title="Map showing Madikeri, Coorg"
                src={site.mapsEmbedUrl}
                className="h-full w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="bg-soft p-7 sm:p-10">
              <span className="eyebrow text-earth">Enquiry</span>
              <h2 className="mb-8 mt-4 font-display text-3xl text-charcoal sm:text-4xl">Send us your dates.</h2>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
