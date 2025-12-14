import { Container } from './Container'

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-muted uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Amanuel. All rights reserved.
        </div>
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
          <a
            href="mailto:hello@example.com"
            className="text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  )
}
