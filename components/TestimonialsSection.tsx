'use client'

import React from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Amulya K.',
      image: '/amulya.webp',
      rating: 5,
      text: 'After my surgery, I needed daily wound care but couldn\'t get to the clinic. ExpressAid saved me! The nurse was professional, kind, and exactly what I needed during recovery.'
    },
    {
      name: 'Vishnu B.',
      image: '/vishnu.jpg',
      rating: 5,
      text: 'Caring for my aging father was becoming overwhelming. With ExpressAid, we found an amazing nurse who comes twice a week. The peace of mind is priceless.'
    },
    {
      name: 'Priya T.',
      image: '/priya.avif',
      rating: 4.5,
      text: 'When my regular nanny called in sick and my baby had a fever, I panicked. ExpressAid had a pediatric nurse at my door in 15 minutes. Lifesaver!'
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it - hear from those who've experienced ExpressAid</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-gray-50 p-8 rounded-lg fade-in">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image 
                    className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 