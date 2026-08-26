"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { LockIcon } from "lucide-react"

const DASHBOARD_PASSWORD = "HEL-2020"
const STORAGE_KEY = "dashboard_auth"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === DASHBOARD_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, DASHBOARD_PASSWORD)
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
    }
  }



  // Still checking auth
  if (isAuthenticated === null) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <Card className="w-full max-w-sm p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 mb-3">
              <LockIcon className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-semibold">Dashboard Access</h1>
            <p className="text-sm text-muted-foreground mt-1 text-center">
              Enter password to view contact requests
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Unlock
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <>
      {/* Provides logout via custom event - child pages can trigger */}
      <div className="hidden" data-dashboard-auth="true" />
      {children}
    </>
  )
}
