'use client'

import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Text } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'
import vertexShader from './shaders/monolithVertex.glsl'
import fragmentShader from './shaders/monolithFragment.glsl'

const Monolith = ({ 
  image = '/images/portrait.png', 
  title = 'Project',
  ...props 
}) => {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHover] = useState(false)
  
  const texture = useTexture(image)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uHover: { value: 0 },
    uTexture: { value: texture },
    uColor: { value: new THREE.Color('#4f46e5') }
  }), [texture])

  useFrame((state, delta) => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
      
      // Animate hover uniform
      easing.damp(
        // @ts-ignore
        mesh.current.material.uniforms.uHover,
        'value',
        hovered ? 1 : 0,
        0.25,
        delta
      )

      // Floating animation
      mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05
    }
  })

  return (
    <group {...props}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[2, 3, 0.2]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, -2, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      )}
    </group>
  )
}

export default Monolith