"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InteractiveGlassCard } from "./InteractiveGlassCard";

interface FeatureCardProps {
  title: string;
  description: string;
  tag: string;
  color?: string;
  imageSrc: string;
}

export const ThreeDFeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  tag,
  color = "#bfff00",
  imageSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
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
          {/* Top Area: Image Thumbnail */}
          <div
            style={{
              height: "160px",
              width: "100%",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{
                objectFit: "cover",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            />
            {/* Dark gradient overlay to blend into the card naturally */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(20,20,25,0.8) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Middle Area: Info */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transform: "translateZ(30px)",
              marginTop: 10,
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
                  boxShadow: `0 0 10px ${color}`,
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
