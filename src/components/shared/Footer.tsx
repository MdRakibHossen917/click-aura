'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-black   border-gray-800  " style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Footer */}
    <footer className="bg-zinc-950 text-white py-12 md:py-16 px-4 md:px-6 lg:px-12 xl:px-20 overflow-hidden border-t border-zinc-800   ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-zinc-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="h-px w-20 md:w-32 bg-zinc-800"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="text-base md:text-lg text-zinc-400">Let's work together.</span>
            <Link href="/connect" className="group relative px-8 py-4 bg-white text-black font-medium overflow-hidden transition-all duration-300 text-base md:text-lg hover:bg-zinc-200">
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                  Let's Connect
                </div>
                <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Let's Connect
                </div>
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-12 md:mb-16 overflow-hidden text-center md:text-left">
          <h2 className="font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight break-words text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-b md:from-white md:to-zinc-500">
            <span className="inline-block">C</span>
            <span className="inline-block">l</span>
            <span className="inline-block">i</span>
            <span className="inline-block">c</span>
            <span className="inline-block">k</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">_</span>
            <span className="inline-block">A</span>
            <span className="inline-block">r</span>
            <span className="inline-block">o</span>
            <span className="inline-block">r</span>
            <span className="inline-block">a</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-6 pt-8 md:pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-center md:text-left">
            <p className="text-base text-zinc-500">© 2026 Click Arora</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-base text-zinc-500 hover:text-white transition-colors duration-300"
              href="https://github.com/masum065"
            >
              <span>Built with</span>
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
                className="w-3 h-3 text-red-500 fill-red-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span>by</span>
              <span className="font-bold group-hover:underline underline-offset-4 decoration-[#be9b58] text-zinc-400 group-hover:text-white">
                Md Rakib Hossen
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </footer>
  )
}
