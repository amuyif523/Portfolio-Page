'use client'

import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useControls } from 'leva'

export default function Effects() {
  const { bloomIntensity, bloomLuminance, bloomLevels } = useControls('Bloom', {
    bloomIntensity: { value: 1.5, min: 0, max: 5 },
    bloomLuminance: { value: 0.9, min: 0, max: 1 },
    bloomLevels: { value: 5, min: 1, max: 9, step: 1 }
  })

  const { noiseOpacity } = useControls('Noise', {
    noiseOpacity: { value: 0.05, min: 0, max: 0.5 }
  })

  const { vignetteOffset, vignetteDarkness } = useControls('Vignette', {
    vignetteOffset: { value: 0.3, min: 0, max: 1 },
    vignetteDarkness: { value: 0.6, min: 0, max: 1 }
  })

  const { chromaticAberrationOffset } = useControls('Chromatic Aberration', {
    chromaticAberrationOffset: { value: 0.002, min: 0, max: 0.01, step: 0.0001 }
  })

  return (
    <EffectComposer disableNormalPass>
      <Bloom 
        luminanceThreshold={bloomLuminance} 
        mipmapBlur 
        intensity={bloomIntensity} 
        levels={bloomLevels} 
      />
      <Noise opacity={noiseOpacity} blendFunction={BlendFunction.OVERLAY} />
      <Vignette offset={vignetteOffset} darkness={vignetteDarkness} />
      <ChromaticAberration 
        offset={[chromaticAberrationOffset, chromaticAberrationOffset]} 
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  )
}
