"use client";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Since offering Zaika, our average basket size went up 34%. Customers love paying over time and we love getting paid upfront.",
    author: "Sarah M.",
    role: "Head of eCommerce, FashionHub",
  },
  {
    quote:
      "The integration took our dev team under 2 hours. It just works — no issues, no complaints, just happy customers checkout faster.",
    author: "James K.",
    role: "CTO, Apparel Direct",
  },
  {
    quote:
      "We've seen a 28% reduction in cart abandonment since launch. Zaika is now essential to our growth strategy.",
    author: "Nomsa D.",
    role: "Digital Director, HomeStyle",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      style={{
        background: "var(--off-black)",
        padding: "100px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <span
            className="label"
            style={{ color: "var(--lime)", display: "block", marginBottom: 16 }}
          >
            Why businesses love Zaika
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "flex-end",
            }}
          >
            <h2 className="display display-lg">
              Proven
              <br />
              <span style={{ color: "var(--lime)" }}>Results.</span>
            </h2>
            <p className="body-lg">
              Join thousands of merchants already experiencing higher
              conversion, bigger baskets, and happier customers.
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(198,241,53,0.30)" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                transition: "border-color 0.25s, transform 0.25s",
                cursor: "default",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "var(--lime)", fontSize: 18 }}>
                    ★
                  </span>
                ))}
              </div>
              {/* Quote */}
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.72,
                  color: "rgba(255,255,255,0.80)",
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div
                style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--white)",
                    marginBottom: 3,
                  }}
                >
                  {t.author}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: 56,
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
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
            data-text="Join the Network →"
          >
            <span>Join the Network →</span>
          </motion.button>
          <motion.button
            className="btn-outline-white"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            data-text="Request a Demo"
          >
            <span>Request a Demo</span>
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #benefits .container > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
          #benefits .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
