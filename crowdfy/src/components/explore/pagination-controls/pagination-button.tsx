import { cn } from '@/lib/utils'

interface PaginationButtonProps {
  onClick: (e: React.MouseEvent) => void
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export function PaginationButton({ onClick, disabled, children, className }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground transition-colors',
        'hover:text-primary disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  )
}

