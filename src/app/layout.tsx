import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { siteConfig } from "./siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Marketing',
    'Database',
    'Software',
  ],
  authors: [
    {
      name: 'yourname',
      url: '',
    },
  ],
  creator: 'yourname',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@yourname',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark:bg-gray-950 min-h-screen selection:bg-indigo-100 selection:text-indigo-700`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
