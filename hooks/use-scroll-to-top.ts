"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Scroll to top on initial load
    window.scrollTo(0, 0)

    return () => {}
  }, [])
}
