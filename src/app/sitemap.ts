import { MetadataRoute } from 'next'
import { projects } from '@/lib/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amanuel.dev' // Replace with actual domain

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectUrls,
  ]
}
