import { PaginationControls } from '../pagination-controls/pagination-controls'
import { HeaderSection } from './header-section'
import { CampaignContent } from './campaign-content'
import { MapView } from './map-view'
import { useExploreStore } from '@/store/explore-store'
import type { Campaign } from '@/data/campaigns'

interface CampaignCollectionProps {
  campaigns: Campaign[]
  filteredCampaigns: Campaign[]
  isLoading: boolean
  isError: boolean
  pageSize: number
  mapPageSize: number
  mapCenter: { lat: number; lng: number }
}

const VIEW_MODE_LAYOUT_MAP: Record<'gallery' | 'list' | 'map', 'list' | 'gallery'> = {
  gallery: 'gallery',
  list: 'list',
  map: 'list',
}

export function CampaignCollection({
  campaigns,
  filteredCampaigns,
  isLoading,
  isError,
  pageSize,
  mapPageSize,
  mapCenter,
}: CampaignCollectionProps) {
  const viewMode = useExploreStore((state) => state.viewMode)

  const layout = VIEW_MODE_LAYOUT_MAP[viewMode]
  const currentPageSize = viewMode === 'map' ? mapPageSize : pageSize
  const showMap = viewMode === 'map'

  const content = (
    <div className="flex flex-col gap-6">
      <HeaderSection />
      <main className="flex flex-col gap-10">
        <CampaignContent campaigns={campaigns} isLoading={isLoading} isError={isError} layout={layout} />
        <PaginationControls totalItems={filteredCampaigns.length} pageSize={currentPageSize} />
      </main>
    </div>
  )

  if (showMap) {
    return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <div className="flex flex-1">{content}</div>
        <MapView mapCenter={mapCenter} filteredCampaigns={filteredCampaigns} />
      </div>
    )
  }

  return content
}

