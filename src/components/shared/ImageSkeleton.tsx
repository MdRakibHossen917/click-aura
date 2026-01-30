'use client'

import { useState, useCallback } from 'react'

interface ImageSkeletonProps {
  children: React.ReactNode
  className?: string
}

export default function ImageSkeleton({ children, className = '' }: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle image load from child Image component with optimized callback
  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Clone children and add onLoad handler if it's an Image component
  const childrenWithHandler = children && typeof children === 'object' && 'props' in children
    ? { ...children, props: { ...children.props, onLoad: handleImageLoad } }
    : children

  return (
    <div className={`relative ${className}`} style={{ contain: 'layout' }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse rounded-lg z-10 will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent animate-shimmer" />
        </div>
      )}
      <div 
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ contain: 'content' }}
      >
        {childrenWithHandler}
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}
