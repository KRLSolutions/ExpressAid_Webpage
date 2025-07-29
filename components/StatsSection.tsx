'use client'

import React from 'react'

export default function StatsSection() {
  return (
    <section className="stats-section bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 fade-in">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 stat-number">500+</div>
            <div className="text-gray-600">Certified Nurses</div>
          </div>
          <div className="p-4 fade-in">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 stat-number">24/7</div>
            <div className="text-gray-600">Availability</div>
          </div>
          <div className="p-4 fade-in">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 stat-number">10k+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
          <div className="p-4 fade-in">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 stat-number">15min</div>
            <div className="text-gray-600">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  )
} 