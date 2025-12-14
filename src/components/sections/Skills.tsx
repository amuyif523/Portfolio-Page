'use client'

import { Container } from '@/components/layout/Container'
import { skills } from '@/lib/content/skills'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
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

  }, { scope: containerRef })

  return (
    <section id="skills" className="py-32 relative" ref={containerRef}>
      <Container>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-24 overflow-hidden">
          <span data-animate-title className="block">Capabilities</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skills.map((category, idx) => (
            <div key={category.title} className="flex flex-col gap-8" data-animate-category>
              <div className="border-b border-accent/20 pb-4">
                <span className="text-xs font-mono text-accent mb-2 block">0{idx + 1}</span>
                <h3 className="text-2xl font-display font-bold uppercase">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    data-animate-skill
                    className="group relative overflow-hidden px-4 py-2 rounded-full border border-border bg-background/50 hover:border-accent transition-colors duration-300 cursor-default"
                  >
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 text-sm font-mono text-muted group-hover:text-background transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
