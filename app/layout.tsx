import React, { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FirebaseAnalytics from '@/components/FirebaseAnalytics'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  keywords: ['healthcare', 'home healthcare', 'nurse visit', 'doctor consultation', 'ExpressAid', 'Bangalore'],
  authors: [{ name: 'ExpressAid Team' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                emailjs.init("XDIe98FcNydiqXNcG");
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased text-gray-800`}>
        <Suspense fallback={null}>
          <FirebaseAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
} 