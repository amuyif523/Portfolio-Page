'use client'

import { Project } from '@/types'
import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/motion'
import { presets } from '@/lib/motion/presets'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

interface ProjectDetailProps {
  project: Project
  nextProject: Project
  prevProject: Project
}

export function ProjectDetail({ project, nextProject, prevProject }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      // Hero Text Stagger
      presets.stagger('[data-animate-hero]', 0.1)

      // Image Parallax/Reveal
      gsap.from('[data-animate-image]', {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-animate-image]',
          start: 'top 80%',
        },
      })

      // Content Reveal
      const sections = gsap.utils.toArray<HTMLElement>('[data-animate-section]')
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        })
      })
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <main id="main-content" className="relative w-full overflow-hidden bg-background min-h-screen" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32">
        <Container>
          <div className="flex flex-col gap-8">
            <Link href="/#work" className="text-sm font-mono text-muted hover:text-accent transition-colors uppercase tracking-wider w-fit will-change-transform" data-animate-hero>
              ← Back to Work
            </Link>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] overflow-hidden">
              <span className="block will-change-transform" data-animate-hero>{project.title}</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-accent uppercase tracking-wider overflow-hidden">
              <div className="flex gap-4 will-change-transform" data-animate-hero>
                <span>{project.role}</span>
                <span>·</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Image */}
      <section className="w-full h-[50vh] md:h-[80vh] relative mb-20 md:mb-32" data-animate-image>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </section>

      <Container>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 mb-32">
          {/* Project Info */}
          <div className="flex flex-col gap-8" data-animate-section>
            <div>
              <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">Role</h3>
              <p className="text-lg">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 border border-border rounded-full text-sm font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity uppercase font-mono text-sm tracking-wider">
                  Visit Site ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors uppercase font-mono text-sm tracking-wider">
                  View Code ↗
                </a>
              )}
            </div>
          </div>

          {/* Narrative */}
          <div className="flex flex-col gap-16">
            <div data-animate-section>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-6">The Challenge</h2>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div data-animate-section>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-6">The Solution</h2>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && (
          <div className="flex flex-col gap-8 md:gap-16 mb-32">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative w-full aspect-video bg-muted overflow-hidden" data-animate-section>
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="border-t border-border py-12 md:py-24 flex justify-between items-center" data-animate-section>
          <Link href={`/work/${prevProject.slug}`} className="group flex flex-col gap-2 items-start">
            <span className="text-sm font-mono text-muted uppercase tracking-wider group-hover:text-accent transition-colors">Previous</span>
            <span className="text-xl md:text-3xl font-display font-bold uppercase">{prevProject.title}</span>
          </Link>
          <Link href={`/work/${nextProject.slug}`} className="group flex flex-col gap-2 items-end text-right">
            <span className="text-sm font-mono text-muted uppercase tracking-wider group-hover:text-accent transition-colors">Next</span>
            <span className="text-xl md:text-3xl font-display font-bold uppercase">{nextProject.title}</span>
          </Link>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
