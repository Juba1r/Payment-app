"use client";
import { motion } from "framer-motion";
import { Smartphone, LineChart, Globe } from "lucide-react";
import { InteractiveGlassCard } from "./InteractiveGlassCard";
import { ScrollTypewriter } from "./ScrollTypewriter";

const CHANNELS = [
  {
    tag: "eCOMMERCE",
    Icon: Globe,
    title: "Online Stores",
    desc: "Our pre-built plugins work with Shopify, Magento, WooCommerce, Salesforce, PrestaShop, and Storefront. Plus, tailor our API to suit your exact stack.",
    detail: "PLUG & PLAY",
    color: "var(--lime)",
  },
  {
    tag: "POS INTEGRATION",
    Icon: LineChart,
    title: "In-Store",
    desc: "Seamless POS integration through leading partners. We are continuously expanding our POS partner list to keep your checkout smooth and conversion high.",
    detail: "UNIVERSAL POS",
    color: "#60a5fa",
  },
  {
    tag: "SOFT TOUCH",
    Icon: Smartphone,
    title: "Mobile QR",
    desc: "Use the Payside merchant app or static QR codes to get up and running in minutes. Cashless payments speed up queues and keep customers coming back.",
    detail: "INSTANT SETUP",
    color: "#a78bfa",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="channels"
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
              Seamless Checkout Wherever They Shop
            </span>
            <h2
              className="display display-lg"
              style={{ color: "#fff", textTransform: "uppercase" }}
            >
              Omnichannel <span style={{ color: "var(--lime)" }}>Fluidity</span>
            </h2>
          </motion.div>

          <ScrollTypewriter
            className="body-lg"
            text="Whether your customers shop online, in-store, or through their phone, Payside integrates seamlessly into every channel with zero disruption to your existing workflow."
            style={{ color: "#fff", lineHeight: 1.8 }}
          />
        </div>

        {/* Cards */}
        <div
          className="perspective-world"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {CHANNELS.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ height: "100%" }}
            >
              <InteractiveGlassCard
                className="glass-panel"
                glowColor={`${c.color}18`}
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    padding: "40px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    height: "100%",
                  }}
                >
                  <div className="glass-glow-edge" />

                  {/* Icon */}
                  <motion.div
                    className="alive-icon"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: `${c.color}12`,
                      border: `1px solid ${c.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateZ(50px)",
                    }}
                  >
                    <c.Icon size={26} color={c.color} />
                  </motion.div>

                  {/* Tag + title */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: c.color,
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {c.tag}
                    </span>
                    <h3
                      className="display"
                      style={{
                        fontSize: "1.6rem",
                        color: "#fff",
                        fontWeight: 900,
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <ScrollTypewriter
                    text={c.desc}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "#fff",
                      flex: 1,
                    }}
                  />

                  {/* Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      borderRadius: 9999,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      width: "fit-content",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: c.color,
                        boxShadow: `0 0 8px ${c.color}`,
                      }}
                      className="animate-pulse-dot"
                    />
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: "rgba(255,255,255,0.6)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {c.detail}
                    </span>
                  </div>
                </div>
              </InteractiveGlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #channels .container > div:last-child { grid-template-columns: 1fr !important; }
          #channels .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
