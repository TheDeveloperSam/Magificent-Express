import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Google_Sans, Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html
      lang="en"
      className={cn("h-full", "antialiased", googleSans.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClerkProvider>
          <Providers>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}