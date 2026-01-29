'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black   border-gray-800  " style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="px-4 md:px-10 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-gray-800">
            {/* Brand */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Click Aura</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capturing life&apos;s precious moments with passion and creativity across Bangladesh and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Our Work', href: '/work' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Get In Touch', href: '/connect' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
          <div>
  <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">
    Services
  </h4>

  <ul className="space-y-2">
    {[
      { label: 'Packages', href: '/packages' },
      { label: 'Wedding', href: '/packages' },
      { label: 'Commercial', href: '/packages' },
      { label: 'Video Reels', href: '/reels' },
    ].map((link) => (
      <li key={`${link.label}-${link.href}`}>
        <Link
          href={link.href}
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>


            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:info@bengalart.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@clickaura.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801234567890"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +880 123 456 7890
                  </a>
                </li>
                <li className="text-gray-400">Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ClickAura. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
