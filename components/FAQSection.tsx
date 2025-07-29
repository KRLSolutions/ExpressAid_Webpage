'use client'

import React, { useState } from 'react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How quickly can I get a nurse?',
      answer: 'Most bookings are fulfilled within 10-20 minutes, depending on your location and the type of care needed. For non-urgent needs, you can schedule visits in advance.'
    },
    {
      question: 'What types of nursing services do you offer?',
      answer: 'We offer a wide range of services including wound care, medication administration, post-surgical care, elderly care, pediatric care, chronic disease management, and more. Our nurses can also assist with basic daily activities when needed.'
    },
    {
      question: 'How are your nurses vetted?',
      answer: 'All nurses undergo a rigorous 5-step verification process including license verification, background checks, skills assessment, reference checks, and in-person interviews. Only 25% of applicants are accepted into our network.'
    },
    {
      question: 'Is ExpressAid covered by insurance?',
      answer: 'We currently partner with several major insurance providers. While we don\'t bill insurance directly, we can provide detailed receipts for you to submit to your insurance for possible reimbursement. Many patients successfully use HSA/FSA funds for our services.'
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'You can cancel or reschedule up to 2 minutes after your booking with no penalty. For cancellations after 2 minutes, a small fee may apply to compensate the nurse for their time.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="faq-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about ExpressAid</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                className="faq-toggle flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <i className={`fas ${openFAQ === index ? 'fa-minus' : 'fa-plus'} text-blue-500`}></i>
              </button>
              <div className={`faq-content ${openFAQ === index ? '' : 'hidden'} mt-2`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 