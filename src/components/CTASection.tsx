"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";

const CHECKLIST = [
  "Get paid upfront, instantly",
  "Zero integration costs",
  "Access to 2.6M+ active shoppers",
  "Built-in marketing exposure",
  "Risk-free — no chargebacks",
  "Dedicated merchant support",
];

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [biz, setBiz] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (email.trim() && biz.trim()) {
      setSent(true);
      setEmail("");
      setBiz("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section
      id="cta"
      style={{
        background: "var(--black)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,75,75,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left — headline + checklist */}
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
                marginBottom: 24,
              }}
            >
              Join the Payside Network
            </span>
            <h2
              className="display display-lg"
              style={{
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: 40,
                lineHeight: 0.9,
              }}
            >
              Start Getting <span style={{ color: "var(--lime)" }}>Paid</span>
              <br />
              Today.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {CHECKLIST.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color="var(--lime)"
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveGlassCard
              glowColor="rgba(255, 75, 75, 0.15)"
              className="glass-panel"
              style={{
                padding: "48px 40px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="glass-glow-edge" />

              <h3
                className="display"
                style={{
                  fontSize: "1.6rem",
                  color: "#fff",
                  fontWeight: 900,
                  marginBottom: 8,
                  transform: "translateZ(30px)",
                }}
              >
                Apply Now
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 32,
                  lineHeight: 1.6,
                  transform: "translateZ(20px)",
                }}
              >
                Submit your details and our team will get in touch within 1
                business day.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transform: "translateZ(30px)",
                }}
              >
                <input
                  type="text"
                  placeholder="Business name"
                  value={biz}
                  onChange={(e) => setBiz(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    outline: "none",
                    fontSize: 15,
                    color: "#fff",
                    background: "rgba(255,255,255,0.03)",
                    fontFamily: "inherit",
                    transition: "border-color 0.3s",
                  }}
                />
                <input
                  type="email"
                  placeholder="Business email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    outline: "none",
                    fontSize: 15,
                    color: "#fff",
                    background: "rgba(255,255,255,0.03)",
                    fontFamily: "inherit",
                    transition: "border-color 0.3s",
                  }}
                />

                <motion.button
                  onClick={handleSend}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(255,75,75,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    borderRadius: 14,
                    background: sent ? "#22c55e" : "var(--lime)",
                    color: "#000",
                    fontWeight: 900,
                    fontSize: 15,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    letterSpacing: "0.06em",
                    transition: "background 0.3s",
                    textTransform: "uppercase",
                  }}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} />
                      Request Received!
                    </>
                  ) : (
                    <>
                      Send Request <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>

                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  By submitting, you agree to our demo Terms & Conditions.
                </p>
              </div>
            </InteractiveGlassCard>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #cta .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        input:focus {
          border-color: rgba(255,75,75,0.4) !important;
        }
      `}</style>
    </section>
  );
}
