import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { ArrowLink } from '@/components/arrow-link'
import { gallery, whatsappUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Gallery | Coorg North Breeze',
  description:
    'A visual tour of Coorg North Breeze — the property, rooms, terraces and the views across Madikeri and the hills of Coorg.',
}

const categories = Array.from(new Set(gallery.map((g) => g.category)))

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="A look around."
        intro="The property, the rooms and the ever-changing views — from misty mornings to lamplit nights."
        image="/images/balcony.png"
        imageAlt="Terrace of North Breeze with plants and string lights overlooking Coorg"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <GalleryGrid images={gallery} categories={categories} />
      </section>

      <section className="border-t border-charcoal/10 bg-soft">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-28">
          <span className="eyebrow text-earth">See It For Yourself</span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl text-balance">
            Photos only say so much.
          </h2>
          <div className="mt-9">
            <ArrowLink href={whatsappUrl()} variant="solid" external>
              Book your stay
            </ArrowLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
