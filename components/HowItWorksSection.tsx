'use client'

import React from 'react'
import Image from 'next/image'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ExpressAid Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Getting quality nursing care has never been easier</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Download the App</h3>
                <p className="text-gray-600">Get started by downloading our free app from the App Store or Google Play Store.</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">Set up your profile in minutes and tell us about your care needs or medical conditions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Book a Nurse</h3>
                <p className="text-gray-600">Browse available services and then book a nurse with just a few taps.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Woman using smartphone app"
              width={600}
              height={400}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Nurse Arrives</h3>
                <p className="text-gray-600">Your nurse arrives at the scheduled time with all necessary equipment and medications.</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Receive Care</h3>
                <p className="text-gray-600">Get professional medical care in the comfort of your home from our certified nurses.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rate & Review</h3>
                <p className="text-gray-600">After your visit, rate your experience and provide feedback to help us improve.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Image 
              src="/nurse.webp"  
              alt="Nurse providing care"
              width={600}
              height={400}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 