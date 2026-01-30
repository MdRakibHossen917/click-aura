'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Facebook, Linkedin, Instagram, Twitter, Github } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Packages', href: '/packages' },
  { name: 'About', href: '/about' },
  { name: 'Reels', href: '/reels' },
  { name: 'Connect', href: '/connect' },
]

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div className="perspective-[120px]">
      <div>
        <div className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-5xl md:text-5xl text-white leading-[0.95] group">
          <div className="flex">
            {text.split('').map((c, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-500 group-hover:-translate-y-full "
              >
                {c}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 flex">
            {text.split('').map((c, i) => (
              <span
                key={i}
                className="inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBlur, setShowBlur] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll < lastScroll && currentScroll > 20) {
        setShowBlur(true) // scroll up -> show blur
      } else if (currentScroll <= 20) {
        setShowBlur(false) // top of page -> transparent
      } else {
        setShowBlur(false) // scrolling down -> transparent
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300   ${
        showBlur
          ? 'backdrop-blur-xs bg-zinc-900/10  '
          : 'bg-transparent'
      }`}
    >
      <nav className="w-11/12 mx-auto flex justify-between items-center py-4 md:py-6 relative h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center h-full">
          <div className="w-12 md:w-30 h-auto">
            <Image
              src="/Click Aura-logo-transparent.png"
              alt="Click Aura Logo"
              width={100}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right menu container */}
        <div className="relative shrink-0 flex items-center h-full">
          {/* Overlay Menu */}
          {menuOpen && (
            <div className="fixed z-50 right-0 top-0 w-full h-screen md:w-auto md:h-auto md:right-12 md:top-10">
              <div className="bg-zinc-950/95 md:bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 relative w-full md:w-120 h-full md:h-162.5 md:-top-6 md:-right-6">
                <div className="flex flex-col justify-between h-full p-[60px_20px_30px_20px] md:p-[100px_40px_50px_40px] box-border">
                  {/* Menu links */}
                  <div className="flex flex-col gap-5 md:gap-2.5 uppercase">
                    {menuItems.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        <AnimatedText text={item.name} />
                      </Link>
                    ))}
                  </div>
                  {/* Social icons */}
                  <div className="flex flex-wrap gap-6 mt-auto items-center text-zinc-400">
                    <a href="https://www.facebook.com/md.rakib.hossen.41751" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/rakibhossen917/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/MdRakibHossen917" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Menu / Close Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-20 md:w-28 h-10 md:h-12 cursor-pointer overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-colors z-50"
          >
            <div
              className="relative w-full h-full transition-all duration-300"
              style={{ top: menuOpen ? '-100%' : '0%' }}
            >
              <div className="w-full h-full bg-zinc-900 text-white flex items-center justify-center group hover:bg-zinc-800">
                <span className="uppercase tracking-wider text-xs md:text-sm group-hover:scale-110 transition-transform duration-300">
                  Menu
                </span>
              </div>
              <div className="w-full h-full bg-white text-black flex items-center justify-center group hover:bg-zinc-200">
                <span className="uppercase tracking-wider text-xs md:text-sm group-hover:scale-110 transition-transform duration-300">
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
