"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect, useRef, useState } from "react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // `active` drives the grow (scale 1.1) effect. It is true while the cursor
  // hovers the icon (desktop) or while the icon is being pressed (touch), and
  // resets as soon as the cursor leaves / the touch ends. Because it is plain
  // React state, it re-triggers on EVERY entry — no CSS pseudo-state that could
  // get stuck or wait before replaying.
  const [active, setActive] = useState(false)
  // Guards against the simulated mouse events browsers emit after a touch tap
  // (keeps mobile from staying "stuck" grown).
  const isTouchRef = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  if (!mounted) {
    // Keep the same footprint as the real toggle to avoid layout shift
    return <div className="h-10 w-10" aria-hidden="true" />
  }

  // Desktop: grow while the cursor is over the icon; reset when it leaves.
  const handleMouseEnter = () => {
    if (isTouchRef.current) return
    setActive(true)
  }
  const handleMouseLeave = () => setActive(false)

  // Touch: grow only while actively pressed; never stuck on after a tap.
  const handleTouchStart = () => {
    isTouchRef.current = true
    setActive(true)
  }
  const releaseTouch = () => {
    setActive(false)
    // Re-enable genuine mouse hover once the tap's simulated events settle.
    window.setTimeout(() => {
      isTouchRef.current = false
    }, 0)
  }
  const handleTouchEnd = releaseTouch
  const handleTouchCancel = releaseTouch

  // Keyboard focus also grows the icon (mirrors the :focus rule in .hvr-grow).
  const handleFocus = () => setActive(true)
  const handleBlur = () => setActive(false)

  const iconClass = `h-10 w-10 fill-current transition duration-300 ease-in-out transform ${
    active ? "scale-110" : "scale-100"
  }`

  return (
    <label
      className="swap swap-rotate text-gray-900 dark:text-white cursor-pointer rounded-full"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Hidden checkbox drives the swap-rotate state (daisyUI swap) */}
      <input
        type="checkbox"
        className="pointer-events-none opacity-0"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />

      {/* Sun icon (shown in light mode) */}
      <svg
        className={`swap-off ${iconClass}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* Moon icon (shown in dark mode) */}
      <svg
        className={`swap-on ${iconClass}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  )
}
