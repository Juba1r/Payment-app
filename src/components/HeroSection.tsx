"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Subtle noise texture via SVG filter */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,75,75,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Thin accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, var(--lime) 40%, transparent 100%)",
          transformOrigin: "left",
          zIndex: 5,
        }}
      />

      <motion.div
        style={{
          y: yText,
          opacity,
          position: "relative",
          zIndex: 2,
          willChange: "transform, opacity",
        }}
        className="container"
      >
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--lime)",
              boxShadow: "0 0 10px var(--lime)",
            }}
            className="animate-pulse-dot"
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--lime)",
            }}
          >
            Zaika Business Platform
          </span>
        </motion.div>

        {/* Main headline — editorial, large, split line */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.8rem, 10vw, 9rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 40,
            maxWidth: 1000,
          }}
        >
          Increase
          <br />
          <span style={{ color: "var(--lime)" }}>Revenue</span>
          <br />
          With Us.
        </motion.h1>

        {/* Sub copy + CTA row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 64,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 400,
            }}
          >
            Boost your sales with interest-free split payment options and
            performance marketing. Get paid upfront while your customers pay in
            flexible instalments.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-lime"
              data-text="Apply Now"
              style={{ padding: "16px 36px", fontSize: 14 }}
            >
              <span>Apply Now</span>
            </button>
            <button
              className="btn-outline-white"
              data-text="See How It Works"
              style={{ padding: "16px 32px", fontSize: 14 }}
              onClick={() =>
                document
                  .querySelector("#how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                See How It Works <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* Quick stat bar */}
        <div
          style={{
            marginTop: 80,
            display: "flex",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "4.7★", label: "Google Rating" },
            { num: "9s", label: "Transaction Frequency" },
            { num: "11K+", label: "Daily Transactions" },
            { num: "10K+", label: "Points of Presence" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 160px",
                paddingRight: 32,
                paddingBottom: 16,
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #home .stat-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
