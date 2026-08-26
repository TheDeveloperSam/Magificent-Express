"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

// Easily change recipient: only update this one value
export const CONTACT_EMAIL = "samuel.sheriff987@gmail.com"

interface EmailContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailContactModal({ isOpen, onClose }: EmailContactModalProps) {
  const [showHeadsUp, setShowHeadsUp] = useState(false)

  const handleClose = () => {
    setShowHeadsUp(false)
    onClose()
  }

  const handleContinue = () => {
    // Required mailto behavior: blank email, only recipient
    window.location.href = `mailto:${CONTACT_EMAIL}`
    // Automatically switch website to Heads-Up UI
    setShowHeadsUp(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop - same style as old form popup */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal - same style as old form popup */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {!showHeadsUp ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Send Us an Email</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                We&apos;ll open your default email app so you can write to us directly.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleContinue} className="flex-1">
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
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
                <li>Your contact information</li>
                <li>A clear explanation of what you need</li>
                <li>Any important details related to your request</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                The email opened in your default app should be blank — please type your own subject and message there. These instructions are only shown here on the website.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button onClick={handleClose} className="flex-1">
                Got it
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
