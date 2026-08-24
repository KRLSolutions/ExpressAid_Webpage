'use client'

import React, { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import AppScrollStory from '@/components/AppScrollStory'
import AppScreen from '@/components/AppScreen'
import Image from 'next/image'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/site'
import {
  FaApple,
  FaCheckCircle,
  FaClock,
  FaGooglePlay,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaRupeeSign,
  FaShieldAlt,
  FaStar,
  FaUserMd,
  FaUserNurse
} from 'react-icons/fa'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const playStoreLink = PLAY_STORE_URL
  const appStoreLink = APP_STORE_URL
  const phoneOffset = Math.min(scrollY * 0.09, 45)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.pageYOffset > 300)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.14 }
    )

    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#f4f5fb] font-sans text-gray-800 antialiased">
      <Navigation />

      <main className="pb-24">
        <section className="px-4 pb-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#5953eb] text-white shadow-[0_35px_90px_rgba(59,44,199,0.35)]">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -left-32 top-16 h-[1px] w-[160%] rotate-[8deg] bg-white/35" />
              <div className="absolute -left-40 top-72 h-[1px] w-[160%] -rotate-[8deg] bg-white/35" />
              <div className="absolute -left-36 bottom-20 h-[1px] w-[160%] rotate-[6deg] bg-white/35" />
            </div>

            <div className="relative z-10 px-6 py-8 md:px-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center lg:grid-cols-[1.1fr_0.95fr_0.9fr]">
                <div className="fade-in md:order-1" data-reveal>
                  <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                    <FaMapMarkerAlt className="mr-2 text-cyan-200" /> Whitefield &amp; Marathahalli · expanding in Bengaluru
                  </p>
                  <h2 className="max-w-lg text-4xl font-black leading-[1.04] sm:text-5xl lg:text-[3.2rem]">
                    Healthcare at Home in Minutes
                  </h2>
                  <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                    Book qualified healthcare professionals for home visits, vitals monitoring,
                    injections, wound care, and more — all from your phone.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-base font-semibold text-[#101828] transition hover:bg-slate-100"
                    >
                      <FaApple className="mr-2 text-lg" /> Download App
                    </a>
                    <a
                      href={playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/20"
                    >
                      <FaGooglePlay className="mr-2 text-lg" /> Get it on Google Play
                    </a>
                    <a
                      href="/support"
                      className="inline-flex items-center justify-center rounded-2xl border border-[#a8f18f]/50 bg-[#a8f18f]/20 px-5 py-3 text-base font-semibold text-white transition hover:bg-[#a8f18f]/30"
                    >
                      <FaUserNurse className="mr-2 text-lg" /> Become a Healthcare Professional
                    </a>
                  </div>
                </div>

                <div
                  className="relative mx-auto w-[min(260px,72vw)] max-w-[300px] transition-transform duration-150 md:order-2 md:mx-0 md:justify-self-center lg:max-w-[320px]"
                  style={{ transform: `translateY(${phoneOffset}px)` }}
                >
                  <AppScreen
                    src="/marketing/01_care_at_home.png"
                    alt="ExpressAid care at home screen"
                    priority
                    sizes="(max-width: 1024px) 220px, 300px"
                  />
                </div>

                <div className="fade-in rounded-2xl bg-[#a8f18f]/20 p-4 md:order-3 md:col-span-2 lg:col-span-1 lg:pl-5" data-reveal>
                  <div className="grid grid-cols-2 gap-4 border-b border-white/25 pb-5 text-white/95">
                    <div>
                      <p className="text-xs uppercase text-white/70">Care model</p>
                      <p className="text-lg font-black leading-tight">At your doorstep</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-white/70">For</p>
                      <p className="text-lg font-black leading-tight">Families &amp; elders</p>
                    </div>
                  </div>
                  <p className="mt-5 text-white/85">
                    Qualified, verified professionals. Convenient app booking and transparent
                    pricing—without unnecessary hospital visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppScrollStory appStoreLink={appStoreLink} playStoreLink={playStoreLink} />

        <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="fade-in mb-8 max-w-2xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">Services</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Home healthcare, when you need it</h2>
            <p className="mt-3 text-slate-600">
              Vitals, injections, wound care, elderly support, and more—booked through the app.
            </p>
          </div>
          <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-slate-200 md:grid-cols-4">
            {(
              [
                {
                  title: 'Not Feeling Well',
                  desc: 'Home visits when you need care without a hospital trip.',
                  icon: <FaUserMd className="text-2xl text-indigo-600" />,
                  classes: 'bg-white text-slate-900'
                },
                {
                  title: 'Vitals & Injections',
                  desc: 'BP, sugar, temperature, O₂, injections, and IV fluids at home.',
                  icon: <FaUserNurse className="text-2xl text-emerald-700" />,
                  classes: 'bg-[#b8f39f] text-slate-900'
                },
                {
                  title: 'Wound & Elderly Care',
                  desc: 'Dressing, catheter care, nursing procedures, and elder support.',
                  icon: <FaShieldAlt className="text-2xl text-indigo-600" />,
                  classes: 'bg-white text-slate-900'
                },
                {
                  title: 'Now in Bengaluru',
                  desc: 'Whitefield & Marathahalli first—expanding across the city.',
                  icon: <FaMapMarkerAlt className="text-2xl text-white" />,
                  classes: 'bg-[#5953eb] text-white',
                  anchorId: 'locations' as const
                }
              ] as const
            ).map((card) => (
              <article
                key={card.title}
                id={'anchorId' in card ? card.anchorId : undefined}
                className={`fade-in p-7 md:min-h-[250px] ${card.classes}`}
                data-reveal
              >
                {card.icon}
                <h3 className="mt-6 text-3xl font-black leading-tight">{card.title}</h3>
                <p className="mt-4 text-sm opacity-85">{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="fade-in rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)]" data-reveal>
              <h2 className="text-2xl font-black text-slate-900">Fast nurse dispatch</h2>
              <p className="mt-4 flex items-center text-slate-700">
                <FaClock className="mr-2 text-indigo-600" />
                Quick connection with nearby professionals in service areas
              </p>
              <p className="mt-3 text-sm text-slate-500">Response times may vary by location and demand.</p>
            </div>
            <div className="fade-in rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)]" data-reveal>
              <h2 className="text-2xl font-black text-slate-900">Transparent pricing</h2>
              <p className="mt-4 text-slate-700">
                See costs in the app before you confirm—no surprises at checkout.
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-center">
                  <FaRupeeSign className="mr-2 shrink-0 text-emerald-600" /> Home visits from transparent app rates
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 shrink-0 text-emerald-600" /> Pay only for the service you book
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#111827] p-8 text-white shadow-[0_25px_70px_rgba(17,24,39,0.5)] md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-300">User reviews</p>
                <h2 className="mt-2 text-3xl font-black">Trusted for home healthcare</h2>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-300" />
                ))}
                <span className="ml-1 text-sm font-semibold">4.8/5 average rating</span>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  name: 'Priya R.',
                  text: 'Booked a home visit in the app—professional arrived quickly and everything felt safe.'
                },
                {
                  name: 'Nithin K.',
                  text: 'Transparent pricing and clear updates. Exactly what we needed for care at home.'
                },
                {
                  name: 'Shreya M.',
                  text: 'Perfect for elderly parents—vitals and nursing support without a hospital run.'
                }
              ].map((review) => (
                <article key={review.name} className="fade-in rounded-2xl border border-white/10 bg-white/5 p-6" data-reveal>
                  <FaQuoteLeft className="text-emerald-300" />
                  <p className="mt-4 text-white/90">{review.text}</p>
                  <p className="mt-5 font-semibold">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="fade-in mb-8 max-w-3xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">Why ExpressAid</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Healthcare that comes to you</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission is to make healthcare more accessible by bringing qualified professionals to
              your home—reducing unnecessary hospital visits and helping families get timely care.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              'Fast dispatch in selected areas',
              'Home healthcare without hospital visits',
              'Qualified & verified professionals',
              'Convenient booking through the app',
              'Transparent pricing',
              'Support for elderly, families & professionals'
            ].map((item) => (
              <div key={item} className="fade-in flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm" data-reveal>
                <FaCheckCircle className="mr-2 text-emerald-600" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#5953eb] to-[#3f5cff] p-8 text-white shadow-[0_25px_70px_rgba(37,99,235,0.4)] md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-8 h-40 w-40 rounded-full bg-[#a8f18f]/35 blur-2xl" />
            <h2 className="relative z-10 text-3xl font-black">Healthcare at Home in Minutes</h2>
            <p className="relative z-10 mt-3 max-w-2xl text-white/90">
              Download ExpressAid and experience a faster, more convenient way to access healthcare
              at home—starting in Whitefield and Marathahalli.
            </p>
            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-[#111827] transition hover:bg-slate-100"
              >
                <FaApple className="mr-2" /> Download on the App Store
              </a>
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <FaGooglePlay className="mr-2" /> Get it on Google Play
              </a>
            </div>
            <p className="relative z-10 mt-5 text-sm text-white/80">
              For emergencies, please visit nearest hospital.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="w-full overflow-hidden rounded-[1.35rem] bg-white shadow-[0_24px_60px_-16px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/[0.08] sm:rounded-[1.5rem]">
            <Image
              src="/marketing/feature_graphic_v2.png"
              alt="ExpressAid app feature graphic"
              width={2400}
              height={1200}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-indigo-100 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(30,41,59,0.1)] backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm font-semibold text-slate-900 sm:text-base">
            Healthcare at home in minutes — download ExpressAid
          </p>
          <div className="flex w-full gap-2 sm:w-auto">
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#121826] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black sm:px-6 sm:py-3"
            >
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:px-6 sm:py-3"
            >
              <FaApple className="mr-2" /> App Store
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop isVisible={isVisible} />
    </div>
  )
}
