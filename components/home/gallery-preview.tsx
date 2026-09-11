'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { gallery } from '@/lib/site-data'
import { Lightbox } from '@/components/lightbox'
import { ArrowLink } from '@/components/arrow-link'

const EASE = [0.22, 1, 0.36, 1] as const

// Bespoke editorial composition using the first five images.
const layout = [
  'col-span-2 row-span-2 aspect-square sm:aspect-auto',
  'aspect-[3/4]',
  'aspect-[3/4]',
  'col-span-2 aspect-[16/9]',
]

export function GalleryPreview() {
  const reduce = useReducedMotion()
  const [lightbox, setLightbox] = useState<number | null>(null)
  const preview = gallery.slice(0, 4)

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-5">
          <span className="eyebrow text-earth">Gallery</span>
          <h2 className="max-w-lg font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
            Moments from the mountain.
          </h2>
        </div>
        <ArrowLink href="/gallery" variant="ghost">
          Full gallery
        </ArrowLink>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-5">
        {preview.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setLightbox(i)}
            className={`group relative overflow-hidden ${layout[i] ?? 'aspect-square'}`}
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
          >
            <img
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
          </motion.button>
        ))}
      </div>

      <Lightbox images={preview} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
    </section>
  )
}
