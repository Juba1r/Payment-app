"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Rocket,
  Cpu,
  Shield,
  Users,
  Mail,
  Activity,
} from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: Rocket },
  { label: "Protocols", href: "#solutions", icon: Cpu },
  { label: "Ecosystem", href: "#resources", icon: Shield },
  { label: "Feedback", href: "#benefits", icon: Users },
  { label: "Terminal", href: "#cta", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const navRef = useRef<HTMLDivElement>(null);

  // 3D Tilt for the whole Navbar panel
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 25,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (href: string, label: string) => {
    setActiveTab(label);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="perspective-world"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        padding: scrolled ? "15px 0" : "25px 0",
        pointerEvents: "none",
        transition: "padding 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
    >
      <motion.div
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          pointerEvents: "auto",
          width: "max-content",
          margin: "0 auto",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div
          className="glass-panel"
          style={{
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderRadius: "9999px",
            background: scrolled
              ? "rgba(0, 0, 0, 0.85)"
              : "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px) saturate(150%)",
            border: scrolled
              ? "1px solid rgba(191, 255, 0, 0.2)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: scrolled
              ? "0 25px 60px -15px rgba(0,0,0,0.8), 0 0 20px rgba(191, 255, 0,0.15)"
              : "0 15px 40px -10px rgba(0,0,0,0.4)",
            transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
            transform: scrolled ? "scale(0.96)" : "scale(1)",
          }}
        >
          {/* Logo Section */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollTo("#home", "Home");
              }
            }}
            style={{
              marginRight: 12,
              display: "flex",
              alignItems: "center",
              gap: 12,
              transform: "translateZ(30px)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              style={{
                width: 38,
                height: 38,
                background: "var(--lime)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(191, 255, 0,0.4)",
              }}
            >
              <span style={{ color: "black", fontWeight: 900, fontSize: 20 }}>
                Z
              </span>
            </motion.div>

            <div className="desktop-nav" style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "0.05em",
                  }}
                >
                  PAYSIDE
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--lime)",
                      boxShadow: "0 0 5px var(--lime)",
                    }}
                    className="animate-pulse-dot"
                  />
                  <span
                    style={{
                      fontSize: 8,
                      fontWeight: 800,
                      color: "var(--lime)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    SYSTEM ONLINE
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div
            style={{
              width: 1,
              height: 24,
              background: "rgba(255,255,255,0.1)",
              margin: "0 8px",
            }}
            className="desktop-nav"
          />

          {/* Desktop Nav Items */}
          <nav
            className="flex items-center gap-1 desktop-nav"
            style={{ transformStyle: "preserve-3d" }}
          >
            {NAV_LINKS.map((link) => (
              <NavButton
                key={link.label}
                isActive={activeTab === link.label}
                onClick={() => scrollTo(link.href, link.label)}
                label={link.label}
              />
            ))}
          </nav>

          {/* Activity / Notification 3D Icon (Purely Visual) */}
          <div
            className="desktop-nav"
            style={{
              transform: "translateZ(20px)",
              margin: "0 10px",
              opacity: 0.4,
            }}
          >
            <Activity size={16} color="var(--lime)" />
          </div>

          <div
            className="ml-2 desktop-nav"
            style={{ transform: "translateZ(40px)" }}
          >
            <button
              className="btn-lime"
              style={{
                padding: "10px 24px",
                fontSize: 12,
                borderRadius: 9999,
                boxShadow: "0 10px 25px rgba(191, 255, 0,0.25)",
              }}
              data-text="INITIATE SYNC"
            >
              <span>INITIATE SYNC</span>
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-hamburger"
            style={{
              width: 44,
              height: 44,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              color: mobileOpen ? "var(--lime)" : "white",
              transform: "translateZ(20px)",
              transition: "color 0.3s",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu - 3D Expansion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20, rotateX: -20 }}
            className="glass-panel"
            style={{
              position: "absolute",
              top: scrolled ? 80 : 100,
              left: 20,
              right: 20,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              zIndex: 1999,
              pointerEvents: "auto",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              border: "1px solid rgba(191, 255, 0,0.2)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.label)}
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontSize: 16,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: activeTab === link.label ? "var(--lime)" : "#fff",
                  background:
                    activeTab === link.label
                      ? "rgba(191, 255, 0,0.05)"
                      : "transparent",
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.3s",
                }}
              >
                {link.label}
                {activeTab === link.label && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--lime)",
                    }}
                  />
                )}
              </button>
            ))}

            <button
              className="btn-lime"
              style={{ marginTop: 12, width: "100%", padding: 18 }}
            >
              <span>INITIATE PROTOCOL</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function NavButton({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        padding: "8px 18px",
        borderRadius: 9999,
        position: "relative",
        color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
        fontWeight: 800,
        fontSize: 12,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        transformStyle: "preserve-3d",
        transition: "all 0.3s ease",
      }}
      animate={{
        z: hovered ? 30 : 0,
        scale: hovered ? 1.05 : 1,
        y: hovered ? -2 : 0,
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{label}</span>

      {/* Active pill indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="active-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 9999,
              background: "rgba(191, 255, 0, 0.1)",
              border: "1px solid rgba(191, 255, 0, 0.2)",
              boxShadow: "0 0 20px rgba(191, 255, 0, 0.15)",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      {/* Hover underline */}
      <AnimatePresence>
        {hovered && !isActive && (
          <motion.div
            key="hover-underline"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: 4,
              left: "30%",
              height: 1.5,
              background: "var(--lime)",
              boxShadow: "0 0 12px var(--lime)",
              borderRadius: 2,
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
