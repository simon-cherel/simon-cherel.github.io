import React, { Suspense, useRef } from 'react'
import {Mesh} from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky, OrbitControls } from "@react-three/drei"


export default function ThreeD() {
  return (
    <Canvas camera={{ position: [15, 15, 100] }}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
    </Canvas>
  )
}


