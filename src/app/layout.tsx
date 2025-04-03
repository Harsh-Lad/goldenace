import NavigationMenuFooter from "@/components/common/navigation-menu";
import Footer from "@/components/common/page-footer";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import localFont from "next/font/local"
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
  title: "Goldenace-Ventures",
  description: "Golden Ace Ventures LLP",
  icons: {
    icon: "./favicon.ico", // Path to your favicon
  },
};

const provicali = localFont({
  src: "../../public/assets/fonts/provicali/Provicali.otf",
  variable: "--font-provicali",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${provicali.variable} antialiased dark`}>
        <Providers>
          <NextTopLoader showSpinner={false} color="#FFBF00" />
          {children}
          <NavigationMenuFooter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}