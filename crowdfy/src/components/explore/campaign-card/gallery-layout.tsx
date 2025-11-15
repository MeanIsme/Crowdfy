import { Heart, Upload, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { calculatePercentage, formatAmount } from '@/lib/campaign-formatters'
import type { Campaign } from '@/data/campaigns'
import { cn } from '@/lib/utils'

interface GalleryLayoutProps {
  campaign: Campaign
  layout: 'gallery' | 'list'
  isFavorite: boolean
  onToggleFavorite: () => void
}

export function GalleryLayout({ campaign, layout, isFavorite, onToggleFavorite }: GalleryLayoutProps) {
  const percentage = calculatePercentage(campaign)
  const isListLayout = layout === 'list'

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-card',
        isListLayout && 'md:flex-row',
      )}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[396/175] overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Share and Favorite Buttons - Bottom Right */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-sm bg-white/90 text-foreground shadow-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation()
              // TODO: Implement share functionality
            }}
          >
            <Upload className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-sm bg-white/90 text-foreground shadow-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite()
            }}
          >
            <Heart className={cn('h-4 w-4 transition', isFavorite ? 'fill-primary text-primary' : '')} />
            <span className="sr-only">Toggle favorite</span>
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className={cn('flex flex-1 flex-col gap-2 p-6', isListLayout && 'gap-3 p-4')}>
        {/* Profile and Name */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={campaign.creator.avatar} alt={campaign.creator.name} />
            <AvatarFallback>{campaign.creator.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">{campaign.creator.name}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold leading-tight text-foreground md:text-2xl">{campaign.title}</h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">{campaign.description}</p>

        {/* Progress Section */}
        <div className="flex flex-col gap-2">
          {/* Progress Bar */}
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-lime-100 dark:bg-lime-900/30">
            <div
              className="h-full bg-lime-500 transition-all dark:bg-lime-400"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Amount and Percentage */}
          <div className="flex items-center justify-between">
            {/* Amount with Gift Icon */}
            <div className="flex items-center gap-1.5">
              <Gift className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">
                {formatAmount(campaign.amountRaised, campaign.currency)}
              </span>
            </div>

            {/* Percentage */}
            <span className="text-sm font-medium text-foreground">{percentage}%</span>
          </div>
        </div>
      </div>
    </article>
  )
}

