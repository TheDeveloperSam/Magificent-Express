"use client"

import {
  Mail,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react"

export default function ContactSection() {
  const email = "samuel.sheriff987@gmail.com"
  const phone = "YOUR_PHONE_NUMBER"

  return (
    <section className="w-full bg-white dark:bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Contact heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Contact Us
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-gray-400 md:text-3xl">
            Chat to our friendly team
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            
          </p>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                <Mail className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              Email
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Send us an email and we'll get back to you.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
              {email}
            </p>
          </a>

          {/* Live Chat */}
          <button
            type="button"
            className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                <MessageCircle className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              Live Chat
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Chat with our team and get help in real time.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
              Start a conversation
            </p>
          </button>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                <Phone className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              Phone
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Give us a call if you'd like to speak with us directly.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
              {phone}
            </p>
          </a>

        </div>

        {/* Simple mailto CTA */}
        <div className="mt-10 text-center">
          <a
            href={`mailto:${email}`}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black dark:bg-white px-6 py-3 font-medium text-white dark:text-black transition-all border-gray-800 dark:border-gray-200 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  )
}