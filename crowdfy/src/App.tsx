import { useMemo } from 'react'

import { CampaignCollection } from '@/components/explore/campaign-collection'
import { AppLayout } from '@/components/layout'
import { getMapCenter } from '@/lib/location-utils'
import { useCampaignsQuery } from '@/hooks/use-campaigns-query'
import { useFilteredCampaigns } from '@/hooks/use-filtered-campaigns'
import { usePaginatedCampaigns } from '@/hooks/use-paginated-campaigns'
import { MAP_PAGE_SIZE, PAGE_SIZE } from '@/constants/app.constants'

function App() {
  const { data, isLoading, isError } = useCampaignsQuery()

  const filteredCampaigns = useFilteredCampaigns(data)
  const paginatedCampaigns = usePaginatedCampaigns(filteredCampaigns)

  const mapCenter = useMemo(() => getMapCenter(filteredCampaigns), [filteredCampaigns])

  return (
    <AppLayout>
      <CampaignCollection
        campaigns={paginatedCampaigns}
        filteredCampaigns={filteredCampaigns}
        isLoading={isLoading}
        isError={isError}
        pageSize={PAGE_SIZE}
        mapPageSize={MAP_PAGE_SIZE}
        mapCenter={mapCenter}
      />
    </AppLayout>
  )
}

export default App
