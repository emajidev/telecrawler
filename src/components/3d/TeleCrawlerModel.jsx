import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function TeleCrawlerModel({ explodedProgress = 0, autoRotate = false, hoverComponent = null, onSelectComponent = null }) {
  const groupRef = useRef();

  // Transparent, compact emblem decal so the paint remains visible around it.
  const logoTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.translate(128, 128);
    ctx.rotate(-0.28);
    ctx.strokeStyle = '#EAF5FF';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.ellipse(0, 0, 84, 34, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.moveTo(0, -92);
    ctx.lineTo(12, -8);
    ctx.lineTo(67, 0);
    ctx.lineTo(12, 9);
    ctx.lineTo(0, 66);
    ctx.lineTo(-12, 9);
    ctx.lineTo(-67, 0);
    ctx.lineTo(-12, -8);
    ctx.closePath();
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Frame animation for smooth idle floating / tread rotation if active
  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Calculate layer offset based on explodedProgress (0 to 1)
  const expFactor = explodedProgress * 1.8;

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.1, 1.1, 1.1]}>
      <hemisphereLight args={['#DCEBFF', '#26364D', 1.15]} />
      <directionalLight position={[4, 7, 5]} intensity={2.4} color="#FFFFFF" />
      <directionalLight position={[-4, 3, -4]} intensity={1.25} color="#4D9DFF" />
      <pointLight position={[0, 2.5, 2.8]} intensity={18} distance={8} color="#D8EEFF" />

      {/* LAYER 1: Top Protective CyberNova Plate Shield */}
      <group position={[0, 0.45 + expFactor * 1.4, 0]}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.1, 1.8]} />
          <meshStandardMaterial color="#0875F5" roughness={0.28} metalness={0.48} />
        </mesh>
        {/* Top Decal Plate */}
        <mesh position={[0, 0.051, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.4, 1.7]} />
          <meshStandardMaterial map={logoTexture} transparent roughness={0.42} metalness={0.18} depthWrite={false} />
        </mesh>
        {/* Corner Accents */}
        {[-0.7, 0.7].map((x, i) => (
          [-0.8, 0.8].map((z, j) => (
            <mesh key={`bolt-top-${i}-${j}`} position={[x, 0.06, z]}>
              <cylinderGeometry args={[0.04, 0.04, 0.02, 6]} />
              <meshStandardMaterial color="#00F0FF" roughness={0.3} metalness={0.9} />
            </mesh>
          ))
        ))}
      </group>

      {/* LAYER 2 & 3 & 4: Front Camera Module + LED Array + ESP32-CAM */}
      <group position={[0, 0.35 + expFactor * 1.0, 0.85]}>
        {/* Main Camera Faceplate */}
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.45, 0.2]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Center Optical Lens Housing */}
        <mesh position={[0, 0, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.25, 0.12, 32]} />
          <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.95} />
        </mesh>
        {/* Glass Lens Lens Reflection */}
        <mesh position={[0, 0, 0.18]} scale={[1, 1, 0.48]}>
          <sphereGeometry args={[0.16, 32, 24]} />
          <meshPhysicalMaterial color="#071827" roughness={0.12} metalness={0.55} clearcoat={1} clearcoatRoughness={0.08} />
        </mesh>
        <mesh position={[0, 0, 0.205]} scale={[1, 1, 0.22]}>
          <sphereGeometry args={[0.09, 24, 16]} />
          <meshPhysicalMaterial color="#1B7FC5" roughness={0.08} metalness={0.25} clearcoat={1} />
        </mesh>

        {/* 4 LED Headlights (2 on left, 2 on right) */}
        {[-0.42, 0.42].map((xSide, idx) => (
          <group key={`led-group-${idx}`} position={[xSide, 0, 0.1]}>
            {[-0.15, 0, 0.15].map((yOff, yIdx) => (
              <group key={`led-${idx}-${yIdx}`} position={[0, yOff, 0]}>
                {/* LED Housing Bezel */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.08, 0.09, 0.05, 16]} />
                  <meshStandardMaterial color="#334155" metalness={0.9} />
                </mesh>
                {/* High Lumen LED Emitter */}
                <mesh position={[0, 0, 0.03]}>
                  <circleGeometry args={[0.07, 16]} />
                  <meshBasicMaterial color="#E0F2FE" />
                </mesh>
                {/* Spot light source casting light into pipe */}
                <spotLight
                  position={[0, 0, 0.1]}
                  target-position={[0, 0, 5]}
                  color="#E0F2FE"
                  intensity={3.5}
                  angle={0.5}
                  penumbra={0.4}
                  distance={12}
                />
              </group>
            ))}
          </group>
        ))}

        {/* ESP32-CAM Microcontroller PCB inside */}
        <mesh position={[0, 0, -0.2 + expFactor * -0.2]}>
          <boxGeometry args={[0.7, 0.4, 0.08]} />
          <meshStandardMaterial color="#047857" roughness={0.3} metalness={0.5} />
        </mesh>
      </group>

      {/* LAYER 5 & 6: Main PCB Electronics, DC Motor Drivers & Internal Chassis Core */}
      <group position={[0, 0.25 + expFactor * 0.5, 0]}>
        {/* Main Body Hull */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.35, 0.45, 1.6]} />
          <meshStandardMaterial color="#0F172A" roughness={0.5} metalness={0.8} />
        </mesh>

        {/* Electronics PCB Circuit Board */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.0, 0.05, 1.2]} />
          <meshStandardMaterial color="#065F46" roughness={0.3} />
        </mesh>

        {/* Dual High Torque DC Motors (Left & Right) */}
        {[-0.45, 0.45].map((xPos, i) => (
          <group key={`motor-${i}`} position={[xPos, -0.05, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
              <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        ))}

        {/* Rear Dual Wi-Fi Antennas */}
        {[-0.35, 0.35].map((xAnt, i) => (
          <group key={`antenna-${i}`} position={[xAnt, 0.4, -0.65]}>
            <mesh>
              <cylinderGeometry args={[0.03, 0.04, 0.45, 16]} />
              <meshStandardMaterial color="#1E293B" metalness={0.8} />
            </mesh>
            <mesh position={[0, 0.23, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial color="#00D2FF" emissive="#00D2FF" emissiveIntensity={0.5} />
            </mesh>
          </group>
        ))}

        {/* Umbilical Cable Connector Port on Back */}
        <group position={[0, 0.05, -0.82]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.14, 0.1, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.78} />
          </mesh>
          {/* Tether Cable Extending Behind */}
          <mesh position={[0, -0.1, -0.8]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 1.8, 16]} />
            <meshStandardMaterial color="#075DE0" roughness={0.3} metalness={0.38} />
          </mesh>
        </group>
      </group>

      {/* LAYER 7 & 8: Tracked Treads Assembly (Left & Right Orugas) */}
      {[-0.95 - expFactor * 0.6, 0.95 + expFactor * 0.6].map((xTrack, isRight) => (
        <group key={`track-assembly-${isRight}`} position={[xTrack, 0.2, 0]}>
          {/* Main Track Side Enclosure / Frame */}
          <mesh castShadow position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 0.45, 1.85]} />
            <meshStandardMaterial color="#263449" roughness={0.48} metalness={0.52} />
          </mesh>

          {/* Drive Sprocket & Idler Wheels (Front, Center, Rear) */}
          {[-0.65, 0, 0.65].map((zWheel, wIdx) => (
            <group key={`wheel-${wIdx}`} position={[0, 0, zWheel]}>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.24, 0.24, 0.36, 24]} />
                <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.3} />
              </mesh>
              {/* Wheel Rims */}
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.18, 0.18, 0.38, 12]} />
                <meshStandardMaterial color="#53677D" metalness={0.72} roughness={0.32} />
              </mesh>
            </group>
          ))}

          {/* Upper / Lower Small Roller Wheels */}
          {[-0.35, 0.35].map((zRoller, rIdx) => (
            <mesh key={`roller-${rIdx}`} position={[0, -0.12, zRoller]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.35, 16]} />
              <meshStandardMaterial color="#334155" metalness={0.8} />
            </mesh>
          ))}

          {/* Continuous rubber belt shaped around the end wheels */}
          <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
            <extrudeGeometry args={[(() => {
              const shape = new THREE.Shape();
              shape.moveTo(-0.65, 0.27);
              shape.lineTo(0.65, 0.27);
              shape.absarc(0.65, 0, 0.27, Math.PI / 2, -Math.PI / 2, true);
              shape.lineTo(-0.65, -0.27);
              shape.absarc(-0.65, 0, 0.27, -Math.PI / 2, Math.PI / 2, true);
              return shape;
            })(), { depth: 0.3, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.025, bevelThickness: 0.025 }]} />
            <meshStandardMaterial color="#252A32" roughness={0.88} metalness={0.08} />
          </mesh>
          {/* Raised transverse cleats follow the upper and lower belt runs */}
          {Array.from({ length: 12 }).map((_, cIdx) => {
            const z = -0.72 + cIdx * 0.13;
            return [-1, 1].map((side) => (
              <mesh key={`cleat-${cIdx}-${side}`} position={[0, side * 0.285, z]} castShadow>
                <boxGeometry args={[0.34, 0.045, 0.075]} />
                <meshStandardMaterial color="#111820" roughness={0.92} />
              </mesh>
            ));
          })}
          {[-1, 1].map((end) => Array.from({ length: 5 }).map((_, i) => {
            const angle = Math.PI * (i + 1) / 6;
            const z = end * (0.65 + Math.cos(angle) * 0.27);
            const y = Math.sin(angle) * 0.27;
            return (
              <mesh key={`end-cleat-${end}-${i}`} position={[0, y, z]} rotation={[end * angle, 0, 0]} castShadow>
                <boxGeometry args={[0.34, 0.045, 0.075]} />
                <meshStandardMaterial color="#111820" roughness={0.92} />
              </mesh>
            );
          }))}
        </group>
      ))}

      {/* LAYER 9 & 10: Lower Sealed Chassis & Waterproof Skid Base */}
      <group position={[0, -0.05 - expFactor * 0.4, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.3, 0.15, 1.65]} />
          <meshStandardMaterial color="#253244" roughness={0.5} metalness={0.55} />
        </mesh>
        {/* IP68 Waterproof Seal Strip */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[1.32, 0.03, 1.67]} />
          <meshStandardMaterial color="#17283A" roughness={0.65} metalness={0.15} />
        </mesh>
      </group>

    </group>
  );
}
