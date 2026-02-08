'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingText({ text }: { text: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const letterRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate entire group
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.3;
      
      // Animate individual letters
      letterRefs.current.forEach((letter, i) => {
        if (letter) {
          letter.position.y = Math.sin(time + i * 0.5) * 0.3;
          letter.rotation.z = Math.sin(time + i) * 0.1;
        }
      });
    }
  });

  const letters = text.split('');
  const letterSpacing = 1.2;
  const startX = -(letters.length - 1) * letterSpacing / 2;

  return (
    <group ref={groupRef}>
      {letters.map((letter, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) letterRefs.current[index] = el;
          }}
          position={[startX + index * letterSpacing, 0, 0]}
        >
          <boxGeometry args={[0.8, 1.2, 0.3]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#60a5fa"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
          {/* Add text texture */}
          <mesh position={[0, 0, 0.16]}>
            <planeGeometry args={[0.6, 0.9]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.9}>
              <canvasTexture
                attach="map"
                image={createTextCanvas(letter)}
              />
            </meshBasicMaterial>
          </mesh>
        </mesh>
      ))}
    </group>
  );
}

function createTextCanvas(text: string): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 64);
  
  return canvas;
}

export default function AnimatedLogo({ 
  text = 'FARREL ARKESYA KAHIRA PUTRA',
  className = '' 
}: { 
  text?: string;
  className?: string;
}) {
  return (
    <div className={`w-full h-[300px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <FloatingText text={text} />
      </Canvas>
    </div>
  );
}