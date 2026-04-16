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
            <p className="text-gray-600">Effective Date: August 4, 2025</p>
            <p className="text-gray-600">Last Updated: [Add Current Date]</p>
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
              <li>Information Technology Act, 2000 (India).</li>
              <li>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</li>
              <li>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.</li>
            </ul>
            <p>
              We follow reasonable security practices for handling Sensitive
              Personal Data or Information (SPDI), including health records.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Scope of Policy</h2>
            <p>This policy applies to:</p>
            <ul className="list-disc pl-6">
              <li>Patients and caregivers using ExpressAid.</li>
              <li>Nurses and healthcare professionals onboarded on the platform.</li>
              <li>Visitors to our website and app.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Personal Information</h3>
            <ul className="list-disc pl-6">
              <li>Full name.</li>
              <li>Phone number and email address.</li>
              <li>Date of birth and gender.</li>
              <li>Residential address and live location.</li>
              <li>Profile photo (optional).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Health &amp; Medical Information (Sensitive Data)</h3>
            <ul className="list-disc pl-6">
              <li>Symptoms, treatment details, and nursing notes.</li>
              <li>Medication history, allergies, chronic conditions.</li>
              <li>Vitals (BP, sugar, temperature, etc.).</li>
              <li>Doctor consultation records and prescriptions.</li>
              <li>Insurance details (if applicable).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Technical &amp; Usage Data</h3>
            <ul className="list-disc pl-6">
              <li>IP address and device identifiers.</li>
              <li>App usage behavior and interaction logs.</li>
              <li>Booking history and preferences.</li>
              <li>Chat conversations and support interactions.</li>
              <li>Call metadata (not recordings unless disclosed).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Purpose of Data Collection</h2>
            <p>We process your data strictly for:</p>
            <ul className="list-disc pl-6">
              <li>Connecting users with verified nurses and doctors.</li>
              <li>Facilitating home healthcare services.</li>
              <li>Enabling consultations and prescriptions.</li>
              <li>Processing payments and generating invoices.</li>
              <li>Providing customer support.</li>
              <li>Sending reminders, updates, and service notifications.</li>
              <li>Improving platform performance and personalization.</li>
              <li>Preventing fraud and ensuring platform security.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Consent &amp; User Control</h2>
            <ul className="list-disc pl-6">
              <li>By using ExpressAid, you provide explicit consent to collect and process your data.</li>
              <li>You may withdraw consent by discontinuing use or requesting account deletion.</li>
              <li>Certain services may not function without required data.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Data Sharing &amp; Disclosure</h2>
            <p>We do not sell or rent your personal data.</p>
            <p>We may share data with:</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Providers</h3>
            <p>Verified nurses and doctors for treatment purposes.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Partners</h3>
            <p>For processing transactions securely.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance Providers</h3>
            <p>For claims and documentation (if opted by user).</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Authorities</h3>
            <p>When required by law or government request.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Services</h3>
            <p>Only anonymized, aggregated data.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Data Security Measures</h2>
            <p>We implement strong safeguards including:</p>
            <ul className="list-disc pl-6">
              <li>End-to-end encryption of sensitive medical data.</li>
              <li>Secure cloud infrastructure with restricted access.</li>
              <li>Role-based access control (RBAC).</li>
              <li>OTP-based authentication and session control.</li>
              <li>Regular security audits and monitoring.</li>
              <li>Data minimization principles.</li>
            </ul>
            <p>
              Important: No system is completely secure. Users are responsible for
              maintaining confidentiality of login credentials.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Data Retention Policy</h2>
            <p>We retain your data:</p>
            <ul className="list-disc pl-6">
              <li>As long as your account is active.</li>
              <li>As required by applicable medical, legal, and tax regulations.</li>
            </ul>
            <p>After account deletion, data is anonymized for analytics or securely deleted unless legally required.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. User Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your data.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p>To exercise rights, contact: support@expressaid.in</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Children&apos;s Privacy</h2>
            <ul className="list-disc pl-6">
              <li>Services are intended for users aged 18+.</li>
              <li>Guardians may provide data for minors under their responsibility.</li>
              <li>We do not knowingly collect data directly from children.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Third-Party Services</h2>
            <p>ExpressAid may integrate with payment gateways, diagnostic labs, and external service providers.</p>
            <p>We are not responsible for third-party privacy practices. Users should review their policies separately.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">12. Data Breach Protocol</h2>
            <p>In case of a data breach, we will:</p>
            <ul className="list-disc pl-6">
              <li>Take immediate corrective action.</li>
              <li>Notify affected users where required.</li>
              <li>Report to authorities as per applicable laws.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">13. Platform Role Clarification</h2>
            <p>
              ExpressAid acts as a technology platform that connects users with
              independent healthcare professionals.
            </p>
            <ul className="list-disc pl-6">
              <li>We do not provide medical treatment directly.</li>
              <li>Nurses and doctors are responsible for services delivered.</li>
              <li>Users should consult professionals directly for medical decisions.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">14. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically.</p>
            <p>Changes will be communicated via app notifications, email (if available), and updated policy page.</p>
            <p>Continued use implies acceptance of updates.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">15. Contact &amp; Grievance Officer</h2>
            <p>For privacy concerns, email: support@expressaid.in</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What You Just Fixed</h2>
            <ul className="list-disc pl-6">
              <li>Stronger legal compliance posture.</li>
              <li>Clear platform vs provider medical liability boundaries.</li>
              <li>Data breach handling process.</li>
              <li>User consent and rights clarity.</li>
              <li>More professional governance for partners and investors.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Next Step</h2>
            <ul className="list-disc pl-6">
              <li>Strong Terms &amp; Conditions.</li>
              <li>Doctor/Nurse agreement.</li>
              <li>In-app consent form before booking.</li>
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