import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/header";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Stardew Valley Bundles",
  description: "Um app para ajudar com os Bundles do Stardew Valley",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
