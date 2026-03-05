"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  BrainCircuit,
  Globe,
  Zap,
  BarChart2,
} from "lucide-react";

const PARTNERS = [
  { text: "Shopify", icon: ShoppingCart, color: "#FF4B4B" },
  { text: "WooCommerce", icon: Globe, color: "var(--lime)" },
  { text: "Magento", icon: BrainCircuit, color: "#60a5fa" },
  { text: "Salesforce", icon: BarChart2, color: "var(--lime)" },
  { text: "PrestaShop", icon: Zap, color: "#a78bfa" },
  { text: "Shopstar", icon: TrendingUp, color: "#FF4B4B" },
  { text: "iOS SDK", icon: Rocket, color: "#60a5fa" },
  { text: "Android SDK", icon: ShieldCheck, color: "var(--lime)" },
];

const ITEMS_TRIPLE = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function LogoMarquee() {
  return (
    <section
      style={{
        background: "var(--black)",
        padding: "80px 0",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container" style={{ marginBottom: 40 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Compatible with leading platforms &amp; frameworks
        </p>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, var(--black) 0%, transparent 12%, transparent 88%, var(--black) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            gap: 16,
            width: "max-content",
            paddingLeft: 16,
          }}
        >
          {ITEMS_TRIPLE.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 28px",
                borderRadius: 12,
                minWidth: "max-content",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <item.icon size={16} color={item.color} />
              </div>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
