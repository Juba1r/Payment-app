"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractiveGlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  style?: React.CSSProperties;
}

export const InteractiveGlassCard: React.FC<InteractiveGlassCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(255, 75, 75, 0.4)",
  style = {},
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 25,
  });

  // Brightness/Glow follow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lightOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    // Light position (0 to 100%)
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseEnter = () => lightOpacity.set(1);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    lightOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel ${className}`}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background Primary Glow Layer */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          opacity: useTransform(lightOpacity, [0, 1], [0, 0.6]),
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) =>
              `radial-gradient(circle at ${mx}% ${my}%, ${glowColor} 0%, transparent 70%)`,
          ),
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* High-End Reflective Shimmer / Highlight */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          opacity: useTransform(lightOpacity, [0, 1], [0, 0.3]),
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) =>
              `radial-gradient(circle at ${mx}% ${my}%, rgba(255,255,255,0.4) 0%, transparent 40%)`,
          ),
          pointerEvents: "none",
          zIndex: 2,
          filter: "blur(20px)",
        }}
      />

      {/* Gloss Edge Highlight */}
      <div className="glass-glow-edge" />

      {/* Internal Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          transformStyle: "preserve-3d",
          height: "100%",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
