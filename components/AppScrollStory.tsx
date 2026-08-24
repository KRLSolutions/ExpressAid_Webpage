'use client'

import React, { useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppScreen, {
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreenFloatWrapClass,
  appScreenShellClass
} from '@/components/AppScreen'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaApple, FaGooglePlay, FaQuoteLeft, FaStar } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const DESKTOP_MQ = '(min-width: 1024px)'

type Beat = {
  kicker: string
  title: string
  body: string
  bullets?: string[]
  textSide: 'left' | 'right'
  image: { src: string; objectPosition: string }
}

function subscribeReducedMotion(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function subscribeDesktop(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia(DESKTOP_MQ)
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getDesktopSnapshot() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(DESKTOP_MQ).matches
}

function getDesktopServerSnapshot() {
  return false
}

const BEATS: Beat[] = [
  {
    kicker: 'ExpressAid',
    title: 'Healthcare at Home in Minutes',
    body: 'Connect with qualified healthcare professionals for on-demand home care—whether you need a vitals check, injection, IV therapy, wound care, or nursing support.',
    bullets: [
      'Fast dispatch in selected service areas',
      'Verified healthcare professionals',
      'Transparent pricing in the app'
    ],
    textSide: 'left',
    image: { src: '/marketing/01_care_at_home.png', objectPosition: '50% 50%' }
  },
  {
    kicker: 'Why ExpressAid',
    title: 'Home healthcare without the hospital visit',
    body: 'Book trusted care at your doorstep—built for elderly parents, families, and busy professionals who need help quickly.',
    bullets: ['“Reached quickly — felt safe.” — Priya R.', '“Clear pricing in the app.” — Nithin K.'],
    textSide: 'right',
    image: { src: '/marketing/07_top_services.png', objectPosition: '50% 50%' }
  },
  {
    kicker: 'How it works',
    title: 'Care at home in five steps',
    body: 'Open the app, pick what you need, and get connected with a nearby professional—care comes to you.',
    bullets: [
      'Open ExpressAid',
      'Select your service',
      'Enter your location',
      'Get matched with a professional nearby',
      'Receive care at home'
    ],
    textSide: 'left',
    image: { src: '/marketing/02_book_services.png', objectPosition: '50% 50%' }
  },
  {
    kicker: 'Services',
    title: 'The care you need, on demand',
    body: 'From feeling unwell to vitals, injections, IV therapy, wound care, and elderly support—arranged through one app.',
    bullets: [
      'Not feeling well & vitals checks',
      'Injections & IV fluids',
      'Wound care & nursing procedures',
      'Elderly care at home'
    ],
    textSide: 'right',
    image: { src: '/marketing/08_care_catalog.png', objectPosition: '50% 50%' }
  },
  {
    kicker: 'Get started',
    title: 'Download ExpressAid',
    body: 'Starting with Whitefield and Marathahalli—with plans to expand across Bengaluru. Experience a faster way to access healthcare at home.',
    textSide: 'left',
    image: { src: '/marketing/04_easy_checkout.png', objectPosition: '50% 50%' }
  }
]

type AppScrollStoryProps = {
  appStoreLink: string
  playStoreLink: string
}

function phoneRotateYForSide(textSide: 'left' | 'right') {
  return textSide === 'left' ? -12 : 12
}

function QuoteMessages({ bullets, centered }: { bullets: string[]; centered?: boolean }) {
  return (
    <ul className={`mx-auto mt-4 max-w-sm space-y-3 ${centered ? '' : 'lg:max-w-md'}`}>
      {bullets.map((b) => (
        <li
          key={b}
          className="rounded-2xl bg-white px-4 py-3.5 text-left text-sm leading-relaxed text-slate-700 shadow-[0_18px_44px_-10px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/[0.06] sm:text-[15px]"
        >
          {b}
        </li>
      ))}
    </ul>
  )
}

function AppScrollStoryStatic({ appStoreLink, playStoreLink }: AppScrollStoryProps) {
  return <AppScrollStoryMobile appStoreLink={appStoreLink} playStoreLink={playStoreLink} />
}

/** Normal scroll on phone/tablet — no pin, no scrub timeline */
function AppScrollStoryMobile({
  appStoreLink,
  playStoreLink,
  hideOnDesktop = true
}: AppScrollStoryProps & { hideOnDesktop?: boolean }) {
  return (
    <section
      id="how-it-works"
      className={`bg-[#f4f5fb] px-4 py-12 sm:px-6 sm:py-14 ${hideOnDesktop ? 'lg:hidden' : ''}`}
    >
      <div className="mx-auto max-w-lg">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">
          How it works
        </p>
        <h2 className="mt-2 text-center text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Healthcare at Home in Minutes
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-slate-600 sm:text-base">
          On-demand home healthcare—booked from your phone.
        </p>

        <div className="mt-10 space-y-14">
          {BEATS.map((beat, i) => (
            <article key={beat.title} className="text-center">
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600">
                {beat.kicker}
              </span>
              <h3 className="mt-3 text-xl font-black leading-tight text-slate-900 sm:text-2xl">{beat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{beat.body}</p>
              {beat.bullets &&
                (beat.kicker === 'Social proof' ? (
                  <QuoteMessages bullets={beat.bullets} centered />
                ) : (
                  <ul className="mx-auto mt-4 max-w-sm space-y-2 text-left text-sm text-slate-700">
                    {beat.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5953eb]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              {beat.kicker === 'Why ExpressAid' && (
                <div className="mt-4 flex items-center justify-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FaStar key={s} className="text-sm" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-600">4.8 average</span>
                </div>
              )}
              <div className="relative mx-auto mt-6 w-[min(280px,78vw)] max-w-[300px]">
                <AppScreen
                  src={beat.image.src}
                  alt={beat.title}
                  objectPosition={beat.image.objectPosition}
                  priority={i === 0}
                  sizes="(max-width: 640px) 220px, 260px"
                  floatDelay={`${i * 0.35}s`}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 pb-4">
          <a
            href={appStoreLink}
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            <FaApple className="mr-2" /> App Store
          </a>
          <a
            href={playStoreLink}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
          >
            <FaGooglePlay className="mr-2" /> Google Play
          </a>
          <Link href="#reviews" className="inline-flex items-center rounded-full bg-[#5953eb] px-5 py-3 text-sm font-semibold text-white">
            Read reviews
          </Link>
        </div>
      </div>
    </section>
  )
}

function BeatCopy({
  beat,
  index,
  copyRef,
  appStoreLink,
  playStoreLink,
  isLast
}: {
  beat: Beat
  index: number
  copyRef: (el: HTMLDivElement | null) => void
  appStoreLink: string
  playStoreLink: string
  isLast: boolean
}) {
  const isRight = beat.textSide === 'right'

  return (
    <div
      ref={copyRef}
      className={`absolute inset-x-0 top-0 flex max-h-[48%] flex-col justify-start overflow-hidden px-4 pb-2 pt-2 sm:max-h-[52%] sm:px-5 sm:pt-4 md:max-h-[55%] md:px-6 lg:inset-0 lg:max-h-none lg:justify-center lg:px-8 ${
        isRight
          ? 'items-center text-center lg:items-end lg:pl-[52%] lg:text-right'
          : 'items-center text-center lg:items-start lg:pr-[52%] lg:text-left'
      }`}
      style={{ opacity: index === 0 ? 1 : 0 }}
    >
      <div className={`w-full max-w-md lg:max-w-md ${isRight ? 'lg:ml-auto' : ''}`}>
        <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 sm:text-[11px]">
          {beat.kicker}
        </span>
        <h3 className="mt-2 text-xl font-black leading-[1.12] tracking-tight text-slate-900 sm:mt-3 sm:text-2xl md:text-[1.65rem] lg:mt-4 lg:text-[2rem]">
          {beat.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600/95 sm:mt-3 sm:text-base lg:text-lg">{beat.body}</p>
        {beat.bullets &&
          (beat.kicker === 'Social proof' ? (
            <QuoteMessages bullets={beat.bullets} />
          ) : (
            <ul
              className={`mt-3 space-y-1.5 text-xs text-slate-700 sm:mt-4 sm:space-y-2 sm:text-sm lg:text-[15px] ${
                isRight ? 'lg:text-right' : ''
              } text-left`}
            >
              {beat.bullets.map((b) => (
                <li key={b} className={`flex gap-2 ${isRight ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5953eb]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ))}
        {beat.kicker === 'Why ExpressAid' && (
          <div className={`mt-3 flex items-center justify-center gap-1 text-amber-500 sm:mt-4 ${isRight ? 'lg:justify-end' : ''}`}>
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className="text-xs sm:text-sm" />
            ))}
            <span className="ml-2 text-xs font-semibold text-slate-600 sm:text-sm">4.8 average</span>
          </div>
        )}
        {isLast && (
          <div
            className={`pointer-events-auto mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3 lg:mt-8 ${
              isRight ? 'lg:justify-end' : ''
            }`}
          >
            <a
              href={appStoreLink}
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-black sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <FaApple className="mr-1.5 sm:mr-2" /> App Store
            </a>
            <a
              href={playStoreLink}
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-800 backdrop-blur-sm transition hover:bg-white sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <FaGooglePlay className="mr-1.5 sm:mr-2" /> Google Play
            </a>
            <Link
              href="#reviews"
              className="inline-flex items-center rounded-full bg-[#5953eb] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4a44d4] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <FaQuoteLeft className="mr-1.5 text-[10px] opacity-80 sm:mr-2 sm:text-xs" />
              Reviews
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function AppScrollStoryAnimated({ appStoreLink, playStoreLink }: AppScrollStoryProps) {
  const rootRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const copyAreaRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])
  const copyRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    const copyArea = copyAreaRef.current
    const phone = phoneRef.current
    if (!root || !stage || !copyArea || !phone || typeof window === 'undefined') return

    const imgs = imgRefs.current.filter(Boolean) as HTMLDivElement[]
    const copies = copyRefs.current.filter(Boolean) as HTMLDivElement[]
    if (imgs.length !== BEATS.length || copies.length !== BEATS.length) return

    const isDesktop = () => window.matchMedia(DESKTOP_MQ).matches
    const isPhone = () => window.matchMedia('(max-width: 639px)').matches

    const phoneScale = () => {
      if (isPhone()) return 0.72
      if (!isDesktop()) return 0.78
      return 0.9
    }

    const phoneBottomInset = () => {
      if (isDesktop()) return 0
      return isPhone() ? 92 : 28
    }

    const columnCenters = () => {
      const stageRect = stage.getBoundingClientRect()
      if (!isDesktop()) {
        const center = stageRect.width / 2
        return { left: center, right: center }
      }
      const areaRect = copyArea.getBoundingClientRect()
      return {
        left: areaRect.left + areaRect.width * 0.25 - stageRect.left,
        right: areaRect.left + areaRect.width * 0.75 - stageRect.left
      }
    }

    const phoneLeftForBeat = (textSide: 'left' | 'right') => {
      const c = columnCenters()
      if (!isDesktop()) return c.left
      return textSide === 'left' ? c.right : c.left
    }

    const beatPose = (i: number) => {
      const b = BEATS[i]
      return {
        left: phoneLeftForBeat(b.textSide),
        xPercent: -50,
        y: 0,
        rotateY: isDesktop() ? phoneRotateYForSide(b.textSide) : 0,
        rotateZ: isDesktop() ? (b.textSide === 'left' ? -2 : 2) : 0,
        scale: phoneScale()
      }
    }

    const applyPhoneLayout = () => {
      if (!isDesktop()) {
        gsap.set(phone, {
          top: 'auto',
          bottom: phoneBottomInset(),
          yPercent: 0,
          left: '50%',
          xPercent: -50
        })
      } else {
        gsap.set(phone, { top: '50%', bottom: 'auto', yPercent: -50 })
      }
    }

    gsap.set(stage, { perspective: isDesktop() ? 1200 : 800 })
    gsap.set(phone, { position: 'absolute', ...beatPose(0) })
    applyPhoneLayout()
    gsap.set(imgs, { opacity: 0 })
    gsap.set(imgs[0], { opacity: 1 })
    gsap.set(copies, { autoAlpha: 0, pointerEvents: 'none' })
    gsap.set(copies[0], { autoAlpha: 1, pointerEvents: 'auto' })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root,
          start: 'top 76px',
          end: () => `+=${window.innerHeight * (isDesktop() ? 4.8 : 4.4)}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      const n = BEATS.length
      const seg = 1 / (n - 1)

      const hideCopy = (el: HTMLDivElement, at: number) => {
        tl.to(el, { autoAlpha: 0, pointerEvents: 'none', duration: 0.06, ease: 'power1.in' }, at)
      }
      const showCopy = (el: HTMLDivElement, at: number) => {
        tl.to(el, { autoAlpha: 1, pointerEvents: 'auto', duration: 0.09, ease: 'power1.out' }, at)
      }

      for (let i = 0; i < n - 1; i++) {
        const t = i * seg
        const beat = BEATS[i]
        const next = BEATS[i + 1]

        const textOut = t + seg * 0.28
        const moveStart = t + seg * 0.36
        const moveEnd = t + seg * 0.54
        const textIn = t + seg * 0.58

        hideCopy(copies[i], textOut)

        const fromLeft = phoneLeftForBeat(beat.textSide)
        const toLeft = phoneLeftForBeat(next.textSide)
        const crosses = isDesktop() && Math.abs(toLeft - fromLeft) > 8

        if (crosses) {
          tl.to(
            phone,
            {
              left: (fromLeft + toLeft) / 2,
              y: -10,
              scale: phoneScale() * 1.02,
              rotateY: 0,
              rotateZ: 0,
              duration: 0.07,
              ease: 'power2.out'
            },
            moveStart
          )
          tl.to(
            phone,
            {
              left: toLeft,
              y: 0,
              scale: phoneScale(),
              rotateY: phoneRotateYForSide(next.textSide),
              rotateZ: next.textSide === 'left' ? -2 : 2,
              duration: moveEnd - moveStart,
              ease: 'power2.inOut'
            },
            moveStart + 0.07
          )
        } else if (!isDesktop()) {
          tl.to(
            phone,
            {
              scale: phoneScale() * 0.96,
              duration: 0.05,
              ease: 'power2.out'
            },
            moveStart
          )
          tl.to(
            phone,
            {
              scale: phoneScale(),
              duration: 0.06,
              ease: 'power2.in'
            },
            moveStart + 0.05
          )
        } else {
          tl.to(phone, { ...beatPose(i + 1), duration: 0.1, ease: 'power2.inOut' }, moveStart)
        }

        tl.to(imgs[i], { opacity: 0, duration: 0.06 }, moveStart + 0.02)
        tl.to(imgs[i + 1], { opacity: 1, duration: 0.08 }, moveStart + 0.06)

        showCopy(copies[i + 1], textIn)
      }
    }, root)

    const onResize = () => {
      applyPhoneLayout()
      gsap.set(stage, { perspective: isDesktop() ? 1200 : 800 })
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [appStoreLink, playStoreLink])

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative hidden overflow-x-clip bg-[#f4f5fb] px-3 sm:px-6 lg:block lg:px-8"
      aria-label="ExpressAid app story"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[15%] top-[15%] h-[min(420px,50vh)] w-[min(420px,50vh)] rounded-full bg-[#5953eb]/[0.07] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[10%] h-[min(380px,45vh)] w-[min(380px,45vh)] rounded-full bg-[#a8f18f]/[0.08] blur-3xl" />
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto min-h-[calc(100dvh-4.5rem)] max-w-6xl sm:min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100svh-5rem)]"
      >
        <div
          ref={copyAreaRef}
          className="relative z-10 min-h-[calc(100dvh-4.5rem)] pb-[min(240px,34vh)] pt-2 sm:pb-[min(260px,36vh)] sm:pt-4 md:pb-[min(280px,38vh)] lg:min-h-[min(520px,78vh)] lg:pb-0 lg:pt-0"
        >
          {BEATS.map((beat, i) => (
            <BeatCopy
              key={beat.title}
              beat={beat}
              index={i}
              copyRef={(el) => {
                copyRefs.current[i] = el
              }}
              appStoreLink={appStoreLink}
              playStoreLink={playStoreLink}
              isLast={i === BEATS.length - 1}
            />
          ))}
        </div>

        <div
          ref={phoneRef}
          className="pointer-events-none absolute left-1/2 z-20 w-[min(200px,52vw)] max-w-[220px] -translate-x-1/2 will-change-[left,transform] sm:w-[min(220px,48vw)] sm:max-w-[240px] md:w-[min(240px,44vw)] md:max-w-[260px] lg:w-[260px] lg:max-w-[280px]"
          style={{ transformStyle: 'preserve-3d', bottom: 92, top: 'auto' }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[70%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5953eb]/15 blur-[48px] lg:top-1/2"
            aria-hidden
          />
          <div className={`${appScreenFloatWrapClass} relative w-full`}>
            <div className="app-screen-float relative w-full">
            {BEATS.map((beat, i) => (
              <div
                key={`${beat.title}-img`}
                ref={(el) => {
                  imgRefs.current[i] = el
                }}
                className={`w-full ${appScreenShellClass} ${i === 0 ? 'relative' : 'absolute inset-x-0 top-0'}`}
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <Image
                  src={beat.image.src}
                  alt={beat.title}
                  width={APP_SCREEN_WIDTH}
                  height={APP_SCREEN_HEIGHT}
                  sizes="(max-width: 1023px) 240px, 280px"
                  className="block h-auto w-full max-w-full"
                  style={{ objectPosition: beat.image.objectPosition }}
                  priority={i === 0}
                />
              </div>
            ))}
            </div>
            <div className="app-screen-float-shadow" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AppScrollStory(props: AppScrollStoryProps) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, getDesktopServerSnapshot)

  const useMobileLayout = !isDesktop || reduced

  return (
    <>
      {useMobileLayout ? <AppScrollStoryMobile {...props} hideOnDesktop={!reduced} /> : null}
      {isDesktop && !reduced ? <AppScrollStoryAnimated {...props} /> : null}
    </>
  )
}
