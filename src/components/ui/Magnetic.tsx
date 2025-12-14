'use client'

import { useRef, useState, ReactElement, cloneElement } from 'react'
import { gsap } from '@/lib/motion'
import { useGSAP } from '@gsap/react'

interface MagneticProps {
  children: ReactElement
  strength?: number
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * strength, y: y * strength })
  }

  useGSAP(() => {
    if (!ref.current) return
    
    gsap.to(ref.current, {
      x: position.x,
      y: position.y,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    })
  }, { dependencies: [position], scope: ref })

  return cloneElement(children as ReactElement<any>, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  })
}
