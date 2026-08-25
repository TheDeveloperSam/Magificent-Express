"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-surface shadow-sm relative z-50 font-sans dark:shadow-gray-900/20">
      {/* Logo */}
      <div>
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Magnificent Express"
            width={200}
            height={60}
            className="h-[60px] w-auto object-fill"
            priority
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-50 relative cursor-pointer text-black dark:text-white"
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 ${
            isMenuOpen ? "stroke-white" : "stroke-current"
          }`}
          fill="none"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile full-screen menu */}
      <div
        className={`${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden fixed inset-0 bg-black/95 transition-all duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8 text-4xl text-white mb-12">
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="hover:text-purple-500 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="/categories"
                className="hover:text-purple-500 transition-colors"
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="/services"
                className="hover:text-purple-500 transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="/contact"
                className="hover:text-purple-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile auth buttons */}
          <div className="flex flex-col items-center space-y-4 w-64">
            <ThemeToggle />
            <Link href="/dashboard" onClick={closeMenu}>
              <button className="w-full bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-8 text-xl font-medium text-black dark:text-white">
        <li>
          <Link href="/" className="hover:text-purple-500 dark:hover:text-purple-400">
            Home
          </Link>
        </li>

        <li>
          <Link href="/categories" className="hover:text-purple-500 dark:hover:text-purple-400">
            Categories
          </Link>
        </li>

        <li>
          <Link href="/services" className="hover:text-purple-500 dark:hover:text-purple-400">
            Services
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:text-purple-500 dark:hover:text-purple-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop auth buttons */}
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <Link href="/dashboard">
          <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-200 cursor-pointer">
            Dashboard
          </button>
        </Link>
      </div>
    </nav>
  )
}