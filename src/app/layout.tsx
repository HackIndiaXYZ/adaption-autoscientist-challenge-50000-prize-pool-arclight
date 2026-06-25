import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "BrandPilot.ai | Your AI Marketing Manager",
  description: "The AI Marketing Manager for Businesses That Can't Afford One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-blue-500/30">
        <Navbar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black">
          {children}
        </main>
      </body>
    </html>
  );
}
