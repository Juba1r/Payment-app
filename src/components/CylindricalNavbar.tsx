"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Rocket,
  Cpu,
  Shield,
  Users,
  Mail,
  Hexagon,
  Menu,
  X,
} from "lucide-react";

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

  // States for the orchestrated animation sequence (Desktop)
  const [isFlat, setIsFlat] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // States for Mobile sliding menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false); // Auto close when escaping mobile width
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numItems = NAV_LINKS.length;
  const angleStep = 360 / numItems;

  // Track parent cylinder rotation
  const parentRotation = useMotionValue(0);

  const handleItemClick = async (index: number, href: string) => {
    // Desktop Interaction logic
    if (isMobile) {
      setMobileMenuOpen(false);
      setActiveIndex(index);
      setTimeout(() => {
        if (href.startsWith("#")) {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(href);
        }
      }, 300); // give slide menu time to run away
      return;
    }

    if (isAnimating) return;

    if (index === activeIndex) {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
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
  const radius = 160;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2100, // Highest layer above the slider
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
            onClick={() => {
              if (window.location.pathname === "/") {
                document
                  .querySelector("#home")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
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
              Payside.
            </span>
          </div>

          {/* Center: The rotable links (ONLY Desktop) */}
          {!isMobile ? (
            <div
              style={{
                position: "relative",
                width: numItems * itemWidth + (numItems - 1) * gap,
                height: itemHeight,
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
                  const flatX = (i - (numItems - 1) / 2) * flatSpacingX;
                  const flatY = 0;

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
                            ? "rgba(191, 255, 0, 0.1)"
                            : !isFlat
                              ? "rgba(20, 20, 25, 0.85)"
                              : "transparent",
                        border: !isFlat
                          ? isActive
                            ? "1px solid rgba(191, 255, 0, 0.4)"
                            : "1px solid rgba(255, 255, 255, 0.1)"
                          : "1px solid transparent",
                        boxShadow:
                          !isFlat && isActive
                            ? "0 0 20px rgba(191, 255, 0, 0.2)"
                            : "none",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                        transition: "color 0.3s, background 0.3s, border 0.3s",
                      }}
                      whileHover={
                        isAnimating
                          ? {}
                          : {
                              color:
                                isActive || !isFlat ? "#fff" : "var(--lime)",
                            }
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
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2005, // keep strictly above mobile menu
                  position: "relative",
                }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}

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

      {/* OVERLAY for Mobile Sliding Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              zIndex: 2001,
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE Sliding Sidebar */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              background: "rgba(10, 10, 12, 0.98)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              zIndex: 2003,
              padding: "100px 24px 40px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => handleItemClick(i, link.href)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "16px 20px",
                    borderRadius: 16,
                    background: isActive
                      ? "rgba(191, 255, 0, 0.1)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(191, 255, 0, 0.4)"
                      : "1px solid transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  whileHover={{ x: 4, background: "rgba(255, 255, 255, 0.03)" }}
                >
                  <link.icon
                    size={18}
                    color={isActive ? "var(--lime)" : "inherit"}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {link.label}
                  </span>
                </motion.button>
              );
            })}

            <div
              style={{
                marginTop: "auto",
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                className="btn-lime"
                style={{
                  width: "100%",
                  padding: "14px 0",
                  fontSize: 14,
                }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    document
                      .querySelector("#cta")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                <span>Join Network</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
