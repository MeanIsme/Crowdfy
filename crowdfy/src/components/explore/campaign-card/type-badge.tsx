import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Campaign } from '@/data/campaigns'
import { getCampaignTypeLabel, getCampaignTypeBadgeStyles } from '@/lib/campaign-formatters'

interface TypeBadgeProps {
  campaign: Campaign
  showVerified?: boolean
  variant?: 'default' | 'compact'
  className?: string
}

export function TypeBadge({ campaign, showVerified, variant = 'default', className }: TypeBadgeProps) {
  const isCompact = variant === 'compact'

  if (showVerified && campaign.creator.verified) {
    return (
      <Badge
        variant="outline"
        className={cn(
          'absolute bottom-3 left-3 flex items-center gap-1.5 border-green-500/30 bg-green-50/90 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-950/90 dark:text-green-400',
          className,
        )}
      >
        <Check className="h-3 w-3" />
        Verified
      </Badge>
    )
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        isCompact
          ? 'w-fit text-xs font-medium'
          : 'absolute left-4 top-4 bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        getCampaignTypeBadgeStyles(campaign.type),
        isCompact && 'border-blue-500/30 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
        className,
      )}
    >
      {getCampaignTypeLabel(campaign.type)}
    </Badge>
  )
}

