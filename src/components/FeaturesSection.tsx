"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Layers } from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";

const PROTOCOLS = [
  {
    tag: "RETAIL CREDIT",
    title: "Pay in 12",
    desc: "Deploy advanced retail credit for your customers. Split high-value purchases into 12 interest-free monthly instalments — empowering shoppers to buy more without financial stress.",
    badge: "Up to R60,000",
    Icon: Layers,
    color: "var(--lime)",
  },
  {
    tag: "BUY NOW PAY LATER",
    title: "Pay in 3",
    desc: "Execute high-velocity BNPL at checkout. Split purchases into 3 equal zero-interest payments, eliminating cart abandonment and maximising conversion at the checkout horizon.",
    badge: "Zero Interest",
    Icon: CreditCard,
    color: "#FF4B4B",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="solutions"
      style={{
        background: "var(--black)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Divider top */}
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
        {/* Section header */}
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
            transition={{ duration: 0.8 }}
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
              More Ways to Get Paid
            </span>
            <h2
              className="display display-lg"
              style={{ color: "#fff", textTransform: "uppercase" }}
            >
              Strategic <span style={{ color: "var(--lime)" }}>Flow</span>
              <br />
              Systems
            </h2>
          </motion.div>

          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
          >
            Accelerate your transaction velocity. Our payment nodes allow for
            instantaneous upfront settlements while providing flexible payment
            options for your customers.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <InteractiveGlassCard
                className="glass-panel"
                glowColor={`${p.color}18`}
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 28,
                    padding: "48px 40px",
                    height: "100%",
                  }}
                >
                  <div className="glass-glow-edge" />

                  {/* Icon */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateZ(40px)",
                    }}
                  >
                    <p.Icon size={26} color={p.color} />
                  </div>

                  {/* Tag */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: p.color,
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      {p.tag}
                    </span>
                    <h3
                      className="display"
                      style={{
                        fontSize: "clamp(2.2rem, 4vw, 3rem)",
                        color: "#fff",
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.5)",
                      flex: 1,
                      transform: "translateZ(20px)",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Badge + CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transform: "translateZ(20px)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 16px",
                        borderRadius: 9999,
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}25`,
                        fontSize: 12,
                        fontWeight: 800,
                        color: p.color,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {p.badge}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: "pointer",
                        letterSpacing: "0.05em",
                      }}
                    >
                      LEARN MORE <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </div>
              </InteractiveGlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #solutions .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #solutions .container > div:last-child  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
