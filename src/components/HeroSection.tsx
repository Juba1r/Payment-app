"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { val: "$2.4B", label: "Total transactions" },
  { val: "2.6M", label: "Customers" },
  { val: "$3.8B", label: "Available to spend" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        background: "var(--black)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main grid */}
      <div className="container" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          {/* ── Left ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Headline */}
            <motion.h1
              className="display display-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{ color: "var(--white)" }}
            >
              Increase
              <br />
              Revenue
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px var(--white)",
                  color: "transparent",
                }}
              >
                With Our
              </span>
              <br />
              <span style={{ color: "var(--lime)" }}>Retail</span>
              <br />
              Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="body-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                maxWidth: 440,
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
                lineHeight: 1.65,
              }}
            >
              Let&apos;s get you paid! Increase your sales with split payment
              options and performance marketing.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <motion.button
                className="btn-lime"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .querySelector("#cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-text="Apply Now →"
              >
                <span>Apply Now →</span>
              </motion.button>
              <motion.button
                className="btn-outline-white"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                data-text="Learn More"
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: "flex",
                gap: 40,
                paddingTop: 12,
                borderTop: "1px solid var(--border)",
                marginTop: 8,
              }}
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                >
                  <div
                    className="display display-sm"
                    style={{ color: "var(--white)", marginBottom: 4 }}
                  >
                    {s.val}
                  </div>
                  <div className="body-sm">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: abstract blob image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            style={{ position: "relative" }}
          >
            {/* Main blob */}
            <motion.div
              className="animate-blob"
              style={{
                borderRadius: 28,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "1",
                width: "100%",
              }}
            >
              <Image
                src="/hero-blob.png"
                alt="Zaika abstract"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Dark edge overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 85% 85%, rgba(0,0,0,0.5) 0%, transparent 50%)",
                }}
              />
            </motion.div>

            {/* Floating badge — bottom right corner */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                background: "var(--white)",
                borderRadius: 16,
                padding: "14px 18px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                Today&apos;s Sales
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#000",
                  fontFamily: "var(--font-display)",
                }}
              >
                +$124K
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span
                  style={{ fontSize: 11, color: "#16a34a", fontWeight: 700 }}
                >
                  ↑ 18%
                </span>
                <span style={{ fontSize: 11, color: "#888" }}>
                  vs yesterday
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #home .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #home .container > div > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
