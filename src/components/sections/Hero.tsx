import { Container } from '@/components/layout/Container'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { presets } from '@/lib/motion/presets'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      const tl = presets.stagger('[data-animate]', 0.2)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-20">
      <Container>
        <h1 className="text-[12vw] leading-[0.8] font-bold font-display uppercase tracking-tighter">
          <div className="overflow-hidden">
            <div data-animate>Creative</div>
          </div>
          <div className="overflow-hidden">
            <span data-animate className="text-accent block">
              Technologist
            </span>
          </div>
        </h1>
        <div className="overflow-hidden mt-8">
          <p data-animate className="max-w-xl text-xl md:text-2xl text-muted">
            I design and build high-impact technical systems with product and creative sensibility.
          </p>
        </div>
      </Container>
    </section>
  )
}
