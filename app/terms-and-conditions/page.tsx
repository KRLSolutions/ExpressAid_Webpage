'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation />
      
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/terms-and-conditions.jpg')] bg-cover bg-center opacity-40 blur-sm pointer-events-none z-0" />
        
        {/* Foreground Content */}
        <div className="z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
              <p className="text-gray-600">Last updated: December 2023</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using ExpressAid's services, you accept and agree to be bound by the terms and provision of this agreement.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Service Description</h2>
              <p>ExpressAid provides a platform connecting patients with qualified healthcare professionals for in-home nursing care services.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. User Responsibilities</h2>
              <ul className="list-disc pl-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect the privacy and rights of healthcare professionals</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Privacy and Data Protection</h2>
              <p>We are committed to protecting your privacy. Please review our Privacy Policy for details on how we collect, use, and protect your information.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Payment Terms</h2>
              <p>All payments are processed securely through our platform. Service fees are clearly displayed before booking confirmation.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Cancellation Policy</h2>
              <p>Cancellations made within 2 minutes of booking are free. Late cancellations may incur charges to compensate healthcare professionals.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Limitation of Liability</h2>
              <p>ExpressAid acts as a platform facilitator and is not responsible for the medical care provided by healthcare professionals.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Contact Information</h2>
              <p>For questions about these terms, please contact us at support@expressaid.com</p>
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