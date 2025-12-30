import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/i18n/client";
import PageRevealer from "@/components/PageRevealer/PageRevealer";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import PortalCleanup from "@/components/PortalCleanup/PortalCleanup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monopolis",
description: "Monopolis - Boutique real estate agency in Belgium offering premium property services including sales, rentals, and asset management. Discover exceptional properties in Brussels, Flanders, and Wallonia with our expert team.",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Text:ital@0;1&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Major+Mono+Display&family=Monsieur+La+Doulaise&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/osp-din" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <PortalCleanup />
          <Navbar />
          <PageRevealer />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
