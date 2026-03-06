"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Smartphone, Globe } from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";
import { ScrollTypewriter } from "./ScrollTypewriter";

const RESOURCES = [
  {
    tag: "MERCHANT PORTAL",
    title: "Business Dashboard",
    desc: "View real-time analytics, marketing opportunities, onboarding progress, and transaction history — all in one sleek merchant hub.",
    cta: "ACCESS PORTAL",
    Icon: Cpu,
    color: "var(--lime)",
  },
  {
    tag: "PAYSIDE PAY APP",
    title: "Mobile Terminal",
    desc: "Complete offline payments from anywhere. Full offline synchronisation ensures you never miss a sale — even without connectivity.",
    cta: "GET THE APP",
    Icon: Smartphone,
    color: "#60a5fa",
  },
  {
    tag: "INTEGRATIONS",
    title: "Developer API",
    desc: "Add Payside as a payment method with our pre-built plugins or use our flexible REST API to build a fully custom integration.",
    cta: "VIEW DOCS",
    Icon: Globe,
    color: "#a78bfa",
  },
];

export default function MetricsSection() {
  return (
    <section
      id="resources"
      style={{
        background: "transparent",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
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
            <span
              style={{
                color: "var(--lime)",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 20,
              }}
            >
              Get Started With Resources
            </span>
            <h2
              className="display display-lg"
              style={{ color: "#fff", textTransform: "uppercase" }}
            >
              Built For <span style={{ color: "var(--lime)" }}>Merchants</span>
            </h2>
          </motion.div>

          <ScrollTypewriter
            className="body-lg"
            text="A cohesive suite of tools designed to help you onboard fast, manage payments effortlessly, and grow your business across every channel."
            style={{ color: "#fff", lineHeight: 1.8 }}
          />
        </div>

        {/* Resource cards */}
        <div
          className="perspective-world"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ height: "100%" }}
            >
              <InteractiveGlassCard
                glowColor={`${r.color}18`}
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  height: "100%",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    padding: "40px 32px",
                    height: "100%",
                  }}
                >
                  <div className="glass-glow-edge" />

                  {/* Icon */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: `${r.color}12`,
                      border: `1px solid ${r.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateZ(40px)",
                    }}
                  >
                    <r.Icon size={24} color={r.color} />
                  </div>

                  {/* Tag + Title */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: "0.22em",
                        color: r.color,
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {r.tag}
                    </span>
                    <h3
                      className="display"
                      style={{
                        fontSize: "1.5rem",
                        color: "#fff",
                        fontWeight: 900,
                      }}
                    >
                      {r.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <ScrollTypewriter
                    text={r.desc}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "#fff",
                      flex: 1,
                    }}
                  />

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "none",
                      border: "none",
                      color: r.color,
                      fontSize: 12,
                      fontWeight: 900,
                      cursor: "pointer",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: 0,
                    }}
                  >
                    {r.cta} <ArrowRight size={14} />
                  </motion.button>
                </div>
              </InteractiveGlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #resources .container > div:last-child { grid-template-columns: 1fr !important; }
          #resources .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
