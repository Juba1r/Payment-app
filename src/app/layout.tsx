import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow",
});

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
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body style={{ background: "#080808" }}>{children}</body>
    </html>
  );
}
