'use client'

import { Container } from './Container'
import { useLenis } from 'lenis/react'
import { socialLinks } from '@/lib/content/socials'

export function Footer() {
  const lenis = useLenis()

  return (
    <footer className="py-8 border-t border-border bg-background">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-muted uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Amanuel
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => lenis?.scrollTo(0)}
            className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
          >
            Top ↑
          </button>
        </div>
      </Container>
    </footer>
  )
}
