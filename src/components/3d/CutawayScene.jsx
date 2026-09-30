import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function CutawayScene() {
  const rootGroupRef = useRef();

  useFrame((state, delta) => {
    if (rootGroupRef.current) {
      rootGroupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -0.5, 0]}>
      {/* Ambient & Spotlight */}
      <ambientLight intensity={0.5} color="#0F172A" />
      <directionalLight position={[4, 8, 4]} intensity={1.2} color="#00A2FF" />

      {/* Street Pavement Layer (Asphalt Top) */}
      <mesh position={[0, 1.8, 0]} receiveShadow castShadow>
        <boxGeometry args={[4.5, 0.3, 4.5]} />
        <meshStandardMaterial color="#1E293B" roughness={0.8} />
      </mesh>

      {/* Manhole Ring Frame ("Tapa de Tanquilla") */}
      <mesh position={[0, 1.96, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.95, 0.08, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Manhole Cover tilted open */}
      <mesh position={[0.7, 2.15, -0.3]} rotation={[0.4, 0.2, -0.6]}>
        <cylinderGeometry args={[0.85, 0.85, 0.06, 32]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.4} />
      </mesh>

      {/* Subsoil Dirt Cutaway Block */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[4.2, 2.8, 4.2]} />
        <meshStandardMaterial color="#0F172A" roughness={0.9} transparent opacity={0.85} />
      </mesh>

      {/* Underground PVC Pipe (4-inch Standard Pipe COVENIN 3830) */}
      <group position={[0, -0.2, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.65, 0.65, 4.4, 32, 1, true]} />
          <meshStandardMaterial color="#0284C7" roughness={0.3} metalness={0.5} transparent opacity={0.7} />
        </mesh>

        {/* Cable Bundles Inside Pipe */}
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 4.4, 16]} />
          <meshStandardMaterial color="#0077FF" roughness={0.4} />
        </mesh>
        <mesh position={[0.1, -0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 4.4, 16]} />
          <meshStandardMaterial color="#EAB308" roughness={0.4} />
        </mesh>

        {/* Tree Roots Intrusion Obstructing Pipe */}
        <group position={[-0.4, 0.1, 0]}>
          {[-0.3, 0, 0.3].map((rX, rIdx) => (
            <mesh key={`root-${rIdx}`} position={[rX, -rIdx * 0.1, 0.1]} rotation={[0.3 * rIdx, 0, 0.5]}>
              <cylinderGeometry args={[0.05, 0.02, 1.2, 12]} />
              <meshStandardMaterial color="#78350F" roughness={0.9} />
            </mesh>
          ))}
        </group>

        {/* Debris / Stones inside pipe blockage */}
        {[-0.2, 0.1, 0.3].map((dPos, dIdx) => (
          <mesh key={`debris-${dIdx}`} position={[dPos, -0.3, dIdx * 0.15]}>
            <dodecahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial color="#475569" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Glowing Tech HUD Scanning Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.4, 4.0, 4.4]} />
        <meshStandardMaterial color="#00F0FF" wireframe opacity={0.2} transparent />
      </mesh>

    </group>
  );
}
