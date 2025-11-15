import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FavoriteButtonProps {
  isFavorite: boolean
  onToggle: () => void
  variant?: 'ghost' | 'secondary'
  size?: 'default' | 'small'
  className?: string
}

export function FavoriteButton({
  isFavorite,
  onToggle,
  variant = 'secondary',
  size = 'default',
  className,
}: FavoriteButtonProps) {
  const isSmall = size === 'small'

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn(
        variant === 'secondary'
          ? 'absolute right-4 top-4 h-9 w-9 rounded-full bg-background/90 text-foreground shadow'
          : 'absolute right-3 top-3 h-8 w-8 rounded-lg',
        isSmall && 'right-2 top-2 h-7 w-7',
        className,
      )}
      onClick={onToggle}
    >
      <Heart className={cn('h-4 w-4 transition', isFavorite ? 'fill-primary text-primary' : '', isSmall && 'h-3 w-3')} />
      <span className="sr-only">Toggle favorite</span>
    </Button>
  )
}

