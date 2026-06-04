'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaHeadset
} from 'react-icons/fa'

const faqs = [
  {
    question: 'How do I book home healthcare?',
    answer:
      'Download the ExpressAid app, select the service you need, confirm your location, and submit the request. A verified healthcare professional will be assigned based on availability in your area.'
  },
  {
    question: 'How quickly will a professional arrive?',
    answer:
      'We aim to have a professional at your doorstep within 20–30 minutes. Response times may vary slightly depending on your area and demand at the time of booking.'
  },
  {
    question: 'What areas do you currently serve?',
    answer:
      'We currently serve Whitefield, Marathahalli, ITPL, and nearby areas in Bangalore. We are actively expanding — check the app for the latest coverage map.'
  },
  {
    question: 'How are professionals verified?',
    answer:
      'Every healthcare professional on our platform is qualified, background-checked, and identity-verified before onboarding. We monitor quality through user feedback.'
  },
  {
    question: 'What is the pricing for services?',
    answer:
      'Pricing is shown transparently in the app before you confirm your booking — no hidden charges. Rates vary by service type and area.'
  },
  {
    question: 'Can I cancel or reschedule a booking?',
    answer:
      'Yes. You can cancel or reschedule a booking through the app before the professional is dispatched. Please cancel as early as possible so the professional can be reassigned.'
  },
  {
    question: 'Is ExpressAid suitable for emergencies?',
    answer:
      'ExpressAid is designed for non-emergency, home-care situations. For medical emergencies, please call 108 or visit the nearest hospital immediately.'
  },
  {
    question: 'How do I delete my account?',
    answer: (
      <>
        You can request account deletion through the{' '}
        <Link href="/delete" className="text-indigo-600 underline hover:text-indigo-800">
          account deletion page
        </Link>
        . Your data will be removed as per our{' '}
        <Link href="/privacy-policy" className="text-indigo-600 underline hover:text-indigo-800">
          Privacy Policy
        </Link>
        .
      </>
    )
  }
]

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900">{question}</span>
        {open ? (
          <FaChevronUp className="ml-4 shrink-0 text-indigo-500" />
        ) : (
          <FaChevronDown className="ml-4 shrink-0 text-slate-400" />
        )}
      </button>
      {open && (
        <div className="border-t border-slate-100 px-6 pb-5 pt-4 text-slate-600">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function SupportPage() {
  return (
    <div className="bg-[#f4f5fb] font-sans text-gray-800 antialiased">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#5953eb] px-6 py-12 text-white shadow-[0_35px_90px_rgba(59,44,199,0.35)] md:px-10 md:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <FaHeadset className="mr-2 text-cyan-200" /> We&apos;re here to help
              </div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">Support Center</h1>
              <p className="mt-4 text-lg text-white/85">
                Find answers to common questions or reach our team directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-slate-900">Contact us</h2>
          <a
            href="mailto:support@expressaid.in"
            className="flex max-w-md items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition hover:shadow-[0_12px_40px_rgba(89,83,235,0.15)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
              <FaEnvelope className="text-indigo-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-1 text-sm text-indigo-600">support@expressaid.in</p>
              <p className="mt-1 text-xs text-slate-500">Response within 24 hours</p>
            </div>
          </a>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Emergency Disclaimer */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <FaCheckCircle className="mt-0.5 shrink-0 text-amber-500" />
            <p className="text-sm text-amber-900">
              <strong>Medical Emergency?</strong> ExpressAid is not an emergency service.
              If you or someone is experiencing a medical emergency, please call{' '}
              <strong>108</strong> or visit the nearest hospital immediately.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
