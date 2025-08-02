'use client'

import React from 'react'
import { FaComments } from 'react-icons/fa'

interface FeedbackToggleProps {
  onClick: () => void
}

export default function FeedbackToggle({ onClick }: FeedbackToggleProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-30 group"
      aria-label="Open feedback form"
    >
      <FaComments className="text-xl" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Give Feedback
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  )
} 