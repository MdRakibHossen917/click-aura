'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/shared/Container'
import ImageSkeleton from '@/components/shared/ImageSkeleton'

export default function About() {
  const workImages = [
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/beautiful-wedding-walk-nature-ukraine-sumy_gi4ccv.jpg',
      title: 'Wedding Couple Walking in Nature',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725089/just-married-couple-having-fun-together_tuc5yy.jpg',
      title: 'Just Married Couple',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1751531746/samples/balloons.jpg',
      title: 'Wedding Celebration',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/colorful-kingfisher-bird-sitting-tree-branch_xacat9.jpg',
      title: 'Colorful Kingfisher Bird',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-blue-kingfisher-bird-branch_s57u55.jpg',
      title: 'Beautiful Blue Kingfisher',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-shot-european-bee-eater-bird-perched-log-forest_ztagjt.jpg',
      title: 'European Bee-Eater',
    },
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop',
      title: 'Professional Portrait',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/young-woman-farmer-looking-after-cows-cowshed_ylwodo.jpg',
      title: 'Woman Farmer with Cows',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/view-woman-working-animal-farming-field-celebrate-labour-day-women_1_ffacyb.jpg',
      title: 'Woman Animal Farming',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/front-view-smiley-woman-holding-goat_sxivfd.jpg',
      title: 'Woman with Goat',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733956/basketball-game_pffvah.jpg',
      title: 'Basketball Game',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733956/smiley-friends-with-books-coffee-outdoors_le2hly.jpg',
      title: 'Friends with Coffee',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733957/universityCafeteria_kmkmlb.jpg',
      title: 'University Cafeteria',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/rsz_young-woman-posing-her-colorful-painting_qmvlng.jpg',
      title: 'Woman with Colorful Painting',
    },
    {
      src: 'https://res.cloudinary.com/dk8syjt2z/image/upload/v1769734099/young-peeple-red-packing-cardboards-with-humanitarian-help_uptphu.jpg',
      title: 'Young People Packing Humanitarian Help',
    },
  ]

  const row1Images = [...workImages.slice(0, 6), ...workImages.slice(0, 6)]
  const row2Images = [...workImages.slice(6, 12), ...workImages.slice(6, 12)]
  const row3Images = [...workImages.slice(12), ...workImages.slice(12)]

  return (
    <div className="relative w-full min-h-screen bg-zinc-50 dark:bg-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
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
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .image-marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          contain: layout style paint;
        }
        .image-marquee-left {
          animation: marquee-left 22s linear infinite;
          transform: translate3d(0, 0, 0);
        }
        .image-marquee-right {
          animation: marquee-right 22s linear infinite;
          transform: translate3d(0, 0, 0);
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .image-marquee-left,
          .image-marquee-right {
            animation: none;
          }
        }
      `}</style>

      {/* Header */}
      <Container className="relative z-20 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-4 leading-[0.8]">
            Get To
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Know Us</span>
          </h1>
        </div>
      </Container>

      {/* Features */}
      <Container className="relative z-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Photography',
            'Video Editing',
            'Filmmaking',
            'Video Production',
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900/50 border border-zinc-800 p-5 text-center hover:border-gray-600 transition-colors"
            >
              <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-widest">{item}</h3>
            </div>
          ))}
        </div>
      </Container>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden border-y border-white/10 bg-black py-4">
        <div className="marquee-track gap-10 text-sm md:text-base uppercase tracking-[0.35em] text-gray-400">
          <span>Photography</span>
          <span>Video Editing</span>
          <span>Filmmaking</span>
          <span>Video Production</span>
          <span>Brand Storytelling</span>
          <span>Photography</span>
          <span>Video Editing</span>
          <span>Filmmaking</span>
          <span>Video Production</span>
          <span>Brand Storytelling</span>
        </div>
      </div>

      {/* Intro + Features Grid */}
      <Container className="relative z-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ opacity: 1, transform: 'none' }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Creative Visual Solutions for Your Brand – </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white">Click Arora</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-satoshi-light" style={{ opacity: 1, transform: 'none' }}>
              <p>Hi, I&apos;m Alvi, a passionate photographer, filmmaker, and visual storyteller based in Bangladesh.</p>
              <p>With a keen eye for detail and a love for cinematic aesthetics, I strive to create visuals that resonate deeply. My approach combines technical precision with artistic vision, ensuring every project stands out with its own unique identity.</p>
              <p>Having collaborated with diverse brands and delivered <strong className="text-white">100+ projects</strong>, I believe in the power of visual media to transform ideas into compelling narratives that leave a lasting impact.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4" style={{ opacity: 1, transform: 'none' }}>
              <Link className="group relative px-8 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 inline-flex items-center justify-center text-center bg-white text-black hover:bg-zinc-200" href="/work">
                <span className="relative inline-block overflow-hidden align-middle">
                  <span className="block translate-y-0 transition-transform duration-500 group-hover:-translate-y-[100%]">View My Work</span>
                  <span className="absolute top-0 left-0 w-full h-full block translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">View My Work</span>
                </span>
              </Link>
              <Link className="group relative px-8 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 inline-flex items-center justify-center text-center bg-transparent border border-white/20 text-white hover:bg-white/10" href="/connect">
                <span className="relative inline-block overflow-hidden align-middle">
                  <span className="block translate-y-0 transition-transform duration-500 group-hover:-translate-y-[100%]">Let&apos;s Create Together</span>
                  <span className="absolute top-0 left-0 w-full h-full block translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">Let&apos;s Create Together</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative w-full overflow-hidden hidden md:block">
              <div className="image-marquee-track image-marquee-left">
                {row1Images.map((item, idx) => (
                  <div key={`row1-${idx}`} className="group relative h-36 w-56 md:h-40 md:w-64 overflow-hidden rounded-xl border border-white/10 flex-shrink-0">
                    <ImageSkeleton className="h-full w-full rounded-xl">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={256}
                        height={160}
                        sizes="(min-width: 768px) 256px, 224px"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ contain: 'content' }}
                      />
                    </ImageSkeleton>
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                      <span className="text-white text-sm font-semibold">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="image-marquee-track image-marquee-right">
                {row2Images.map((item, idx) => (
                  <div key={`row2-${idx}`} className="group relative h-36 w-56 md:h-40 md:w-64 overflow-hidden rounded-xl border border-white/10 flex-shrink-0">
                    <ImageSkeleton className="h-full w-full rounded-xl">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={256}
                        height={160}
                        sizes="(min-width: 768px) 256px, 224px"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ contain: 'content' }}
                      />
                    </ImageSkeleton>
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                      <span className="text-white text-sm font-semibold">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="image-marquee-track image-marquee-left">
                {row3Images.map((item, idx) => (
                  <div key={`row3-${idx}`} className="group relative h-36 w-56 md:h-40 md:w-64 overflow-hidden rounded-xl border border-white/10 flex-shrink-0">
                    <ImageSkeleton className="h-full w-full rounded-xl">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={256}
                        height={160}
                        sizes="(min-width: 768px) 256px, 224px"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ contain: 'content' }}
                      />
                    </ImageSkeleton>
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                      <span className="text-white text-sm font-semibold">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="bg-black text-white py-20 px-4 md:px-10 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-3 h-3">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              Experience
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Film &amp; Video Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-satoshi-light">A refined timeline of creative leadership, production, and post — delivering cinematic stories for brands, documentaries, and heartfelt wedding films.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-zinc-900/30 border border-zinc-800 p-8 hover:bg-zinc-900/50 transition-all duration-300" style={{ opacity: 1, transform: 'none' }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">2017 - PRESENT</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-5 h-5 text-zinc-700 group-hover:text-white transition-colors">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">Founder &amp; Lead Creative</h3>
              <p className="text-sm text-gray-500 mb-4">Bengal Art</p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">Guiding a full-service studio from concept to delivery — shaping premium visuals, directing sets, and elevating stories for brands and people.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Direction</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Strategy</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Leadership</span>
              </div>
              <div className="absolute bottom-8 right-8">
                <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300" href="/work">
                  View work
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-3 h-3">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="group relative bg-zinc-900/30 border border-zinc-800 p-8 hover:bg-zinc-900/50 transition-all duration-300" style={{ opacity: 1, transform: 'none' }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">2022 - 2024</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-5 h-5 text-zinc-700 group-hover:text-white transition-colors">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">Senior Content Producer</h3>
              <p className="text-sm text-gray-500 mb-4">Global Media Agency</p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">Led end-to-end production for global clients — aligning creative direction, crew, and timelines to deliver polished, on-brand visual campaigns.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Production</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Management</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Quality Control</span>
              </div>
              <div className="absolute bottom-8 right-8">
                <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300" href="/work">
                  View work
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-3 h-3">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="group relative bg-zinc-900/30 border border-zinc-800 p-8 hover:bg-zinc-900/50 transition-all duration-300" style={{ opacity: 1, transform: 'none' }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">2019 - 2022</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-5 h-5 text-zinc-700 group-hover:text-white transition-colors">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">Video Editor &amp; Colorist</h3>
              <p className="text-sm text-gray-500 mb-4">Freelance</p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">Crafted edits and cinematic color grades that sharpen story pace, mood, and emotion across films, ads, and music projects.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Editing</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Color Grading</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Post-Production</span>
              </div>
              <div className="absolute bottom-8 right-8">
                <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300" href="/work">
                  View work
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-3 h-3">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="group relative bg-zinc-900/30 border border-zinc-800 p-8 hover:bg-zinc-900/50 transition-all duration-300" style={{ opacity: 1, transform: 'none' }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">2018 - 2020</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-5 h-5 text-zinc-700 group-hover:text-white transition-colors">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">Cinematographer</h3>
              <p className="text-sm text-gray-500 mb-4">Independent Projects</p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">Shot cinematic visuals for short films and documentaries — shaping lighting, camera movement, and tone to match the director&apos;s vision.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Cinematography</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Lighting</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 border border-zinc-700">Camera Op</span>
              </div>
              <div className="absolute bottom-8 right-8">
                <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300" href="/work">
                  View work
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-3 h-3">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
