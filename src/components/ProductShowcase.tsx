"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Store } from "lucide-react";

const CHANNELS = [
  {
    tag: "eCommerce",
    Icon: Globe,
    title: "Online Checkout",
    desc: "Integrate Zaika directly into your existing e-commerce checkout flow in minutes. Compatible with Shopify, WooCommerce, Magento, and custom builds.",
    detail: "300+ integrations",
    color: "var(--lime)",
  },
  {
    tag: "POS Integration",
    Icon: Store,
    title: "In-Store Terminal",
    desc: "Add split payment to your physical point-of-sale. Customers scan a QR code or tap their phone — done in seconds with zero card machine changes needed.",
    detail: "Any POS system",
    color: "#60a5fa",
  },
  {
    tag: "Soft Touch Integration",
    Icon: Smartphone,
    title: "Mobile & App",
    desc: "Embed Zaika in your branded mobile app or offer a white-label progressive web app. Full SDK for iOS and Android with next-day payouts.",
    detail: "iOS & Android SDK",
    color: "#a78bfa",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      style={{
        background: "var(--black)",
        padding: "100px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <span
            className="label"
            style={{ color: "var(--lime)", display: "block", marginBottom: 16 }}
          >
            Seamless checkout wherever they shop
          </span>
          <h2 className="display display-lg" style={{ maxWidth: 640 }}>
            Sell More,
            <br />
            <span style={{ color: "var(--lime)" }}>Everywhere.</span>
          </h2>
        </motion.div>

        {/* Channel cards — 3 col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {CHANNELS.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.22)" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                cursor: "default",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: `${c.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <c.Icon size={24} color={c.color} />
              </div>

              {/* Tag */}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: c.color,
                }}
              >
                {c.tag}
              </span>

              <div>
                <h3
                  className="display display-sm"
                  style={{ marginBottom: 12, color: "var(--white)" }}
                >
                  {c.title}
                </h3>
                <p className="body-md">{c.desc}</p>
              </div>

              {/* Detail pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 14px",
                  borderRadius: 9999,
                  background: `${c.color}14`,
                  border: `1px solid ${c.color}30`,
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: c.color,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 12, fontWeight: 700, color: c.color }}>
                  {c.detail}
                </span>
              </div>

              <motion.button
                className="btn-outline-white"
                style={{
                  width: "fit-content",
                  fontSize: 12,
                  padding: "9px 18px",
                }}
                whileHover={{
                  borderColor: c.color,
                  color: c.color,
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.97 }}
                data-text="Learn more →"
              >
                <span>Learn more →</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #product-showcase .container > div:last-child { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { #product-showcase .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
