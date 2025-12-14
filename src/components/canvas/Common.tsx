'use strict'

import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'

export const Common = ({ color, children }: { color?: string, children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    {children}
  </Suspense>
)
