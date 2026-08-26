"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { XIcon } from "lucide-react"

const BUSINESS_EMAIL = "samuel.sheriff987@gmail.com"

const EMAIL_SUBJECTS = [
  "General Inquiry",
  "Event Quote",
  "Catering Request",
  "Private Dining",
  "Other"
] as const

interface EmailContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailContactModal({ isOpen, onClose }: EmailContactModalProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>("General Inquiry")

  const handleContinue = () => {
    // Create mailto link with properly encoded subject
    const encodedSubject = encodeURIComponent(selectedSubject)
    const mailtoLink = `mailto:${BUSINESS_EMAIL}?subject=${encodedSubject}`
    
    // Open the mailto link
    window.location.href = mailtoLink
    
    // Close the modal
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Send Us an Email
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Before opening your email application, please make sure to include the following information:
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Your full name</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Your phone number</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A clear subject</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>The type of event or service you're interested in</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A detailed message explaining what you need</span>
            </li>
          </ul>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">Select a common subject:</label>
            <Select value={selectedSubject} onValueChange={(value) => value && setSelectedSubject(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EMAIL_SUBJECTS.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
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