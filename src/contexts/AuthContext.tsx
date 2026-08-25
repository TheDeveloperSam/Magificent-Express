"use client"

import { createContext, useContext, ReactNode } from "react"
import { useKindeAuth } from "@kinde-oss/kinde-auth-react"

interface AuthContextType {
  isSignedIn: boolean
  signIn: () => void
  signOut: () => void
  register: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, login, logout, register } = useKindeAuth()

  const signIn = () => login()
  const signOut = () => logout()

  return (
    <AuthContext.Provider value={{ isSignedIn: isAuthenticated, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}