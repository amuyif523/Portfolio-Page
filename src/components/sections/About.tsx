import { Container } from '@/components/layout/Container'

export function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">
              Who I Am
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-muted">
            <p>
              I bridge the gap between engineering and design. With a background in full-stack development and a passion for interactive experiences, I build software that feels as good as it looks.
            </p>
            <p>
              My approach is systems-first: I don&apos;t just write code; I architect solutions that are scalable, performant, and maintainable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
