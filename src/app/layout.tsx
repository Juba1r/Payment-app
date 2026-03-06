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
  title: "Payside — Business Payment Solutions",
  description:
    "Increase revenue with Payside's retail payment solutions. Split payments, BNPL, and performance marketing for businesses.",
  keywords: [
    "fintech",
    "payments",
    "BNPL",
    "payside",
    "business",
    "split payments",
  ],
  authors: [{ name: "Payside Inc." }],
  openGraph: {
    title: "Payside — Business Payment Solutions",
    description:
      "Increase revenue with split payment options and performance marketing.",
    type: "website",
    locale: "en_US",
  },
};

import BackgroundVideo from "@/components/BackgroundVideo";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body style={{ background: "transparent", position: "relative" }}>
        <BackgroundVideo />
        {children}
      </body>
    </html>
  );
}
