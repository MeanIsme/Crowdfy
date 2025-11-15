import { ArrowUp, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SORT_LABELS } from './sort-controls.constants'
import type { SortDirection } from '@/store/explore-store'
import { cn } from '@/lib/utils'

interface SortButtonProps {
  sortKey: 'price' | 'date'
  isActive: boolean
  currentDirection: SortDirection
  onClick: () => void
  variant?: 'default' | 'modal'
  isFirst?: boolean
  isLast?: boolean
}

export function SortButton({
  sortKey,
  isActive,
  currentDirection,
  onClick,
  variant = 'default',
  isFirst,
  isLast,
}: SortButtonProps) {
  const Icon = currentDirection === 'asc' ? ArrowUp : ArrowDown

  if (variant === 'modal') {
    return (
      <Button
        variant={isActive ? 'default' : 'outline'}
        className={`rounded-full px-4 py-2 text-sm ${
          isActive ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground'
        }`}
        onClick={onClick}
      >
        <Icon className="mr-2 h-4 w-4" />
        {SORT_LABELS[sortKey]}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        'h-full min-h-[2.5rem] rounded-none border-0 bg-background px-4 py-2 text-sm font-normal text-foreground hover:bg-muted/50',
        isFirst && 'rounded-l-sm',
        isLast && 'rounded-r-sm',
      )}
      onClick={onClick}
    >
      <Icon className="mr-1.5 h-3.5 w-3.5" />
      {SORT_LABELS[sortKey]}
    </Button>
  )
}

