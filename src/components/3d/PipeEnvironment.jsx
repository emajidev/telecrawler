import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function PipeEnvironment() {
  const particlesRef = useRef();

  // Generate particle positions for water mist / dust in the pipe
  const particleCount = 120;
  const particlePositions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = Math.random() * 3 - 0.5;
      pos[i * 3 + 2] = Math.random() * 20 - 10;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.z += delta * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 2] += delta * 0.4;
        if (positions[i * 3 + 2] > 8) {
          positions[i * 3 + 2] = -12;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Deep Blue Ambient Lighting */}
      <ambientLight intensity={0.4} color="#0B192C" />
      <directionalLight position={[5, 10, 5]} intensity={0.6} color="#0077FF" />
      <pointLight position={[0, 2, -6]} intensity={3} color="#00D2FF" distance={15} />

      {/* Main Underground Pipe Tunnel Wall */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 30, 32, 1, true]} />
        <meshStandardMaterial 
          color="#0F172A" 
          roughness={0.6} 
          metalness={0.4} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Concrete Pipe Rib Rings */}
      {[-10, -6, -2, 2, 6, 10].map((zPos, idx) => (
        <mesh key={`rib-${idx}`} position={[0, 0.5, zPos]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.48, 0.08, 16, 32]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} metalness={0.3} />
        </mesh>
      ))}

      {/* Wet Pipe Floor Surface (Wet puddles with high reflections) */}
      <mesh position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.2, 30]} />
        <meshStandardMaterial 
          color="#030712" 
          roughness={0.1} 
          metalness={0.85} 
        />
      </mesh>

      {/* Water Puddle Reflector Plates */}
      {[-3, 1, 5].map((zPuddle, pIdx) => (
        <mesh key={`puddle-${pIdx}`} position={[(pIdx % 2 === 0 ? 0.3 : -0.3), -0.39, zPuddle]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.8 + pIdx * 0.2, 32]} />
          <meshStandardMaterial 
            color="#002244" 
            roughness={0.02} 
            metalness={0.95} 
          />
        </mesh>
      ))}

      {/* Volumetric Glowing Light at end of tunnel */}
      <group position={[0, 0.5, 14]}>
        <mesh>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial color="#00D2FF" opacity={0.6} transparent />
        </mesh>
        <pointLight intensity={5} color="#00F0FF" distance={20} />
      </group>

      {/* Floating Dust / Moisture Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          color="#00F0FF" 
          transparent 
          opacity={0.6} 
          blending={THREE.AdditiveBlending} 
        />
      </points>

      {/* Fiber Optic Cables running along pipe ceiling / wall */}
      <mesh position={[1.8, 1.4, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 30, 16]} />
        <meshStandardMaterial color="#0077FF" roughness={0.3} />
      </mesh>
      <mesh position={[1.75, 1.2, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 30, 16]} />
        <meshStandardMaterial color="#EAB308" roughness={0.3} />
      </mesh>
    </group>
  );
}
