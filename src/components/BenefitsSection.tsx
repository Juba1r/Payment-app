"use client";
import React from "react";
import { motion } from "framer-motion";
import { InteractiveGlassCard } from "./InteractiveGlassCard";
import { Star, Quote, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Since onboarding Payside, our average order value expanded by 34%. The split-payment option removed the biggest barrier at checkout.",
    author: "Sarah M.",
    role: "Head of eCommerce, FashionHub",
    color: "var(--lime)",
  },
  {
    quote:
      "We went live in under 2 hours. Zero friction integration and our conversion rate jumped 22% within the first month.",
    author: "James T.",
    role: "CTO, Apparel Direct",
    color: "#60a5fa",
  },
  {
    quote:
      "28% reduction in cart abandonment since launch. Payside is now a core pillar of our growth strategy going forward.",
    author: "Nomsa K.",
    role: "Ops Director, Homestyle",
    color: "#FF4B4B",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      style={{
        background: "var(--black)",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "flex-end",
            }}
          >
            <div>
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
                Why Businesses Love Payside
              </span>
              <h2
                className="display display-lg"
                style={{
                  textTransform: "uppercase",
                  color: "#fff",
                  fontWeight: 900,
                }}
              >
                Proven <span style={{ color: "var(--lime)" }}>Growth.</span>
              </h2>
            </div>
            <p
              className="body-lg"
              style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
            >
              Join thousands of businesses already experiencing higher
              conversion rates and expanded customer reach with the Payside
              network.
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ height: "100%" }}
            >
              <InteractiveGlassCard
                className="glass-panel"
                glowColor={`${t.color}18`}
                style={{
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  border: "1px solid rgba(255,255,255,0.05)",
                  height: "100%",
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transform: "translateZ(30px)",
                  }}
                >
                  <div style={{ display: "flex", gap: 3 }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} fill={t.color} color={t.color} />
                    ))}
                  </div>
                  <Quote size={20} color="rgba(255,255,255,0.08)" />
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.75)",
                    fontStyle: "italic",
                    flex: 1,
                    transform: "translateZ(20px)",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: 20,
                    transform: "translateZ(20px)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 13,
                      color: "#fff",
                      letterSpacing: "0.04em",
                      marginBottom: 4,
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </InteractiveGlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: 80,
            display: "flex",
            gap: 16,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <button
            className="btn-lime"
            data-text="Join the Network"
            style={{ padding: "16px 36px", fontSize: 14 }}
            onClick={() =>
              document
                .querySelector("#cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Join the Network</span>
          </button>
          <button
            className="btn-outline-white"
            style={{
              padding: "16px 32px",
              fontSize: 14,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              Request a Demo <ArrowRight size={14} />
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #benefits .container > div:first-child > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          #benefits .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
