"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, CreditCard, LayoutDashboard, MapPin } from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";

const STATS = [
  {
    label: "Google Trust Rating",
    Icon: Star,
    bigNum: "4.7/5",
    body: "Industry-leading interest-free payment solutions trusted by thousands of shoppers. Backed by over 5,378 verified reviews.",
    color: "#FF4B4B",
  },
  {
    label: "Transaction Every 9 Seconds",
    Icon: CreditCard,
    bigNum: "9s",
    body: "Our platform processes a new payment transaction every 9 seconds. Your business taps into this constant stream of high-intent buyers.",
    color: "var(--lime)",
  },
  {
    label: "Daily Transactions",
    Icon: LayoutDashboard,
    bigNum: "11K+",
    body: "Over 11,270 daily transactions flow through our network. As our community grows, so does your reach and revenue potential.",
    color: "#60a5fa",
  },
  {
    label: "Points of Presence",
    Icon: MapPin,
    bigNum: "10K+",
    body: "Over 10,000 active points of presence across the ecosystem. Customers can discover and shop from your store wherever they are.",
    color: "#a78bfa",
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section
      id="how-it-works"
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "flex-end",
            marginBottom: 80,
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
              Platform Scale
            </span>
            <h2
              className="display display-lg"
              style={{ color: "#fff", textTransform: "uppercase" }}
            >
              Our Numbers <span style={{ color: "var(--lime)" }}>Speak</span>
            </h2>
          </div>
          <p
            className="body-lg"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
          >
            Payside connects your business to a growing community of shoppers
            with spend-facility available. The broader our network, the bigger
            the opportunity for you.
          </p>
        </motion.div>

        {/* Accordion stat cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            paddingBottom: "10vh",
          }}
        >
          {STATS.map((s, i) => {
            const isOpen = activeIdx === i;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px", once: false }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{
                  position: "sticky",
                  top: `calc(15vh + ${i * 25}px)`,
                  zIndex: i + 2,
                }}
              >
                <InteractiveGlassCard
                  glowColor={`${s.color}22`}
                  className="glass-panel"
                  style={{
                    cursor: "pointer",
                    padding: 0,
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: isOpen
                      ? "rgba(20, 20, 22, 0.95)"
                      : "rgba(10, 10, 12, 0.8)",
                    backdropFilter: "blur(20px)",
                    transition: "all 0.4s",
                    boxShadow: "0 -10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <div
                    onClick={() => setActiveIdx(isOpen ? null : i)}
                    className="accordion-inner"
                    style={{ padding: "0 40px" }}
                  >
                    {/* Always-visible row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "32px 0",
                        transform: "translateZ(20px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 20,
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 14,
                            background: isOpen
                              ? s.color
                              : "rgba(255,255,255,0.04)",
                            border: isOpen
                              ? `1px solid ${s.color}`
                              : "1px solid rgba(255,255,255,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.4s",
                            flexShrink: 0,
                            boxShadow: isOpen
                              ? `0 0 20px ${s.color}55`
                              : "none",
                          }}
                        >
                          <s.Icon size={20} color={isOpen ? "#000" : "#fff"} />
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            color: isOpen ? "#fff" : "rgba(255,255,255,0.6)",
                            transition: "color 0.3s",
                          }}
                        >
                          {s.label}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? s.color : "rgba(255,255,255,0.4)",
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      >
                        +
                      </motion.div>
                    </div>

                    {/* Expandable body */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.19, 1, 0.22, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            className="accordion-body-grid"
                            style={{
                              paddingBottom: 40,
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              gap: 24,
                              alignItems: "flex-end",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "1.05rem",
                                lineHeight: 1.75,
                                color: "rgba(255,255,255,0.55)",
                                maxWidth: 520,
                                transform: "translateZ(20px)",
                              }}
                            >
                              {s.body}
                            </p>
                            <div
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(4rem, 9vw, 7rem)",
                                fontWeight: 900,
                                lineHeight: 0.85,
                                textTransform: "uppercase",
                                color: s.color,
                                textAlign: "right",
                                whiteSpace: "nowrap",
                                textShadow: `0 0 40px ${s.color}44`,
                              }}
                            >
                              {s.bigNum}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </InteractiveGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #how-it-works .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 650px) {
          .accordion-body-grid {
            grid-template-columns: 1fr !important;
            text-align: left !important;
            align-items: flex-start !important;
          }
          .accordion-body-grid > div {
            text-align: left !important;
            margin-top: 10px;
          }
          .accordion-body-grid > p {
            font-size: 0.95rem !important;
          }
        }
        @media (max-width: 768px) {
          .accordion-inner {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
