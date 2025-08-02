'use client'

import React, { useState, useEffect } from 'react'
import { Feedback, getFeedback, updateFeedbackStatus, deleteFeedback } from '@/utils/feedbackStorage'
import { FaBug, FaLightbulb, FaExclamationTriangle, FaComments, FaCheck, FaClock, FaTrash, FaEye } from 'react-icons/fa'

export default function FeedbackDisplay() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null)
  const [filter, setFilter] = useState<'all' | 'new' | 'in-progress' | 'resolved'>('all')

  useEffect(() => {
    loadFeedback()
    // Listen for storage changes (when new feedback is added)
    const handleStorageChange = () => loadFeedback()
    // Listen for custom feedback update events
    const handleFeedbackUpdate = () => loadFeedback()
    
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('feedbackUpdated', handleFeedbackUpdate)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('feedbackUpdated', handleFeedbackUpdate)
    }
  }, [])

  const loadFeedback = () => {
    const storedFeedback = getFeedback()
    setFeedback(storedFeedback)
  }

  const handleStatusUpdate = (id: string, status: Feedback['status']) => {
    updateFeedbackStatus(id, status)
    loadFeedback()
    // Force re-render by updating the selected feedback if it's the one being updated
    if (selectedFeedback && selectedFeedback.id === id) {
      const updatedFeedback = feedback.find(f => f.id === id)
      if (updatedFeedback) {
        setSelectedFeedback({ ...updatedFeedback, status })
      }
    }
  }

  const handleDelete = (id: string) => {
    // Check if admin mode is enabled via URL parameter
    const urlParams = new URLSearchParams(window.location.search)
    const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET 
    const isAdmin = urlParams.get('admin') === adminSecret
    
    if (isAdmin) {
      if (confirm('Are you sure you want to delete this feedback?')) {
        deleteFeedback(id)
        loadFeedback()
        if (selectedFeedback?.id === id) {
          setSelectedFeedback(null)
        }
      }
    } else {
      alert('Delete functionality is not available.')
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'resolved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredFeedback = feedback.filter(item => 
    filter === 'all' ? true : item.status === filter
  )

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Submitted Feedback</h3>
        
        {/* Filter Tabs */}
        <div className="flex space-x-1">
          {[
            { key: 'all', label: 'All', count: feedback.length },
            { key: 'new', label: 'New', count: feedback.filter(f => f.status === 'new').length },
            { key: 'in-progress', label: 'In Progress', count: feedback.filter(f => f.status === 'in-progress').length },
            { key: 'resolved', label: 'Resolved', count: feedback.filter(f => f.status === 'resolved').length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Feedback List */}
      <div className="flex-1 overflow-y-auto">
        {filteredFeedback.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <FaComments className="text-4xl mx-auto mb-3 text-gray-300" />
            <p>No feedback yet</p>
            <p className="text-sm">Submitted feedback will appear here</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredFeedback.map((item) => (
              <div
                key={item.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedFeedback?.id === item.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => setSelectedFeedback(item)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 mb-2">
                    {getTypeIcon(item.type)}
                    <span className="font-medium text-sm text-gray-900 truncate">
                      {item.subject}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-2">
                  by {item.name} • {formatDate(item.timestamp)}
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Feedback Detail */}
      {selectedFeedback && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">Feedback Details</h4>
            <button
              onClick={() => setSelectedFeedback(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaEye className="text-sm" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-500">Subject</label>
              <p className="text-sm text-gray-900">{selectedFeedback.subject}</p>
            </div>
            
            <div>
              <label className="text-xs font-medium text-gray-500">Description</label>
              <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedFeedback.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-500">From</label>
                <p className="text-sm text-gray-900">{selectedFeedback.name}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500">Submitted</label>
                <p className="text-sm text-gray-900">{formatDate(selectedFeedback.timestamp)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(selectedFeedback.priority)}`}>
                {selectedFeedback.priority} priority
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedFeedback.status)}`}>
                {selectedFeedback.status}
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2 pt-2">
              <select
                value={selectedFeedback.status}
                onChange={(e) => handleStatusUpdate(selectedFeedback.id, e.target.value as any)}
                className="text-xs border border-gray-300 rounded px-2 py-1"
              >
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
              
              <button
                onClick={() => handleDelete(selectedFeedback.id)}
                className="text-xs text-red-600 hover:text-red-800 flex items-center"
              >
                <FaTrash className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 