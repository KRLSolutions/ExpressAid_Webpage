'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation />
      
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-center opacity-40 blur-sm pointer-events-none z-0" />
        
        {/* Foreground Content */}
        <div className="z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-4">
                <p className="text-left"><strong>Welcome to ExpressAid – Your Trusted Partner in Home Healthcare.</strong></p>
                <p className="text-left">At ExpressAid, we believe healthcare should be immediate, compassionate, and accessible to everyone. 
                  That's why we've built a platform that allows you to book a certified nurse at your doorstep within 15 minutes, ensuring timely care when you need it most.</p>
                <p className="text-left">Whether it's post-surgical support, chronic illness management, elder care, injections, or dressing wounds, our qualified nursing professionals deliver hospital-grade care in the comfort and safety of your home. 
                  Every service is tailored to your needs—because we know that true healing begins where you feel most secure.</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h2>
                <p className="text-left">To revolutionize healthcare delivery by making professional nursing care accessible, affordable, and convenient for everyone, while providing nurses with flexible, rewarding career opportunities.</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h2>
                <p className="text-left">To become the leading platform for on-demand healthcare services, connecting patients with qualified healthcare professionals instantly, anytime, anywhere.</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Values</h2>
                <ul className="text-left list-disc pl-6">
                  <li><strong>Compassion:</strong> We treat every patient and nurse with empathy, respect, and dignity.</li>
                  <li><strong>Excellence:</strong> We maintain the highest standards of care and professionalism.</li>
                  <li><strong>Innovation:</strong> We continuously improve our platform and services to better serve our community.</li>
                  <li><strong>Accessibility:</strong> We believe quality healthcare should be available to everyone, regardless of location or circumstance.</li>
                  <li><strong>Trust:</strong> We build lasting relationships based on transparency, reliability, and integrity.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Why ExpressAid?</h2>
                <p className="text-left">In today's fast-paced world, healthcare shouldn't be complicated or time-consuming. ExpressAid bridges the gap between traditional healthcare services and modern convenience, offering:</p>
                <ul className="text-left list-disc pl-6">
                  <li><strong>Instant Access:</strong> Book a nurse in minutes, not days</li>
                  <li><strong>Verified Professionals:</strong> All our nurses are licensed, background-checked, and experienced</li>
                  <li><strong>Flexible Scheduling:</strong> 24/7 availability with same-day and advance booking options</li>
                  <li><strong>Specialized Care:</strong> Nurses trained in various specialties to meet your specific needs</li>
                  <li><strong>Transparent Pricing:</strong> No hidden fees, clear pricing before booking</li>
                  <li><strong>Quality Assurance:</strong> Continuous monitoring and feedback systems to ensure the highest standards</li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Commitment</h2>
                <p className="text-left">We are committed to transforming the healthcare experience by making it more human, more accessible, and more efficient. Our team works tirelessly to ensure that every interaction with ExpressAid exceeds expectations, providing peace of mind for patients and rewarding opportunities for healthcare professionals.</p>
                <p className="text-left">Join us in our mission to make quality healthcare accessible to everyone, one visit at a time.</p>
              </div>
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