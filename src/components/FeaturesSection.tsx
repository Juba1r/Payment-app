"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PRODUCTS = [
  {
    tag: "Retail Credit",
    tagStyle: "tag-lime",
    title: "Pay in 12",
    desc: "For some shoppers, even paying in 3 places your product out of reach. That's why we've introduced an extra flexible retail credit option, Pay in 12. It makes bigger-ticket items more attainable with smaller payments spread over 12 months.",
    imgSrc: "/hero-blob.png",
    imgAlt: "Pay in 12",
    bg: "var(--surface)",
  },
  {
    tag: "BNPL",
    tagStyle: "tag-dark",
    title: "Pay in 3",
    desc: "Convert more browsers into buyers by making your products affordable: shoppers who use Zaika can split their purchases into 3 interest-free payments and ease the pressure on their budget. Think bigger basket sizes and less abandoned carts.",
    imgSrc: "/hero-blob.png",
    imgAlt: "Pay in 3",
    bg: "var(--surface)",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="solutions"
      style={{ background: "var(--black)", padding: "100px 0" }}
    >
      <div className="container">
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "flex-start",
            marginBottom: 60,
          }}
        >
          <motion.h2
            className="display display-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textTransform: "uppercase" }}
          >
            More Ways
            <br />
            To Get Paid
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingTop: 8,
            }}
          >
            <p className="body-lg">
              Expect more orders as shoppers pay later while you get paid
              upfront. We created these straight and split payment services to
              help customers boost buying power.
            </p>
          </motion.div>
        </div>

        {/* Product cards — 2 col */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.title}
              className="card-dark"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                padding: "24px",
                alignItems: "stretch",
              }}
            >
              {/* Image Left */}
              <div
                className="image-inner-wrap"
                style={{
                  position: "relative",
                  flex: "0 0 45%",
                  minHeight: 260,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.imgSrc}
                  alt={p.imgAlt}
                  fill
                  className="image-inner"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content Right */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  flex: 1,
                  justifyContent: "flex-start",
                  padding: "16px 0",
                }}
              >
                <div style={{ alignSelf: "flex-start" }}>
                  <span className={`tag ${p.tagStyle}`}>{p.tag}</span>
                </div>
                <h3
                  className="display display-md"
                  style={{
                    color: "var(--white)",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="body-md"
                  style={{
                    flex: 1,
                    color: "var(--white)",
                    opacity: 0.85,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
                <button
                  className="btn-dark"
                  style={{
                    width: "fit-content",
                    padding: "12px 24px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Learn more</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #solutions .container > div:first-child { grid-template-columns: 1fr !important; gap: 24px !important; }
          #solutions .container > div:last-child  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
