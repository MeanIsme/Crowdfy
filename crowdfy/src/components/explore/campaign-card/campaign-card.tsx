import { memo } from 'react'
import { useExploreStore } from '@/store/explore-store'
import type { Campaign } from '@/data/campaigns'
import { MapLayout } from './map-layout'
import { GalleryLayout } from './gallery-layout'
import { ListLayout } from './list-layout'

interface CampaignCardProps {
  campaign: Campaign
  layout?: 'gallery' | 'list' | 'map'
}

function CampaignCardComponent({ campaign, layout = 'gallery' }: CampaignCardProps) {
  const favorites = useExploreStore((state) => state.favorites)
  const toggleFavorite = useExploreStore((state) => state.toggleFavorite)
  const isFavorite = favorites.has(campaign.id)

  const handleToggleFavorite = () => {
    toggleFavorite(campaign.id)
  }

  if (layout === 'map') {
    return <MapLayout campaign={campaign} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
  }

  if (layout === 'list') {
    return <ListLayout campaign={campaign} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
  }

  return (
    <GalleryLayout
      campaign={campaign}
      layout={layout}
      isFavorite={isFavorite}
      onToggleFavorite={handleToggleFavorite}
    />
  )
}

export const CampaignCard = memo(CampaignCardComponent)

