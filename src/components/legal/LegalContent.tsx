"use client"

import { useEffect, useRef } from "react"
import { PanelLeftOpen } from "lucide-react"

interface Section {
  id: string
  title: string
}

interface LegalContentProps {
  children: React.ReactNode
  sections: Section[]
  onActiveSectionChange: (id: string) => void
  onReopenSidebar: () => void
  isSidebarOpen: boolean
}

export default function LegalContent({ 
  children, 
  sections, 
  onActiveSectionChange,
  onReopenSidebar,
  isSidebarOpen 
}: LegalContentProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Set up IntersectionObserver for scroll-spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveSectionChange(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper portion of viewport
        threshold: 0,
      }
    )

    observerRef.current = observer

    // Observe all sections by ID
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections, onActiveSectionChange])

  return (
    <div className="flex-1 min-w-0">
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Reopen button (only shown when sidebar is closed on desktop) */}
        {!isSidebarOpen && (
          <button
            onClick={onReopenSidebar}
            className="hidden md:flex items-center gap-2 mb-6 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <PanelLeftOpen className="h-4 w-4" />
            Show table of contents
          </button>
        )}

        {/* Mobile "On this page" section */}
        <div className="md:hidden mb-6">
          <details className="bg-gray-50 dark:bg-surface rounded-lg border border-gray-200 dark:border-gray-800">
            <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-900 dark:text-white">
              On this page
            </summary>
            <nav className="px-4 pb-4">
              <ul className="space-y-2 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {children}
        </div>
      </div>
    </div>
  )
}