import { Container } from './Container'

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Amanuel. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-sm uppercase hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  )
}
