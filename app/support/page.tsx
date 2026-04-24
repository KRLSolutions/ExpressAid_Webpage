'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaHeadset
} from 'react-icons/fa'

const faqs = [
  {
    question: 'How do I book a nurse or doctor?',
    answer:
      'Download the ExpressAid app, select the service you need (Nurse Visit or Doctor Consultation), confirm your location, and submit the request. A verified professional will be assigned and on the way within minutes.'
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
    question: 'How are nurses and doctors verified?',
    answer:
      'Every professional on our platform is licensed, background-checked, and has undergone identity verification before being onboarded. We continuously monitor quality through patient feedback.'
  },
  {
    question: 'What is the pricing for services?',
    answer:
      'Nurse visits start from ₹500 and doctor consultations start from ₹300. The exact price is shown before you confirm your booking — no hidden charges.'
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
          <div className="grid gap-5 sm:grid-cols-3">
            <a
              href="mailto:sumeet.mathpati@gmail.com"
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition hover:shadow-[0_12px_40px_rgba(89,83,235,0.15)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                <FaEnvelope className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-sm text-indigo-600">sumeet.mathpati@gmail.com</p>
                <p className="mt-1 text-xs text-slate-500">Response within 24 hours</p>
              </div>
            </a>

            <a
              href="tel:+918884411444"
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition hover:shadow-[0_12px_40px_rgba(89,83,235,0.15)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <FaPhone className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="mt-1 text-sm text-emerald-600">+91 88844 11444</p>
                <p className="mt-1 text-xs text-slate-500">Mon – Sat, 8 AM – 8 PM</p>
              </div>
            </a>

            <a
              href="https://wa.me/918884411444"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition hover:shadow-[0_12px_40px_rgba(89,83,235,0.15)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">WhatsApp</p>
                <p className="mt-1 text-sm text-green-600">+91 88844 11444</p>
                <p className="mt-1 text-xs text-slate-500">Quick responses during business hours</p>
              </div>
            </a>
          </div>
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
