'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'

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
    <div className="[perspective:120px] [perspective-origin:bottom]">
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showBlur
          ? 'backdrop-blur-sm bg-zinc-900/30 border-b border-zinc-800/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center py-10 container mx-auto relative">
        {/* Logo */}
        <Link href="/">
          <div className="w-[60px] md:w-[100px] h-auto">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </Link>

        {/* Right menu container */}
        <div className="relative">
          {/* Overlay Menu */}
          {menuOpen && (
            <div className="fixed z-50 right-[50px] top-[40px]">
              <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 relative w-[480px] h-[650px] -top-[25px] -right-[25px]">
                <div className="flex flex-col justify-between h-full p-[60px_20px_30px_20px] md:p-[100px_40px_50px_40px] box-border">
                  {/* Menu links */}
                  <div className="flex flex-col gap-[20px] md:gap-[10px] uppercase">
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
                    <a href="https://facebook.com" target="_blank" className="hover:text-white">
                      <Facebook />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-white">
                      <Linkedin />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="hover:text-white">
                      <Instagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-white">
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Menu / Close Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute top-0 right-0 w-[80px] md:w-[100px] h-[32px] md:h-[40px] cursor-pointer overflow-hidden border border-zinc-800/50 z-50"
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
