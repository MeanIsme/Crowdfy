import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { formatAmount } from '@/lib/campaign-formatters'
import type { Campaign } from '@/data/campaigns'

interface CampaignProgressProps {
  campaign: Campaign
  percentage: number
  layout?: 'gallery' | 'list'
}

export function CampaignProgress({ campaign, percentage, layout }: CampaignProgressProps) {
  const isListLayout = layout === 'list'
  const currency = campaign.currency ?? '$'

  return (
    <div className={cn('flex flex-col gap-4', isListLayout && 'gap-2')}>
      <Progress value={percentage} className={cn('h-1', isListLayout && 'h-1')} />
      <div className={cn('flex items-center justify-between text-sm text-muted-foreground', isListLayout && 'text-xs')}>
        <div>
          <span className="font-semibold text-foreground">{formatAmount(campaign.amountRaised, currency)}</span> raised
        </div>
        <div className="font-medium text-foreground">{percentage}% funded</div>
      </div>
    </div>
  )
}

