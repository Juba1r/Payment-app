import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaika — Business Payment Solutions",
  description:
    "Increase revenue with Zaika's retail payment solutions. Split payments, BNPL, and performance marketing for businesses.",
  keywords: [
    "fintech",
    "payments",
    "BNPL",
    "zaika",
    "business",
    "split payments",
  ],
  authors: [{ name: "Zaika Inc." }],
  openGraph: {
    title: "Zaika — Business Payment Solutions",
    description:
      "Increase revenue with split payment options and performance marketing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#080808" }}>{children}</body>
    </html>
  );
}
