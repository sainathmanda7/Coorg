'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'

export function Property() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const header = document.querySelector('header')
    if (header) {
      if (latest > 0.01 && latest < 0.99) {
        header.style.transform = 'translateY(-100%)'
        header.style.opacity = '0'
        header.style.pointerEvents = 'none'
      } else {
        header.style.transform = ''
        header.style.opacity = ''
        header.style.pointerEvents = ''
      }
    }
  })

  const dayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section className="relative h-[300vh] w-full" ref={containerRef}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image: Night View */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/Night-view.png"
            alt="Night view of Coorg"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Foreground Image: Day View */}
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ opacity: dayOpacity }}
        >
          <Image
            src="/images/Day-view.png"
            alt="Day view of Coorg"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Cinematic Text overlay */}
        <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 max-w-md sm:left-12 lg:left-24 lg:max-w-xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-soft/90 drop-shadow-md"
          >
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: -200 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[4.25rem] leading-[1.05] text-soft drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl"
          >
            Peace till Sunset
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base font-light leading-relaxed text-soft/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:text-lg lg:text-xl"
          >
          </motion.p>
        </div>
      </div>
    </section>
  )
}
