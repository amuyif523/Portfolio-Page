'use client'

import { Container } from '@/components/layout/Container'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { presets } from '@/lib/motion/presets'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { Grain } from '@/components/ui/Grain'
import Link from 'next/link'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      const tl = presets.stagger('[data-animate]', 0.15)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Grain />
      <Container className="relative z-10">
        <h1 className="text-[13vw] leading-[0.8] font-bold font-display uppercase tracking-tighter mix-blend-difference">
          <div className="overflow-hidden">
            <div data-animate className="will-change-transform">Creative</div>
          </div>
          <div className="overflow-hidden">
            <span data-animate className="text-accent block will-change-transform">
              Technologist
            </span>
          </div>
        </h1>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 mt-12 items-end">
          <div className="overflow-hidden">
            <p data-animate className="max-w-xl text-xl md:text-2xl text-muted leading-relaxed will-change-transform">
              Building high-impact technical systems with creative sensibility.
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div data-animate className="will-change-transform">
              <Link 
                href="#work"
                className="group relative inline-flex items-center gap-2 text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors duration-300"
              >
                <span>View Work</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
