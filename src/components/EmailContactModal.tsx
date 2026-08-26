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
  const handleGotIt = () => {
    onClose()
    // Open default email app with blank subject/body, only recipient
    window.location.href = `mailto:${CONTACT_EMAIL}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop - same style as old form popup */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Single popup - Heads Up only */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full mx-4 p-6 max-h-[90vh] overflow-y-auto font-[var(--font-google-sans)]" style={{ fontFamily: "var(--font-google-sans)" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">⚠️ Heads Up!</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Before sending your email, please make sure your message includes the required information below.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Please include:</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
            <li>Your name</li>
            <li>Your contact information (For Example: Phone Number, Email Address, etc.</li>
            <li>A clear explanation of what you need</li>
            <li>Any important details related to your request</li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Please type your own subject and message there. These instructions are only shown here on the website.
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleGotIt} className="flex-1">
            Got It
          </Button>
        </div>
      </div>
    </div>
  )
}
