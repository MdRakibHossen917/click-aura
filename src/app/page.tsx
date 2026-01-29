/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

// Counter component for animated counting
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return <span ref={countRef}>{count}</span>
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('Albums')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerY, setDrawerY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const albumRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (albumRef.current && activeTab === 'Albums') {
        const stacks = albumRef.current.querySelectorAll('.album-image-stack')
        stacks.forEach((stack) => {
          const rect = stack.getBoundingClientRect()
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const translateY = (1 - scrollProgress) * 50
          
          // Only animate left and right images (z-[2] and z-[3])
          const rightImage = stack.querySelector('.album-right') as HTMLElement
          const leftImage = stack.querySelector('.album-left') as HTMLElement
          
          if (rightImage) {
            rightImage.style.transform = `translateY(${translateY}px)`
          }
          if (leftImage) {
            leftImage.style.transform = `translateY(${translateY}px)`
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])
  
  return (
    <div className="relative w-full min-h-screen bg-zinc-50 dark:bg-black overflow-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-fade-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        @keyframes slideUpFromBottom {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .album-label {
          animation: slideUpFromBottom 0.4s ease-out forwards;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* Cloudinary Video Background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <video
          src="https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

     
      {/* Section 1 - Hero Section with Video */}
      <section className="relative z-20 h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-4  pointer-events-auto h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center relative w-full">

             {/* Left Content */}
       <div className="relative pt-20 md:absolute inset-0 z-10 md:h-full pointer-events-none mix-blend-exclusion md:pt-0">
        <div className="   md:absolute md:inset-0 flex items-center justify-start">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-700 leading-tight  ">
            Capturing<br />
            Life&apos;s Best
            <br />
            Moments
          </h1>
        </div>
      </div>


            {/* Right Content */}
            <div className="md:col-start-9 md:col-end-13 text-left md:text-right relative z-10">
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-sm sm:text-base md:text-lg leading-relaxed text-white md:text-black font-normal tracking-wide mb-6 md:mb-8">
                  HI, ALVI  HERE. I&apos;M A PROFESSIONAL PHOTOGRAPHER IN BANGLADESH AND THE CREATIVE EYE BEHIND BENGAL ART.
                  I SPECIALIZE IN CAPTURING LIFE&apos;S MAGICAL MOMENTS, ONE CLICK AT A TIME.
                  LET&apos;S CREATE SOMETHING UNFORGETTABLE TOGETHER!
                </h2>
              </div>

              <div className="animate-fade-scale" style={{ animationDelay: '0.4s' }}>
                <Link href="/work" className="inline-block group">
                  <div className="border border-white md:border-black text-white md:text-black hover:bg-white hover:text-black transition-all duration-300 flex justify-between items-center gap-6 overflow-hidden relative">
                    <span className="py-3 px-6 uppercase text-xs md:text-sm font-medium tracking-wider">My Work</span>
                    <span className="border-l border-white md:border-black py-3 px-4 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-5 h-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        fill="currentColor"
                      >
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 - About Section with Image Stack */}
      <section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen h-auto lg:h-screen flex items-center w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
              
           {/* Right side - Masonry Grid Images */}
            <div className="w-full lg:order-2">
              <div className="grid grid-cols-3 auto-rows-max gap-4 md:gap-6">
                {/* Image 1 - Tall Left */}
                <div className="col-span-1 row-span-2">
                 
                </div>

                {/* Image 2 - Regular */}
                <div className="col-span-1">
                  
                </div>

                {/* Image 3 - Regular */}
                <div className="col-span-2">
                   
                </div>

                {/* Image 4 - Wide Bottom */}
                <div className="col-span-2 ">
                  <img
                    src={`https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop`}
                    alt="Photo 4"
                    className="w-full h-32 md:h-40 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>

                {/* Image 5 - Regular */}
                <div className="col-span-1 -mt-8">
                  <img
                    src={`https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=400&auto=format&fit=crop`}
                    alt="Photo 5"
                    className="w-full h-32 md:h-45 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>

                {/* Image 6 - Tall Right */}
                <div className="col-span-1 row-span-2 ">
                  <img
                    src={`https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=400&auto=format&fit=crop`}
                    alt="Photo 6"
                    className="w-full h-64 md:h-85 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>

                {/* Image 7 - Regular */}
                <div className="col-span-1 -mt-2">
                  <img
                    src={`https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=400&auto=format&fit=crop`}
                    alt="Photo 7"
                    className="w-full h-32 md:h-56 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>

                {/* Image 8 - Regular */}
                <div className="col-span-1 -mt-5">
                 <img
                    src={`https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop`}
                    alt="Photo 3"
                    className="w-full h-32 md:h-40 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Details Text */}
            <div className="text-white space-y-4 md:space-y-6 py-8 lg:py-0">
              <h2 className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white uppercase tracking-widest mb-2">
                About Me
              </h2>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                Capturing the Essence of Every Moment
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Hi, I&apos;m Alvi, a professional photographer based in Bangladesh and the creative eye behind Bengal Art. 
                With years of experience in capturing life&apos;s most precious moments, I specialize in wedding photography, 
                commercial shoots, and portrait sessions that tell your unique story.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                My passion lies in creating timeless images that evoke emotion and preserve memories for generations. 
                Every photograph is a piece of art, crafted with attention to detail and a deep understanding of light, 
                composition, and storytelling.
              </p>

              <div className="pt-2 md:pt-4">
                <Link href="/about" className="inline-block group">
                  <div className="border border-[#be9b58] text-[#be9b58] hover:bg-[#be9b58] hover:text-black transition-all duration-300 flex justify-between items-center gap-4 md:gap-6 overflow-hidden">
                    <span className="py-2 md:py-3 px-4 md:px-6 uppercase text-xs md:text-sm font-medium tracking-wider">Read My Story</span>
                    <span className="border-l border-[#be9b58] py-2 md:py-3 px-3 md:px-4 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-4 h-4 md:w-5 md:h-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        fill="currentColor"
                      >
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Section 3 - Creative Portfolio */}
      <section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          
          {/* Heading */}
          <h2 className="text-center font-bold text-white mb-8 md:mb-12 px-4">
            <span className="font-satoshi-light text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white">
              Explore Our
            </span>
            <span className="block text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mt-2">
              Creative Portfolio
            </span>
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-col items-center justify-center relative w-full mb-8">
            <div className="bg-zinc-900/50 p-1 border border-zinc-800 rounded-lg inline-flex">
              {['Albums', 'Photos', 'Videos', 'Reels'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-6 md:px-8 py-2 md:py-3 bg-transparent transition-all duration-300"
                >
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-zinc-800 rounded shadow-lg shadow-zinc-900/50 animate-slideIn" />
                  )}
                  <span 
                    className={`relative block text-sm md:text-base font-light tracking-wide transition-all duration-300 ${
                      activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full" ref={albumRef}>
            {/* Albums Content */}
            {activeTab === 'Albums' && (
              <div className="animate-fade-scale">
                <div className="min-h-[35vh] md:min-h-[45vh]">
                  <div className="album-image-stack flex w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] justify-center relative mt-[4vh] will-change-transform mx-auto md:ml-[15vw]">
                    <div className="group absolute border-2 md:border-4 border-white h-[262px] w-[210px] sm:h-[300px] sm:w-[240px] md:h-[337px] md:w-[270px] lg:h-[375px] lg:w-[300px] z-[1] overflow-hidden cursor-pointer">
                      <img alt="Laborum Magnam" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/1Ty2HW0RCvHRrudZTas36EOCeE7YSOj2r" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-sm album-label">Laborum Magnam</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Officiis iusto aperi</p>
                      </div>
                    </div>
                    <div className="group album-right absolute border-2 md:border-4 border-white h-[157px] w-[131px] sm:h-[180px] sm:w-[150px] md:h-[202px] md:w-[168px] lg:h-[225px] lg:w-[187px] z-[2] -right-[20%] bottom-[10%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Reprehenderit vel ut" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/1dA1KcWeAggeIIUuH3O02l2I69MCokJg-" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Reprehenderit vel ut</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Quo iusto doloremque</p>
                      </div>
                    </div>
                    <div className="group album-left absolute border-2 md:border-4 border-white h-[105px] w-[87px] sm:h-[120px] sm:w-[100px] md:h-[135px] md:w-[112px] lg:h-[150px] lg:w-[124px] z-[3] -left-[5%] bottom-[45%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Omnis accusamus" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/12ueeC1QAVXiqA3wAN7c-gqTOC6j0mT_7" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Omnis accusamus</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Saepius nostrud</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-[35vh] md:min-h-[45vh]">
                  <div className="album-image-stack flex w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] justify-center relative mt-[4vh] will-change-transform mx-auto md:ml-[45vw]">
                    <div className="group absolute border-2 md:border-4 border-white h-[262px] w-[210px] sm:h-[300px] sm:w-[240px] md:h-[337px] md:w-[270px] lg:h-[375px] lg:w-[300px] z-[1] overflow-hidden cursor-pointer">
                      <img alt="Reprehenderit vel ut" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/1CobjT-mPtqzSDnqH4iONGON-0aAsZBTN" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-sm album-label">Reprehenderit vel ut</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Quo iusto doloremque</p>
                      </div>
                    </div>
                    <div className="group album-right absolute border-2 md:border-4 border-white h-[157px] w-[131px] sm:h-[180px] sm:w-[150px] md:h-[202px] md:w-[168px] lg:h-[225px] lg:w-[187px] z-[2] -right-[20%] bottom-[10%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Cupiditate labore qu" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/1AvonIOSttaIH_Q5IGkwJORbPEhLwaCDs" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Cupiditate labore qu</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Omnis accusamus</p>
                      </div>
                    </div>
                    <div className="group album-left absolute border-2 md:border-4 border-white h-[105px] w-[87px] sm:h-[120px] sm:w-[100px] md:h-[135px] md:w-[112px] lg:h-[180px] lg:w-[145px] z-[3] -left-[10%] bottom-[35%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Ipsa aspernatur ear" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://cdn.bengalart.click/files/undefined" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Ipsa aspernatur</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Earum voluptas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Photos Content */}
            {activeTab === 'Photos' && (
              <div className="animate-fade-scale">
                <div className="w-full min-h-screen">
                  <div className="overflow-y-auto w-full" style={{ height: 'calc(-100px + 100vh)' }}>
                    <div className="flex gap-2 sm:gap-4 mx-auto max-w-[1800px]">
                      {[...Array(4)].map((_, colIndex) => (
                        <div key={colIndex} className="flex-1">
                          {[1, 2, 3, 4, 5].map((imgIndex) => (
                            <div key={imgIndex} className="mb-2 sm:mb-4">
                              <div className="relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg group hover:scale-[1.02] transition-transform duration-700">
                                <div style={{ paddingBottom: `${[75, 66.67, 56.25, 150, 133.33][Math.floor(Math.random() * 5)]}%`, position: 'relative' }}>
                                  <img 
                                    alt={`Photo ${colIndex}-${imgIndex}`}
                                    loading="lazy"
                                    className="w-full h-full absolute inset-0 object-cover"
                                    src="https://cdn.bengalart.click/files/12mcMEvPCVgOZPuFsxjO-EzboN8ACFlxg"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Videos Content */}
            {activeTab === 'Videos' && (
              <div className="animate-fade-scale">
                <div className="w-full overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
                  <div className="flex gap-4 mx-auto max-w-[1800px]">
                    {[...Array(3)].map((_, colIndex) => (
                      <div key={colIndex} className="flex-1">
                        {[1, 2, 3, 4, 5].map((vidIndex) => (
                          <div key={vidIndex} className="mb-4">
                            <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white">
                              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <video 
                                  className="absolute inset-0 h-full w-full object-cover"
                                  preload="metadata"
                                  playsInline
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white/30 group-hover:h-20 group-hover:w-20 transition-all duration-300">
                                    <svg className="h-8 w-8 fill-white text-white group-hover:h-10 group-hover:w-10 transition-all" viewBox="0 0 24 24">
                                      <polygon points="6 3 20 12 6 21 6 3" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reels Content */}
            {activeTab === 'Reels' && (
              <div className="animate-fade-scale">
                <div className="w-full overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
                  <div className="flex gap-4 mx-auto max-w-[1800px]">
                    {[...Array(4)].map((_, colIndex) => (
                      <div key={colIndex} className="flex-1">
                        {[1, 2, 3].map((reelIndex) => (
                          <div key={reelIndex} className="mb-4">
                            <div className="group relative aspect-[9/16] bg-zinc-900 rounded-xl overflow-hidden cursor-pointer border border-zinc-800/50 hover:border-[#D4AF37]/50 transition-colors">
                              <img
                                alt={`Reel ${colIndex}-${reelIndex}`}
                                loading="lazy"
                                className="transition-transform duration-500 group-hover:scale-105 object-cover"
                                src="https://cdn.bengalart.click/files/1XlHsmM2ZPz6nC64tNOd0Z9mkLTgUTmmC"
                                style={{ position: 'absolute', height: '100%', width: '100%', inset: 0 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                  <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* See More Albums Button */}
            <div className="flex justify-center mt-10 mb-20">
              <Link href="/work" className="group relative h-10 inline-flex items-center justify-center overflow-hidden border border-white/40 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-6 text-sm text-white hover:from-[#1a1a1a] hover:to-[#0a0a0a] transition-all duration-300">
                <span className="relative inline-flex overflow-hidden font-medium">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                    See More Albums
                  </div>
                  <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    See More Albums
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
 {/* Section 4 - Stats */}
     
<section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen w-full py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
    
    

    {/* Stats Grid */}
    <div className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
        
        {/* Project Delivered */}
        <div className="bg-black p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#be9b58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mb-6 p-4 bg-zinc-900 group-hover:bg-[#be9b58] transition-colors duration-500 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 text-white"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-2 font-satoshi text-white">
            <Counter end={200} />+
          </h3>
          <p className="text-[#be9b58] font-bold uppercase tracking-widest text-xs mb-3">
            PROJECTS DELIVERED
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Successful collaborations across diverse industries
          </p>
        </div>

        {/* Happy Clients */}
        <div className="bg-black p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#be9b58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mb-6 p-4 bg-zinc-900 group-hover:bg-[#be9b58] transition-colors duration-500 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 text-white"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-2 font-satoshi text-white">
            <Counter end={50} />+
          </h3>
          <p className="text-[#be9b58] font-bold uppercase tracking-widest text-xs mb-3">
            HAPPY CLIENTS
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Building lasting relationships through excellence
          </p>
        </div>

        {/* Awards Won */}
        <div className="bg-black p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#be9b58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mb-6 p-4 bg-zinc-900 group-hover:bg-[#be9b58] transition-colors duration-500 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 text-white"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-2 font-satoshi text-white">
            <Counter end={15} />+
          </h3>
          <p className="text-[#be9b58] font-bold uppercase tracking-widest text-xs mb-3">
            AWARDS WON
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Recognition for creative innovation and quality
          </p>
        </div>

        {/* Countries Served */}
        <div className="bg-black p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#be9b58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mb-6 p-4 bg-zinc-900 group-hover:bg-[#be9b58] transition-colors duration-500 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-2 font-satoshi text-white">
            <Counter end={10} />+
          </h3>
          <p className="text-[#be9b58] font-bold uppercase tracking-widest text-xs mb-3">
            COUNTRIES SERVED
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Taking Bengal Art's vision global
          </p>
        </div>
      </div>
    </div>

    

    

  </div>
</section>

 {/* Section 5 - My Client */}
     
<section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen w-full py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 md:px-6   w-full">
    
    {/* Heading */}
    <h2 className="text-center font-bold text-white mb-8 md:mb-12 px-4">
      <span className="font-satoshi-light text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white">
        Smiles and Stories from
      </span>
      <span className="block text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mt-2">
       My Clients
      </span>
    </h2>

   {/* Client Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-20">
  {[
    {
      name: 'Sarah Ahmed',
      image: 'https://i.pravatar.cc/150?img=32',
      comment: 'Absolutely loved working together. Very professional and creative!',
      rating: 5,
      date: 'Jan 12, 2025',
    },
    {
      name: 'John Miller',
      image: 'https://i.pravatar.cc/150?img=12',
      comment: 'Delivered beyond expectations. Clean design and fast delivery.',
      rating: 4,
      date: 'Feb 3, 2025',
    },
    {
      name: 'Nusrat Jahan',
      image: 'https://i.pravatar.cc/150?img=47',
      comment: 'Great communication and stunning visuals. Highly recommended!',
      rating: 5,
      date: 'Mar 18, 2025',
    },
    {
      name: 'David Warner',
      image: 'https://i.pravatar.cc/150?img=22',
      comment: 'Professional mindset and pixel-perfect execution.',
      rating: 4,
      date: 'Apr 6, 2025',
    },
    
 
  ].map((client, i) => (
    <div
      key={i}
      className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500   hover:border-[#be9b58]/50  animate-fade-scale"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      {/* Top */}
      <div className="flex items-center gap-4">
        <img
          src={client.image}
          alt={client.name}
          className="h-14 w-14 rounded-full object-cover border-2 border-[#be9b58]/40 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#be9b58]"
        />
        <div>
          <h4 className="text-white font-semibold transition-colors duration-300 group-hover:text-[#be9b58]">{client.name}</h4>
          <p className="text-xs text-zinc-400">{client.date}</p>
        </div>
      </div>

      {/* Comment */}
      <p className="mt-4 text-sm text-zinc-300 leading-relaxed transition-colors duration-300 group-hover:text-white">
        &quot;{client.comment}&quot;
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <span
            key={starIndex}
            className={`text-lg transition-all duration-300 ${
              starIndex < client.rating
                ? 'text-[#be9b58] group-hover:scale-125'
                : 'text-zinc-600'
            }`}
            style={{ transitionDelay: `${starIndex * 0.05}s` }}
          >
            ★
          </span>
        ))}
      </div>

      
      
      
    </div>
  ))}
</div>

{/* Share Experience Button */}
<div className="flex justify-center mt-16">
  <button onClick={() => setDrawerOpen(true)} className="group relative h-12 overflow-hidden border border-[#be9b58] bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-8 text-white hover:from-[#1a1a1a] hover:to-[#0a0a0a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#be9b58]/50">
    <span className="relative inline-flex overflow-hidden">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
        Share Your Experience
      </div>
      <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        Share Your Experience
      </div>
    </span>
  </button>
</div>


    


    

  </div>
</section>

    {/* Drawer Modal */}
    {drawerOpen && (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer */}
        <div
          ref={drawerRef}
          className="fixed bottom-0 left-0 right-0 z-50 h-[85vh] w-full overflow-hidden bg-neutral-900"
          style={{
            transform: `translateY(${Math.max(0, drawerY)}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
          onMouseMove={(e) => {
            if (!isDragging) return
            const delta = e.clientY - dragStart
            setDrawerY(Math.max(0, delta))
          }}
          onMouseUp={() => {
            if (isDragging) {
              setIsDragging(false)
              if (drawerY > 150) {
                setDrawerOpen(false)
                setDrawerY(0)
              } else {
                setDrawerY(0)
              }
            }
          }}
          onMouseLeave={() => {
            if (isDragging) {
              setIsDragging(false)
              if (drawerY > 150) {
                setDrawerOpen(false)
                setDrawerY(0)
              } else {
                setDrawerY(0)
              }
            }
          }}
          onTouchMove={(e) => {
            if (!isDragging) return
            const delta = e.touches[0].clientY - dragStart
            setDrawerY(Math.max(0, delta))
          }}
          onTouchEnd={() => {
            if (isDragging) {
              setIsDragging(false)
              if (drawerY > 150) {
                setDrawerOpen(false)
                setDrawerY(0)
              } else {
                setDrawerY(0)
              }
            }
          }}
        >
          <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
            <button
              className="drawer-handle h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing transition-colors hover:bg-neutral-600"
              onMouseDown={(e) => {
                setIsDragging(true)
                setDragStart(e.clientY)
                e.preventDefault()
              }}
              onTouchStart={(e) => {
                setIsDragging(true)
                setDragStart(e.touches[0].clientY)
              }}
            />
            
          </div>

          <div
            className="relative z-0 h-full overflow-y-auto p-4 pt-12 pb-20"
            style={{
              touchAction: 'pan-y',
              opacity: Math.max(0.7, 1 - Math.abs(drawerY) / 500),
            }}
          >
            <div className="mx-auto max-w-xl space-y-8 text-neutral-200 pb-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wider">Share Experience</h2>
                <div className="h-1 w-20 bg-[#be9b58] mx-auto"></div>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission here
                setDrawerOpen(false)
                setDrawerY(0)
                setUploadedImage(null)
              }}>
                {/* Photo Upload */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <label className="flex flex-col items-center justify-center w-32 h-32 border border-dashed border-neutral-700 cursor-pointer bg-neutral-900/50 hover:bg-neutral-900 hover:border-[#be9b58] transition-all duration-300 group rounded-lg overflow-hidden">
                      {uploadedImage ? (
                        <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-6 h-6 text-neutral-500 group-hover:text-[#be9b58] transition-colors mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                          <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Upload Photo</p>
                        </>
                      )}
                      <input
                        className="hidden"
                        accept="image/*"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onload = (event) => {
                              setUploadedImage(event.target?.result as string)
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <input
                    placeholder="YOUR NAME *"
                    className="w-full bg-transparent border-b border-neutral-700 px-0 py-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-0 focus:border-[#be9b58] transition-all duration-300 text-lg font-medium"
                    type="text"
                    name="name"
                    required
                  />
                </div>

                {/* Designation and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      placeholder="DESIGNATION *"
                      className="w-full bg-transparent border-b border-neutral-700 px-0 py-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-0 focus:border-[#be9b58] transition-all duration-300 text-sm"
                      type="text"
                      name="designation"
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="EMAIL ADDRESS *"
                      className="w-full bg-transparent border-b border-neutral-700 px-0 py-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-0 focus:border-[#be9b58] transition-all duration-300 text-sm"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="py-4">
                  <label className="block text-neutral-500 text-xs font-bold mb-4 uppercase tracking-widest text-center">Rate Your Experience</label>
                  <div className="flex gap-4 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <label key={star} className="cursor-pointer group relative">
                        <input className="sr-only" type="radio" value={star} name="rating" required />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star w-8 h-8 transition-all duration-300 text-neutral-600 group-hover:text-[#be9b58] group-hover:fill-[#be9b58] group-hover:scale-110"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Review Textarea */}
                <div>
                  <textarea
                    name="review"
                    rows={4}
                    placeholder="SHARE YOUR THOUGHTS *"
                    className="w-full bg-neutral-900/30 border border-neutral-800 p-6 text-white placeholder-neutral-600 focus:outline-none focus:ring-0 focus:border-[#be9b58] transition-all duration-300 resize-none text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#be9b58] text-black py-4 font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>

         {/* Section 4 - Special Day */}
     
<section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen w-full py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
    
    

     

    

    

  </div>
</section>

        
      </>
    )}

      
      
    </div>
  )
}
