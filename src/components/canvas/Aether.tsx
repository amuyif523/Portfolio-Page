'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from './shaders/aetherVertex.glsl'
import fragmentShader from './shaders/aetherFragment.glsl'

const generatePositions = (count: number) => {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 20
    positions[i3 + 1] = (Math.random() - 0.5) * 20
    positions[i3 + 2] = (Math.random() - 0.5) * 10 - 5 // Center around z=-5, range -10 to 0
  }
  return positions
}

const generateRandomness = (count: number) => {
  const randomness = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    randomness[i3] = (Math.random() - 0.5) 
    randomness[i3 + 1] = (Math.random() - 0.5) 
    randomness[i3 + 2] = (Math.random() - 0.5) 
  }
  return randomness
}

const generateScale = (count: number) => {
  const scale = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    scale[i] = Math.random()
  }
  return scale
}

const Aether = ({ count = 2000, size = 50 }) => {
  const mesh = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => generatePositions(count), [count])
  const particlesRandomness = useMemo(() => generateRandomness(count), [count])
  const particlesScale = useMemo(() => generateScale(count), [count])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
    uSize: { value: size },
    uMouse: { value: new THREE.Vector3() }
  }), [size])

  useFrame((state) => {
    const { clock, pointer, camera } = state
    if (mesh.current && mesh.current.material) {
        // @ts-expect-error - Uniforms are dynamic
        mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
        
        // Project pointer to world space at z=-5
        const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5)
        vector.unproject(camera)
        const dir = vector.sub(camera.position).normalize()
        const distance = (-5 - camera.position.z) / dir.z
        const pos = camera.position.clone().add(dir.multiplyScalar(distance))
        
        // @ts-expect-error - Uniforms are dynamic
        mesh.current.material.uniforms.uMouse.value.lerp(pos, 0.1)
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandomness"
          count={particlesRandomness.length / 3}
          array={particlesRandomness}
          itemSize={3}
          args={[particlesRandomness, 3]}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={particlesScale.length}
          array={particlesScale}
          itemSize={1}
          args={[particlesScale, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  )
}

export default Aether