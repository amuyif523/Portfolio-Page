export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
  image?: string
  year: string
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
