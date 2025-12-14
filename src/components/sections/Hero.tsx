import { Container } from '@/components/layout/Container'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <Container>
        <h1 className="text-[12vw] leading-[0.8] font-bold font-display uppercase tracking-tighter">
          Creative
          <br />
          <span className="text-accent">Technologist</span>
        </h1>
        <p className="mt-8 max-w-xl text-xl md:text-2xl text-muted">
          I design and build high-impact technical systems with product and creative sensibility.
        </p>
      </Container>
    </section>
  )
}
