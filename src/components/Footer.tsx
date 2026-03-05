"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Facebook,
  Instagram,
  Music,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";

const COLS = [
  {
    head: "CORE SYSTEM",
    links: [
      "NEURAL NETWORK",
      "QUANTUM FAQS",
      "PRESS ARCHIVE",
      "ENCRYPTED HELP",
    ],
  },
  {
    head: "PROTOCOLS",
    links: [
      "BNPL 2.0",
      "SPATIAL CREDIT",
      "NEURAL MARKETING",
      "REQUEST UPLINK",
      "NODE SUPPORT",
    ],
  },
  {
    head: "INFRASTRUCTURE",
    links: [
      "CORE PORTAL",
      "PAYUP INTERFACE",
      "STATUS MODULE",
      "PROTOCOL MANUAL",
      "DATA SAFETY",
    ],
  },
];

const SOCIAL = [
  { Icon: Linkedin, label: "LKD" },
  { Icon: Music, label: "TKT" },
  { Icon: Facebook, label: "FBK" },
  { Icon: Instagram, label: "IGM" },
];

export default function Footer() {
  return (
    <footer
      className="perspective-world"
      style={{
        background: "#000",
        paddingTop: 120,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="particle-grid" style={{ opacity: 0.2 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Link grid + Contact block ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 24,
            marginBottom: 24,
          }}
        >
          {/* Left: Glass Panel for Links */}
          <InteractiveGlassCard
            glowColor="rgba(255, 75, 75, 0.1)"
            className="glass-panel"
            style={{
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {COLS.map((col) => (
              <div
                key={col.head}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--lime)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {col.head}
                </span>
                {col.links.map((l) => (
                  <motion.a
                    key={l}
                    href="#"
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                    }}
                    whileHover={{ x: 5, color: "#fff" }}
                  >
                    {l}
                  </motion.a>
                ))}
              </div>
            ))}
          </InteractiveGlassCard>

          {/* Right: Contact & Scale */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <InteractiveGlassCard
              glowColor="rgba(255, 75, 75, 0.2)"
              className="glass-panel"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Cpu size={24} color="var(--lime)" style={{ marginBottom: 4 }} />
              <motion.button
                className="btn-lime"
                whileHover={{ scale: 1.05 }}
                style={{ width: "100%", padding: "12px", fontSize: 13 }}
              >
                <span>OPEN UPLINK</span>
              </motion.button>
              <div style={{ textAlign: "center" }}>
                <a
                  href="mailto:ops@zaika.network"
                  style={{ fontSize: 11, color: "#60a5fa", fontWeight: 700 }}
                >
                  OPS@ZAIKA.NETWORK
                </a>
              </div>
            </InteractiveGlassCard>

            <InteractiveGlassCard
              className="glass-panel"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}
              >
                A NODE OF
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#fff",
                }}
              >
                WEAVER <span style={{ color: "#FF4B4B" }}>FINTECH</span>
              </span>
            </InteractiveGlassCard>
          </div>
        </div>

        {/* ── Brand & Social ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 24,
            marginBottom: 64,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 6rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.8,
                color: "#fff",
              }}
            >
              ZAIKA<span style={{ color: "var(--lime)" }}>.</span>
            </span>
            <div style={{ paddingBottom: 10 }}>
              <ShieldCheck size={24} color="rgba(255,255,255,0.2)" />
            </div>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {SOCIAL.map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{
                  scale: 1.05,
                  background: "rgba(255,255,255,0.08)",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                <Icon size={14} /> {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: "32px 0",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          <p>
            © ZAIKA NODE {new Date().getFullYear()}. ALL PROTOCOLS RESERVED.
          </p>
          <div style={{ display: "flex", gap: 32 }}>
            {["SYSTEM TERMS", "PRIVACY DATA", "ENCRYPTION POLICY"].map((t) => (
              <a
                key={t}
                href="#"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
          footer .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
