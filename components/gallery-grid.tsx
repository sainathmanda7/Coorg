'use client'

import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { GalleryImage } from '@/lib/site-data'
import { Lightbox } from '@/components/lightbox'

const EASE = [0.22, 1, 0.36, 1] as const

export function GalleryGrid({
  images,
  categories,
}: {
  images: GalleryImage[]
  categories?: string[]
}) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<string>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () => (active === 'All' ? images : images.filter((i) => i.category === active)),
    [images, active],
  )

  const filters = categories ? ['All', ...categories] : null

  return (
    <div>
      {filters ? (
        <div className="mb-12 flex flex-wrap gap-x-7 gap-y-3">
          {filters.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`text-[0.8125rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                active === c ? 'text-charcoal' : 'text-charcoal/40 hover:text-charcoal/70'
              }`}
            >
              {c}
              {active === c ? <span className="ml-2 inline-block h-px w-5 align-middle bg-charcoal" /> : null}
            </button>
          ))}
        </div>
      ) : null}

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setLightbox(images.indexOf(img))}
            className="group mb-4 block w-full overflow-hidden sm:mb-5 lg:mb-6"
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.05 }}
          >
            <div className="overflow-hidden">
              <img
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
            <span className="mt-2.5 flex items-center justify-between text-[0.6875rem] uppercase tracking-[0.16em] text-charcoal/45">
              {img.category}
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">View ↗</span>
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
    </div>
  )
}
