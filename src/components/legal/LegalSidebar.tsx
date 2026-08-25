"use client"

import { useEffect, useState, useRef } from "react"
import { PanelLeftClose } from "lucide-react"

interface Section {
  id: string
  title: string
}

interface LegalSidebarProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (id: string) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const STORAGE_KEYS = {
  WIDTH: "legal-sidebar-width",
  IS_OPEN: "legal-sidebar-open"
}

const DEFAULT_WIDTH = 300
const MIN_WIDTH = 220
const MAX_WIDTH = 450

export default function LegalSidebar({ sections, activeSection, onSectionClick, isOpen, onOpenChange }: LegalSidebarProps) {
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(DEFAULT_WIDTH)
  const [isDragging, setIsDragging] = useState(false)
  
  const sidebarRef = useRef<HTMLDivElement>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)

  // Load preferences from localStorage after mount
  useEffect(() => {
    setMounted(true)
    const savedWidth = localStorage.getItem(STORAGE_KEYS.WIDTH)
    
    if (savedWidth) {
      const parsedWidth = parseInt(savedWidth, 10)
      if (!isNaN(parsedWidth) && parsedWidth >= MIN_WIDTH && parsedWidth <= MAX_WIDTH) {
        setWidth(parsedWidth)
      }
    }
  }, [])

  // Save width to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.WIDTH, width.toString())
    }
  }, [width, mounted])

  // Save open state to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.IS_OPEN, isOpen.toString())
    }
  }, [isOpen, mounted])

  // Handle resize drag
  const handleDragStart = (e: React.PointerEvent) => {
    setIsDragging(true)
    e.preventDefault()
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  // Keyboard resize (accessibility)
  const handleDragKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setWidth((w) => Math.max(MIN_WIDTH, w - 16))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setWidth((w) => Math.min(MAX_WIDTH, w + 16))
    }
  }

  useEffect(() => {
    const handleDragMove = (e: PointerEvent) => {
      if (!isDragging || !sidebarRef.current) return

      const rect = sidebarRef.current.getBoundingClientRect()
      const next = e.clientX - rect.left
      if (next >= MIN_WIDTH && next <= MAX_WIDTH) {
        setWidth(next)
      }
    }

    const handleDragEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("pointermove", handleDragMove)
      document.addEventListener("pointerup", handleDragEnd)
      document.addEventListener("pointercancel", handleDragEnd)
      document.body.style.userSelect = "none"
    }

    return () => {
      document.removeEventListener("pointermove", handleDragMove)
      document.removeEventListener("pointerup", handleDragEnd)
      document.removeEventListener("pointercancel", handleDragEnd)
      document.body.style.userSelect = ""
    }
  }, [isDragging])

  const handleSectionClick = (id: string) => {
    onSectionClick(id)
  }

  if (!mounted) {
    return null
  }

  if (!isOpen) {
    return null // Reopen button is handled in LegalContent
  }

  return (
    <div
      ref={sidebarRef}
      className="hidden md:flex flex-col md:h-screen md:sticky md:top-0 shrink-0 bg-white dark:bg-surface border-r border-gray-200 dark:border-gray-800 relative"
      style={{ width: `${width}px` }}
    >
      {/* Header with close button */}
      <div className="flex items-center justify-between pl-4 pr-3 py-3 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          Contents
        </h2>
        <button
          onClick={() => onOpenChange(false)}
          className="group/close p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          aria-label="Hide table of contents"
          title="Hide table of contents"
        >
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-4" aria-label="Table of contents">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleSectionClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  activeSection === section.id
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Resize handle */}
      <div
        ref={dragHandleRef}
        onPointerDown={handleDragStart}
        onKeyDown={handleDragKeyDown}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize sidebar"
        tabIndex={0}
        className="absolute right-0 top-0 bottom-0 w-3 cursor-col-resize touch-none outline-none group focus-visible:ring-2 focus-visible:ring-purple-500 z-10 flex items-center justify-center"
      >
        <div
          className={`h-10 w-[3px] rounded-full transition-colors ${
            isDragging
              ? "bg-purple-500 dark:bg-purple-400"
              : "bg-gray-200 dark:bg-gray-700 group-hover:bg-purple-500 dark:group-hover:bg-purple-400"
          }`}
        />
      </div>
    </div>
  )
}