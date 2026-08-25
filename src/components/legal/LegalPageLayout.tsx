"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import LegalSidebar from "./LegalSidebar"
import LegalContent from "./LegalContent"

interface Section {
  id: string
  title: string
}

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  sections: Section[]
  children: React.ReactNode
}

export default function LegalPageLayout({ 
  title, 
  lastUpdated, 
  sections, 
  children 
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load sidebar state from localStorage
    const savedOpen = localStorage.getItem("legal-sidebar-open")
    if (savedOpen !== null) {
      setIsSidebarOpen(savedOpen === "true")
    }
  }, [])

  useEffect(() => {
    // Set initial active section to first section
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id)
    }
  }, [sections, activeSection])

  const handleSectionClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleReopenSidebar = () => {
    setIsSidebarOpen(true)
  }

  const handleSidebarOpenChange = (open: boolean) => {
    setIsSidebarOpen(open)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-surface">
      {/* Page header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400 dark:text-gray-500">
                /
              </li>
              <li aria-current="page" className="font-medium text-gray-900 dark:text-white">
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="flex flex-col md:flex-row md:items-start">
        <LegalSidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isOpen={isSidebarOpen}
          onOpenChange={handleSidebarOpenChange}
        />
        <LegalContent
          sections={sections}
          onActiveSectionChange={setActiveSection}
          onReopenSidebar={handleReopenSidebar}
          isSidebarOpen={isSidebarOpen}
        >
          {children}
        </LegalContent>
      </div>
    </div>
  )
}