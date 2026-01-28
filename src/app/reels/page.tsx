'use client'

import { useState } from 'react'
import Container from '@/components/shared/Container'

const reels = [
  {
    id: 1,
    title: 'Wedding Highlight 2024',
    type: 'Wedding',
    src: 'https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4',
  },
  {
    id: 2,
    title: 'Corporate Event Coverage',
    type: 'Commercial',
    src: 'https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4',
  },
  {
    id: 3,
    title: 'Portrait Session Reel',
    type: 'Portrait',
    src: 'https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4',
  },
  {
    id: 4,
    title: 'Engagement Ceremony',
    type: 'Wedding',
    src: 'https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4',
  },
]

export default function Reels() {
  const [selectedReel, setSelectedReel] = useState<number | null>(null)

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
            Video Reels
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Watch our latest cinematic content and video highlights from recent projects.
          </p>
        </div>
      </Container>

      {/* Video Grid */}
      <Container className="relative z-20 pb-20">
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reels.map((reel, idx) => (
              <div
                key={reel.id}
                className="group relative overflow-hidden bg-gray-900 aspect-video animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedReel(reel.id)}
              >
                <video
                  src={reel.src}
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 group-hover:bg-white transition-colors rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-linear-to-t from-black to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{reel.title}</h3>
                  <p className="text-gray-300 text-sm">{reel.type}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      </Container>

      {/* Modal for video player */}
      {selectedReel && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={reels.find((r) => r.id === selectedReel)?.src}
              className="w-full aspect-video bg-black"
              controls
              autoPlay
              controlsList="nodownload"
            />
          </div>
        </div>
      )}

      {/* Instagram Feed Section */}
      <Container className="relative z-20 pb-20">
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">
            Follow Us on Instagram
          </h2>
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              For more daily content, behind-the-scenes, and latest updates
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-gray-200 transition-colors"
            >
              @bengalart
            </a>
          </div>
        </>
      </Container>
    </div>
  )
}
