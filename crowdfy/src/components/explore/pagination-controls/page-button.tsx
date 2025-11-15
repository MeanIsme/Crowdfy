import { cn } from '@/lib/utils'

interface PageButtonProps {
  page: number
  isActive: boolean
  onClick: (e: React.MouseEvent, page: number) => void
}

export function PageButton({ page, isActive, onClick }: PageButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e, page)}
      className={cn(
        'flex h-9 w-9 items-center justify-center text-sm transition-colors',
        isActive
          ? 'font-bold text-foreground'
          : 'font-medium text-muted-foreground hover:text-foreground',
      )}
    >
      {page}
    </button>
  )
}

