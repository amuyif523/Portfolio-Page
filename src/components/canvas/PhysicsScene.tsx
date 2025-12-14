'use client'

import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Plane(props: any) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow visible={false}>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" />
    </mesh>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Cube({ position, args = [1, 1, 1], color = 'white' }: any) {
  const [ref, api] = useBox(() => ({ mass: 1, position, args }))
  const [hovered, setHover] = useState(false)

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => {
        api.velocity.set(0, 5, 0)
        api.angularVelocity.set(Math.random(), Math.random(), Math.random())
      }}
    >
      <boxGeometry args={args} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>
  )
}

function Mouse({ position }: { position: [number, number, number] }) {
  const { viewport } = useThree()
  const [ref, api] = useBox(() => ({ type: 'Kinematic', args: [5, 5, 5], position }))
  
  useFrame((state) => {
    // Move the kinematic box to mouse position
    // We need to map normalized mouse coordinates to world coordinates at z=0
    const x = (state.pointer.x * viewport.width) / 2
    const y = (state.pointer.y * viewport.height) / 2
    api.position.set(x, y, 0)
    api.rotation.set(0, 0, state.clock.getElapsedTime())
  })
  
  return (
    <mesh ref={ref} visible={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" wireframe />
    </mesh>
  )
}

export default function PhysicsScene() {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Plane position={[0, -5, 0]} />
      <Mouse position={[0, 0, 0]} />
      
      {/* Falling Objects */}
      <Cube position={[0, 5, 0]} color="#4f46e5" />
      <Cube position={[-2, 10, 0]} color="#ef4444" />
      <Cube position={[2, 15, 0]} color="#22c55e" />
      <Cube position={[1, 20, 0]} args={[2, 0.5, 0.5]} color="orange" />
      <Cube position={[-1, 25, 0]} args={[0.5, 2, 0.5]} color="cyan" />
    </Physics>
  )
}
