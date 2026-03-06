"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { InteractiveGlassCard } from "./InteractiveGlassCard";
import { ThreeDSceneText } from "./ThreeDText";
import { Environment, ContactShadows } from "@react-three/drei";

interface ThreeDFeatureCardProps {
  title: string;
  description: string;
  tag: string;
  color?: string;
}

export const ThreeDFeatureCard: React.FC<ThreeDFeatureCardProps> = ({
  title,
  description,
  tag,
  color = "#FF4B4B",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Suppress specific harmless Three.js library deprecations for cleaner logs
  React.useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const msg = typeof args[0] === "string" ? args[0] : "";
      if (msg.includes("THREE.Clock") || msg.includes("PCFSoftShadowMap"))
        return;
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <InteractiveGlassCard
        className="glass-panel"
        glowColor={`${color}33`}
        style={{ height: "420px", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            padding: "32px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Top Area: 3D Text Title */}
          <div style={{ height: "160px", width: "100%", position: "relative" }}>
            <Canvas
              shadows={{ type: THREE.PCFShadowMap }}
              camera={{ position: [0, 0, 4], fov: 35 }}
              dpr={[1, 1.5]}
              gl={{ powerPreference: "high-performance", antialias: false }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color={color} />
              <spotLight
                position={[-10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />

              <ThreeDSceneText
                text={title}
                color={color}
                isHovered={isHovered}
              />

              <Environment preset="city" />
              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.4}
                scale={10}
                blur={2.5}
                far={4}
              />
            </Canvas>
          </div>

          {/* Middle Area: Info */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transform: "translateZ(30px)",
            }}
          >
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: color,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.1em",
                }}
              >
                {tag}
              </span>
            </div>

            <p
              className="body-md"
              style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
            >
              {description}
            </p>
          </div>

          {/* Bottom Area: CTA */}
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <button
              className="btn-outline-white"
              style={{
                width: "fit-content",
                padding: "10px 20px",
                fontSize: 13,
              }}
            >
              <span>Explore Technology →</span>
            </button>
          </motion.div>
        </div>
      </InteractiveGlassCard>
    </motion.div>
  );
};
