import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/header";
import { Inter, PT_Sans_Caption } from "next/font/google";

export const metadata: Metadata = {
  title: "Stardew Valley Bundles",
  description: "Um app para ajudar com os Bundles do Stardew Valley",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${ptSansCaption.className} flex justify-center items-center mt-10 bg-beige-100`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
