import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-11/12 mx-auto ${className}`}>
      {children}
    </div>
  )
}
