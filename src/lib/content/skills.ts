export interface SkillCategory {
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: "Creative Dev",
    items: ["WebGL", "Three.js", "GLSL Shaders", "React Three Fiber", "GSAP", "Lenis"]
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    title: "Backend / Ops",
    items: ["Node.js", "PostgreSQL", "Supabase", "Docker", "AWS", "Vercel"]
  }
]
