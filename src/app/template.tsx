'use client'

import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1 })
      return
    }

    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, { scope: containerRef, dependencies: [prefersReducedMotion] })

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {children}
    </div>
  )
}
