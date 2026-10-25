'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { LEGAL_LAST_UPDATED } from '@/lib/site'

export default function AboutUsPage() {
  return (
    <div className="bg-[#f4f5fb] font-sans text-gray-800 antialiased">
      <Navigation />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-black text-slate-900">About ExpressAid</h1>
            <p className="mt-3 text-slate-600">A doctor at home in minutes</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-800">
            <p>
              <strong>ExpressAid</strong> connects patients with verified doctors for on-demand
              home visits. A doctor travels to the patient&apos;s location for a consultation—
              booked conveniently through the app.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-slate-900">Our mission</h2>
            <p>
              To make doctor care more accessible by sending verified doctors directly to
              people&apos;s homes, reducing unnecessary hospital visits, and helping families receive
              a timely consultation when they need it.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-slate-900">Why ExpressAid</h2>
            <ul className="list-disc pl-6">
              <li>Fast doctor dispatch in selected service areas</li>
              <li>A doctor visits the patient&apos;s home</li>
              <li>Verified doctors</li>
              <li>Convenient booking and transparent pricing through the app</li>
              <li>Useful for elders, families, and follow-up consultations</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold text-slate-900">Where we operate</h2>
            <p>
              We are starting with <strong>Bellandur</strong>, with plans to expand
              across Bengaluru. Check the app for the latest service areas.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-slate-900">Doctors</h2>
            <p>
              Registered doctors can apply to join ExpressAid and take home-visit bookings in
              Bellandur. See the{' '}
              <Link href="/careers" className="text-indigo-600 underline hover:text-indigo-800">
                Careers
              </Link>{' '}
              page for what the role involves and how to send your resume to support@expressaid.in.
            </p>

            <p className="mt-8 text-sm text-slate-500">Page last updated: {LEGAL_LAST_UPDATED}</p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-[#5953eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a44d4]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
