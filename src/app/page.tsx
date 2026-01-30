/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import ImageSkeleton from '@/components/shared/ImageSkeleton'
import shoeImage1 from '@/assets/shoeImages/denis-marosan-q35zYDIJSjo-unsplash.jpg'
import shoeImage2 from '@/assets/shoeImages/huyen-nguy-IjzhMi4Cw3w-unsplash.jpg'
import shoeImage3 from '@/assets/shoeImages/maksim-larin-ezdrvzA1hZw-unsplash.jpg'
import shoeImage4 from '@/assets/shoeImages/richard-ciraulo-BlI3VVVfP3Y-unsplash.jpg'
import shoeImage5 from '@/assets/shoeImages/ryan-waring-164_6wVEHfI-unsplash.jpg'

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
  const [packageTab, setPackageTab] = useState('Packages')
  const [customCategory, setCustomCategory] = useState('Wedding')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerY, setDrawerY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [copied, setCopied] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-right {
          animation: slideInRight 0.6s ease-out forwards;
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
                  HI, ALVI  HERE. I&apos;M A PROFESSIONAL PHOTOGRAPHER IN BANGLADESH AND THE CREATIVE EYE BEHIND Click Arora.
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
        
        {/* Scroll to Explore */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="text-center text-white/20 font-satoshi-light uppercase text-xs md:text-lg leading-7 tracking-wider transition-all duration-300 opacity-100 translate-y-0">
            SCROLL TO EXPLORE
          </div>
        </div>
      </section>

      {/* Section 2 - About Section with Image Stack */}
      <section className="relative z-30 bg-black min-h-screen h-auto lg:h-screen flex items-center w-full py-12 md:py-16 lg:py-20">
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
                  <ImageSkeleton className="w-full h-32 md:h-40 rounded-lg">
                    <Image
                      src={shoeImage1}
                      alt="Fashion Shoes"
                      width={600}
                      height={400}
                      quality={95}
                      priority
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </ImageSkeleton>
                </div>

                {/* Image 5 - Regular */}
                <div className="col-span-1 -mt-8">
                  <ImageSkeleton className="w-full h-32 md:h-45 rounded-lg">
                    <Image
                      src={shoeImage2}
                      alt="Stylish Footwear"
                      width={400}
                      height={300}
                      quality={95}
                      priority
                      className="w-full h-32 md:h-45 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </ImageSkeleton>
                </div>

                {/* Image 6 - Tall Right */}
                <div className="col-span-1 row-span-2 ">
                  <ImageSkeleton className="w-full h-64 md:h-85 rounded-lg">
                    <Image
                      src={shoeImage3}
                      alt="Premium Shoes"
                      width={400}
                      height={600}
                      quality={95}
                      priority
                      className="w-full h-64 md:h-85 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </ImageSkeleton>
                </div>

                {/* Image 7 - Regular */}
                <div className="col-span-1 -mt-2">
                  <ImageSkeleton className="w-full h-32 md:h-56 rounded-lg">
                    <Image
                      src={shoeImage4}
                      alt="Elegant Fashion"
                      width={400}
                      height={500}
                      quality={95}
                      priority
                      className="w-full h-32 md:h-56 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </ImageSkeleton>
                </div>

                {/* Image 8 - Regular */}
                <div className="col-span-1 -mt-5">
                  <ImageSkeleton className="w-full h-32 md:h-40 rounded-lg">
                    <Image
                      src={shoeImage5}
                      alt="Lifestyle Photography"
                      width={400}
                      height={400}
                      quality={95}
                      priority
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </ImageSkeleton>
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
                Hi, I&apos;m Alvi, a professional photographer based in Bangladesh and the creative eye behind Click Arora. 
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
      <section className="relative z-30 bg-black min-h-screen w-full py-12 md:py-16 lg:py-20">
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
                  <div className="album-image-stack flex w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] justify-center relative mt-[4vh] will-change-transform mx-auto md:ml-[15vw]">
                    <div className="group absolute border-2 md:border-4 border-white h-[235px] w-[188px] sm:h-[280px] sm:w-[224px] md:h-[337px] md:w-[270px] lg:h-[375px] lg:w-[300px] z-[1] overflow-hidden cursor-pointer">
                      <img alt="Bird Photography" loading="lazy" decoding="async" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs sm:text-sm album-label">Bird Photography</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Nature's beauty in flight</p>
                      </div>
                    </div>
                    <div className="group album-right absolute border-2 md:border-4 border-white h-[141px] w-[118px] sm:h-[168px] sm:w-[140px] md:h-[202px] md:w-[168px] lg:h-[225px] lg:w-[187px] z-[2] -right-[18%] sm:-right-[20%] bottom-[10%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Wild Birds" loading="lazy" decoding="async" className="w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Wild Birds</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Right side view</p>
                      </div>
                    </div>
                    <div className="group album-left absolute border-2 md:border-4 border-white h-[94px] w-[78px] sm:h-[112px] sm:w-[93px] md:h-[135px] md:w-[112px] lg:h-[150px] lg:w-[124px] z-[3] -left-[3%] sm:-left-[5%] bottom-[45%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Exotic Birds" loading="lazy" decoding="async" className="w-full h-full object-cover object-left" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Exotic Birds</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Left side view</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-[35vh] md:min-h-[45vh]">
                  <div className="album-image-stack flex w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] justify-center relative mt-[4vh] will-change-transform mx-auto md:ml-[45vw]">
                    <div className="group absolute border-2 md:border-4 border-white h-[235px] w-[188px] sm:h-[280px] sm:w-[224px] md:h-[337px] md:w-[270px] lg:h-[375px] lg:w-[300px] z-[1] overflow-hidden cursor-pointer">
                      <img alt="Professional Portrait" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs sm:text-sm album-label">Professional Portrait</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Capturing personalities</p>
                      </div>
                    </div>
                    <div className="group album-left absolute border-2 md:border-4 border-white h-[94px] w-[78px] sm:h-[112px] sm:w-[93px] md:h-[135px] md:w-[112px] lg:h-[180px] lg:w-[145px] z-[3] -left-[8%] sm:-left-[10%] bottom-[35%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Portrait Face" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Portrait Face</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Face close-up</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-[35vh] md:min-h-[45vh]">
                  <div className="album-image-stack flex w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] justify-center relative mt-[4vh] will-change-transform mx-auto md:ml-[20vw]">
                    <div className="group absolute border-2 md:border-4 border-white h-[235px] w-[188px] sm:h-[280px] sm:w-[224px] md:h-[337px] md:w-[270px] lg:h-[375px] lg:w-[300px] z-[1] overflow-hidden cursor-pointer">
                      <img alt="Bride & Groom Portrait" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725089/just-married-couple-having-fun-together_tuc5yy.jpg" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs sm:text-sm album-label">Bride & Groom Portrait</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Beautiful couple moments</p>
                      </div>
                    </div>
                    <div className="group album-right absolute border-2 md:border-4 border-white h-[141px] w-[118px] sm:h-[168px] sm:w-[140px] md:h-[202px] md:w-[168px] lg:h-[225px] lg:w-[187px] z-[2] -right-[18%] sm:-right-[20%] bottom-[10%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Bride & Groom" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Bride & Groom</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Love stories told</p>
                      </div>
                    </div>
                    <div className="group album-left absolute border-2 md:border-4 border-white h-[94px] w-[78px] sm:h-[112px] sm:w-[93px] md:h-[135px] md:w-[112px] lg:h-[150px] lg:w-[124px] z-[3] -left-[3%] sm:-left-[5%] bottom-[45%] transition-transform duration-700 overflow-hidden cursor-pointer">
                      <img alt="Wedding Details" loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&auto=format&fit=crop" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-xs album-label">Wedding Details</h3>
                        <p className="text-zinc-300 text-xs album-label" style={{ animationDelay: '0.05s' }}>Every detail matters</p>
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
                    <div className="flex gap-3 sm:gap-4 mx-auto max-w-[1800px]">
                      {/* Column 1 */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Commercial Product"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/woman-with-face-full-paint_w2dv0i.jpg"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Party Celebration"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                       
                      </div>

                      {/* Column 2 */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Sweet Baby"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725090/cute-kids-exploring-nature_zvzyn4.jpg"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Birthday Party"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Travel Destination"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                         <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Fashion Outdoor Portrait"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769724932/fashion-outdoor-traveling-portrait-pretty-cheerful-young-tourist-woman_hozd4c.jpg"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                      </div>

                      {/* Column 3 */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Wedding Couple"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/young-woman-warm-sweater_bw7xav.jpg"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Tour & Travel"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Sweet Child"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                      </div>

                      {/* Column 4 */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Girl Portrait"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Wedding Ceremony"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Wedding Ring Details"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                      </div>

                      {/* Column 5 */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Happy Baby"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Commercial Fashion"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/beautiful-wedding-walk-nature-ukraine-sumy_gi4ccv.jpg"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                        
                        <Link href="/work" className="group relative cursor-pointer overflow-hidden border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            alt="Product Display"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Videos Content */}
            {activeTab === 'Videos' && (
              <div className="animate-fade-scale">
                <div className="w-full overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
                  <div className="flex gap-3 sm:gap-4 mx-auto max-w-[1800px] pb-8">
                    {/* Column 1 - 1 Video */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <video 
                            className="absolute inset-0 h-full w-full object-cover"
                            preload="metadata"
                            playsInline
                            controls
                            src="https://res.cloudinary.com/dk8syjt2z/video/upload/v1767578825/Background-video_nmha1b.webm"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Column 2 - 3 Videos */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/W7NHQyvKbdY"
                            title="YouTube Video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/UyeFKMNo2_U"
                            title="YouTube Video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/03yIuAgHeXo"
                            title="YouTube Video 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>

                    {/* Column 3 - 4 Videos */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/HAcLoqZO-Z0"
                            title="YouTube Video 4"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <video 
                            className="absolute inset-0 h-full w-full object-cover"
                            preload="metadata"
                            playsInline
                            controls
                            src="https://res.cloudinary.com/dk8syjt2z/video/upload/v1769511538/15705885-hd_1920_1080_60fps_gqic31.mp4"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/KOC4w5LgxCk"
                            title="YouTube Video 5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/51OupKsM7xs"
                            title="YouTube Video 6"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reels Content */}
            {activeTab === 'Reels' && (
              <div className="animate-fade-scale">
                <div className="w-full overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
                  <div className="flex gap-3 sm:gap-4 mx-auto max-w-[1800px] pb-8">
                    {/* Reels Column 1 */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/aEVQn9G54mI"
                            title="Reel 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/iSQZCJUYU9s"
                            title="Reel 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reels Column 2 */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/Ib3xiq8oU9k"
                            title="Reel 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/Y6GTSsiKK_g"
                            title="Reel 4"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reels Column 3 */}
                    <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                      <div className="group relative cursor-pointer overflow-hidden bg-black border-2 border-white sm:border-4 shadow-lg hover:scale-[1.02] transition-transform duration-700">
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/kFn4AltDf1Q"
                            title="Reel 5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            
          </div>
        </div>
      </section>
 {/* Section 4 - Stats */}

<section className="relative z-30 bg-black min-h-screen w-full py-12 md:py-16 lg:py-20">
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
            Taking Click Arora vision global
          </p>
        </div>
      </div>
    </div>

    

    

  </div>
</section>

 {/* Section 5 - My Client */}

<section className="relative z-30 bg-black min-h-screen w-full  ">
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

{/* Section 6 - Packages for Your Special Day */}
<section className="relative z-30 bg-black min-h-screen w-full py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
    
    {/* Heading */}
    <h2 className="text-center font-bold text-white mb-8 md:mb-16 px-4">
      <span className="font-satoshi-light text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white">
        Choose the perfect package for
      </span>
      <span className="block text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mt-2">
        Your Special Day
      </span>
    </h2>

    {/* Tab Switcher */}
    <div className="flex justify-center mb-12">
      <div className="bg-zinc-900/50 p-1 border border-zinc-800 rounded-lg inline-flex">
        <button
          onClick={() => setPackageTab('Packages')}
          className="relative px-6 py-2 bg-transparent transition-colors"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {packageTab === 'Packages' && (
            <div className="absolute inset-0 bg-zinc-800 rounded" />
          )}
          <span className={`relative block text-sm font-light tracking-wide transition-colors ${
            packageTab === 'Packages' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}>
            Packages
          </span>
        </button>
        <button
          onClick={() => setPackageTab('Custom')}
          className="relative px-6 py-2 bg-transparent transition-colors"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {packageTab === 'Custom' && (
            <div className="absolute inset-0 bg-zinc-800 rounded" />
          )}
          <span className={`relative block text-sm font-light tracking-wide transition-colors ${
            packageTab === 'Custom' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}>
            Custom
          </span>
        </button>
      </div>
    </div>

    {/* Category Filter Buttons */}
    <div className="flex justify-center gap-3 flex-wrap mb-12">
      <button
        type="button"
        onClick={() => setCustomCategory('Wedding')}
        className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
          customCategory === 'Wedding'
            ? 'border-[#be9b58] bg-[#be9b58] text-white'
            : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
        }`}
      >
        <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
          <div className={`translate-y-0 skew-y-0 transition duration-500 ${
            customCategory === 'Wedding' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
          }`}>
            Wedding
          </div>
          {customCategory !== 'Wedding' && (
            <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Wedding
            </div>
          )}
        </span>
      </button>
      
      <button
        type="button"
        onClick={() => setCustomCategory('Commercial')}
        className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
          customCategory === 'Commercial'
            ? 'border-[#be9b58] bg-[#be9b58] text-white'
            : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
        }`}
      >
        <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
          <div className={`translate-y-0 skew-y-0 transition duration-500 ${
            customCategory === 'Commercial' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
          }`}>
            Commercial
          </div>
          {customCategory !== 'Commercial' && (
            <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Commercial
            </div>
          )}
        </span>
      </button>
      
      <button
        type="button"
        onClick={() => setCustomCategory('Social Media')}
        className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
          customCategory === 'Social Media'
            ? 'border-[#be9b58] bg-[#be9b58] text-white'
            : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
        }`}
      >
        <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
          <div className={`translate-y-0 skew-y-0 transition duration-500 ${
            customCategory === 'Social Media' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
          }`}>
            Social Media
          </div>
          {customCategory !== 'Social Media' && (
            <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Social Media
            </div>
          )}
        </span>
      </button>
      
      <button
        type="button"
        onClick={() => setCustomCategory('General')}
        className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
          customCategory === 'General'
            ? 'border-[#be9b58] bg-[#be9b58] text-white'
            : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
        }`}
      >
        <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
          <div className={`translate-y-0 skew-y-0 transition duration-500 ${
            customCategory === 'General' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
          }`}>
            General
          </div>
          {customCategory !== 'General' && (
            <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              General
            </div>
          )}
        </span>
      </button>
    </div>

    {/* Packages Grid */}
    {packageTab === 'Packages' && (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      
      {/* Wedding Category - 3 packages */}
      {customCategory === 'Wedding' && (
        <>
          {/* Silver Package */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              SILVER PACKAGE
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳15,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['1 Photographer', '1 Cinematographer', 'Duration: 5 Hours', 'Unlimited Raw & Maximum Photo Edited', 'A Trailer & A Documentary Wedding Film'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Silver Package (Duplicate) */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              SILVER PACKAGE
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳20,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['1 Photographer', '1 Cinematographer', 'Duration: 5 Hours', 'Unlimited Raw & Maximum Photo Edited', 'A Trailer & A Documentary Wedding Film'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Gold Package */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
              <span className="bg-[#be9b58] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Popular
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              GOLD PACKAGE
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳25,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['2 Photographer', '1 Cinematographer', 'Duration: 5 Hours', 'Unlimited Raw & Maximum Photo Edited', 'A Trailer & A Documentary Wedding Film', '15 Printed Copy'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>
        </>
      )}

      {/* Commercial Category - 1 package */}
      {customCategory === 'Commercial' && (
        <>
          {/* Corporate Event */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              CORPORATE EVENT
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳50,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['2 Photographers', '1 Cinematographer', 'Event Highlight Reel', 'Unlimited Photos', 'Duration: 4 Hours'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Corporate Event Duplicate */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              CORPORATE EVENT
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳50,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['2 Photographers', '1 Cinematographer', 'Event Highlight Reel', 'Unlimited Photos', 'Duration: 4 Hours'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>
        </>
      )}

      {/* Social Media Category - 1 package */}
      {customCategory === 'Social Media' && (
        <>
          {/* Reel Bundle */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              REEL BUNDLE
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳15,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['5 High Quality Reels', 'Professional Editing', 'Trending Audio Selection', 'Color Grading', '1 Revision per Reel'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Reel Bundle Popular */}
          <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
              <span className="bg-[#be9b58] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Popular
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white/90">
              REEL BUNDLE
            </h3>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">৳15,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['5 High Quality Reels', 'Professional Editing', 'Trending Audio Selection', 'Color Grading', '1 Revision per Reel'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="mt-auto">
              <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
                Choose Plan
              </button>
            </Link>
          </div>
        </>
      )}

      {/* General Category - 1 package */}
      {customCategory === 'General' && (
        <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
          <h3 className="text-xl font-bold mb-2 text-white/90">
            General Photography
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Flexible package for any occasion or event
          </p>
          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">৳20,000</span>
            <span className="text-gray-500 text-sm line-through">৳28,000</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {['3 hours session', '1-2 photographers', '150+ edited photos', 'Various locations', 'Online gallery'].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-[#be9b58] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/packages" className="mt-auto">
            <button className="w-full bg-[#be9b58] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#a38548] transition-colors duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
      )}

        </div>

        
      </>
    )}

    {/* Custom Package Content */}
    {packageTab === 'Custom' && (
      <div className="max-w-2xl mx-auto animate-fade-scale">
        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Create Your Custom Package</h3>
            <p className="text-zinc-400 mb-6">Tell us about your special event and we'll craft the perfect photography package for you.</p>
            
            {/* Category Filter Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => setCustomCategory('Wedding')}
                className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
                  customCategory === 'Wedding'
                    ? 'border-[#be9b58] bg-[#be9b58] text-white'
                    : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
                }`}
              >
                <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
                  <div className={`translate-y-0 skew-y-0 transition duration-500 ${
                    customCategory === 'Wedding' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
                  }`}>
                    Wedding
                  </div>
                  {customCategory !== 'Wedding' && (
                    <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Wedding
                    </div>
                  )}
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => setCustomCategory('Commercial')}
                className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
                  customCategory === 'Commercial'
                    ? 'border-[#be9b58] bg-[#be9b58] text-white'
                    : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
                }`}
              >
                <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
                  <div className={`translate-y-0 skew-y-0 transition duration-500 ${
                    customCategory === 'Commercial' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
                  }`}>
                    Commercial
                  </div>
                  {customCategory !== 'Commercial' && (
                    <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Commercial
                    </div>
                  )}
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => setCustomCategory('Social Media')}
                className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
                  customCategory === 'Social Media'
                    ? 'border-[#be9b58] bg-[#be9b58] text-white'
                    : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
                }`}
              >
                <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
                  <div className={`translate-y-0 skew-y-0 transition duration-500 ${
                    customCategory === 'Social Media' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
                  }`}>
                    Social Media
                  </div>
                  {customCategory !== 'Social Media' && (
                    <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Social Media
                    </div>
                  )}
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => setCustomCategory('General')}
                className={`group relative h-8 inline-flex items-center justify-center overflow-hidden border px-4 text-xs transition-all duration-300 ${
                  customCategory === 'General'
                    ? 'border-[#be9b58] bg-[#be9b58] text-white'
                    : 'border-white/20 bg-transparent text-gray-400 hover:border-[#be9b58] hover:text-[#be9b58]'
                }`}
              >
                <span className="relative inline-flex overflow-hidden font-bold uppercase tracking-wider">
                  <div className={`translate-y-0 skew-y-0 transition duration-500 ${
                    customCategory === 'General' ? '' : 'group-hover:-translate-y-[150%] group-hover:skew-y-12'
                  }`}>
                    General
                  </div>
                  {customCategory !== 'General' && (
                    <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      General
                    </div>
                  )}
                </span>
              </button>
            </div>
          </div>

          <form className="space-y-6">
            {/* Event Type */}
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Event Type</label>
              <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Product Shoot</option>
                <option>Portrait Session</option>
                <option>Other</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Event Date</label>
              <input
                type="date"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Coverage Duration (hours)</label>
              <input
                type="number"
                min="1"
                max="12"
                placeholder="e.g., 4"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Location</label>
              <input
                type="text"
                placeholder="Event location"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
              />
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Tell us about any special requests, number of photographers needed, video coverage, etc."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent resize-none"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#be9b58] hover:bg-white text-black font-bold py-4 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm hover:shadow-lg hover:shadow-[#be9b58]/50"
            >
              Request Custom Quote
            </button>
          </form>
        </div>
      </div>
    )}


    


    

  </div>
</section>

    {/* Section 7 - Let's Connect CTA */}
    <section className="w-full min-h-[85vh] flex flex-col justify-between py-12 px-4 md:px-10 relative overflow-hidden bg-gradient-to-br from-[#be9b58] via-[#a38548] to-[#8c7335]">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center overflow-hidden">
        <div className="text-[15vw] md:text-[20vw] font-black uppercase leading-none text-black whitespace-nowrap" style={{ transform: 'translateY(-31.7832px)' }}>Click Arora</div>
      </div>

      <div className="flex justify-between items-start relative z-10">
        <div className="w-6 h-6 md:w-10 md:h-10 border-l-2 border-t-2 border-black"></div>
        <div className="w-6 h-6 md:w-10 md:h-10 border-r-2 border-t-2 border-black"></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow relative z-10 gap-8 md:gap-12">
        <div className="w-24 h-24 md:w-40 md:h-40 relative text-black" style={{ transform: `rotate(${16.3951 + scrollY * 0.05}deg)` }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="fill-current">
            <g transform="translate(0,-52.3622)">
              <path d="m 646.49762,374.71558 a 213.14218,199.00005 0 1 1 -426.28436,0 213.14218,199.00005 0 1 1 426.28436,0 z" transform="matrix(1.172926,0,0,1.2562811,-24.495696,40.647144)" fill="none" stroke="currentColor" strokeWidth="14.828"></path>
              <path d="m 483.79817,281.39524 c -78.22122,0 -147.32326,39.05231 -188.87501,98.71875 l 68.84375,119.28125 125.84376,-217.9375 c -1.93146,-0.0479 -3.86951,-0.0625 -5.8125,-0.0625 z m 19.25,0.8125 -68.875,119.28125 251.68749,0 C 649.76723,335.26888 582.08352,288.76161 503.04817,282.20774 z M 287.54816,391.36399 c -21.42174,34.94341 -33.75,76.04095 -33.75,120.03125 0,35.02939 7.83703,68.22126 21.84375,97.9375 l 137.75001,0 -125.84376,-217.96875 z m 266.62501,22.125 125.84374,217.9375 c 21.42174,-34.94341 33.78125,-76.04095 33.78125,-120.03125 0,-35.01463 -7.84813,-68.1996 -21.84375,-97.90625 l -137.78124,0 z m 49.59375,109.9375 -125.8125,217.90625 c 1.94178,0.0484 3.89031,0.0625 5.84375,0.0625 78.2094,0 147.28996,-39.03629 188.84374,-98.6875 L 603.76692,523.42649 z m -322.03126,97.90625 c 36.09801,66.2005 103.76103,112.69668 182.78126,119.25 l 68.84375,-119.25 -251.62501,0 z" fill="currentColor"></path>
            </g>
          </svg>
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-center leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-neutral-800 drop-shadow-sm">
          Let&apos;s<br />Connect
        </h2>

        <div className="flex flex-col items-center gap-6">
          <Link href="/connect" className="group relative px-8 py-4 bg-black text-[#be9b58] font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Start New Project</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </Link>

          <button 
            onClick={() => {
              navigator.clipboard.writeText('info@clickarora.com')
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="flex items-center gap-2 text-black font-bold hover:opacity-60 transition-opacity cursor-pointer"
          >
            <span className="text-lg">{copied ? 'Copied!' : 'info@clickarora.com'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy w-4 h-4">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-end relative z-10 mt-12">
        <div className="w-6 h-6 md:w-10 md:h-10 border-l-2 border-b-2 border-black"></div>
        <div className="w-6 h-6 md:w-10 md:h-10 border-r-2 border-b-2 border-black"></div>
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

      </>
    )}

   
      
      
    </div>
  )
}
