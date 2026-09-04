'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/firebase'

export default function FirebaseAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams?.toString()
    const path = query ? `${pathname}?${query}` : pathname
    void trackPageView(path)
  }, [pathname, searchParams])

  return null
}
