"use client"

import { type ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)

    // Fade in animation
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className="transition-opacity duration-500 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
