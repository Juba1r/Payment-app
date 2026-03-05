"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (email.trim()) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section
      id="cta"
      style={{ background: "var(--black)", padding: "100px 0 0" }}
    >
      <div className="container">
        {/* ── Email capture banner (lime) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "#c6f135",
            borderRadius: 20,
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#000",
              letterSpacing: "-0.01em",
            }}
          >
            Join the Zaika Business Network
          </span>
          <div
            style={{
              display: "flex",
              gap: 0,
              alignItems: "center",
              flex: "0 0 auto",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                padding: "12px 18px",
                borderRadius: "9999px 0 0 9999px",
                border: "none",
                outline: "none",
                fontSize: 14,
                fontWeight: 500,
                color: "#000",
                background: "rgba(0,0,0,0.12)",
                width: 240,
              }}
            />
            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "12px 24px",
                borderRadius: "0 9999px 9999px 0",
                background: "#000",
                color: sent ? "var(--lime)" : "#fff",
                fontWeight: 800,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {sent ? (
                "Sent ✓"
              ) : (
                <>
                  <Send size={14} /> Send
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
