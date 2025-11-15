import { MapPin } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { FavoriteButton } from './favorite-button'
import { TypeBadge } from './type-badge'
import { formatAmount, calculatePercentage } from '@/lib/campaign-formatters'
import type { Campaign } from '@/data/campaigns'

interface MapLayoutProps {
  campaign: Campaign
  isFavorite: boolean
  onToggleFavorite: () => void
}

export function MapLayout({ campaign, isFavorite, onToggleFavorite }: MapLayoutProps) {
  const percentage = calculatePercentage(campaign)
  const currency = campaign.currency ?? '$'

  return (
    <article className="group relative flex overflow-hidden rounded-sm border border-border bg-card shadow-sm transition hover:shadow-md">
      {/* Left: Image Section */}
      <div className="relative aspect-[200/186] w-32 shrink-0 overflow-hidden md:w-40">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <TypeBadge campaign={campaign} showVerified variant="compact" />
      </div>

      {/* Right: Content Section (2/3 width) */}
      <div className="relative flex flex-1 flex-col gap-3 p-4">
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} variant="ghost" />

        <TypeBadge campaign={campaign} variant="compact" />

        {/* Title */}
        <h3 className="pr-8 text-lg font-bold leading-tight text-foreground">{campaign.title}</h3>

        {/* Description - Truncated */}
        <p className="line-clamp-2 text-sm text-muted-foreground">{campaign.description}</p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{campaign.location}</span>
        </div>

        {/* Amount Raised - Right aligned */}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{formatAmount(campaign.amountRaised, currency)}</span> euros
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={percentage} className="h-1" />
      </div>
    </article>
  )
}

