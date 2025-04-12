import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function HeroExperiance() {
    const isTablet = false;
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[10, 10, 5]} intensity={5} />

        <OrbitControls 
            enableZoom={!isTablet}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.5} 
        />
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='orange' />
        </mesh>
    </Canvas>
  )
}

export default HeroExperiance