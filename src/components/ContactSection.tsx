"use client"

import { useState } from "react"
import { Mail, FileText, ArrowUpRight } from "lucide-react"
import ContactForm from "./ContactForm"
import EmailContactModal from "./EmailContactModal"

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState<"form" | "email" | null>(null)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const handleEmailClick = () => {
    setIsEmailModalOpen(true)
  }

  const handleFormClick = () => {
    setContactMethod("form")
  }

  const handleBack = () => {
    setContactMethod(null)
  }

  return (
    <section className="w-full bg-white dark:bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Contact heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Contact Us
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-gray-400 md:text-3xl">
            Get in touch with our team
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            Choose how you'd like to reach us - either through our contact form or directly via email.
          </p>
        </div>

        {/* Contact method selection */}
        {!contactMethod && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Option 1: Contact Form */}
            <button
              onClick={handleFormClick}
              className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                  <FileText className="h-6 w-6" />
                </div>

                <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Submit a Request
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Best for customers who want to fill out a structured form. Your information is saved to our database and appears in our private dashboard, where we can review and manage your request before responding.
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                Fill out form →
              </div>
            </button>

            {/* Option 2: Send Email */}
            <button
              onClick={handleEmailClick}
              className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
                  <Mail className="h-6 w-6" />
                </div>

                <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Send an Email
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Best for customers who prefer using their own email application. Before opening your email application, we'll show you a helpful popup reminding you to include important information.
              </p>

              <div className="mt-4 text-sm font-medium text-green-600 dark:text-green-400">
                Open email client →
              </div>
            </button>
          </div>
        )}

        {/* Contact Form */}
        {contactMethod === "form" && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-6 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
            >
              ← Back to contact options
            </button>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Submit Your Request
              </h3>
              <ContactForm />
            </div>
          </div>
        )}

        {/* Email Modal */}
        <EmailContactModal 
          isOpen={isEmailModalOpen} 
          onClose={() => setIsEmailModalOpen(false)} 
        />

      </div>
    </section>
  )
}