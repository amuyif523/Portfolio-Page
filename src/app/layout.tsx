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
  metadataBase: new URL('https://amanuel.dev'), // Replace with actual domain
  title: {
    default: "Amanuel | Creative Technologist",
    template: "%s | Amanuel"
  },
  description: "Senior Creative Technologist specializing in high-impact technical systems, WebGL, and interactive design.",
  keywords: ["Creative Technologist", "WebGL", "Next.js", "React", "Three.js", "Portfolio"],
  authors: [{ name: "Amanuel" }],
  creator: "Amanuel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanuel.dev",
    title: "Amanuel | Creative Technologist",
    description: "Design and build high-impact technical systems.",
    siteName: "Amanuel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanuel | Creative Technologist",
    description: "Design and build high-impact technical systems.",
    creator: "@amanuel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
