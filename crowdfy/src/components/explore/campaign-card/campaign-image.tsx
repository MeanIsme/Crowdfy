import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Campaign } from '@/data/campaigns'
import { getCampaignTypeLabel } from '@/lib/campaign-formatters'

interface CampaignImageProps {
  campaign: Campaign
  layout?: 'gallery' | 'list'
  isFavorite: boolean
  onToggleFavorite: () => void
}

export function CampaignImage({ campaign, layout, isFavorite, onToggleFavorite }: CampaignImageProps) {
  const isListLayout = layout === 'list'

  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9]',
        isListLayout && 'md:max-w-[200px] md:aspect-square',
      )}
    >
      <img
        src={campaign.image}
        alt={campaign.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <Badge
        variant="outline"
        className={cn(
          'absolute left-4 top-4 bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide uppercase',
          isListLayout && 'left-2 top-2 px-2 py-0.5 text-[10px]',
        )}
      >
        {getCampaignTypeLabel(campaign.type)}
      </Badge>
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          'absolute right-4 top-4 h-9 w-9 rounded-full bg-background/90 text-foreground shadow',
          isListLayout && 'right-2 top-2 h-7 w-7',
        )}
        onClick={onToggleFavorite}
      >
        <Heart
          className={cn(
            'h-4 w-4 transition',
            isFavorite ? 'fill-primary text-primary' : '',
            isListLayout && 'h-3 w-3',
          )}
        />
        <span className="sr-only">Toggle favorite</span>
      </Button>
    </div>
  )
}

