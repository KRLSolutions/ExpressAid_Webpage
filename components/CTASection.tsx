'use client'

import React from 'react'

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Download the ExpressAid app today and get your first visit at 20% off</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://apps.apple.com/in/app/express-aid/id6763533209" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition duration-300"
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
              className="btn-primary bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
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
      </div>
    </section>
  )
} 