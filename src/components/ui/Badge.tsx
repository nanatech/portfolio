interface BadgeProps {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-hover">
      {children}
    </span>
  )
}
