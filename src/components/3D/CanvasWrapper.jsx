import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const CanvasWrapper = ({ children, className = '' }) => {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}

export default CanvasWrapper

