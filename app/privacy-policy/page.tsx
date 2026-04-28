'use client'

import React from 'react'
import Navigation from '@/app/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> August 4, 2025
            </p>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> April 28, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              ExpressAid Technologies Pvt. Ltd. (&quot;ExpressAid&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is
              committed to protecting your privacy and ensuring the security of
              your personal and health-related data. This Privacy Policy explains
              how we collect, use, store, process, and disclose your information
              when you use our mobile application, website, or services
              (&quot;Services&quot;).
            </p>
            <p>By accessing or using ExpressAid, you consent to this Privacy Policy.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Legal Framework</h2>
            <p>This Privacy Policy is governed by:</p>
            <ul className="list-disc pl-6">
              <li>Information Technology Act, 2000 (India)</li>
              <li>
                IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
              </li>
              <li>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
            </ul>
            <p>
              We follow reasonable security practices for handling Sensitive Personal Data or Information (SPDI),
              including health-related data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Scope of Policy</h2>
            <p>This policy applies to:</p>
            <ul className="list-disc pl-6">
              <li>Patients and caregivers using ExpressAid</li>
              <li>Nurses and healthcare professionals onboarded on the platform</li>
              <li>Visitors to our website and app</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Personal Information</h3>
            <ul className="list-disc pl-6">
              <li>Full name</li>
              <li>Phone number and email address</li>
              <li>Date of birth and gender</li>
              <li>Residential address and location</li>
              <li>Profile photo (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Health &amp; Medical Information (Sensitive Data)</h3>
            <ul className="list-disc pl-6">
              <li>Symptoms and service-related notes</li>
              <li>Medication history, allergies, chronic conditions</li>
              <li>Vitals (BP, sugar, temperature, etc.)</li>
              <li>Consultation-related details (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Technical &amp; Usage Data</h3>
            <ul className="list-disc pl-6">
              <li>IP address and device identifiers</li>
              <li>App usage behavior and interaction logs</li>
              <li>Booking history and preferences</li>
              <li>Chat interactions and support communication</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Permissions We Use</h3>
            <p>We may request the following permissions:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Location:</strong> To match users with nearby healthcare professionals and enable faster
                service delivery
              </li>
              <li>
                <strong>Phone:</strong> To facilitate communication between users and service providers
              </li>
              <li>
                <strong>Notifications:</strong> To send booking updates and service alerts
              </li>
            </ul>
            <p>
              We only request permissions necessary for core functionality and do not use them for unrelated
              purposes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Purpose of Data Collection</h2>
            <p>
              We collect and process personal and sensitive data <strong>only for legitimate service-related purposes</strong>,
              including:
            </p>
            <ul className="list-disc pl-6">
              <li>Connecting users with verified healthcare professionals</li>
              <li>Facilitating home healthcare services</li>
              <li>Enabling bookings and service coordination</li>
              <li>Processing payments and generating invoices</li>
              <li>Providing customer support</li>
              <li>Sending service-related notifications and reminders</li>
              <li>Improving platform performance and user experience</li>
              <li>Preventing fraud and ensuring platform security</li>
            </ul>
            <p>
              <strong>We do not use health data for advertising or marketing purposes.</strong>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Consent &amp; User Control</h2>
            <p>By using ExpressAid, you provide consent to collect and process your data as described in this policy.</p>
            <p>You may:</p>
            <ul className="list-disc pl-6">
              <li>Withdraw consent by discontinuing use</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p>Certain services may not function without required data.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Data Sharing &amp; Disclosure</h2>
            <p>
              We do <strong>not sell, rent, or trade your personal or health data</strong>.
            </p>
            <p>We may share data only in the following cases:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>With healthcare professionals</strong> (nurses/doctors) to provide requested services
              </li>
              <li>
                <strong>With payment partners</strong> to process transactions securely
              </li>
              <li>
                <strong>With service providers</strong> (cloud hosting, analytics) under strict confidentiality
                agreements
              </li>
              <li>
                <strong>With legal authorities</strong> when required by law
              </li>
            </ul>
            <p>All third-party partners are required to handle data securely and only for the intended purpose.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Data Security Measures</h2>
            <p>We implement industry-standard safeguards including:</p>
            <ul className="list-disc pl-6">
              <li>Encryption of sensitive data</li>
              <li>Secure cloud infrastructure</li>
              <li>Role-based access control (RBAC)</li>
              <li>OTP-based authentication</li>
              <li>Regular security monitoring</li>
            </ul>
            <p>
              We follow reasonable security practices; however, no system is completely secure.
            </p>
            <p>Users are responsible for maintaining confidentiality of their login credentials.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Data Retention Policy</h2>
            <p>We retain data:</p>
            <ul className="list-disc pl-6">
              <li>As long as your account is active</li>
              <li>As required by applicable legal and regulatory obligations</li>
            </ul>
            <p>After deletion requests:</p>
            <ul className="list-disc pl-6">
              <li>Data is deleted or anonymized within a reasonable timeframe</li>
              <li>Some data may be retained if legally required</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. User Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Opt out of communications</li>
            </ul>
            <p>
              To exercise your rights, contact:{' '}
              <a href="mailto:support@expressaid.in" className="text-blue-600 hover:text-blue-700">
                support@expressaid.in
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Children&apos;s Privacy</h2>
            <p>Our services are intended for users aged 18 and above.</p>
            <ul className="list-disc pl-6">
              <li>Guardians may provide information on behalf of minors under their responsibility</li>
              <li>We do not knowingly collect data directly from children</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Third-Party Services</h2>
            <p>ExpressAid may integrate with third-party services such as:</p>
            <ul className="list-disc pl-6">
              <li>Payment gateways</li>
              <li>External service providers</li>
            </ul>
            <p>We are not responsible for third-party privacy practices. Users should review their policies separately.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">12. Data Breach Protocol</h2>
            <p>In case of a data breach, we will:</p>
            <ul className="list-disc pl-6">
              <li>Take immediate corrective action</li>
              <li>Notify affected users where required</li>
              <li>Comply with applicable legal reporting requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">13. Platform Role Clarification</h2>
            <p>
              ExpressAid is a technology platform that facilitates connections between users and independent
              healthcare professionals.
            </p>
            <ul className="list-disc pl-6">
              <li>ExpressAid does not provide medical treatment directly</li>
              <li>Healthcare professionals are responsible for services delivered</li>
              <li>ExpressAid does not make independent medical decisions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">14. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically.</p>
            <p>Changes will be communicated via:</p>
            <ul className="list-disc pl-6">
              <li>App notifications</li>
              <li>Website updates</li>
            </ul>
            <p>Continued use of the Services implies acceptance of the updated policy.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">15. Contact &amp; Grievance Officer</h2>
            <p>For any privacy concerns, contact:</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@expressaid.in" className="text-blue-600 hover:text-blue-700">
                support@expressaid.in
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">16. Account Deletion &amp; Data Removal</h2>
            <p>Users can request account deletion by:</p>
            <ul className="list-disc pl-6">
              <li>
                Emailing{' '}
                <a href="mailto:support@expressaid.in" className="text-blue-600 hover:text-blue-700">
                  support@expressaid.in
                </a>
              </li>
              <li>Using in-app request (if available)</li>
            </ul>
            <p>Upon request:</p>
            <ul className="list-disc pl-6">
              <li>Personal data will be deleted or anonymized</li>
              <li>Certain data may be retained if legally required</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">17. Medical Disclaimer</h2>
            <p>ExpressAid does not provide medical advice, diagnosis, or treatment.</p>
            <p>All services are provided by independent licensed healthcare professionals.</p>
            <p>Users should consult qualified professionals for medical decisions.</p>
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