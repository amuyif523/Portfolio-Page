'use client'

import { useRef, useState, ReactElement, cloneElement } from 'react'
import { gsap } from '@/lib/motion'
import { useGSAP } from '@gsap/react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

interface MagneticProps {
  children: ReactElement
  strength?: number // 0 to 1, where 1 is max movement (approx 10px)
  range?: number // Max pixels to move
}

export function Magnetic({ children, strength = 0.2, range = 5 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP((context, contextSafe) => {
    if (prefersReducedMotion || !ref.current) return

    const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "power4.out" })
    const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "power4.out" })

    const handleMouseMove = contextSafe!((e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = ref.current!.getBoundingClientRect()
      
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      
      // Clamp movement to range
      const moveX = Math.max(Math.min(x * strength, range), -range)
      const moveY = Math.max(Math.min(y * strength, range), -range)

      xTo(moveX)
      yTo(moveY)
    })

    const handleMouseLeave = contextSafe!(() => {
      xTo(0)
      yTo(0)
    })

    ref.current.addEventListener('mousemove', handleMouseMove)
    ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ref.current?.removeEventListener('mousemove', handleMouseMove)
      ref.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, { scope: ref, dependencies: [prefersReducedMotion, strength, range] })

  // Add focus styles for keyboard users
  const child = cloneElement(children as ReactElement<any>, {
    ref,
    className: `${children.props.className || ''} transition-transform duration-300 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`,
  })

  return child
}
