'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo,useRef } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i3] = Math.random() * 0.5 + 0.5;
      colors[i3 + 1] = Math.random() * 0.5 + 0.5;
      colors[i3 + 2] = 1;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const positions = useMemo(() => {
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 8;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    const linePositions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const pos1 = new THREE.Vector3(
        particlePositions[i3],
        particlePositions[i3 + 1],
        particlePositions[i3 + 2]
      );
      
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const pos2 = new THREE.Vector3(
          particlePositions[j3],
          particlePositions[j3 + 1],
          particlePositions[j3 + 2]
        );
        
        if (pos1.distanceTo(pos2) < 2) {
          linePositions.push(
            particlePositions[i3],
            particlePositions[i3 + 1],
            particlePositions[i3 + 2],
            particlePositions[j3],
            particlePositions[j3 + 1],
            particlePositions[j3 + 2]
          );
        }
      }
    }
    
    return new Float32Array(linePositions);
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
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