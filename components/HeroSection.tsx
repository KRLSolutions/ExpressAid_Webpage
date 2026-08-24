'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Animated background blur elements */}
      <div className="blur-element"></div>
      <div className="blur-element"></div>
      <div className="blur-element"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 hero-content">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Quality Nursing Care <br />On Your Schedule
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Book certified nurses instantly for in-home care, post-surgery assistance, elderly care, and more with our easy-to-use app.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://apps.apple.com/in/app/express-aid/id6763533209" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold inline-block"
              >
                <div className="flex items-center justify-center">
                  <i className="fab fa-apple mr-2 text-xl"></i>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.expressaid.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-black text-white-600 hover:bg-gray-800 px-6 py-3 rounded-md font-semibold inline-block"
              >
                <div className="flex items-center justify-center">
                  <i className="fab fa-google-play mr-2 text-xl"></i>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/nurse-hero.jpg" 
              alt="Nurse providing care"
              width={600}
              height={400}
              className="hero-image rounded-lg shadow-2xl max-w-full h-auto md:max-w-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 