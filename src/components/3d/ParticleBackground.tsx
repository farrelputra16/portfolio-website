'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  // Generate particle positions
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

  // Animation
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particlesPosition}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { positions, connections } = useMemo(() => {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const connections: number[][] = [];
    
    // Generate positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    // Find nearby particles for connections
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const pos1 = new THREE.Vector3(
        positions[i3],
        positions[i3 + 1],
        positions[i3 + 2]
      );
      
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const pos2 = new THREE.Vector3(
          positions[j3],
          positions[j3 + 1],
          positions[j3 + 2]
        );
        
        if (pos1.distanceTo(pos2) < 2) {
          connections.push([i, j]);
        }
      }
    }
    
    return { positions, connections };
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    
    connections.forEach(([i, j]) => {
      linePositions.push(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2],
        positions[j * 3],
        positions[j * 3 + 1],
        positions[j * 3 + 2]
      );
    });
    
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    
    return geometry;
  }, [positions, connections]);

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