'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { Vector3, CatmullRomCurve3 } from 'three'
import { easing } from 'maath'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

export default function CameraRig() {
  const { camera } = useThree()
  
  // Define the cinematic path
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 6),      // Hero (Start)
      new THREE.Vector3(0, 0, 0),      // About (Entering Aether)
      new THREE.Vector3(0, -2, -10),   // Work (Deep in Aether)
      new THREE.Vector3(0, -5, -20),   // Contact (End)
    ])
  }, [])

  useFrame((state, delta) => {
    // Scroll progress (0 to 1)
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight
    const scrollY = window.scrollY
    const progress = Math.max(0, Math.min(1, scrollY / scrollMax))

    // Get position on the curve based on scroll progress
    const point = curve.getPointAt(progress)
    
    // Apply position with damping
    easing.damp3(state.camera.position, point, 0.5, delta)
    
    // Mouse Parallax
    const parallaxX = (state.pointer.x * 0.5)
    const parallaxY = (state.pointer.y * 0.5)
    
    // Calculate target rotation (look at the path + parallax)
    // We manually calculate rotation to mix lookAt with parallax
    
    // Look ahead slightly for smoother rotation
    const lookAtPoint = curve.getPointAt(Math.min(1, progress + 0.05))
    
    // Create a dummy target that includes parallax
    const targetLookAt = lookAtPoint.clone()
    targetLookAt.x += parallaxX * 5
    targetLookAt.y += parallaxY * 5
    
    // Smoothly interpolate the camera's current quaternion towards the target lookAt
    const dummyCam = new THREE.PerspectiveCamera()
    dummyCam.position.copy(state.camera.position)
    dummyCam.lookAt(targetLookAt)
    
    state.camera.quaternion.slerp(dummyCam.quaternion, 2 * delta)
  })

  return null
}
