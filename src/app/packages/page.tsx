'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from '@/components/shared/Container'

export default function Packages() {
  const [packageTab, setPackageTab] = useState('Packages')
  const [customCategory, setCustomCategory] = useState('Wedding')

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
        .scale-on-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scale-on-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Packages for Your Special Day */}
      <section className="relative z-30 bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen w-full py-12 md:py-16 lg:py-20">
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

                    <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 p-8 hover:-translate-y-2 hover:border-[#be9b58]/30 transition-all duration-300 group shadow-2xl animate-slide-right" style={{ animationDelay: '0s' }}>
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

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Event Date</label>
                    <input
                      type="date"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
                    />
                  </div>

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

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Location</label>
                    <input
                      type="text"
                      placeholder="Event location"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wider">Additional Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about any special requests, number of photographers needed, video coverage, etc."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#be9b58] focus:border-transparent resize-none"
                    />
                  </div>

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

      {/* FAQ Section */}
      <Container className="relative z-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I book a package?',
                a: 'Simply click "Choose Plan" and fill out the contact form. We will get back to you within 24 hours.',
              },
              {
                q: 'Can packages be customized?',
                a: 'Yes! All packages can be customized based on your needs. Contact us for more details.',
              },
              {
                q: 'Do you include editing?',
                a: 'Yes, professional editing is included in all packages with 30-day delivery.',
              },
              {
                q: 'Is a deposit required?',
                a: 'Yes, a 50% deposit is required to secure your booking date.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
