'use client';
import { Float } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function HexagonRing({ radius, index }: { radius: number; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = time * 0.2 * (index % 2 === 0 ? 1 : -1);
      meshRef.current.scale.setScalar(1 + Math.sin(time + index) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 6]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 6]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#60a5fa"
        emissiveIntensity={0.5 + index * 0.1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function CenterOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.2);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#60a5fa"
        emissive="#3b82f6"
        emissiveIntensity={1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(100 * 3);
  for (let i = 0; i < 100; i++) {
    const i3 = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    positions[i3] = Math.cos(angle) * radius;
    positions[i3 + 1] = (Math.random() - 0.5) * 4;
    positions[i3 + 2] = Math.sin(angle) * radius;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-[500px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#60a5fa" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group>
            <CenterOrb />
            {[1, 1.5, 2, 2.5, 3].map((radius, index) => (
              <HexagonRing key={index} radius={radius} index={index} />
            ))}
            <FloatingParticles />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}