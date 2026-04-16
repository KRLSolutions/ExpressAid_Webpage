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
            <p className="text-gray-600">Last Updated: [Add Current Date]</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of
              the ExpressAid platform (&quot;Platform&quot;), operated by ExpressAid Technologies
              Private Limited (&quot;ExpressAid&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
            </p>
            <p>
              By accessing or using the Platform, you agree to be bound by these
              Terms and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Platform Nature</h2>
            <p>
              ExpressAid is a technology platform that connects users with
              independent healthcare professionals (nurses and doctors).
            </p>
            <ul className="list-disc pl-6">
              <li>We do not provide medical services directly.</li>
              <li>We do not employ healthcare professionals (unless explicitly stated).</li>
              <li>All services are delivered by independent practitioners.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Definitions</h2>
            <ul className="list-disc pl-6">
              <li><strong>User</strong>: Any individual using the platform for booking services.</li>
              <li><strong>Provider</strong>: Independent nurse or doctor listed on the platform.</li>
              <li><strong>Services</strong>: Home healthcare, consultations, and related support.</li>
              <li><strong>Platform</strong>: Mobile app, website, and related systems.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Eligibility</h2>
            <ul className="list-disc pl-6">
              <li>Users must be 18 years or older.</li>
              <li>Users must provide accurate information.</li>
              <li>Users must be capable of entering a legal agreement.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Scope of Services</h2>
            <p>ExpressAid enables:</p>
            <ul className="list-disc pl-6">
              <li>On-demand nurse visits at home.</li>
              <li>Doctor consultations (video/audio).</li>
              <li>Booking, scheduling, and payments.</li>
              <li>Basic health support services.</li>
            </ul>
            <p>
              <strong>Important:</strong> Services are non-emergency only. In case of
              emergency, contact hospital or emergency services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate health and personal information.</li>
              <li>Be present at the service location.</li>
              <li>Treat providers respectfully.</li>
              <li>Not misuse the platform.</li>
            </ul>
            <p>You must not:</p>
            <ul className="list-disc pl-6">
              <li>Use services for illegal purposes.</li>
              <li>Harass or abuse nurses/doctors.</li>
              <li>Share false medical information intentionally.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Provider (Nurse/Doctor) Terms</h2>
            <p>Providers are independent professionals and are responsible for:</p>
            <ul className="list-disc pl-6">
              <li>Medical decisions.</li>
              <li>Treatment provided.</li>
              <li>Clinical judgment.</li>
            </ul>
            <p>
              ExpressAid performs basic verification but does not guarantee outcomes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Bookings &amp; Service Delivery</h2>
            <ul className="list-disc pl-6">
              <li>Bookings are based on provider availability.</li>
              <li>Time estimates (e.g., 15-30 mins) are indicative only.</li>
              <li>Delays may occur due to traffic, prior bookings, or unforeseen issues.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Payments</h2>
            <ul className="list-disc pl-6">
              <li>All prices are shown upfront.</li>
              <li>Payments can be made via UPI, cards, and wallets.</li>
              <li>ExpressAid may charge service/platform fees.</li>
              <li>Pricing changes apply to future bookings only.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Cancellation &amp; Refund</h2>
            <p><strong>User cancellations:</strong></p>
            <ul className="list-disc pl-6">
              <li>Free cancellation up to 1 hour before booking.</li>
              <li>Late cancellation fee may be up to 50%.</li>
            </ul>
            <p><strong>Provider issues:</strong></p>
            <ul className="list-disc pl-6">
              <li>No-show or major delay: full refund or reschedule.</li>
            </ul>
            <p>Refund timelines: 3-7 business days depending on payment method.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Medical Disclaimer</h2>
            <ul className="list-disc pl-6">
              <li>ExpressAid does not provide medical advice.</li>
              <li>All treatment decisions are made by providers.</li>
              <li>Users must follow medical advice responsibly and seek hospital care when required.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, ExpressAid is not liable for:</p>
            <ul className="list-disc pl-6">
              <li>Medical negligence.</li>
              <li>Treatment outcomes.</li>
              <li>Injury or complications.</li>
            </ul>
            <p>
              Maximum liability is limited to INR 1,000 or the service fee paid,
              whichever is lower.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">12. Data &amp; Privacy</h2>
            <p>
              Your data is handled as per our Privacy Policy. Health data is
              treated as sensitive and used only for service delivery and improvement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">13. User Content &amp; Feedback</h2>
            <p>Users may submit ratings/reviews. Content must not be abusive or defamatory.</p>
            <p>ExpressAid may remove or moderate content.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">14. Suspension &amp; Termination</h2>
            <p>We may suspend or terminate access in case of:</p>
            <ul className="list-disc pl-6">
              <li>Terms violations.</li>
              <li>Fraud detection.</li>
              <li>Platform misuse.</li>
              <li>Safety concerns.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">15. Force Majeure</h2>
            <p>ExpressAid is not liable for delays/failures due to:</p>
            <ul className="list-disc pl-6">
              <li>Natural disasters.</li>
              <li>Government restrictions.</li>
              <li>Network/system failures.</li>
              <li>Other uncontrollable events.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">16. Indemnity</h2>
            <p>You agree to indemnify and hold ExpressAid harmless from:</p>
            <ul className="list-disc pl-6">
              <li>Misuse of services.</li>
              <li>False medical information.</li>
              <li>Violation of laws or rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">17. Intellectual Property</h2>
            <p>
              All platform content (design, code, branding) belongs to ExpressAid
              and cannot be copied or reused without permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">18. Governing Law</h2>
            <ul className="list-disc pl-6">
              <li>Governed by the laws of India.</li>
              <li>Jurisdiction: Bengaluru, Karnataka.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">19. Changes to Terms</h2>
            <p>We may update Terms at any time. Users will be notified via app, email, or website.</p>
            <p>Continued use constitutes acceptance.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">20. Contact &amp; Grievance</h2>
            <p>Email: support@expressaid.in</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What You Just Fixed</h2>
            <ul className="list-disc pl-6">
              <li>Clear platform vs provider responsibility.</li>
              <li>Protection from medical liability claims.</li>
              <li>Coverage for delays, refunds, and disputes.</li>
              <li>Indemnity clause for misuse and legal risk.</li>
              <li>Edge-case handling (force majeure and misuse).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Next</h2>
            <ol className="list-decimal pl-6">
              <li>Nurse Agreement (freelancer contract).</li>
              <li>Doctor Agreement.</li>
              <li>In-app patient consent before booking.</li>
            </ol>
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