'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, View } from '@react-three/drei'
import { r3f } from '@/components/canvas/tunnel'
import { Perf } from 'r3f-perf'
import Aether from '@/components/canvas/Aether'
import CameraRig from '@/components/canvas/CameraRig'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas 
      {...props}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      eventSource={typeof window !== 'undefined' ? document.body : undefined}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <View.Port />
      {/* @ts-ignore */}
      <r3f.Out />
      <Aether />
      <CameraRig />
      <Preload all />
      {process.env.NODE_ENV === 'development' && <Perf position="bottom-left" />}
    </Canvas>
  )
}
