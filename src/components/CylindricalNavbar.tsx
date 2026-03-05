"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRouter } from "next/navigation";
import { Rocket, Cpu, Shield, Users, Mail, Hexagon } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: Rocket },
  { label: "Solutions", href: "#solutions", icon: Cpu },
  { label: "Ecosystem", href: "#resources", icon: Shield },
  { label: "Benefits", href: "#benefits", icon: Users },
  { label: "Contact", href: "#cta", icon: Mail },
];

export default function CylindricalNavbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // States for the orchestrated animation sequence
  const [isFlat, setIsFlat] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numItems = NAV_LINKS.length;
  const angleStep = 360 / numItems;

  // Track parent cylinder rotation
  const parentRotation = useMotionValue(0);

  const handleItemClick = async (index: number, href: string) => {
    if (isAnimating || index === activeIndex) {
      if (!isAnimating && index === activeIndex) {
        if (href.startsWith("#")) {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(href);
        }
      }
      return;
    }

    setIsAnimating(true);

    // Phase 1: Form 3D Cylinder
    setIsFlat(false);

    // Wait for the fast gather animation to finish
    await new Promise((r) => setTimeout(r, 300));

    // Phase 2: Spin!
    const offset = index - activeIndex;
    // Positive 360 forces a tumbling down effect (rolling from up)
    const targetAngle = 360 + offset * angleStep;

    const spinControl = animate(parentRotation, targetAngle, {
      type: "spring",
      stiffness: 150,
      damping: 18,
      mass: 0.6,
    });

    await spinControl;

    // Phase 3: Seamless Visual Snap
    setIsSnapping(true);
    setActiveIndex(index);
    parentRotation.set(0);

    await new Promise((r) => setTimeout(r, 50));

    // Phase 4: Flatten back to Navbar line
    setIsSnapping(false);
    setIsFlat(true);

    await new Promise((r) => setTimeout(r, 300));

    // Route / Scroll
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }

    setIsAnimating(false);
  };

  const itemWidth = 110;
  const itemHeight = 40;
  const gap = 8;
  const radius = isMobile ? 120 : 160;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: "rgba(8, 8, 8, 0.7)",
        backdropFilter: "blur(12px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        height: 80,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Left: Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "var(--lime)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
            }}
          >
            <Hexagon size={20} fill="#000" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Zaika.
          </span>
        </div>

        {/* Center: The rotable links */}
        <div
          style={{
            position: "relative",
            width: isMobile ? 60 : numItems * itemWidth + (numItems - 1) * gap,
            height: isMobile ? 60 : itemHeight,
            perspective: "1200px",
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              rotateX: parentRotation,
            }}
          >
            {NAV_LINKS.map((link, i) => {
              const cylinderRotate = (i - activeIndex) * angleStep;
              const flatSpacingX = itemWidth + gap;
              const flatSpacingY = itemHeight + gap;

              const flatX = isMobile
                ? 0
                : (i - (numItems - 1) / 2) * flatSpacingX;
              const flatY = isMobile
                ? (i - (numItems - 1) / 2) * flatSpacingY
                : 0;

              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={link.label}
                  onClick={() => handleItemClick(i, link.href)}
                  animate={{
                    x: isFlat ? flatX : 0,
                    y: isFlat ? flatY : 0,
                    z: isFlat ? 0 : radius,
                    rotateX: isFlat ? 0 : -cylinderRotate,
                    rotateY: 0,
                  }}
                  transition={{
                    duration: isSnapping ? 0 : 0.3,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    // Center the transformation origin
                    width: itemWidth,
                    height: itemHeight,
                    marginTop: -itemHeight / 2,
                    marginLeft: -itemWidth / 2,
                    transformStyle: "preserve-3d",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    borderRadius: 9999,
                    background:
                      isActive && isFlat
                        ? "rgba(255, 75, 75, 0.1)"
                        : !isFlat
                          ? "rgba(20, 20, 25, 0.85)"
                          : "transparent",
                    border: !isFlat
                      ? isActive
                        ? "1px solid rgba(255, 75, 75, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.1)"
                      : "1px solid transparent",
                    boxShadow:
                      !isFlat && isActive
                        ? "0 0 20px rgba(255, 75, 75, 0.2)"
                        : "none",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    transition: "color 0.3s, background 0.3s, border 0.3s",
                    // Hide items completely on mobile when flat if they aren't the active one
                    opacity: isMobile && isFlat && !isActive ? 0 : 1,
                    pointerEvents:
                      isMobile && isFlat && !isActive ? "none" : "auto",
                  }}
                  whileHover={
                    isAnimating
                      ? {}
                      : { color: isActive || !isFlat ? "#fff" : "var(--lime)" }
                  }
                >
                  <div
                    style={{
                      color: isActive ? "var(--lime)" : "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <link.icon size={14} />
                  </div>

                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {link.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: CTA button */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="btn-lime"
              style={{
                padding: "10px 24px",
                fontSize: 13,
                borderRadius: 8,
              }}
              onClick={() =>
                document
                  .querySelector("#cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Join Network</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
