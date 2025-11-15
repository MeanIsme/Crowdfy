import { CampaignCard } from '../campaign-card/campaign-card'
import type { Campaign } from '@/data/campaigns'

interface CampaignListProps {
  campaigns: Campaign[]
  layout: 'list' | 'gallery'
}

export function CampaignList({ campaigns, layout }: CampaignListProps) {
  if (layout === 'list') {
    return (
      <div className="flex flex-col gap-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} layout="list" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} layout="gallery" />
      ))}
    </div>
  )
}

