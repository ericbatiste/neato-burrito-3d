import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars, Cloud } from '@react-three/drei'
import Cube from './Cube'
import './App.css'

export default function App() {
  const cameraRef = useRef();

  return (
    <Canvas className='canvas'>
      <PerspectiveCamera
        makeDefault 
        ref={cameraRef} 
        fov={75} 
        position={[0, 0, 4]}
        aspect={window.innerWidth / window.innerHeight}
        />
      <ambientLight intensity={0.4}/>
      <pointLight 
        position={[10, 10, 10]} 
        intensity={800} 
        color={'aqua'} 
        />
      <Cube />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        />
      <Cloud
        opacity={0.3}
        speed={0.4} // Rotation speed
        width={1} // Width of the full cloud
        depth={2.5} // Z-dir depth
        segments={20} // Number of particles
        />
    </Canvas>
  )
}

