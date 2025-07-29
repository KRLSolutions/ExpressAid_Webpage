import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ExpressAid | On-Demand Nursing Care',
  description: 'Book certified nurses instantly for in-home care, post-surgery assistance, elderly care, and more with our easy-to-use app.',
  keywords: ['healthcare', 'nursing', 'home care', 'medical services', 'ExpressAid'],
  authors: [{ name: 'ExpressAid Team' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
        {children}
      </body>
    </html>
  )
} 