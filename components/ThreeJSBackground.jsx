// components/ThreeJSBackground.jsx
'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarBackground() {
  const ref = useRef();
  
  // Generate positions manually to avoid NaN issues
  const positions = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const radius = 1.2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Convert to Cartesian coordinates
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#4ade80"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const ThreeJSBackground = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;