import { Icosahedron, PresentationControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';
import { Color } from 'three';

export default function Cube() {
  const meshRef = useRef(null);

  return (
    <Float
      speed={3} // Animation speed, defaults to 1
      rotationIntensity={7} // XYZ rotation intensity, defaults to 1
      floatIntensity={.5} // Up/down float intensity, defaults to 1
    >
      <PresentationControls
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={4} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
        <mesh ref={meshRef}>
          <Icosahedron >
            <MeshReflectorMaterial color={new Color('turquoise')} />
          </Icosahedron>
        </mesh>
      </PresentationControls>
    </Float>
  );
}
