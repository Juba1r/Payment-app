"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { ScrollTypewriter } from "./ScrollTypewriter";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: ["Overview", "Split Payments", "Performance Marketing", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Developer API", "Partners"],
  },
];

const SOCIAL = [
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "transparent",
        paddingTop: 120,
        position: "relative",
        borderTop: "1px solid rgba(191, 255, 0,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "300px",
          background:
            "radial-gradient(ellipse at top, rgba(191, 255, 0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingBottom: 40 }}
      >
        {/* Top CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 100,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display"
            style={{
              color: "#fff",
              marginBottom: 24,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
            }}
          >
            Ready to <span style={{ color: "#bfff00" }}>boost</span> your sales?
          </motion.h2>
          <ScrollTypewriter
            text="Join thousands of merchants using Payside to offer flexible payment options and exponentially grow their business."
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              marginBottom: 40,
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          />
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="btn-lime"
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "16px 32px",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
            onClick={() =>
              document
                .querySelector("#cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Get Started Now</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* Main Footer Links */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 64,
            alignItems: "flex-start",
            marginBottom: 80,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                color: "#fff",
                display: "block",
                marginBottom: 24,
              }}
            >
              PAYSIDE<span style={{ color: "#bfff00" }}>.</span>
            </span>
            <ScrollTypewriter
              text="Empowering businesses with intelligent payment solutions, performance marketing, and seamless integrations."
              speed={40}
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                maxWidth: 300,
              }}
            />
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: 24,
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {col.links.map((link, linkIdx) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: linkIdx * 0.05,
                        ease: "easeOut",
                      }}
                      style={{
                        color: "var(--lime)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        display: "inline-block",
                        transition: "color 0.2s ease, transform 0.2s ease",
                      }}
                      whileHover={{ color: "#fff", x: 6 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            padding: "32px 0 0 0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ color: "var(--lime)", fontSize: "0.9rem" }}
          >
            © {new Date().getFullYear()} Jubair Ibn Khaled. All rights reserved.
          </motion.p>

          <div style={{ display: "flex", gap: 24 }}>
            {SOCIAL.map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                whileHover={{ y: -3, color: "#bfff00" }}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  transition: "color 0.2s",
                }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
            margin-bottom: 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
