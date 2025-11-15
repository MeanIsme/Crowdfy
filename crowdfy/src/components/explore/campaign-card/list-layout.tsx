import React from 'react'
import { MapPin, BadgeCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { calculatePercentage, getCampaignTypeLabel, formatAmount } from '@/lib/campaign-formatters'
import type { Campaign } from '@/data/campaigns'

interface ListLayoutProps {
  campaign: Campaign
  isFavorite: boolean
  onToggleFavorite: () => void
}

export const ListLayout = React.memo(function ListLayout({ campaign, isFavorite, onToggleFavorite }: ListLayoutProps) {
  const percentage = calculatePercentage(campaign)

  return (
    <article className="group relative flex overflow-hidden rounded-sm border border-foreground/20 bg-card shadow-sm transition hover:shadow-md">
      {/* Left: Image Section */}
      <div className="relative m-4 aspect-[200/186] w-32 shrink-0 overflow-hidden rounded-sm md:w-40">
        <Image
          src={campaign.image}
          alt={campaign.title}
          className="h-full w-full rounded-l-sm object-cover object-center"
        />
        {/* Verified Badge */}
        {campaign.creator.verified && (
          <Badge
            variant="outline"
            className="absolute bottom-3 left-3 flex items-center gap-1 border-green-500/30 bg-green-50/90 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-950/90 dark:text-green-400"
          >
            <BadgeCheck className="h-3 w-3" />
            Verified
          </Badge>
        )}
      </div>

      {/* Right: Content Section */}
      <div className="relative flex flex-1 flex-col gap-1 p-4">
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 h-9 w-9 rounded-sm border border-foreground/30 bg-white/90 text-foreground shadow-sm hover:bg-white"
          onClick={onToggleFavorite}
        >
          <Heart className={cn('h-4 w-4 transition', isFavorite ? 'fill-primary text-primary' : '')} />
          <span className="sr-only">Toggle favorite</span>
        </Button>

        {/* Type Label and Title */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-green-600 dark:text-green-400">
            {getCampaignTypeLabel(campaign.type)}
          </span>
          <h3 className="pr-10 text-lg font-semibold leading-tight text-foreground md:text-xl">{campaign.title}</h3>
        </div>

        {/* Description */}
        <p className="line-clamp-2 font-normal text-sm text-muted-foreground">{campaign.description}</p>

        {/* Location and Amount Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{campaign.location}</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-semibold text-foreground">
              {formatAmount(campaign.amountRaised, campaign.currency)}
            </span>
            <span className="text-xs font-normal text-muted-foreground">
              {campaign.currency === '€' ? 'euros' : campaign.currency === '$' ? 'dollars' : 'currency'}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-lime-100 dark:bg-lime-900/30">
            <div
              className="h-full bg-lime-500 transition-all dark:bg-lime-400"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  )
})

