import { MapPin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import type { Campaign } from '@/data/campaigns'

interface CampaignHeaderProps {
  campaign: Campaign
  layout?: 'gallery' | 'list'
}

export function CampaignHeader({ campaign, layout }: CampaignHeaderProps) {
  const isListLayout = layout === 'list'

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <div className={cn('flex items-center gap-3 text-sm text-muted-foreground', isListLayout && 'gap-2')}>
          <Avatar className={cn('h-10 w-10', isListLayout && 'h-8 w-8')}>
            <AvatarImage src={campaign.creator.avatar} alt={campaign.creator.name} />
            <AvatarFallback>{campaign.creator.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className={cn('font-medium text-foreground', isListLayout && 'text-sm')}>
              {campaign.creator.name}
            </span>
            <span className={cn('flex items-center gap-1 text-xs text-muted-foreground', isListLayout && 'text-[10px]')}>
              <MapPin className={cn('h-3.5 w-3.5', isListLayout && 'h-3 w-3')} />
              {campaign.location}
            </span>
          </div>
        </div>
        <h3
          className={cn(
            'text-xl font-semibold leading-tight text-foreground md:text-2xl',
            isListLayout && 'text-base md:text-lg',
          )}
        >
          {campaign.title}
        </h3>
        <p
          className={cn(
            'line-clamp-3 text-sm text-muted-foreground md:text-base',
            isListLayout && 'line-clamp-2 text-xs md:text-sm',
          )}
        >
          {campaign.description}
        </p>
      </div>
    </div>
  )
}

