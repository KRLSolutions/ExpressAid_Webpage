'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SUPPORT_EMAIL } from '@/lib/site'
import {
  FaEnvelope,
  FaUserMd,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFileAlt,
  FaMobileAlt
} from 'react-icons/fa'

const applyMailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'Doctor application — ExpressAid'
)}&body=${encodeURIComponent(
  `Hello ExpressAid team,

I would like to apply as a doctor for home visits.

Full name:
Phone number:
Email:
Qualification (for example, MBBS):
Medical registration number and council:
Areas I can cover:
Availability (days and times):

I have attached my resume and registration proof.

Thank you.`
)}`

const steps = [
  {
    title: 'Go online in the app',
    body: 'After you are onboarded, use the ExpressAid app to receive nearby home-visit requests.'
  },
  {
    title: 'Accept a booking',
    body: 'Review the request and accept visits you can reach. You will see the patient’s location in the app.'
  },
  {
    title: 'Travel to the patient',
    body: 'Go to the patient’s home in the service area. ExpressAid currently starts in Bellandur, Bengaluru.'
  },
  {
    title: 'Complete the consultation',
    body: 'Provide a non-emergency consultation at the patient’s location, then mark the visit complete in the app.'
  }
]

const includeInEmail = [
  'Your resume or CV',
  'Full name and phone number',
  'Qualification and medical registration details',
  'A copy of your registration certificate',
  'Government photo ID',
  'Areas you can cover and your weekly availability'
]

export default function CareersPage() {
  return (
    <div className="bg-[#f4f5fb] font-sans text-gray-800 antialiased">
      <Navigation />

      <main>
        <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#5953eb] px-6 py-12 text-white shadow-[0_35px_90px_rgba(59,44,199,0.35)] md:px-10 md:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <FaUserMd className="mr-2 text-cyan-200" /> Careers for doctors
              </div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">Join ExpressAid as a doctor</h1>
              <p className="mt-4 text-lg text-white/85">
                Take home-visit bookings and consult patients at their location, starting in Bellandur.
              </p>
              <a
                href={applyMailto}
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-[#111827] transition hover:bg-slate-100"
              >
                <FaEnvelope className="mr-2" /> Email your application
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900">What you will do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
                <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-black text-slate-900">{step.title}</h3>
                <p className="mt-3 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
              <h2 className="text-2xl font-black text-slate-900">Who can apply</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                  <span>You are a registered medical doctor (MBBS or an equivalent recognized qualification).</span>
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                  <span>You have a valid medical registration and can share proof with your application.</span>
                </li>
                <li className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-indigo-600" />
                  <span>You can travel to patients in Bellandur and nearby areas in Bengaluru.</span>
                </li>
                <li className="flex gap-3">
                  <FaMobileAlt className="mt-1 shrink-0 text-indigo-600" />
                  <span>You can use a smartphone to accept and complete visits in the ExpressAid app.</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-slate-500">
                ExpressAid is for non-emergency home consultations. Emergencies should go to a hospital or 108.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
              <h2 className="text-2xl font-black text-slate-900">How to apply</h2>
              <p className="mt-3 text-slate-600">
                Email <a className="font-semibold text-indigo-600" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with
                your resume and the details below. There is no in-app form — the hiring team reviews applications from this inbox.
              </p>
              <ul className="mt-5 space-y-3 text-slate-700">
                {includeInEmail.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FaFileAlt className="mt-1 shrink-0 text-indigo-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={applyMailto}
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#5953eb] px-5 py-3 font-semibold text-white transition hover:bg-[#4a44d4]"
              >
                <FaEnvelope className="mr-2" /> Email support@expressaid.in
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
