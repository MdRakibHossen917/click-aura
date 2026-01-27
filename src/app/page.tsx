'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen font-sans bg-zinc-50 dark:bg-black overflow-hidden">

      {/* Cloudinary Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dk8syjt2z&public_id=Background-video_nmha1b&profile=cld-default&autoplay=true&muted=true&loop=true&controls=false"
          className="w-full h-full object-cover"
          allow="autoplay"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Attribution */}
        <div className="absolute bottom-2 left-2 text-xs sm:text-sm md:text-base text-white/80 z-10 pointer-events-auto">
          <a
            href="https://www.vecteezy.com/video/7619897-close-up-of-young-asian-traveler-woman-taking-a-photo-on-camera-at-the-railroad-station-female-looking-at-camera-transportation-vacation-and-travel-concept"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Stock Videos by Vecteezy
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-20 lg:px-32">
        
        {/* Hero Section: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-8 w-full">
          
          {/* Left Column - Headline */}
          <div className="md:col-span-6 flex items-center justify-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              Capturing<br />
              Life's Best<br />
              Moments
            </h1>
          </div>

          {/* Right Column - Intro + Button */}
          <div className="md:col-span-4 flex flex-col justify-center text-left">
            <p className="font-satoshi-light uppercase text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-7 text-white mb-6">
              HI, Alvi HERE. I'm a professional photographer in Bangladesh and the creative eye behind Bengal Art. I specialize in capturing life's magical moments, one click at a time. Let's create something unforgettable together!
            </p>

            {/* My Work Button */}
            <Link href="/work">
              <div className="inline-flex border-[1px] font-satoshi-light justify-between items-center gap-2 border-primaryBorder text-primaryBorder hover:bg-primaryBorder hover:text-white transition-colors cursor-pointer">
                <span className="py-2 px-6 uppercase">My Work</span>
                <span className="border-l py-2 px-4 border-primaryBorder flex items-center justify-center" style={{ backgroundColor: 'transparent' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    style={{ transform: 'rotate(45deg)', fill: 'currentColor' }}
                  >
                    <g>
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </Link>
          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="text-center text-white font-satoshi-light uppercase text-xs sm:text-sm md:text-base lg:text-lg tracking-wider mt-12 w-full">
          SCROLL TO EXPLORE
        </div>

      </div>
    </div>
  )
}
