'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/shared/Container'

const categories = ['All', 'Wedding', 'Commercial', 'Portrait', 'Event']

const portfolioItems = [
  {
    id: 1,
    title: 'Wedding at Sunset',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Corporate Event',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Portrait Session',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  },
 
 
  {
    id: 6,
    title: 'Family Portrait',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Wedding Reception',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
  },
 
]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

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
      <div className="relative z-20 pt-32 pb-12">
        <Container>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            Our Work
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore our creative portfolio showcasing weddings, commercial projects, and portraits.
          </p>
        </Container>
      </div>

      {/* Category Filter */}
      <div className="relative z-20 pb-12">
        <Container>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 uppercase text-xs md:text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-white text-black border-white'
                    : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-20 pb-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-gray-900 aspect-square animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 md:p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      
      
    </div>
  )
}
