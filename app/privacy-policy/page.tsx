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
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p>This Privacy Policy outlines how ExpressAid Technologies Pvt. Ltd. ("we", "us", "ExpressAid") collects, uses, discloses, and protects personal and health-related information when users access our mobile application, website, or associated services ("Services"). Your use of ExpressAid is subject to this Privacy Policy and our Terms & Conditions.</p>
            
            <p>By using ExpressAid, you consent to the practices described herein.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Purpose and Applicability</h2>
            <p>This policy is published in accordance with:</p>
            <ul className="list-disc pl-6">
              <li>Section 43A of the Indian Information Technology Act, 2000</li>
              <li>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
            </ul>
            <p>It applies to:</p>
            <ul className="list-disc pl-6">
              <li>Registered users of the ExpressAid platform (patients and caregivers)</li>
              <li>Certified nurses and healthcare professionals using the provider dashboard</li>
              <li>Visitors to our website and mobile app</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p>We collect the following types of personal and sensitive data:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
            <ul className="list-disc pl-6">
              <li>Full name</li>
              <li>Phone number and email address</li>
              <li>Date of birth and gender</li>
              <li>Address and location data</li>
              <li>Appointment history and preferences</li>
              <li>Profile photos (if voluntarily uploaded)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Health and Medical Data</h3>
            <ul className="list-disc pl-6">
              <li>Treatment details and nursing notes</li>
              <li>Medication, allergies, and chronic condition records</li>
              <li>Insurance details (if applicable)</li>
              <li>Vitals tracked during service delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Technical Data</h3>
            <ul className="list-disc pl-6">
              <li>Device identifiers (IP address, device ID)</li>
              <li>App usage data (screen views, booking behavior)</li>
              <li>Chatbot conversations (for support, feedback, rescheduling)</li>
              <li>Call metadata (for nurse-patient support or IVR calls)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6">
              <li>Enable real-time booking of certified nurses</li>
              <li>Match users to suitable professionals using our AI engine</li>
              <li>Provide customer support and booking confirmations</li>
              <li>Send health alerts, reminders, and follow-ups</li>
              <li>Facilitate payments and generate receipts</li>
              <li>Improve service quality, personalization, and analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal data.</p>
            <p>We may share information with:</p>
            <ul className="list-disc pl-6">
              <li>Verified nurses for treatment execution</li>
              <li>Payment gateways for billing</li>
              <li>Insurance partners for processing receipts</li>
              <li>Government authorities, if required by law</li>
              <li>Analytics providers (only anonymized, aggregated data)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Your Rights and Choices</h2>
            <p>As a user, you have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access and review your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account (and request data deletion)</li>
              <li>Opt out of promotional communications via in-app settings or by emailing support@expressaid.in</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Data Security</h2>
            <p>We apply industry-standard technical and administrative measures:</p>
            <ul className="list-disc pl-6">
              <li>End-to-end encryption of health records</li>
              <li>Role-based access to sensitive data</li>
              <li>Secure OTP login and periodic audits</li>
              <li>Data stored in compliance with Indian health regulations</li>
            </ul>
            <p>Despite best efforts, no system is 100% secure. You are advised to keep your login credentials confidential.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Retention Policy</h2>
            <p>We retain your data:</p>
            <ul className="list-disc pl-6">
              <li>As long as your account is active</li>
              <li>Or as required by applicable health and tax laws</li>
            </ul>
            <p>After deactivation, data is anonymized for statistical use unless otherwise legally mandated.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Children's Privacy</h2>
            <p>Our services are intended for users aged 18 and above. Children's data may only be submitted by legal guardians for caregiving purposes, and such users are responsible for its lawful handling.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Third-Party Services</h2>
            <p>ExpressAid may link to third-party websites (e.g., payment gateways, labs). We are not responsible for their privacy practices. Please review their respective policies before use.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be notified via:</p>
            <ul className="list-disc pl-6">
              <li>App notification</li>
              <li>Email (if applicable)</li>
              <li>Updated date on this page</li>
            </ul>
            <p>Your continued use of ExpressAid after updates indicates acceptance.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
            <p>For privacy-related queries or grievance redressal, contact:</p>
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