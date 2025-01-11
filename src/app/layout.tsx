import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "./siteConfig"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

function Banner() {
  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 transition">
      <div className="flex items-center gap-x-1 rounded-full bg-gray-950 p-1 text-sm shadow-xl shadow-black/20 ring-1 ring-white/10">
        <a
          className="group flex items-center gap-0.5 whitespace-nowrap rounded-[20px] bg-gradient-to-b from-white to-gray-200 px-4 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-indigo-400/30 transition"
          href="https://blocks.tremor.so/templates#template-database"
          target="_blank"
        >
          Get this template
          <ArrowAnimated />
        </a>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
          <Banner />
        </ThemeProvider>
      </body>
    </html>
  )
}
