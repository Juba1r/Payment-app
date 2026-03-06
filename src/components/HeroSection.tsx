"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollTypewriter } from "./ScrollTypewriter";

const TypewriterText = ({ text, delay }: { text: string; delay: number }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let typeInterval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      let i = 0;
      typeInterval = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(typeInterval);
      }, 10);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(typeInterval);
    };
  }, [text, delay]);

  return (
    <div
      style={{
        fontSize: "1.25rem",
        lineHeight: 1.6,
        color: "#fff",
        fontWeight: 500,
        maxWidth: "min(500px, 90vw)",
        minHeight: 85,
      }}
    >
      {typedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display: typedText.length === text.length ? "none" : "inline-block",
          width: 8,
          height: 16,
          background: "var(--lime)",
          verticalAlign: "middle",
          marginLeft: 4,
        }}
      />
    </div>
  );
};

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1.2,
  delay = 0,
  suffix = "",
  isFloat = false,
}: {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  isFloat?: boolean;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      let controls: ReturnType<typeof animate> | undefined;
      const timeoutId = setTimeout(() => {
        controls = animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent =
              (isFloat ? value.toFixed(1) : Math.round(value).toString()) +
              suffix;
          },
        });
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        if (controls) controls.stop();
      };
    }
  }, [from, to, duration, delay, suffix, isFloat]);

  return (
    <span ref={nodeRef}>
      {from}
      {suffix}
    </span>
  );
};

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
        background: "transparent",
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
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(191, 255, 0,0.07) 0%, transparent 70%)",
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
            Payside Business Platform
          </span>
        </motion.div>

        {/* Main headline — editorial, large, split line */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 10vw, 9rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 40,
            maxWidth: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            Increase
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.19, 1, 0.22, 1],
            }}
            style={{ color: "var(--lime)" }}
          >
            Revenue
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            With Us.
          </motion.span>
        </h1>

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
          <TypewriterText
            text="Boost your sales with interest-free split payment options and performance marketing. Get paid upfront while your customers pay in flexible instalments."
            delay={0.8}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0, transformOrigin: "center" }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 15,
              delay: 0.8,
            }}
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
          </motion.div>
        </div>

        {/* Quick stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="stat-grid"
          style={{
            marginTop: 80,
            display: "grid",
            gap: 24,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 40,
          }}
        >
          {[
            {
              numRender: (
                <AnimatedCounter to={4.7} isFloat suffix="★" delay={0.6} />
              ),
              label: "Google Rating",
            },
            {
              numRender: <AnimatedCounter to={9} suffix="s" delay={0.6} />,
              label: "Transaction Frequency",
            },
            {
              numRender: <AnimatedCounter to={11} suffix="K+" delay={0.6} />,
              label: "Daily Transactions",
            },
            {
              numRender: <AnimatedCounter to={10} suffix="K+" delay={0.6} />,
              label: "Points of Presence",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingRight: 24,
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
                {s.numRender}
              </div>
              <ScrollTypewriter
                text={s.label}
                speed={40}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        #home .stat-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          #home .stat-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px !important;
          }
          #home .stat-grid > div {
            border-right: none !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 600px) {
          #home .stat-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
