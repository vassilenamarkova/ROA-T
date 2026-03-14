import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function CoffeeCup() {
  const { scene } = useGLTF('/coffee-cup.glb')
  return <primitive object={scene} scale={1.5} />
}

export default function CupViewer() {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} intensity={0.4} />
      <directionalLight position={[-2, -2, -5]} intensity={0.4} />
      <directionalLight position={[0, -5, 0]} intensity={0.3} />
      <CoffeeCup />
      <Environment preset="neutral" background={false} />
      <OrbitControls
        minDistance={2}
        maxDistance={5}
        /> 

    </Canvas>
  )
}




