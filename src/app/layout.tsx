import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Technologist",
  description: "Design and build high-impact technical systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
