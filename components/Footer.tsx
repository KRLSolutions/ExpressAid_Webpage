'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LEGAL_LAST_UPDATED } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="" width={40} height={28} className="h-7 w-10 object-contain" aria-hidden />
              <span className="text-lg font-black tracking-tight">ExpressAid</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Healthcare at home in minutes. Connect with qualified healthcare professionals for
              on-demand visits, vitals, injections, wound care, and more—booked from your phone.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Now in Whitefield · expanding across Bengaluru
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-300">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#how-it-works" className="text-slate-400 transition hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-400 transition hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#download" className="text-slate-400 transition hover:text-white">
                  Download app
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-300">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="text-slate-400 transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 transition hover:text-white">
                  Support &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 transition hover:text-white">
                  For healthcare professionals
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 transition hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-400 transition hover:text-white">
                  Terms &amp; conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} ExpressAid. All rights reserved.
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Policies last updated {LEGAL_LAST_UPDATED}</span>
          </p>
          <p className="mt-2 text-center text-xs text-slate-600 md:text-left">
            For medical emergencies, visit your nearest hospital immediately.
          </p>
        </div>
      </div>
    </footer>
  )
}
