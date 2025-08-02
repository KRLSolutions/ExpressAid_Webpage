'use client'

import React, { useState } from 'react'
import FeedbackSidebar from './FeedbackSidebar'
import FeedbackToggle from './FeedbackToggle'

export default function FeedbackProvider() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  return (
    <>
      <FeedbackToggle onClick={() => setIsFeedbackOpen(true)} />
      <FeedbackSidebar 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </>
  )
} 