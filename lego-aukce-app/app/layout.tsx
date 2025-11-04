import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Použijeme Inter font od Googlu
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEGO Aukce - Marketplace pro LEGO sběratele",
  description: "Kupujte a prodávejte LEGO sety a díly v aukcích. Pro sběratele, stavitele a LEGO nadšence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
