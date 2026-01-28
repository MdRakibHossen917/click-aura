'use client'

import Image from 'next/image'
import Container from '@/components/shared/Container'

const achievements = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '50+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' },
  { number: '10+', label: 'Countries Served' },
]

const testimonials = [
  {
    text: 'Tahmid captured our wedding day perfectly! Every moment was preserved beautifully.',
    author: 'Lamia',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    text: 'The professionalism and creativity in every shot was outstanding.',
    author: 'Ahmed Khan',
    role: 'Corporate Client',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    text: 'Best photographer in Bangladesh! Highly recommended for all occasions.',
    author: 'Mara Ingram',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
]

export default function About() {
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <Container className="relative z-20 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            About Bengal Art
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Capturing life&apos;s most precious moments with passion and creativity
          </p>
        </div>
      </Container>

      {/* About Section */}
      <Container className="relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative h-96 md:h-125 bg-gray-900 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521337573892-a64ee5a90876?w=600&h=600&fit=crop"
                alt="Tahmid Anan - Photographer"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tahmid Anan
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              I&apos;m Tahmid Anan, a professional photographer based in Bangladesh. My journey began with a simple curiosity for capturing light and has evolved into a passionate pursuit of storytelling through the lens.
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              At Bengal Art, we believe that every picture tells a story, and we are dedicated to making yours unforgettable. Whether it&apos;s the joy of a wedding, the energy of a corporate event, or the quiet beauty of a portrait, I strive to create images that resonate with emotion and authenticity.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold mb-2">My Philosophy</h3>
                <p className="text-gray-400 text-sm">
                  Every moment matters. I focus on capturing not just images, but emotions and stories that will be treasured for generations.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">My Process</h3>
                <p className="text-gray-400 text-sm">
                  From pre-planning to final delivery, we ensure excellence in every step. Professional editing, quick delivery, and client satisfaction are our priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Achievements */}
      <Container className="relative z-20 pb-20">
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((item, idx) => (
              <div
                key={item.label}
                className="bg-zinc-900/50 border border-gray-800 p-6 md:p-8 text-center hover:border-gray-600 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </>
      </Container>

      {/* Testimonials */}
      <Container className="relative z-20 pb-20">
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-gray-800 p-8 hover:border-gray-600 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </Container>

      {/* Services */}
      <Container className="relative z-20 pb-20">
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Wedding Photography', desc: 'Complete coverage of your special day' },
              { title: 'Cinematography', desc: 'Professional video production' },
              { title: 'Portrait Sessions', desc: 'Stunning personal portraits' },
              { title: 'Corporate Events', desc: 'Business and conference coverage' },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="bg-linear-to-br from-zinc-900/50 to-zinc-900/30 border border-gray-800 p-6 hover:border-gray-600 transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-white font-bold mb-2 text-lg">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </>
      </Container>
    </div>
  )
}
