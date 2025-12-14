import { Container } from '@/components/layout/Container'
import { projects } from '@/lib/content/projects'

export function Projects() {
  return (
    <section id="work" className="py-32 bg-foreground/5">
      <Container>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-16">
          Selected Work
        </h2>
        <div className="grid gap-20">
          {projects.map((project) => (
            <div key={project.id} className="group border-t border-border pt-12">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <span className="text-sm font-mono text-accent mb-2 block">
                    {project.year}
                  </span>
                  <h3 className="text-3xl font-display font-bold uppercase group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xl text-muted mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-border text-sm font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
