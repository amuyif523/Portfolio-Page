'use client'

import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      // Image Reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      )

      // Parallax on Image
      gsap.to(imageRef.current?.querySelector('img') || null, {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Text Stagger
      gsap.fromTo(
        '.about-text',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
        }
      )
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <section id="about" className="py-24 md:py-40 relative" ref={containerRef}>
      <Container>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-24 items-start">
          {/* Image Column */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted/10 will-change-[clip-path]" ref={imageRef}>
            <Image
              src="/images/portrait.png"
              alt="Portrait of Amanuel"
              fill
              className="object-cover scale-110 grayscale contrast-125 will-change-transform"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>

          {/* Text Column */}
          <div className="space-y-12 pt-8">
            <h2 className="about-text text-4xl md:text-6xl font-display font-bold uppercase leading-none">
              Beyond <br />
              <span className="text-accent">Clean Code</span>
            </h2>
            
            <div className="space-y-12">
              <p className="about-text text-2xl md:text-3xl font-medium leading-tight">
                I approach software as a medium for clarity.
              </p>
              
              <div className="w-12 h-[1px] bg-accent/50 about-text" />

              <p className="about-text text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                With deep roots in full-stack engineering and motion design, I build systems that feel physical, responsive, and inevitable. For me, performance isn't just a metric—it's the texture of the experience.
              </p>
            </div>

            <div className="about-text pt-4">
              <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <h4 className="text-sm font-mono uppercase text-accent mb-2">Stack</h4>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Next.js / React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase text-accent mb-2">Creative</h4>
                  <ul className="text-sm text-muted space-y-1">
                    <li>GSAP / WebGL</li>
                    <li>Tailwind CSS</li>
                    <li>Figma</li>
                    <li>Motion Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
