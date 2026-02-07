'use client';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  icon: string;
  position: [number, number, number];
}

function SkillOrb({ skill, index }: { skill: Skill; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time + index) * 0.1;
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={skill.position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={hovered ? '#60a5fa' : '#3b82f6'}
            emissive={hovered ? '#3b82f6' : '#1e40af'}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {hovered && (
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="#60a5fa"
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
        )}
        
        <Text
          position={[0, 0, 0.31]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.icon}
        </Text>
      </group>
    </Float>
  );
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#1e3a8a"
        emissive="#3b82f6"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
        wireframe
      />
    </mesh>
  );
}

export default function SkillsSphere({ className = '' }: { className?: string }) {
  const skills: Skill[] = [
    { name: 'React', icon: '⚛️', position: [2, 1, 0] },
    { name: 'Next.js', icon: '▲', position: [-2, 1, 0] },
    { name: 'TypeScript', icon: 'TS', position: [0, 2, 1] },
    { name: 'Node.js', icon: '🟢', position: [1.5, -1, 1.5] },
    { name: 'AI/ML', icon: '🤖', position: [-1.5, -1, 1.5] },
    { name: 'Web3', icon: '⛓️', position: [0, -2, 0] },
    { name: 'Solana', icon: '◎', position: [2, 0, -1] },
    { name: 'Python', icon: '🐍', position: [-2, 0, -1] },
  ];

  return (
    <div className={`w-full h-[600px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <CentralSphere />
        
        {skills.map((skill, index) => (
          <SkillOrb key={skill.name} skill={skill} index={index} />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}