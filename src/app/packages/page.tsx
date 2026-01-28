'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Container from '@/components/shared/Container'

const packages = [
  {
    name: 'Silver',
    price: '13,000',
    popular: false,
    features: [
      '1 Photographer',
      '1 Cinematographer',
      'Duration: 5 Hours',
      'Unlimited Raw & Maximum Photo Edited',
      'A Trailer & A Documentary Wedding Film',
    ],
  },
  {
    name: 'Gold',
    price: '20,000',
    popular: true,
    features: [
      '2 Photographers',
      '1 Cinematographer',
      'Duration: 5 Hours',
      'Unlimited Raw & Maximum Photo Edited',
      'A Trailer & A Documentary Wedding Film',
      '15 Printed Copies',
    ],
  },
  {
    name: 'Diamond',
    price: '30,000',
    popular: false,
    features: [
      '2 Photographers',
      '1 Cinematographer With Drone',
      'Duration: 7 Hours',
      'Unlimited Raw & Maximum Photo Edited',
      'A Trailer & A Documentary Wedding Film',
      '30 Printed Copies',
      'Premium Album',
    ],
  },
]

const serviceCategories = [
  {
    title: 'Wedding',
    description: 'Complete wedding photography and videography',
    icon: '💒',
  },
  {
    title: 'Commercial',
    description: 'Professional business and corporate photography',
    icon: '🏢',
  },
  {
    title: 'Social Media',
    description: 'Content creation for your social platforms',
    icon: '📱',
  },
  {
    title: 'General',
    description: 'Custom photography for any occasion',
    icon: '📷',
  },
]

export default function Packages() {
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
        .scale-on-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scale-on-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Header */}
      <Container className="relative z-20 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Our Packages
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Choose the perfect package for your special occasion. All packages include professional editing and delivery within 30 days.
          </p>
        </div>
      </Container>

      {/* Service Categories */}
      <Container className="relative z-20 pb-16">
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((category, idx) => (
              <div
                key={category.title}
                className="bg-zinc-900/50 border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors scale-on-hover animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </>
      </Container>

      {/* Pricing Cards */}
      <Container className="relative z-20 pb-20">
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`relative scale-on-hover animate-fade-in-up ${
                  pkg.popular ? 'md:scale-105' : ''
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-white text-black px-4 py-1 text-xs font-bold uppercase">
                      Popular
                    </span>
                  </div>
                )}
                <div
                  className={`h-full border p-8 md:p-10 flex flex-col ${
                    pkg.popular
                      ? 'bg-zinc-800/80 border-white'
                      : 'bg-zinc-900/50 border-gray-800'
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        ৳{pkg.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Perfect for {pkg.name.toLowerCase()} events
                    </p>
                  </div>

                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/connect">
                    <button
                      className={`w-full py-3 px-6 font-bold uppercase text-sm transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-white text-black hover:bg-gray-200'
                          : 'border border-gray-600 text-white hover:border-white'
                      }`}
                    >
                      Choose Plan
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      </Container>

      {/* FAQ Section */}
      <Container className="relative z-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I book a package?',
                a: 'Simply click "Choose Plan" and fill out the contact form. We will get back to you within 24 hours.',
              },
              {
                q: 'Can packages be customized?',
                a: 'Yes! All packages can be customized based on your needs. Contact us for more details.',
              },
              {
                q: 'Do you include editing?',
                a: 'Yes, professional editing is included in all packages with 30-day delivery.',
              },
              {
                q: 'Is a deposit required?',
                a: 'Yes, a 50% deposit is required to secure your booking date.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
