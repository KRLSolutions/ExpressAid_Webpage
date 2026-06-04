'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionHref = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-100/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-indigo-100 bg-white px-3 py-2 shadow-[0_8px_30px_rgba(76,70,229,0.08)] md:px-5">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg transition hover:opacity-90"
            onClick={closeMobileMenu}
            aria-label="ExpressAid home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={32}
              className="h-8 w-12 object-contain"
              aria-hidden
            />
            <span className="text-xl font-black tracking-tight text-blue-600">ExpressAid</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href={sectionHref('services')} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Services</a>
            <a href={sectionHref('how-it-works')} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">How It Works</a>
            <a href={sectionHref('pricing')} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Pricing</a>
            <a href={sectionHref('locations')} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Locations</a>
            <Link href="/terms-and-conditions" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Terms</Link>
            <Link href="/privacy-policy" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Privacy</Link>
            <Link href="/about-us" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">About</Link>
            <Link href="/support" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Support</Link>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mx-4 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-lg transition-all duration-300 sm:mx-6 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[420px] p-3 opacity-100' : 'max-h-0 p-0 opacity-0'
        }`}
      >
        <div className="space-y-1">
          <Link href="/" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Home</Link>
          <a href={sectionHref('services')} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Services</a>
          <a href={sectionHref('how-it-works')} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>How It Works</a>
          <a href={sectionHref('pricing')} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Pricing</a>
          <a href={sectionHref('locations')} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Locations</a>
          <Link href="/terms-and-conditions" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Terms & Conditions</Link>
          <Link href="/privacy-policy" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Privacy Policy</Link>
          <Link href="/about-us" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/support" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={closeMobileMenu}>Support</Link>
        </div>
      </div>
    </nav>
  )
} 