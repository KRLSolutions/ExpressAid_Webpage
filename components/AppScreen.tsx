import Image from 'next/image'

/** Rounded app screenshot — no device bezel */
export const appScreenShellClass =
  'overflow-hidden rounded-[1.25rem] bg-white shadow-[0_28px_70px_-12px_rgba(15,23,42,0.38)] ring-1 ring-slate-900/[0.08] sm:rounded-[1.35rem]'

export const appScreenFloatWrapClass = 'app-screen-float-wrap'

/** Portrait screenshot dimensions for Next.js (scaled via w-full h-auto) */
export const APP_SCREEN_WIDTH = 1170
export const APP_SCREEN_HEIGHT = 2532

type AppScreenProps = {
  src: string
  alt: string
  objectPosition?: string
  priority?: boolean
  sizes?: string
  className?: string
  /** Gentle bounce + shadow pulse */
  floating?: boolean
  /** Stagger start (e.g. "0.4s") when multiple screens on a page */
  floatDelay?: string
}

export default function AppScreen({
  src,
  alt,
  objectPosition = 'top center',
  priority = false,
  sizes = '(max-width: 640px) 260px, 300px',
  className = '',
  floating = true,
  floatDelay
}: AppScreenProps) {
  const floatStyle = floatDelay ? { animationDelay: floatDelay } : undefined

  const screen = (
    <div className={appScreenShellClass}>
      <Image
        src={src}
        alt={alt}
        width={APP_SCREEN_WIDTH}
        height={APP_SCREEN_HEIGHT}
        sizes={sizes}
        className="block h-auto w-full max-w-full"
        style={{ objectPosition }}
        priority={priority}
      />
    </div>
  )

  if (!floating) {
    return <div className={`w-full ${className}`.trim()}>{screen}</div>
  }

  return (
    <div className={`${appScreenFloatWrapClass} w-full ${className}`.trim()}>
      <div className="app-screen-float" style={floatStyle}>
        {screen}
      </div>
      <div className="app-screen-float-shadow" style={floatStyle} aria-hidden />
    </div>
  )
}
