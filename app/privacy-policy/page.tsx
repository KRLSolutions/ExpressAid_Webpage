'use client'

import React from 'react'
import Navigation from '@/app/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation />
      
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/privacy.jpg')] bg-cover bg-center opacity-60 blur-sm pointer-events-none z-0" />
        
        {/* Foreground Content */}
        <div className="z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: December 2023</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, book a service, or contact us for support.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. You can also opt out of certain communications.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to enhance your experience and analyze how our services are used.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at privacy@expressaid.com</p>
            </div>
          </div>
          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 