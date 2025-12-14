export interface Project {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
  image?: string
  year: string
  client?: string
  role?: string
  challenge?: string
  solution?: string
  gallery?: string[]
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
