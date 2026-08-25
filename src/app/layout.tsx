import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Google_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Providers } from "@/components/providers"

const googleSans = Google_Sans({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-google-sans",
})

export const metadata: Metadata = {
  title: "Magnificent Express",
  description: "Magnificent Express",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${googleSans.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <Providers>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}