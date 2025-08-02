'use client'

import React, { useState } from 'react'
import { FaBug, FaTimes, FaComments, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa'
import { saveFeedback } from '@/utils/feedbackStorage'

interface FeedbackSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function FeedbackSidebar({ isOpen, onClose }: FeedbackSidebarProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'bug' as const,
    subject: '',
    description: '',
    priority: 'medium' as const
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Save to localStorage
      saveFeedback(formData)
      
      // Also send to API (for future server-side storage)
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          type: 'bug',
          subject: '',
          description: '',
          priority: 'medium'
        })
        
        // Trigger a storage event to update any displays
        window.dispatchEvent(new Event('storage'))
        
        // Auto-close after 2 seconds on success
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <FaBug className="text-red-500" />
      case 'feature':
        return <FaLightbulb className="text-yellow-500" />
      case 'improvement':
        return <FaExclamationTriangle className="text-blue-500" />
      default:
        return <FaComments className="text-gray-500" />
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <FaComments className="text-blue-600 text-xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Feedback</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="text-green-500 mr-3">✓</div>
                  <span className="text-green-800 text-sm">Thank you! Your feedback has been submitted.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="text-red-500 mr-3">✗</div>
                  <span className="text-red-800 text-sm">There was an error. Please try again.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="sidebar-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="sidebar-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="sidebar-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="sidebar-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="sidebar-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type *
                </label>
                <div className="relative">
                  <select
                    id="sidebar-type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="bug">🐛 Bug Report</option>
                    <option value="feature">💡 Feature Request</option>
                    <option value="improvement">✨ Improvement</option>
                    <option value="general">💬 General</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    {getTypeIcon(formData.type)}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="sidebar-priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  id="sidebar-priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label htmlFor="sidebar-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="sidebar-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Brief description"
                />
              </div>

              <div>
                <label htmlFor="sidebar-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="sidebar-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Please provide details..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition duration-200 flex items-center justify-center text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaBug className="mr-2" />
                    Submit Feedback
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              Your feedback helps us improve ExpressAid
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 