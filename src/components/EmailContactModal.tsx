"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { XIcon, User, Mail, Phone, MessageSquare } from "lucide-react"

// Easily change recipient: only update this one value
export const CONTACT_EMAIL = "samuel.sheriff987@gmail.com"

const EVENT_TYPES = [
  "General Inquiry",
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Anniversary",
  "Private Dining",
  "Catering",
  "Other",
] as const

interface EmailContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailContactModal({ isOpen, onClose }: EmailContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [eventType, setEventType] = useState<string>("General Inquiry")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setEventType("General Inquiry")
    setMessage("")
    setError("")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleContinue = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in Name, Email and Message.")
      return
    }
    // Basic email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    const subject = encodeURIComponent(eventType || "General Inquiry")
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Event Type: ${eventType}`,
      "",
      `Message:`,
      message,
    ].filter(Boolean).join("\n")

    const body = encodeURIComponent(bodyLines)
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal - same style as old popup */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manually Send Email
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Fill in your details below. We&apos;ll prepare your email for you.
          </p>
        </div>

        <div className="space-y-4">
          {error && <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-2">{error}</p>}

          <div className="space-y-2">
            <Label htmlFor="manual-name">Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
              <Input
                id="manual-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="manual-email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
              <Input
                id="manual-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="manual-phone">Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
              <Input
                id="manual-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(123) 456-7890"
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Event Type</Label>
            <Select value={eventType} onValueChange={(v) => v && setEventType(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EVENT_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="manual-message">Message *</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-orange-500" />
              <textarea
                id="manual-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                rows={4}
                className="w-full pl-9 pr-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleContinue} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
            Continue to Email
          </Button>
        </div>
      </div>
    </div>
  )
}
