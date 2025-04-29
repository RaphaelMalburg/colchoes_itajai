import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { montserrat, poppins, quicksand } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colchões Itajaí",
  description: "Loja de colchões e móveis em Itajaí - conforto, tecnologia e elegância.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${poppins.variable} ${quicksand.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f6fa]`}
        style={{ minHeight: '100dvh', minWidth: 0, overflowX: 'hidden' }}>
        <AnimatedBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
