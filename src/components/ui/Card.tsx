import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-surface-border bg-surface-raised p-6 ${
        hover
          ? 'transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
