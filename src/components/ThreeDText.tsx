"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Text3D,
  Center,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface ThreeDTextProps {
  text: string;
  color?: string;
  isHovered?: boolean;
  position?: [number, number, number];
  scale?: number;
  opacity?: number | MotionValue<number>;
}

export const ThreeDSceneText: React.FC<ThreeDTextProps> = ({
  text,
  color = "#FF4B4B",
  isHovered = false,
  position = [0, 0, 0],
  scale = 1,
  opacity = 1,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);

  // Font URL - using a common hosted Inter typeface JSON
  const fontUrl =
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json";

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth hover transition for scale and position
    const targetScale = isHovered ? 1.2 : 1.0;
    const targetZ = isHovered ? 0.5 : 0;

    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1,
    );
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      targetZ,
      0.1,
    );

    // Update opacity if it's a MotionValue
    if (materialRef.current) {
      if (typeof opacity !== "number" && opacity && "get" in opacity) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        materialRef.current.opacity = (opacity as any).get();
      } else if (typeof opacity === "number") {
        materialRef.current.opacity = opacity;
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
      scale={scale}
    >
      <Center top>
        <Text3D
          ref={meshRef}
          font={fontUrl}
          size={0.6}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <MeshTransmissionMaterial
            ref={materialRef}
            backside
            samples={4}
            thickness={0.2}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color={color}
            transparent
          />
        </Text3D>
      </Center>
    </Float>
  );
};
