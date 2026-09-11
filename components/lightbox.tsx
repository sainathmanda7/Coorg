'use client'

import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { GalleryImage } from '@/lib/site-data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const open = index !== null

  const go = useCallback(
    (dir: number) => {
      if (index === null) return
      onNavigate((index + dir + images.length) % images.length)
    },
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go, onClose])

  const current = index !== null ? images[index] : null

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-charcoal/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="flex items-center justify-between px-5 py-5 text-soft sm:px-8">
            <span className="text-[0.8125rem] tracking-[0.16em] tabular-nums text-soft/70">
              {String((index ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-[0.8125rem] uppercase tracking-[0.16em] text-soft/80 transition-colors hover:text-soft"
            >
              Close ✕
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6 sm:px-16">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-soft/30 text-soft transition-colors hover:bg-soft hover:text-charcoal sm:left-6"
            >
              ←
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src || '/placeholder.svg'}
                alt={current.alt}
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-soft/30 text-soft transition-colors hover:bg-soft hover:text-charcoal sm:right-6"
            >
              →
            </button>
          </div>

          <p className="px-5 pb-6 text-center text-sm text-soft/60 sm:px-8">{current.alt}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
