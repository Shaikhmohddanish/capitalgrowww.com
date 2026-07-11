import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { PhoneButton } from "@/components/phone-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stock Market Xperts - Professional Trading Solutions",
  description: "Empowering Traders and Investors with market insights and professional trading solutions",
  keywords: "trading, intraday, stock market, investment, market analysis, trading tips",
  authors: [{ name: "Stock Market Xperts" }],
  creator: "Stock Market Xperts",
  publisher: "Stock Market Xperts",
  robots: "index, follow",
  openGraph: {
    title: "Stock Market Xperts - Professional Trading Solutions",
    description: "Empowering Traders and Investors with market insights and professional trading solutions",
    url: "https://stockmarketxperts.com",
    siteName: "stockmarketxperts.com",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/Fevicon.png", type: "image/png" }
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Fevicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <DisclaimerBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <PhoneButton />
        <ContactButtons />
      </body>
    </html>
  )
}
