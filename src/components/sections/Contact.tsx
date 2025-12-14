import { Container } from '@/components/layout/Container'

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-[8vw] leading-[0.9] font-display font-bold uppercase mb-12">
            Let&apos;s Build <br />
            <span className="text-accent">Something Great</span>
          </h2>
          <a
            href="mailto:hello@example.com"
            className="inline-block text-2xl md:text-4xl border-b border-accent pb-2 hover:text-accent transition-colors"
          >
            hello@example.com
          </a>
        </div>
      </Container>
    </section>
  )
}
