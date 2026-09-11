'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export function Property() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
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
      </div>
    </section>
  )
}
