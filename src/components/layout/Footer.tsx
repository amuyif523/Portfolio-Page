'use client'

import { Container } from './Container'
import { useLenis } from 'lenis/react'
import { socialLinks } from '@/lib/content/socials'

export function Footer() {
  const lenis = useLenis()

  return (
    <footer className="py-24 bg-background border-t border-white/5">
      <Container className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-display font-bold uppercase tracking-tight">
            Amanuel
          </h3>
          <div className="text-sm font-mono text-muted">
            &copy; {new Date().getFullYear()} — Built with purpose.
          </div>
        </div>
        
        <div className="flex items-center gap-12">
          <div className="flex gap-8">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono uppercase tracking-wider hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => lenis?.scrollTo(0)}
            className="text-sm font-mono uppercase tracking-wider hover:text-accent transition-colors"
          >
            Top ↑
          </button>
        </div>
      </Container>
    </footer>
  )
}
