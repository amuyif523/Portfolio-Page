'use client'

import { Container } from './Container'
import { useLenis } from 'lenis/react'

export function Footer() {
  const lenis = useLenis()

  return (
    <footer className="py-8 border-t border-border bg-background">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-muted uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Amanuel. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button 
            onClick={() => lenis?.scrollTo(0)}
            className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </Container>
    </footer>
  )
}
