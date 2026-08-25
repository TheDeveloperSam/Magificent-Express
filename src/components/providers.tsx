"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { AuthProvider } from "@/contexts/AuthContext"
import { KindeProvider } from "@kinde-oss/kinde-auth-react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <KindeProvider
      clientId="cb0445622c134c0aa39775f5a554f2f6"
      domain="https://magnificentexpress.kinde.com"
      redirectUri="https://magificent-express.vercel.app"
      logoutUri="https://magificent-express.vercel.app"
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </KindeProvider>
  )
}
