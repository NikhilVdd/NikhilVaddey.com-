"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function EvolvingSculpture() {
  const group = useRef<any>(null);
  const core = useRef<any>(null);
  const { pointer, viewport } = useThree();
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pieces = useMemo(
    () => [
      { p: [-1.05, 0.42, 0.15], r: [0.2, 0.4, -0.65], s: [1.6, 0.22, 0.22] },
      { p: [0.72, 0.92, -0.2], r: [-0.2, 0.25, 0.7], s: [1.25, 0.19, 0.19] },
      { p: [0.98, -0.54, 0.1], r: [0.4, -0.2, -0.7], s: [1.45, 0.24, 0.24] },
      { p: [-0.38, -1.05, -0.3], r: [0.3, 0.6, 0.22], s: [1.08, 0.16, 0.16] },
      { p: [0.02, 0.08, 0.7], r: [0.2, 0.4, 0.1], s: [0.72, 0.72, 0.72] },
    ],
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = reduced ? 0 : state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.3 + t * 0.055, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.14 + Math.sin(t * 0.35) * 0.06, 3, delta);
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, pointer.x * 0.16, 3, delta);
    if (core.current && !reduced) core.current.rotation.z += delta * 0.12;
  });

  return (
    <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.16} floatIntensity={0.28}>
      <group ref={group} scale={viewport.width < 7 ? 0.78 : 1}>
        {pieces.slice(0, 4).map((piece, index) => (
          <mesh
            key={index}
            position={piece.p as [number, number, number]}
            rotation={piece.r as [number, number, number]}
            scale={piece.s as [number, number, number]}
            castShadow
          >
            <capsuleGeometry args={[0.36, 1.25, 12, 28]} />
            <meshStandardMaterial
              color={index === 2 ? "#8b68e8" : index === 1 ? "#d7ab55" : "#aeb8ba"}
              metalness={0.92}
              roughness={index === 2 ? 0.25 : 0.14}
              envMapIntensity={1.3}
            />
          </mesh>
        ))}
        <mesh ref={core} position={pieces[4].p as [number, number, number]} scale={pieces[4].s as [number, number, number]}>
          <torusKnotGeometry args={[0.72, 0.22, 96, 16, 2, 3]} />
          <MeshTransmissionMaterial
            color="#e4eaeb"
            thickness={0.7}
            roughness={0.15}
            transmission={0.92}
            chromaticAberration={0.035}
            anisotropicBlur={0.08}
          />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[side * 0.58, -0.1, 0.82]}>
            <sphereGeometry args={[0.09, 24, 24]} />
            <meshBasicMaterial color={side === -1 ? "#8b68e8" : "#d7ab55"} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function SculptureScene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.1, 6.3], fov: 39 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[4, 6, 5]} intensity={95} angle={0.35} penumbra={1} color="#f3f7ee" castShadow />
        <pointLight position={[-4, -2, 3]} intensity={18} color="#8b68e8" />
        <pointLight position={[4, -3, -2]} intensity={14} color="#d7ab55" />
        <EvolvingSculpture />
        <Environment preset="city" />
      </Canvas>
      <div className="scene-vignette" />
    </div>
  );
}
