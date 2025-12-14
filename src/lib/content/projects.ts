import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Immersive Commerce',
    description:
      'A WebGL-powered e-commerce experience featuring real-time 3D product configuration and seamless page transitions.',
    tech: ['Next.js', 'Three.js', 'R3F', 'GSAP'],
    year: '2024',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Financial Dashboard',
    description:
      'High-performance real-time data visualization platform handling millions of data points with sub-millisecond updates.',
    tech: ['React', 'D3.js', 'WebSocket', 'TypeScript'],
    year: '2023',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'AI Generative Studio',
    description:
      'Browser-based interface for generative art creation, leveraging WebGPU for client-side inference.',
    tech: ['WebGPU', 'React', 'Node.js', 'TensorFlow.js'],
    year: '2023',
    link: 'https://example.com',
    github: 'https://github.com',
  },
]
