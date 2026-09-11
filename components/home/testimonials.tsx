'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { testimonials } from '@/lib/site-data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  return (
    <section className="bg-charcoal text-soft">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
        <span className="eyebrow text-soft/50">Guest Words</span>

        <div className="mt-10 min-h-[220px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <p className="font-display text-2xl leading-[1.3] text-soft sm:text-3xl lg:text-4xl">
                “{current.quote}”
              </p>
              <footer className="mt-8 flex flex-col items-center gap-1">
                <span className="text-sm font-medium tracking-wide text-soft">{current.name}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-soft/50">{current.detail}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-soft' : 'w-1.5 bg-soft/30 hover:bg-soft/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
