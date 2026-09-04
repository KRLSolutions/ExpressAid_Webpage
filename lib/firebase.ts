import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyAcAYQqFzQ-FGoar0iTUenIW-vmrmHm0go',
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'expressaid-5f8c6.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'expressaid-5f8c6',
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'expressaid-5f8c6.firebasestorage.app',
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '255941596110',
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:255941596110:web:a0a4c903167f0a4d27119f',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? 'G-4TYS9SRW3K'
}

let app: FirebaseApp | undefined
let analytics: Analytics | undefined
let analyticsPromise: Promise<Analytics | null> | undefined

export function getFirebaseApp() {
  if (typeof window === 'undefined') return undefined
  if (!app) {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  }
  return app
}

export async function getFirebaseAnalytics() {
  if (typeof window === 'undefined') return null
  if (analytics) return analytics
  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      const supported = await isSupported()
      if (!supported) return null
      const firebaseApp = getFirebaseApp()
      if (!firebaseApp) return null
      analytics = getAnalytics(firebaseApp)
      return analytics
    })()
  }
  return analyticsPromise
}

export async function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  try {
    const instance = await getFirebaseAnalytics()
    if (!instance) return
    logEvent(instance, eventName, params)
  } catch {
    // Analytics should never break the site
  }
}

export async function trackPageView(path: string, title?: string) {
  await trackEvent('page_view', {
    page_path: path,
    page_title: title ?? (typeof document !== 'undefined' ? document.title : path),
    page_location: typeof window !== 'undefined' ? window.location.href : path
  })
}

export function trackAppStoreClick(placement: string) {
  void trackEvent('download_app_store', { placement })
}

export function trackPlayStoreClick(placement: string) {
  void trackEvent('download_play_store', { placement })
}
