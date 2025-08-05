'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">ExpressAid</h3>
            <p className="text-gray-400">Revolutionizing healthcare by connecting patients with qualified nurses instantly.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Nurses</h3>
            <ul className="space-y-2">
              <li><a href="#apply" className="text-gray-400 hover:text-white transition duration-300">Apply Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Benefits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Nurse Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 ExpressAid. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition duration-300">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 