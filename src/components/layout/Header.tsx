'use client'

import { Container } from './Container'
import Link from 'next/link'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const scrolled = useScroll(50)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border' : 'py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-display uppercase tracking-tighter hover:text-accent transition-colors"
        >
          Amanuel
        </Link>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
