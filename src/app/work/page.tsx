'use client'

import { useState } from 'react'
import Link from 'next/link'
import ImageSkeleton from '@/components/shared/ImageSkeleton'

export default function Work() {
  const [activeTab, setActiveTab] = useState('Albums')

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black container mx-auto px-4 md:px-6 lg:px-8 pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      <h2 className="text-center font-bold text-white mb-12 md:mb-16 px-4">
        <span className="font-satoshi-light text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#be9b58] to-white">
          Explore Our
        </span>
        <span className="block text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mt-2">
          Creative Portfolio
        </span>
      </h2>
      
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="h-full bg-zinc-900/50 p-2 border border-zinc-800 rounded inline-flex">
          {['Albums', 'Photos', 'Videos', 'Reels'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2 bg-transparent transition-colors"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {activeTab === tab && (
                <div className="absolute inset-0 bg-zinc-800 rounded" style={{ opacity: 1 }} />
              )}
              <span className={`relative block text-sm font-light tracking-wide ${
                activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}>
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {activeTab === 'Albums' && (
        <div className="relative w-full h-full mt-8">
          <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
            <div className="w-full relative h-full rounded-2xl p-4 md:p-6 lg:p-10 text-xl md:text-4xl font-bold text-white">
              <div className="w-full overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1800px]">
                  
                  {/* Album 1 - Featured Grid Layout */}
                  <Link href="/albums/6934230e557776bd424ec7d8">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-3 grid-rows-2 gap-[4px] h-full">
                          {/* Main Large Image */}
                          <div className="col-span-2 row-span-2">
                            <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                              <ImageSkeleton className="w-full h-full">
                                <img alt="Wedding Couple Walking in Nature" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/beautiful-wedding-walk-nature-ukraine-sumy_gi4ccv.jpg" />
                              </ImageSkeleton>
                            </div>
                          </div>
                          {/* Top Right Image */}
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Just Married Couple" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725089/just-married-couple-having-fun-together_tuc5yy.jpg" />
                            </ImageSkeleton>
                          </div>
                          {/* Bottom Right Image */}
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Wedding Celebration" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1751531746/samples/balloons.jpg" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Wedding Collection</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">Dhaka</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Album 2 - Bird Photography */}
                  <Link href="/albums/6933e8d9557776bd424ec51c">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-3 grid-rows-2 gap-[4px] h-full">
                          <div className="col-span-2 row-span-2">
                            <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                              <ImageSkeleton className="w-full h-full">
                                <img alt="Colorful Kingfisher Bird" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/colorful-kingfisher-bird-sitting-tree-branch_xacat9.jpg" />
                              </ImageSkeleton>
                            </div>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Beautiful Blue Kingfisher" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-blue-kingfisher-bird-branch_s57u55.jpg" />
                            </ImageSkeleton>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="European Bee-Eater" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-shot-european-bee-eater-bird-perched-log-forest_ztagjt.jpg" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Bird Photography</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">Nature</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Album 3 - Professional Portrait */}
                  <Link href="/albums/6933e00b557776bd424ebb17">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-2 gap-[3px] h-full">
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Professional Portrait" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" />
                            </ImageSkeleton>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Portrait Face" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Professional Portraits</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">Studio</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Album 4 - Animals */}
                  <Link href="/albums/6933d8cd557776bd424eb77c">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-3 grid-rows-2 gap-[4px] h-full">
                          <div className="col-span-2 row-span-2">
                            <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                              <ImageSkeleton className="w-full h-full">
                                <img alt="Woman Farmer with Cows" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/young-woman-farmer-looking-after-cows-cowshed_ylwodo.jpg" />
                              </ImageSkeleton>
                            </div>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Woman Animal Farming" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/view-woman-working-animal-farming-field-celebrate-labour-day-women_1_ffacyb.jpg" />
                            </ImageSkeleton>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Woman with Goat" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/front-view-smiley-woman-holding-goat_sxivfd.jpg" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Animals</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">Bangladesh</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Album 5 - Friends */}
                  <Link href="/albums/69342220557776bd424ec75d">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-3 grid-rows-2 gap-[4px] h-full">
                          <div className="col-span-2 row-span-2">
                            <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                              <ImageSkeleton className="w-full h-full">
                                <img alt="Two Birds" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1751531745/samples/two-ladies.jpg" />
                              </ImageSkeleton>
                            </div>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Friends with Coffee" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733956/smiley-friends-with-books-coffee-outdoors_le2hly.jpg" />
                            </ImageSkeleton>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="University Cafeteria" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733957/universityCafeteria_kmkmlb.jpg" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Friends</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">University</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Album 6 - Paints Collage */}
                  <Link href="/albums/6933e4d7557776bd424ec191">
                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-2 gap-[3px] h-full">
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Woman with Colorful Painting" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769733955/rsz_young-woman-posing-her-colorful-painting_qmvlng.jpg" />
                            </ImageSkeleton>
                          </div>
                          <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-white">
                            <ImageSkeleton className="w-full h-full">
                              <img alt="Young People Packing Humanitarian Help" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769734099/young-peeple-red-packing-cardboards-with-humanitarian-help_uptphu.jpg" />
                            </ImageSkeleton>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                      <div className="p-4 space-y-2 mt-3">
                        <h3 className="text-lg font-semibold text-white line-clamp-1">Paints Collage</h3>
                        <p className="text-sm text-gray-400">Multiple items</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="line-clamp-1">Art Studio</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'Photos' && (
        <div className="relative w-full h-full mt-8">
          <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
            <div className="w-full relative h-full rounded-2xl p-4 md:p-6 lg:p-10 text-xl md:text-4xl font-bold text-white">
              <div className="w-full overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1800px]">
                  {/* Photo 1 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="Colorful Kingfisher Bird" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/colorful-kingfisher-bird-sitting-tree-branch_xacat9.jpg" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Colorful Kingfisher</p>
                            <p className="text-xs text-gray-300">Dec 19, 2024</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>

                  {/* Photo 2 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="Beautiful Blue Kingfisher" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-blue-kingfisher-bird-branch_s57u55.jpg" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Blue Kingfisher</p>
                            <p className="text-xs text-gray-300">Dec 19, 2024</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>

                  {/* Photo 3 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="European Bee-Eater" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769730756/beautiful-shot-european-bee-eater-bird-perched-log-forest_ztagjt.jpg" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Bee-Eater Bird</p>
                            <p className="text-xs text-gray-300">Dec 18, 2024</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>

                  {/* Photo 4 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="Professional Portrait" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Professional Portrait</p>
                            <p className="text-xs text-gray-300">Jan 15, 2025</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>

                  {/* Photo 5 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="Wedding Walk in Nature" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725088/beautiful-wedding-walk-nature-ukraine-sumy_gi4ccv.jpg" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Wedding Walk</p>
                            <p className="text-xs text-gray-300">Jan 10, 2025</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>

                  {/* Photo 6 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-900 rounded-lg">
                      <ImageSkeleton className="w-full h-full">
                        <img alt="Just Married Couple" loading="lazy" decoding="async" className="transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" src="https://res.cloudinary.com/dk8syjt2z/image/upload/v1769725089/just-married-couple-having-fun-together_tuc5yy.jpg" />
                      </ImageSkeleton>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-white">Just Married</p>
                            <p className="text-xs text-gray-300">Jan 08, 2025</p>
                          </div>
                          <button className="hover:scale-110 transition-all p-2">
                            <svg className="w-5 h-5 text-red-400 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="w-full py-2 rounded text-sm font-medium text-white cursor-pointer"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'Videos' && (
        <div className="relative w-full h-full mt-8">
          <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
            <div className="w-full relative h-full rounded-2xl p-4 md:p-6 lg:p-10 text-xl md:text-4xl font-bold text-white">
              <div className="w-full overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1800px]">
                  {/* Video 1 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-900 rounded-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Vgwmg7V4U4o"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Video Documentary</p>
                  </div>

                  {/* Video 2 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-900 rounded-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/K5V4zP38xro"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Portrait Video</p>
                  </div>

                  {/* Video 3 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-900 rounded-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ljEWqrTjARA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Wedding Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'Reels' && (
        <div className="relative w-full h-full mt-8">
          <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
            <div className="w-full relative h-full rounded-2xl p-4 md:p-6 lg:p-10 text-xl md:text-4xl font-bold text-white">
              <div className="w-full overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1800px]">
                  {/* Reel 1 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-[9/16] w-full overflow-hidden bg-gray-900 rounded-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/00KNZ6_-k1M"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-white text-sm font-semibold">YouTube Shorts</p>
                      </div>
                    </div>
                  </div>

                  {/* Reel 2 */}
                  <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-3 border-white/10 transition-all duration-300 p-5 cursor-pointer hover:border-white/30">
                    <div className="relative aspect-[9/16] w-full overflow-hidden bg-gray-900 rounded-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Y_JiJ4WyHbQ"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-white text-sm font-semibold">YouTube Shorts</p>
                      </div>
                    </div>
                  </div>

                   

                   

                  

                   
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
