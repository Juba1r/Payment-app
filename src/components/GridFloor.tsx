"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const GridFloor = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Slow movement to make it feel like "traveling"
    meshRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2;
  });

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[100, 50, "#bfff00", "#222"]} />
      <mesh ref={meshRef}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#000" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};
