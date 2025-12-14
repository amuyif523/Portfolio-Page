import { projects } from '@/lib/content/projects'
import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/work/ProjectDetail'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <ProjectDetail 
      project={project} 
      nextProject={nextProject} 
      prevProject={prevProject} 
    />
  )
}
