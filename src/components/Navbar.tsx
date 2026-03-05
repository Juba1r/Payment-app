"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Help", href: "#help" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Top toggle bar (Shopper / Business) ── */}
      <div
        style={{
          background: "#111",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "8px 0",
          position: "sticky",
          top: 0,
          zIndex: 1001,
        }}
      >
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <a
            href="#"
            style={{
              padding: "7px 22px",
              borderRadius: 9999,
              background: "transparent",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 700,
              fontSize: 13,
              border: "1.5px solid rgba(255,255,255,0.15)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")
            }
          >
            Shopper
          </a>
          <div
            style={{
              padding: "7px 22px",
              borderRadius: 9999,
              background: "var(--lime)",
              color: "var(--black)",
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            Business
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "sticky",
          top: 37,
          zIndex: 1000,
          padding: "0",
          background: scrolled ? "rgba(8,8,8,0.95)" : "var(--off-black)",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: "1px solid var(--border)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontSize: 26,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: "var(--lime)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#000", fontSize: 20, fontWeight: 900 }}>
                Z
              </span>
            </div>
            Zaika{" "}
            <span
              style={{
                color: "var(--muted)",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "none",
                letterSpacing: 0,
                fontFamily: "var(--font-body)",
                marginLeft: 2,
              }}
            >
              For Business
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.href);
                }}
                className="hover-lime"
                style={{
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  borderRadius: 9999,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {n.label} ↓
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div
            style={{ display: "flex", gap: 10, alignItems: "center" }}
            className="desktop-nav"
          >
            <button
              className="btn-outline-white"
              style={{ fontSize: 13, padding: "9px 20px" }}
              data-text="Log In"
            >
              <span>Log In</span>
            </button>
            <button
              className="btn-lime"
              style={{ fontSize: 13, padding: "9px 20px" }}
              onClick={() => go("#cta")}
              data-text="Business Application"
            >
              <span>Business Application</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-hamburger"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: 105,
              left: 0,
              right: 0,
              zIndex: 999,
              background: "var(--off-black)",
              borderBottom: "1px solid var(--border)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.href);
                }}
                style={{
                  padding: "14px 16px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.75)",
                  borderRadius: 12,
                  transition: "all 0.2s",
                }}
              >
                {n.label}
              </a>
            ))}
            <button
              className="btn-lime"
              onClick={() => go("#cta")}
              style={{ marginTop: 8, justifyContent: "center" }}
              data-text="Business Application"
            >
              <span>Business Application</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .desktop-nav { display: flex !important; } .mobile-hamburger { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .mobile-hamburger { display: flex !important; } }
      `}</style>
    </>
  );
}
