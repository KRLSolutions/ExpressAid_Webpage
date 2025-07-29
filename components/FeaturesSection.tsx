'use client'

import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Instant Booking',
      description: 'Find and book a qualified nurse in minutes, not days. Our platform matches you with available nurses in your area instantly.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Verified Professionals',
      description: 'Every nurse on our platform is thoroughly vetted, licensed, and background-checked for your peace of mind.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Transparent Pricing',
      description: 'No hidden fees. See the exact cost before booking and pay securely through our app with multiple payment options.'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Flexible Scheduling',
      description: 'Need care for an hour or a week? Book exactly when you need it with our flexible scheduling options.'
    },
    {
      icon: 'fas fa-comment-medical',
      title: 'Specialized Care',
      description: 'Find nurses specialized in pediatric care, geriatric care, post-surgical care, chronic conditions, and more.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Continuity of Care',
      description: 'Request the same nurse for follow-up visits to ensure consistent, personalized care for you or your loved ones.'
    }
  ]

  return (
    <section id="features" className="features-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-header text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ExpressAid</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're revolutionizing healthcare by connecting patients with qualified nurses instantly.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 icon-container">
                <i className={`${feature.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 