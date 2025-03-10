import NavigationMenuFooter from "@/components/common/navigation-menu";
import Footer from "@/components/common/page-footer";
import Header from "@/components/common/page-header";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type React from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goldenace Ventures",
  description: "Goldenace Ventures LLP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Providers>
          <NextTopLoader showSpinner={false} color="#FFBF00" />

          <Header />
          {children}
          <NavigationMenuFooter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
