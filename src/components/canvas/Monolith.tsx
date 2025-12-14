'use client'

import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Text } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'
import { useRouter } from 'next/navigation'
import vertexShader from './shaders/monolithVertex.glsl'
import fragmentShader from './shaders/monolithFragment.glsl'

const Monolith = ({ 
  image = '/images/portrait.png', 
  title = 'Project',
  slug = '',
  ...props 
}) => {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  
  const texture = useTexture(image)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uHover: { value: 0 },
    uOpen: { value: 0 },
    uTexture: { value: texture },
    uColor: { value: new THREE.Color('#4f46e5') }
  }), [texture])

  useFrame((state, delta) => {
    if (mesh.current) {
      // @ts-expect-error - Uniforms are dynamic
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
      
      // Animate hover uniform
      easing.damp(
        // @ts-expect-error - Uniforms are dynamic
        mesh.current.material.uniforms.uHover,
        'value',
        hovered ? 1 : 0,
        0.25,
        delta
      )

      // Animate open uniform
      easing.damp(
        // @ts-expect-error - Uniforms are dynamic
        mesh.current.material.uniforms.uOpen,
        'value',
        clicked ? 1 : 0,
        0.5, // Slower transition for opening
        delta
      )

      // Floating animation (disable if clicked)
      if (!clicked) {
        mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
        mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05
      } else {
        // Fly towards camera / Scale up
        mesh.current.scale.lerp(new THREE.Vector3(5, 5, 5), delta * 2)
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, 0, delta * 5)
      }
    }
  })

  const handleClick = () => {
    if (slug) {
      setClicked(true)
      // Delay navigation to allow animation to play
      setTimeout(() => {
        router.push(`/work/${slug}`)
      }, 1000)
    }
  }

  return (
    <group {...props}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 3, 0.2]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
      {hovered && !clicked && (
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