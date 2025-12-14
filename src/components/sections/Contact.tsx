'use client'

import { Container } from '@/components/layout/Container'
import { Magnetic } from '@/components/ui/Magnetic'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { contactInfo, socialLinks } from '@/lib/content/socials'
import { cn } from '@/lib/utils'

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useGSAP(() => {
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
  }, { scope: containerRef })

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden" ref={containerRef}>
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[10vw] leading-[0.85] font-display font-bold uppercase mb-12 tracking-tighter">
            <span className="block" data-animate-contact>Let&apos;s</span>
            <span className="block text-accent" data-animate-contact>Work</span>
            <span className="block" data-animate-contact>Together</span>
          </h2>
          
          <div data-animate-contact className="mt-8 relative group">
            <Magnetic strength={0.5}>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent text-background text-xl md:text-2xl font-bold uppercase tracking-wider hover:scale-110 transition-transform duration-500"
              >
                {contactInfo.button}
              </a>
            </Magnetic>
          </div>

          <div className="mt-24 flex flex-col md:flex-row gap-8 md:gap-16" data-animate-contact>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Contact</span>
              <button 
                onClick={handleCopyEmail}
                className="text-lg hover:text-accent transition-colors relative group"
              >
                {contactInfo.email}
                <span className={cn(
                  "absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono bg-accent text-background px-2 py-1 rounded opacity-0 transition-opacity",
                  copied && "opacity-100"
                )}>
                  Copied!
                </span>
              </button>
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
