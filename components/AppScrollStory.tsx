'use client'

import React, { useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaApple, FaGooglePlay, FaQuoteLeft, FaStar } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

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

const BEATS: Beat[] = [
  {
    kicker: 'The app',
    title: 'Care you can steer from your sofa',
    body: 'ExpressAid brings booking, live updates, and clear pricing into one calm home screen — built for busy families in Bangalore.',
    bullets: ['Book nurse or doctor visits', 'See who is coming and when', 'No surprise charges at checkout'],
    textSide: 'left',
    image: { src: '/Screenshot1.png', objectPosition: '50% 12%' }
  },
  {
    kicker: 'Social proof',
    title: 'Loved by users — rated 4.8/5',
    body: 'Families use ExpressAid when they need speed and trust: verified professionals, polite communication, and updates that actually match reality.',
    bullets: ['“Nurse reached quickly — felt safe.” — Priya R.', '“Pricing was clear in the app.” — Nithin K.'],
    textSide: 'right',
    image: { src: '/Screenshot1.png', objectPosition: '50% 55%' }
  },
  {
    kicker: 'How it works',
    title: 'Book → track → care at your door',
    body: 'Pick the service in the app, follow arrival on the map, then get nurse or doctor support at home when it matters.',
    bullets: ['Choose service & slot', 'Live status until arrival', 'Doctor consult when needed'],
    textSide: 'left',
    image: { src: '/Featured%20Graphic.png', objectPosition: '50% 50%' }
  },
  {
    kicker: 'Coverage',
    title: 'Doctor, nurse, and home care in one flow',
    body: 'From fever checks to injections and elderly support — ExpressAid routes the right professional across Whitefield, Marathahalli, ITPL and nearby.',
    textSide: 'right',
    image: { src: '/Screenshot1.png', objectPosition: '50% 82%' }
  },
  {
    kicker: 'Get started',
    title: 'Download and book in minutes',
    body: 'Grab the app, confirm your location, and book care whenever you need it.',
    textSide: 'left',
    image: { src: '/Screenshot1.png', objectPosition: '50% 25%' }
  }
]

type AppScrollStoryProps = {
  appStoreLink: string
  playStoreLink: string
}

function phoneRotateYForSide(textSide: 'left' | 'right') {
  return textSide === 'left' ? -12 : 12
}

