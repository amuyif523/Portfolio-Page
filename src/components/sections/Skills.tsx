'use client'

import { Container } from '@/components/layout/Container'
import { skills } from '@/lib/content/skills'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (prefersReducedMotion) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })

    tl.from('[data-animate-title]', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('[data-animate-category]', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')
    .from('[data-animate-skill]', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "random"
      },
      ease: 'back.out(1.7)'
    }, '-=0.5')

  }, { scope: containerRef, dependencies: [prefersReducedMotion] })

  return (
    <section id="skills" className="py-32 relative" ref={containerRef}>
      <Container>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-24 overflow-hidden">
          <span data-animate-title className="block">Capabilities</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skills.map((category, idx) => (
            <div key={category.title} className="flex flex-col gap-6" data-animate-category>
              <div className="border-b border-accent/20 pb-4">
                <span className="text-xs font-mono text-accent mb-2 block">0{idx + 1}</span>
                <h3 className="text-2xl font-display font-bold uppercase">{category.title}</h3>
              </div>
              
              <p className="text-muted text-sm leading-relaxed min-h-[3rem]">
                {category.promise}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    data-animate-skill
                    className="text-sm font-mono text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
