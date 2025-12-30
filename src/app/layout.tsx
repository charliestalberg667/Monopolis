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
  title: "Monopolis | Boutique Real Estate in Belgium | Premium Properties",
  description: "Discover premium properties in Belgium with Monopolis. Expert real estate services for buying, selling, and renting exceptional homes in Brussels, Flanders, and Wallonia.",
  metadataBase: new URL('https://monopolis.be'),
  keywords: ["real estate Belgium", "buy property Brussels", "luxury homes Belgium", "rent apartment Flanders", "Wallonia properties", "Belgian real estate agency", "property management Belgium", "investment properties Belgium"],
  authors: [{ name: "Monopolis Real Estate", url: "https://monopolis.be" }],
  creator: "Monopolis Real Estate",
  publisher: "Monopolis Real Estate",
  openGraph: {
    title: "Monopolis | Boutique Real Estate in Belgium",
    description: "Discover premium properties in Belgium with Monopolis. Expert real estate services for buying, selling, and renting exceptional homes in Brussels, Flanders, and Wallonia.",
    url: "https://monopolis.be",
    siteName: "Monopolis",
    images: [
      {
        url: "/logo-green.png",
        width: 800,
        height: 600,
        alt: "Monopolis Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monopolis | Boutique Real Estate in Belgium",
    description: "Discover premium properties in Belgium with Monopolis. Expert real estate services for buying, selling, and renting exceptional homes.",
    images: ["/logo-green.png"],
    creator: "@monopolis_be",
    site: "@monopolis_be",
  },
  icons: {
    icon: "/logo-green.png",
    apple: "/logo-green.png",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://monopolis.be",
    languages: {
      en: "https://monopolis.be/en",
      fr: "https://monopolis.be/fr",
      nl: "https://monopolis.be/nl",
    },
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

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