function AppScrollStoryStatic({ appStoreLink, playStoreLink }: AppScrollStoryProps) {
  return (
    <section id="how-it-works" className="bg-[#f4f5fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-12">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-900">How ExpressAid works</h2>
        {BEATS.map((b, i) => (
          <article key={b.title} className="border-b border-slate-200/80 pb-12 last:border-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              Step {i + 1} · {b.kicker}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">{b.title}</h3>
            <p className="mt-3 text-slate-600">{b.body}</p>
          </article>
        ))}
        <div className="flex flex-wrap justify-center gap-3">
          <a href={appStoreLink} className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            <FaApple className="mr-2" /> App Store
          </a>
          <a href={playStoreLink} className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">
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
      className={`absolute inset-0 flex flex-col justify-center px-2 py-6 sm:px-4 lg:px-8 ${
        isRight ? 'items-end text-right' : 'items-start text-left'
      }`}
      style={{ opacity: index === 0 ? 1 : 0 }}
    >
      <div className={`max-w-[min(100%,22rem)] lg:max-w-md ${isRight ? 'ml-auto' : ''}`}>
        <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">
          {beat.kicker}
        </span>
        <h3 className="mt-4 text-2xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
          {beat.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-600/95 sm:text-lg">{beat.body}</p>
        {beat.bullets && (
          <ul className={`mt-5 space-y-2.5 text-sm text-slate-700 sm:text-[15px] ${isRight ? 'text-right' : ''}`}>
            {beat.bullets.map((b) => (
              <li key={b} className={`flex gap-2.5 ${isRight ? 'flex-row-reverse' : ''}`}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5953eb]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {beat.kicker === 'Social proof' && (
          <div className={`mt-5 flex items-center gap-1 text-amber-500 ${isRight ? 'justify-end' : ''}`}>
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className="text-sm" />
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-600">4.8 average</span>
          </div>
        )}
        {isLast && (
          <div className={`pointer-events-auto mt-8 flex flex-wrap gap-3 ${isRight ? 'justify-end' : ''}`}>
            <a
              href={appStoreLink}
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              <FaApple className="mr-2" /> App Store
            </a>
            <a
              href={playStoreLink}
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:bg-white"
            >
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
            <Link
              href="#reviews"
              className="inline-flex items-center rounded-full bg-[#5953eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a44d4]"
            >
              <FaQuoteLeft className="mr-2 text-xs opacity-80" />
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
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])
  const copyRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    const leftCol = leftColRef.current
    const rightCol = rightColRef.current
    const phone = phoneRef.current
    if (!root || !stage || !leftCol || !rightCol || !phone || typeof window === 'undefined') return

    const imgs = imgRefs.current.filter(Boolean) as HTMLDivElement[]
    const copies = copyRefs.current.filter(Boolean) as HTMLDivElement[]
    if (imgs.length !== BEATS.length || copies.length !== BEATS.length) return

    const narrow = () => window.matchMedia('(max-width: 1023px)').matches
    const phoneScale = () => (narrow() ? 0.82 : 0.9)

    const columnCenters = () => {
      const stageRect = stage.getBoundingClientRect()
      const leftRect = leftCol.getBoundingClientRect()
      const rightRect = rightCol.getBoundingClientRect()
      return {
        left: leftRect.left + leftRect.width / 2 - stageRect.left,
        right: rightRect.left + rightRect.width / 2 - stageRect.left
      }
    }

    const phoneLeftForBeat = (textSide: 'left' | 'right') => {
      const c = columnCenters()
      return textSide === 'left' ? c.right : c.left
    }

    const beatPose = (i: number) => {
      const b = BEATS[i]
      return {
        left: phoneLeftForBeat(b.textSide),
        xPercent: -50,
        y: 0,
        rotateY: phoneRotateYForSide(b.textSide),
        rotateZ: b.textSide === 'left' ? -2 : 2,
        scale: phoneScale()
      }
    }

    gsap.set(stage, { perspective: 1200 })
    gsap.set(phone, { ...beatPose(0), top: '50%', yPercent: -50, position: 'absolute' })
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
          end: () => `+=${window.innerHeight * (narrow() ? 4.2 : 4.8)}`,
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

        tl.to(imgs[i], { opacity: 0, duration: 0.06 }, moveStart + 0.02)
        tl.to(imgs[i + 1], { opacity: 1, duration: 0.08 }, moveStart + 0.06)

        showCopy(copies[i + 1], textIn)
      }
    }, root)

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [appStoreLink, playStoreLink])

  const leftBeats = BEATS.filter((b) => b.textSide === 'left')
  const rightBeats = BEATS.filter((b) => b.textSide === 'right')

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative overflow-x-clip bg-[#f4f5fb] px-4 sm:px-6 lg:px-8"
      aria-label="ExpressAid app story"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[15%] top-[15%] h-[min(420px,50vh)] w-[min(420px,50vh)] rounded-full bg-[#5953eb]/[0.07] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[10%] h-[min(380px,45vh)] w-[min(380px,45vh)] rounded-full bg-[#a8f18f]/[0.08] blur-3xl" />
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto min-h-[calc(100dvh-5.25rem)] max-w-6xl sm:min-h-[calc(100svh-5rem)]"
      >
        <div className="grid min-h-[min(520px,78vh)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div
            ref={leftColRef}
            className="relative min-h-[min(340px,52vh)] lg:min-h-[min(440px,68vh)]"
          >
            {leftBeats.map((beat) => {
              const i = BEATS.indexOf(beat)
              return (
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
              )
            })}
          </div>

          <div ref={rightColRef} className="relative min-h-[min(340px,52vh)] lg:min-h-[min(440px,68vh)]">
            {rightBeats.map((beat) => {
              const i = BEATS.indexOf(beat)
              return (
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
              )
            })}
          </div>
        </div>

        <div
          ref={phoneRef}
          className="pointer-events-none absolute top-1/2 z-20 w-[min(200px,42vw)] max-w-[220px] will-change-[left,transform] lg:w-[220px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[70%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5953eb]/15 blur-[48px]"
            aria-hidden
          />
          <div className="relative aspect-[260/520] w-full">
            <div className="absolute inset-0 rounded-[2.7rem] border-[5px] border-black/90 bg-black p-1.5 shadow-[0_32px_64px_-12px_rgba(15,23,42,0.45)]">
              <div className="absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-black" />
              <div className="relative h-full overflow-hidden rounded-[2.15rem] bg-[#0f1020]">
                {BEATS.map((beat, i) => (
                  <div
                    key={`${beat.title}-img`}
                    ref={(el) => {
                      imgRefs.current[i] = el
                    }}
                    className="absolute inset-0"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <Image
                      src={beat.image.src}
                      alt={beat.title}
                      fill
                      sizes="210px"
                      className="object-cover"
                      style={{ objectPosition: beat.image.objectPosition }}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
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
  if (reduced) return <AppScrollStoryStatic {...props} />
  return <AppScrollStoryAnimated {...props} />
}
