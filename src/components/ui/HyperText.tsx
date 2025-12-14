'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+'

interface HyperTextProps {
  children: string
  className?: string
  delay?: number
}

export function HyperText({
  children,
  className,
  delay = 0,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children)
  const elementRef = useRef<HTMLSpanElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    let interval: NodeJS.Timeout
    let iteration = 0
    
    const startScramble = () => {
      clearInterval(interval)
      iteration = 0
      
      interval = setInterval(() => {
        setDisplayText(() =>
          children
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return children[index]
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
            })
            .join('')
        )

        if (iteration >= children.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    }

    // Trigger on mount (with delay)
    const timeout = setTimeout(startScramble, delay)

    return () => {
        clearTimeout(timeout)
        clearInterval(interval)
    }
  }, [children, delay, prefersReducedMotion])

  return (
    <span
      ref={elementRef}
      className={cn('inline-block cursor-default', className)}
    >
      {displayText}
    </span>
  )
}
