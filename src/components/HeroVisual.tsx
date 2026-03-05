"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export const FuturisticOrb = ({ isHovered = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;

    // Pulse scale based on hover
    const targetScale = isHovered ? 1.4 : 1.2;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1,
    );
  });

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          color="#FF4B4B"
          metalness={0.8}
          roughness={0.1}
        />
      </Sphere>

      {/* Outer energy ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#FF4B4B"
          emissive="#FF4B4B"
          emissiveIntensity={5}
        />
      </mesh>
    </Float>
  );
};
