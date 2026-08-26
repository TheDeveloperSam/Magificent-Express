"use client"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

// Easily change recipient: only update this one value
export const CONTACT_EMAIL = "samuel.sheriff987@gmail.com"

interface EmailContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailContactModal({ isOpen, onClose }: EmailContactModalProps) {
  const handleContinue = () => {
    const subject = encodeURIComponent("Contact Request")

    // Template body with placeholders for the 5 required fields
    const bodyLines = [
      "Name:",
      "Email:",
      "Phone Number:",
      "Event Type:",
      "Message:",
      "How Can we help you?",
    ].join("\n")

    const body = encodeURIComponent(bodyLines)
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop - same style as old form popup */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal - same style as old form popup */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Send Us an Email</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Before opening your email application, please make sure to include the following information:
          </p>
        </div>

        {/* Single popup checklist - exactly 5 items */}
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Name</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Email</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Phone Number</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Event Type</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Message (How Can we help you?)</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleContinue} className="flex-1">
            Continue to Email
          </Button>
        </div>
      </div>
    </div>
  )
}
