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
          duration: 1.5,
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
          scrub: true,
        },
      })

      // Text Stagger
      gsap.fromTo(
        '.about-text',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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
    <section id="about" className="py-40 relative" ref={containerRef}>
      <Container>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-center">
          {/* Image Column */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-muted/10 will-change-[clip-path]" ref={imageRef}>
            <Image
              src="/images/portrait.png"
              alt="Portrait of Amanuel"
              fill
              className="object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700 will-change-transform"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <h2 className="about-text text-4xl md:text-6xl font-display font-bold uppercase leading-none">
              Beyond <br />
              <span className="text-accent">Clean Code</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p className="about-text">
                Bridging the gap between engineering and design. I don't just build functional software; I build exceptional experiences.
              </p>
              <p className="about-text">
                With deep roots in full-stack development and motion design, I create software that feels as good as it looks.
              </p>
              <p className="about-text">
                <strong className="text-foreground">Performance is a feature.</strong> Every interaction instant, every animation intentional.
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
