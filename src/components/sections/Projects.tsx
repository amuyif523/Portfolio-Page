'use client'

import { Container } from '@/components/layout/Container'
import { projects } from '@/lib/content/projects'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { presets } from '@/lib/motion/presets'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return
      presets.stagger('[data-animate]', 0.1)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <section id="work" className="py-32" ref={containerRef}>
      <Container>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-16 overflow-hidden">
          <span data-animate className="block">Selected Work</span>
        </h2>
        <div className="flex flex-col">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link || '#'}
              target={project.link ? '_blank' : undefined}
              className={cn(
                "group relative border-t border-border py-12 transition-all duration-500 outline-none",
                hoveredId && hoveredId !== project.id ? "opacity-30 scale-[0.99]" : "opacity-100 scale-100"
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(project.id)}
              onBlur={() => setHoveredId(null)}
              data-animate
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-sm font-mono text-accent mb-2 block">
                      {project.year}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-display font-bold uppercase group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6 relative">
                  <p className="text-xl text-muted max-w-xl group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-border text-sm font-mono text-muted group-hover:border-accent group-hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="hidden md:block absolute top-0 right-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                     <span className="text-4xl text-accent">↗</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
