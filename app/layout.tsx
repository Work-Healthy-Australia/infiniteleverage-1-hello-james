import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lc-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-lc-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinite Leverage — James Murray",
  description:
    "A full marketing and development team powered by AI, orchestrated by James Murray. Strategy, copy, design, and publishing — handled.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-accent="teal"
      className={`${lora.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
