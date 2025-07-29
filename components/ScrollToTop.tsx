'use client'

import React from 'react'

interface ScrollToTopProps {
  isVisible: boolean
}

export default function ScrollToTop({ isVisible }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={`scroll-to-top-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  )
} 