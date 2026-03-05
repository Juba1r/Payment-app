"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, CreditCard, LayoutDashboard, MapPin } from "lucide-react";

const STATS = [
  {
    label: "Our Google Rating",
    Icon: Star,
    bigNum: "4.7/5",
    body: "We're committed to providing the best interest-free payment solution but don't just take our word for it. Read over 5,378 reviews written by shoppers.",
    bg: "#f5f5f2",
    textColor: "#000",
    mutedColor: "#555",
    numColor: "#000",
  },
  {
    label: "Transactions every 9 seconds",
    Icon: CreditCard,
    bigNum: "9s",
    body: "Shoppers trust Zaika for its seamless checkout experience. A new transaction happens every 9 seconds on our platform.",
    bg: "var(--surface)",
    textColor: "#fff",
    mutedColor: "rgba(255,255,255,0.55)",
    numColor: "#fff",
  },
  {
    label: "11,270 daily transactions",
    Icon: LayoutDashboard,
    bigNum: "11K+",
    body: "Think of the Zaika community as your potential customers. As our database grows, so does your reach and income opportunities.",
    bg: "#1c1c25",
    textColor: "#fff",
    mutedColor: "rgba(255,255,255,0.55)",
    numColor: "#fff",
  },
  {
    label: "10,000+ points of presence",
    Icon: MapPin,
    bigNum: "10K+",
    body: "When customers PayJustNow, they gain access to items and services without pinching their pockets. Start offering this responsible alternative.",
    bg: "#d4cfc0",
    textColor: "#000",
    mutedColor: "#555",
    numColor: "#000",
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      style={{ background: "var(--black)", padding: "80px 0" }}
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 40 }}
        >
          <span className="label" style={{ color: "var(--lime)" }}>
            Platform Scale
          </span>
        </motion.div>

        {/* Stacked accordion cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {STATS.map((s, i) => {
            const isOpen = activeIdx === i;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                onClick={() => setActiveIdx(isOpen ? null : i)}
                style={{
                  background: s.bg,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isOpen
                    ? "1px solid rgba(198,241,53,0.4)"
                    : "1px solid transparent",
                  transition: "border-color 0.3s",
                }}
              >
                {/* Header row (always visible) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "28px 32px",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: isOpen ? "var(--lime)" : "rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.3s",
                        flexShrink: 0,
                      }}
                    >
                      <s.Icon size={20} color={isOpen ? "#000" : s.textColor} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2vw, 1.7rem)",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.01em",
                        color: s.textColor,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontSize: 28,
                      fontWeight: 300,
                      color: s.textColor,
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    +
                  </motion.span>
                </div>

                {/* Expanded content */}
                <motion.div
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 32px 40px",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 48,
                      alignItems: "flex-end",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: s.mutedColor,
                        maxWidth: 420,
                      }}
                    >
                      {s.body}
                    </p>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(4rem, 10vw, 7.5rem)",
                        fontWeight: 900,
                        lineHeight: 0.85,
                        textTransform: "uppercase",
                        color: s.numColor,
                        textAlign: "right",
                      }}
                    >
                      {s.bigNum}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
