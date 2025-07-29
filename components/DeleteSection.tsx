'use client'

import React, { useState } from 'react'

export default function DeleteSection() {
  const [deleteData, setDeleteData] = useState({
    name: '',
    phoneNumber: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    setMessageType('')

    try {
      const response = await fetch('/api/users/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: deleteData.name,
          phoneNumber: deleteData.phoneNumber
        })
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Application deleted successfully!')
        setMessageType('success')
        setDeleteData({ name: '', phoneNumber: '' })
      } else {
        setMessage(result.error || 'Failed to delete application')
        setMessageType('error')
      }
    } catch (error) {
      console.error('Error deleting application:', error)
      setMessage('An error occurred while deleting your application')
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delete Application</h2>
            <p className="text-gray-600">If you need to delete your application, please provide your details below.</p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-md ${
              messageType === 'success' 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleDelete} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="delete-name">
                Full Name *
              </label>
              <input 
                type="text" 
                id="delete-name" 
                name="name" 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={deleteData.name}
                onChange={(e) => setDeleteData({...deleteData, name: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="delete-phone">
                Phone Number *
              </label>
              <input 
                type="tel" 
                id="delete-phone" 
                name="phoneNumber" 
                required 
                pattern="[0-9]{10}" 
                maxLength={10} 
                placeholder="1234567890" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={deleteData.phoneNumber}
                onChange={(e) => setDeleteData({...deleteData, phoneNumber: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 rounded-md font-semibold transition duration-300"
            >
              {isLoading ? 'Deleting...' : 'Delete Application'}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                This action cannot be undone. Please make sure you want to delete your application.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 