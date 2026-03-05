"use client";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Music } from "lucide-react"; // using Music for TikTok temporarily

const COLS = [
  { head: "Shopper", links: ["How It Works", "FAQs", "Press", "Help"] },
  {
    head: "Business",
    links: [
      "BNPL",
      "Retail Credit",
      "Marketing Solutions",
      "Request a Demo",
      "Business Support",
    ],
  },
  {
    head: "Resources",
    links: [
      "Merchant Portal",
      "PayUp App",
      "Operational Status",
      "PAIA Manual",
      "Whistle Blowing",
    ],
  },
];

const SOCIAL = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Music, label: "TikTok" }, // Replaced Youtube with TikTok to match screenshot
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        paddingTop: 64,
      }}
    >
      <div className="container">
        {/* ── Link grid + Contact block ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {/* Left: 1 large box containing 3 columns */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "24px 24px 24px 24px",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 20,
            }}
          >
            {COLS.map((col) => (
              <div
                key={col.head}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "var(--lime)", // Now sweet red since globals.css updated
                    marginBottom: 12,
                  }}
                >
                  {col.head}
                </span>
                {col.links.map((l) => (
                  <motion.a
                    key={l}
                    href="#"
                    className="hover-lime"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      transition: "color 0.2s",
                      fontWeight: 500,
                    }}
                    whileHover={{ x: 4 }}
                  >
                    {l}
                  </motion.a>
                ))}
              </div>
            ))}
          </div>

          {/* Right: 2 Stacked Boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "24px 24px 24px 24px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--lime)",
                  marginBottom: 8,
                }}
              >
                Contact us
              </span>
              <motion.button
                className="btn-dark"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  justifyContent: "center",
                  width: "100%",
                  padding: "14px",
                  borderRadius: 8,
                }}
                data-text="Chatbot"
              >
                <span>Chatbot</span>
              </motion.button>
              <div style={{ textAlign: "center", marginTop: 8 }}>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--white)",
                    marginBottom: 4,
                  }}
                >
                  Or email us at
                </p>
                <a
                  href="mailto:merchantsupport@zaika.com"
                  style={{
                    fontSize: 13,
                    color: "#60a5fa",
                    textDecoration: "none",
                  }}
                >
                  merchantsupport@zaika.com
                </a>
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "24px 24px 24px 24px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "var(--white)",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                A company of
              </p>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 900,
                  color: "var(--white)",
                }}
              >
                Weaver Fintech
              </span>
            </div>
          </div>
        </div>

        {/* ── Big logo + Social ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 20,
            marginBottom: 40,
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "var(--white)",
            }}
          >
            Zaika<span style={{ color: "var(--lime)" }}>.</span>
          </span>

          {/* Social buttons - 2x2 grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {SOCIAL.map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{
                  scale: 1.05,
                  borderColor: "var(--lime)",
                  color: "var(--lime)",
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "16px 20px",
                  borderRadius: 9999,
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                <Icon size={18} /> {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            © Zaika {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Terms and Conditions", "Privacy Policy", "PCI DSS Policy"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--lime)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  {t}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
          footer .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
