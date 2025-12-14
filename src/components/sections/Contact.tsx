'use client'

import { Container } from '@/components/layout/Container'
import { Magnetic } from '@/components/ui/Magnetic'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { contactInfo, socialLinks } from '@/lib/content/socials'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useGSAP(() => {
    if (prefersReducedMotion) return

    gsap.from('[data-animate-contact]', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
    })
  }, { scope: containerRef, dependencies: [prefersReducedMotion] })

  return (
    <section id="contact" className="py-40 md:py-60 relative overflow-hidden" ref={containerRef}>
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[10vw] leading-[0.85] font-display font-bold uppercase mb-12 tracking-tighter">
            <span className="block will-change-transform" data-animate-contact>Let&apos;s</span>
            <span className="block text-accent will-change-transform" data-animate-contact>Talk</span>
            <span className="block will-change-transform" data-animate-contact>Systems</span>
          </h2>
          
          <div data-animate-contact className="mt-8 relative group will-change-transform">
            <Magnetic strength={0.2} range={6}>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-accent text-background text-xl md:text-2xl font-bold uppercase tracking-wider hover:scale-105 transition-all duration-500 will-change-transform"
              >
                <span className={cn("transition-opacity duration-300", copied ? "opacity-0 absolute" : "opacity-100")}>
                  {contactInfo.button}
                </span>
                <span className={cn("transition-opacity duration-300 absolute", copied ? "opacity-100" : "opacity-0")}>
                  Copied!
                </span>
              </button>
            </Magnetic>
          </div>

          <div className="mt-24 flex flex-col md:flex-row gap-8 md:gap-16 will-change-transform" data-animate-contact>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Email</span>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-lg hover:text-accent transition-colors relative group"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Socials</span>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
