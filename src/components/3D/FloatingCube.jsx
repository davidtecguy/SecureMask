import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const FloatingCube = () => {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#0ea5e9" 
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export default FloatingCube

