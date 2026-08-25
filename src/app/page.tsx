"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Slider from "@/components/Slider"
import Categories from "@/components/Categories"
import Services from "@/components/Services"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard")
    }
  }, [isSignedIn, router])

  if (isSignedIn) {
    return null
  }

  return (
    <>
      <Slider />
      <Categories />
      <Services />
      <ContactSection />
    </>
  )
}
