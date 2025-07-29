'use client'

import React, { useState } from 'react'

export default function ApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    experience: '',
    specialization: [] as string[],
    certifications: [] as string[]
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Show loading state
      const form = e.currentTarget as HTMLFormElement
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
      if (submitButton) {
        const originalText = submitButton.textContent
        submitButton.textContent = 'Submitting...'
        submitButton.disabled = true
      }
      
      // Use EmailJS to send the application
      const templateParams = {
        to_name: 'ExpressAid Team',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        license: formData.license,
        experience: formData.experience,
        specializations: formData.specialization.join(', ') || 'None selected',
        certifications: formData.certifications.join(', ') || 'None selected',
        message: `New nurse application received from ${formData.name}`
      }
      
      // Send email using EmailJS
      const response = await (window as any).emailjs.send(
        'service_mu1l2wp', // Replace with your EmailJS service ID
        'template_lk92bng', // Replace with your EmailJS template ID
        templateParams,
        'XDIe98FcNydiqXNcG' // Your EmailJS public key
      )
      
      if (response.status === 200) {
        alert('Application submitted successfully! We will contact you soon.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          license: '',
          experience: '',
          specialization: [],
          certifications: []
        })
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      // Reset button state
      const form = e.currentTarget as HTMLFormElement
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
      if (submitButton) {
        submitButton.textContent = 'Submit Application'
        submitButton.disabled = false
      }
    }
  }

  return (
    <section id="apply" className="application-section py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Animated background blur elements */}
      <div className="blur-element"></div>
      <div className="blur-element"></div>
      
      {/* Floating professional icons */}
      <div className="floating-icon">
        <i className="fas fa-user-nurse text-white text-3xl"></i>
      </div>
      <div className="floating-icon">
        <i className="fas fa-certificate text-white text-4xl"></i>
      </div>
      <div className="floating-icon">
        <i className="fas fa-award text-white text-3xl"></i>
      </div>
      <div className="floating-icon">
        <i className="fas fa-graduation-cap text-white text-4xl"></i>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Network of Nurses</h2>
            <p className="text-xl mb-8 opacity-90">Earn competitive pay with flexible hours while making a real difference in patients' lives.</p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-lg">Set your own schedule and work when you want</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-lg">Earn 20-30% more than traditional nursing jobs</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-lg">Get paid instantly after each completed visit</span>
              </div>
            </div>
            
            <div className="bg-white text-blue-600 inline-block px-6 py-3 rounded-md font-semibold">
              Learn More About Nursing With Us <i className="fas fa-arrow-right ml-2"></i>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white apply-form rounded-lg p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    pattern="[0-9]{10}" 
                    maxLength={10} 
                    placeholder="1234567890" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="license">Nursing License Number *</label>
                  <input 
                    type="text" 
                    id="license" 
                    name="license" 
                    required 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.license}
                    onChange={(e) => setFormData({...formData, license: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="experience">Years of Experience *</label>
                  <select 
                    id="experience" 
                    name="experience" 
                    required 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  >
                    <option value="">Select</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="specialization">Specializations</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['ICU', 'Emergency', 'Pediatric', 'Geriatric', 'Cardiac', 'Oncology', 'Mental Health', 'Surgical'].map((spec) => (
                      <label key={spec} className="flex items-center">
                        <input
                          type="checkbox"
                          value={spec}
                          checked={formData.specialization.includes(spec)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                specialization: [...formData.specialization, spec]
                              })
                            } else {
                              setFormData({
                                ...formData,
                                specialization: formData.specialization.filter(s => s !== spec)
                              })
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{spec}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="certifications">Certifications</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['ACLS', 'BCLS', 'PALS', 'CCRN', 'CEN', 'CPN', 'WOCN', 'Other'].map((cert) => (
                      <label key={cert} className="flex items-center">
                        <input
                          type="checkbox"
                          value={cert}
                          checked={formData.certifications.includes(cert)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                certifications: [...formData.certifications, cert]
                              })
                            } else {
                              setFormData({
                                ...formData,
                                certifications: formData.certifications.filter(c => c !== cert)
                              })
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 