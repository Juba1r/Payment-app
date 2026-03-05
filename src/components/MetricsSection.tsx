"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RESOURCES = [
  {
    tag: "MERCHANT PORTAL",
    desc: "See the latest business updates, marketing opportunities, onboarding information and more.",
    cta: "Read more",
    imgSrc: "/hero-blob.png",
  },
  {
    tag: "PAYUP APP",
    desc: "Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp App.",
    cta: "Learn more",
    imgSrc: "/hero-blob.png",
  },
  {
    tag: "INTEGRATIONS",
    desc: "Add us as a payment method on your website by using our pre-built plugins or custom API's.",
    cta: "Learn more",
    imgSrc: "/hero-blob.png",
  },
];

export default function MetricsSection() {
  return (
    <section
      id="resources"
      style={{
        background: "var(--black)",
        padding: "100px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 40 }}
        >
          <h2
            className="display display-md"
            style={{
              textTransform: "none",
              fontWeight: 400,
              color: "var(--white)",
            }}
          >
            Get started with these resources
          </h2>
        </motion.div>

        {/* Resource cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.tag}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                cursor: "default",
                transition: "transform 0.25s",
              }}
            >
              {/* Image */}
              <div
                className="image-inner-wrap"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1.2",
                  borderRadius: 24,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={r.imgSrc}
                  alt={r.tag}
                  fill
                  className="image-inner"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
                  }}
                />
              </div>

              {/* Pill Header */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 9999,
                  padding: "16px",
                  textAlign: "center",
                  background: "var(--black)",
                }}
              >
                <span
                  className="display"
                  style={{
                    fontSize: "2rem",
                    color: "var(--white)",
                  }}
                >
                  {r.tag}
                </span>
              </div>

              {/* Content Box */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  padding: "16px 20px",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="body-md"
                  style={{
                    textAlign: "center",
                    color: "var(--white)",
                    opacity: 0.85,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {r.desc}
                </p>
                <button
                  className="btn-outline-white"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontWeight: "normal",
                    padding: "16px",
                  }}
                  data-text={r.cta}
                >
                  <span>{r.cta}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { #resources .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
