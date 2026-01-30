'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Container from '@/components/shared/Container'

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'wedding',
    eventDate: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'wedding',
        eventDate: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="relative w-full min-h-screen bg-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <Container className="relative z-20 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ready to create something amazing? Get in touch and let&apos;s discuss your project.
          </p>
        </div>
      </Container>

      {/* Contact Section */}
      <Container className="relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <div className="animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <a
                      href="mailto:info@clickaura.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      info@clickaura.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Phone</h3>
                    <a
                      href="tel:+8801234567890"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      +880 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Location</h3>
                    <p className="text-gray-400">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-zinc-900/50 border border-gray-800 p-6 rounded animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-white font-bold mb-2">Response Time</p>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/50 border border-gray-800 p-8 md:p-12 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              {submitted && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-700 text-green-400 rounded">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                    placeholder="+880 123 456 7890"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="commercial">Commercial</option>
                    <option value="portrait">Portrait</option>
                    <option value="event">Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Event Date */}
              <div className="mb-6">
                <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-white font-bold mb-2 text-sm uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black/50 border border-gray-600 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black font-bold uppercase text-sm py-4 hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>

              <p className="text-gray-500 text-xs mt-4">
                * Required fields. We respect your privacy and will only use this information to contact you about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </Container>

      {/* Map Section */}
      <Container className="relative z-20 pb-20">
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
            Find Us
          </h2>
          <div className="bg-gray-900 h-96 rounded border border-gray-800 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Click Arora Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9889850843006!2d90.38669!3d23.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1d8b5b5b5%3A0x5c5c5c5c5c5c5c5c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </>
      </Container>
    </div>
  )
}
