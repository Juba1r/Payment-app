"use client";
import React from "react";
import { motion } from "framer-motion";
import { ThreeDFeatureCard } from "./ThreeDFeatureCard";
import { ScrollTypewriter } from "./ScrollTypewriter";

const SHOWCASE_ITEMS = [
  {
    title: "Quantum",
    tag: "Core Engine",
    description:
      "Our proprietary high-frequency payment engine processes millions of requests with sub-millisecond latency across every channel.",
    color: "#bfff00",
    imageSrc: "/images/core-engine.png",
  },
  {
    title: "Neural",
    tag: "AI Risk Engine",
    description:
      "Adaptive fraud detection powered by real-time neural networks. Every transaction is scored and verified before it lands.",
    color: "#fff",
    imageSrc: "/images/ai-risk.png",
  },
  {
    title: "Aura",
    tag: "Security Layer",
    description:
      "Post-quantum encryption shielding every transaction with military-grade digital signature verification end-to-end.",
    color: "#bfff00",
    imageSrc: "/images/security-layer.png",
  },
];

export const ShowcaseSection: React.FC = () => {
  return (
    <section
      id="stack"
      style={{
        padding: "120px 0",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header — left-aligned like PJN sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "flex-end",
            marginBottom: 80,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--lime)",
                  boxShadow: "0 0 12px var(--lime)",
                }}
                className="animate-pulse-dot"
              />
              <span
                style={{
                  color: "var(--lime)",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Technology Stack
              </span>
            </motion.div>

            <h2
              className="display display-lg"
              style={{
                textTransform: "uppercase",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              Digital <span style={{ color: "var(--lime)" }}>Sovereignty</span>
            </h2>
          </motion.div>

          <ScrollTypewriter
            className="body-lg"
            text="Three layers of cutting-edge technology work together beneath every transaction — so you can focus on growing your business."
            style={{ color: "#fff", lineHeight: 1.8 }}
          />
        </div>

        {/* Keep the existing 3D feature cards */}
        <div
          className="perspective-world"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 32,
          }}
        >
          {SHOWCASE_ITEMS.map((item) => (
            <ThreeDFeatureCard
              key={item.title}
              title={item.title}
              tag={item.tag}
              description={item.description}
              color={item.color}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #stack .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};
