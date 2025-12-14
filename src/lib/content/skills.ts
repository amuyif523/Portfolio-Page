export interface SkillCategory {
  title: string
  promise: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: "Interface Systems",
    promise: "Micro-interactions that feel physical, responsive, and inevitable.",
    items: ["React", "GSAP", "WebGL", "Tailwind"]
  },
  {
    title: "Intelligence Systems",
    promise: "Data flow and logic that scales without fragility.",
    items: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    title: "Delivery Systems",
    promise: "Infrastructure designed for speed, security, and zero downtime.",
    items: ["Vercel", "Docker", "AWS", "CI/CD"]
  }
]
