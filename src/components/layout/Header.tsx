import { Container } from './Container'
import Link from 'next/link'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 mix-blend-difference text-white">
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display uppercase tracking-tighter">
          Amanuel
        </Link>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
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
