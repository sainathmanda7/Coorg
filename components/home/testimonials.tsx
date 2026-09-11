'use client'

import { testimonials } from '@/lib/site-data'
import { motion } from 'framer-motion'

export function Testimonials() {
  const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="overflow-hidden bg-charcoal py-24 text-soft sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mb-12">
        <span className="eyebrow text-soft/50">Guest Words</span>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <motion.div 
          className="flex w-max gap-6 px-3 sm:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[320px] flex-shrink-0 rounded-2xl bg-white/5 p-8 border border-white/10 sm:w-[420px]"
            >
              <p className="font-display text-lg leading-relaxed text-soft sm:text-xl">
                "{item.quote}"
              </p>
              <footer className="mt-8 flex flex-col gap-1">
                <span className="text-sm font-medium tracking-wide text-soft">{item.name}</span>
                <span className="text-xs uppercase tracking-widest text-soft/50">{item.detail}</span>
              </footer>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
