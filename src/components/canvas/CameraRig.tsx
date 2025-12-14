'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { easing } from 'maath'
import { useRef } from 'react'
import * as THREE from 'three'

export default function CameraRig() {
  const { camera } = useThree()
  const group = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    // Scroll progress (0 to 1)
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight
    const scrollY = window.scrollY
    const progress = Math.max(0, Math.min(1, scrollY / scrollMax))

    // Camera Movement based on scroll
    // Move forward into the Aether (from z=6 to z=-10)
    const targetZ = 6 - (progress * 20)
    const targetY = -progress * 2 // Slight downward tilt movement
    
    easing.damp3(state.camera.position, [0, targetY, targetZ], 0.25, delta)

    // Mouse Parallax
    // We move the camera slightly based on mouse position for a "handheld" feel
    const parallaxX = (state.pointer.x * 0.5)
    const parallaxY = (state.pointer.y * 0.5)
    
    easing.damp3(
      state.camera.rotation, 
      [
        -parallaxY * 0.1, // Pitch
        -parallaxX * 0.1, // Yaw
        0                 // Roll
      ], 
      0.25, 
      delta
    )
  })

  return null
}
