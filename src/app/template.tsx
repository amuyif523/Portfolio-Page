'use client'

import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const pathname = usePathname()

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1 })
      return
    }

    // Reset state
    gsap.set(containerRef.current, { opacity: 0, y: 20, filter: 'blur(10px)' })

    // Enter animation
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2 // Allow previous page to exit visually if we had an exit transition
    })

  }, { scope: containerRef, dependencies: [pathname, prefersReducedMotion] })

  return (
    <div ref={containerRef} className="min-h-screen bg-background will-change-[opacity,transform,filter]">
      {children}
    </div>
  )
}
