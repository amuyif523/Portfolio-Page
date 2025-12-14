'use client'

import { Container } from '@/components/layout/Container'
import { projects } from '@/lib/content/projects'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { presets } from '@/lib/motion/presets'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // Mouse tracking for preview
  useEffect(() => {
    if (prefersReducedMotion) return

    const movePreview = (e: MouseEvent) => {
      gsap.to(previewRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', movePreview)
    return () => window.removeEventListener('mousemove', movePreview)
  }, [prefersReducedMotion])

  // Reveal/Hide preview
  useEffect(() => {
    if (prefersReducedMotion) return

    if (hoveredId) {
      gsap.to(previewRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(previewRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }, [hoveredId, prefersReducedMotion])

  useGSAP(
    () => {
      if (prefersReducedMotion) return
      presets.stagger('[data-animate]', 0.1)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  const activeProject = projects.find((p) => p.id === hoveredId)

  return (
    <section id="work" className="py-40 relative" ref={containerRef}>
      {/* Floating Preview */}
      {!prefersReducedMotion && (
        <div
          ref={previewRef}
          className="pointer-events-none fixed top-0 left-0 z-50 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg opacity-0 hidden md:block will-change-transform"
        >
          {activeProject?.image && (
            <div className="relative h-full w-full bg-muted">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          )}
        </div>
      )}

      <Container>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-16 overflow-hidden">
          <span data-animate className="block">Work</span>
        </h2>
        <div className="flex flex-col">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
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
