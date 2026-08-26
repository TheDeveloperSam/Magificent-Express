import type { Metadata } from "next"
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

const themeScript = `(function(){try{var d=document.documentElement,c=d.classList,e=localStorage.getItem('theme');if(e==='dark'||(e!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){c.add('dark');d.style.colorScheme='dark'}else{c.add('light');d.style.colorScheme='light'}}catch(t){}})()`

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}