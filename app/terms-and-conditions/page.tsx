'use client'

import React from 'react'
import Footer from '@/components/Footer'
import Navigation from '@/app/Navigation'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ExpressAid Terms and Conditions</h1>
            <p className="text-gray-600">Effective Date: August 4, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. INTRODUCTION</h2>
            <p>These Terms and Conditions ("Terms") govern your access to and use of the mobile application ExpressAid, owned and operated by ExpressAid Technologies Private Limited, including its website, services, features, and content ("Platform").</p>
            <p>By downloading, accessing, or using the ExpressAid app or website, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy (linked separately).</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. DEFINITIONS</h2>
            <ul className="list-disc pl-6">
              <li>"User" refers to any individual who books, accesses, or uses any healthcare service via the ExpressAid platform.</li>
              <li>"Nurse" or "Provider" refers to a licensed, certified healthcare professional listed on the ExpressAid platform.</li>
              <li>"Service" refers to in-home nursing services, health consultations, and associated bookings through the platform.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. ELIGIBILITY</h2>
            <p>You must be at least 18 years of age to use ExpressAid. By registering, you represent that you meet the age and competence requirements under applicable law and can enter into legally binding contracts.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. SCOPE OF SERVICES</h2>
            <p>ExpressAid provides:</p>
            <ul className="list-disc pl-6">
              <li>Verified in-home nursing care across a range of medical needs.</li>
              <li>Smart nurse-matching using AI.</li>
              <li>Secure scheduling, payments, and re-bookings.</li>
              <li>Real-time nurse tracking.</li>
              <li>Support in multiple Indian languages.</li>
              <li>24/7 customer chatbot for assistance and reminders.</li>
            </ul>
            <p>All services are non-emergency in nature. If you are experiencing a medical emergency, please call your local emergency services immediately.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. USER ACCOUNT AND RESPONSIBILITIES</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Account Creation</h3>
            <p>To book or schedule a nurse, you must create an account. You are responsible for maintaining confidentiality of your login credentials.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Accuracy of Information</h3>
            <p>You agree to provide accurate, up-to-date, and complete information when creating your account or booking services. ExpressAid is not liable for errors resulting from incorrect or incomplete user information.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. NURSE VERIFICATION & CARE</h2>
            <p>All nurses are:</p>
            <ul className="list-disc pl-6">
              <li>Licensed as per national/state nursing councils.</li>
              <li>Background-verified by third-party security agencies.</li>
              <li>Subject to performance audits and continuous ratings.</li>
            </ul>
            <p>ExpressAid is not responsible for medical decisions or treatment outcomes, and does not substitute professional clinical judgment.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. PAYMENT TERMS</h2>
            <ul className="list-disc pl-6">
              <li>Pricing is transparent and shown upfront.</li>
              <li>Payments may be made via UPI, credit/debit cards, digital wallets, or any other method made available.</li>
              <li>No hidden charges will be levied without your consent.</li>
              <li>Refunds, if any, are governed by our Cancellation & Refund Policy (linked separately).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. CANCELLATION & REFUND POLICY</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">8.1 User-Initiated Cancellations</h3>
            <p>Cancellations must be made at least 1 hour before the scheduled appointment.</p>
            <p>Late cancellations may incur a fee of up to 50% of the service amount, at ExpressAid's discretion.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">8.2 Nurse No-Shows or Delays</h3>
            <p>In case of nurse no-show or delay beyond 30 minutes, users may cancel with full refund or rescheduling at no cost.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. DATA PRIVACY AND SECURITY</h2>
            <p>We collect, use, and protect your personal and health information in accordance with applicable Indian data protection laws.</p>
            <p>Key points:</p>
            <ul className="list-disc pl-6">
              <li>All data is end-to-end encrypted.</li>
              <li>Medical records are stored securely and are accessible only to authorized users.</li>
              <li>We do not sell or misuse your data.</li>
            </ul>
            <p>Please refer to our full Privacy Policy for details.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. LIMITATION OF LIABILITY</h2>
            <p>ExpressAid is a technology facilitator and not a healthcare provider. To the maximum extent allowed by law:</p>
            <ul className="list-disc pl-6">
              <li>We are not liable for medical negligence or malpractice by the nurse.</li>
              <li>We are not responsible for services rendered outside the platform.</li>
              <li>Maximum liability, in any case, is capped at ₹1,000 per incident.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. FEEDBACK AND RATINGS</h2>
            <p>Users may rate and review nurses. However:</p>
            <ul className="list-disc pl-6">
              <li>Ratings must be fair, non-abusive, and not defamatory.</li>
              <li>ExpressAid reserves the right to remove or moderate user content.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">12. TERMINATION</h2>
            <p>ExpressAid may suspend or terminate your access to the app if:</p>
            <ul className="list-disc pl-6">
              <li>You breach these Terms.</li>
              <li>Fraudulent or harmful activity is detected.</li>
              <li>You misuse the platform or harass staff/providers.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">13. INTELLECTUAL PROPERTY</h2>
            <p>All content, code, branding, and platform design are owned by ExpressAid. You may not copy, reuse, or republish any part of the app without express written permission.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">14. GOVERNING LAW AND JURISDICTION</h2>
            <p>These Terms are governed by Indian laws. Any disputes shall be resolved under the jurisdiction of courts in Bengaluru, Karnataka, India.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">15. CONTACT & GRIEVANCE REDRESSAL</h2>
            <p>For support, feedback, or grievance redressal, contact:</p>
            <ul className="list-none pl-6">
              <li>Email: support@expressaid.in</li>
            </ul>
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