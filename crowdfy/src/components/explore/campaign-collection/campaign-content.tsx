import type { Campaign } from '@/data/campaigns'
import { LoadingState } from './loading-state'
import { ErrorState } from './error-state'
import { EmptyState } from './empty-state'
import { CampaignList } from './campaign-list'

interface CampaignContentProps {
  campaigns: Campaign[]
  isLoading: boolean
  isError: boolean
  layout: 'list' | 'gallery'
}

export function CampaignContent({ campaigns, isLoading, isError, layout }: CampaignContentProps) {
  if (isLoading) return <LoadingState />
  if (isError) return <ErrorState />
  if (campaigns.length === 0) return <EmptyState />
  return <CampaignList campaigns={campaigns} layout={layout} />
}

