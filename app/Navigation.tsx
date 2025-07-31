'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png" 
                alt="ExpressAid Logo" 
                width={60} 
                height={40}
                className="w-15 h-10"
              />
              <span className="text-xl font-bold text-blue-500">ExpressAid</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/terms-and-conditions" className="nav-link text-gray-600 hover:text-blue-500 transition duration-300">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="nav-link text-gray-600 hover:text-blue-500 transition duration-300">Privacy Policy</Link>
            <Link href="/about-us" className="nav-link text-gray-600 hover:text-blue-500 transition duration-300">About Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-button" 
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className={`mobile-menu md:hidden bg-white shadow-lg ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/terms-and-conditions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50" onClick={closeMobileMenu}>Terms & Conditions</Link>
          <Link href="/privacy-policy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50" onClick={closeMobileMenu}>Privacy Policy</Link>
          <Link href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50" onClick={closeMobileMenu}>About Us</Link>
        </div>
      </div>
    </nav>
  )
} 