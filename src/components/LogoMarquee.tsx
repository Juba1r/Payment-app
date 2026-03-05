"use client";
import { motion } from "framer-motion";
import { TrendingUp, Rocket, ShieldCheck, ShoppingCart } from "lucide-react";

const GROWTH_ITEMS = [
  { text: "Bigger basket size", icon: ShoppingCart },
  { text: "Increased traffic", icon: TrendingUp },
  { text: "Boosted sales", icon: Rocket },
  { text: "Zero risk", icon: ShieldCheck },
  { text: "Bigger basket size", icon: ShoppingCart },
  { text: "Increased traffic", icon: TrendingUp },
  { text: "Boosted sales", icon: Rocket },
  { text: "Zero risk", icon: ShieldCheck },
];

export default function LogoMarquee() {
  return (
    <section
      style={{
        background: "var(--black)", // Matches the screenshot background
        padding: "60px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="container" style={{ marginBottom: "32px" }}>
        <h2
          className="display display-md"
          style={{ textTransform: "none", color: "var(--white)" }}
        >
          Designed for growth
        </h2>
      </div>

      <div
        style={{ position: "relative", display: "flex", overflow: "hidden" }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            gap: 16,
            width: "max-content",
            paddingLeft: 40,
          }}
        >
          {GROWTH_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "24px 40px",
                background: "var(--surface)", // dark pill background
                borderRadius: "9999px",
                minWidth: "max-content",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "var(--lime)", // Now sweet red since we updated globals.css
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <item.icon size={16} color="var(--black)" />
              </div>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  letterSpacing: "-0.01em",
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
