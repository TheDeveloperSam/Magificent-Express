"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import IntlTelInput from "@intl-tel-input/react/with-utils"
import "intl-tel-input/dist/css/intlTelInput.css"

// Easily change recipient: only update this one value
export const CONTACT_EMAIL = "samuel.sheriff987@gmail.com"

interface EmailContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailContactModal({ isOpen, onClose }: EmailContactModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [phoneError, setPhoneError] = useState("")

  const handleClose = () => {
    setPhoneNumber("")
    setIsPhoneValid(true)
    setPhoneError("")
    onClose()
  }

  const handleContinue = () => {
    // Validate phone if user typed something
    if (phoneNumber && !isPhoneValid) {
      setPhoneError("Please enter a valid phone number.")
      return
    }

    const subject = encodeURIComponent("Contact Request")

    const bodyLines = [
      "Name:",
      "Email:",
      `Phone Number: ${phoneNumber || ""}`,
      "Event Type:",
      "Message:",
      "How Can we help you?",
    ].join("\n")

    const body = encodeURIComponent(bodyLines)
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    handleClose()
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

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Send Us an Email</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Before scheduling your event with us, please make sure to include the following information:
          </p>
        </div>

        {/* Single popup checklist - exactly 5 items with descriptions */}
        <div className="space-y-4">
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Name</span>
                <p className="text-xs text-gray-500 dark:text-gray-500">John Doe</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Email</span>
                <p className="text-xs text-gray-500 dark:text-gray-500">johndoe@example.com or johndoe@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div className="flex-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Phone Number</span>
                <p className="text-xs text-gray-500 dark:text-gray-500">(123) 456 7890</p>
                {/* International phone input with country selector */}
                <div className="mt-2">
                  <IntlTelInput
                    initialCountry="us"
                    separateDialCode={true}
                    onChangeNumber={setPhoneNumber}
                    onChangeValidity={setIsPhoneValid}
                    inputProps={{
                      placeholder: "(123) 456 7890",
                      className:
                        "w-full h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm px-3",
                    }}
                  />
                  {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Event Type</span>
                <p className="text-xs text-gray-500 dark:text-gray-500">Wedding</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Message</span>
                <p className="text-xs text-gray-500 dark:text-gray-500">How Can we help you?</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" onClick={handleClose} className="flex-1">
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
