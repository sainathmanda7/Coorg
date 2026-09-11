'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  intro?: string
  image: string
  imageAlt: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <section ref={ref} className="relative flex h-[72svh] min-h-[520px] w-full items-end overflow-hidden bg-charcoal">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0 h-[122%] w-full">
        <img src={image || '/placeholder.svg'} alt={imageAlt} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/25" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="eyebrow text-soft/75"
        >
          {eyebrow}
        </motion.span>
        <h1 className="mt-5 max-w-4xl font-display text-[3rem] leading-[0.95] text-soft sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: reduce ? 0 : '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            >
              {title}
            </motion.span>
          </span>
        </h1>
        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-soft/80 sm:text-lg"
          >
            {intro}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
