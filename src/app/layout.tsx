import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
feature/header
import Header from "@/components/shared/Header";

import FooterClient from "@/components/shared/Footer";

main

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUS Racing | Formula Student Team",
  description: "The official Formula Student team of the American University of Sharjah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
feature/header
        <Header />
        {children}
      </body>

  <main className="flex-1">
    {children}
  </main>

  <FooterClient />
</body>
main
    </html>
  );
}
