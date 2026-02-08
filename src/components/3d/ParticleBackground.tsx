'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo,useRef } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3));
    return geo;
  }, [particlesPosition]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const lineGeometry = useMemo(() => {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    // Generate positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    // Find connections
    const linePositions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const pos1 = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const pos2 = new THREE.Vector3(positions[j3], positions[j3 + 1], positions[j3 + 2]);
        
        if (pos1.distanceTo(pos2) < 2) {
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial
        color="#3b82f6"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function ParticleBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}