'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function LiquidText({ text }: { text: string }) {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Liquid wobble effect
      textRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      textRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
      
      // Floating animation
      textRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_bold.typeface.json"
        size={1.5}
        height={0.4}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={10}
      >
        {text}
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={1}
          roughness={0.1}
          thickness={1}
          ior={1.5}
          chromaticAberration={0.5}
          anisotropy={1}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#3b82f6"
        />
      </Text3D>
    </Center>
  );
}

export default function AnimatedLogo({ 
  text = 'FARREL',
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
        <LiquidText text={text} />
      </Canvas>
    </div>
  );
}