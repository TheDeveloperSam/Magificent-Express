"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/")
    }
  }, [isSignedIn, router])

  if (!isSignedIn) {
    return null
  }

  return <>{children}</>
}
