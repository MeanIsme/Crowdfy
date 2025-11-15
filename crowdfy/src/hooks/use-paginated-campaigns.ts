import { useMemo } from 'react'
import type { Campaign } from '@/data/campaigns'
import { paginateCampaigns } from '@/lib/campaign-utils'
import { useExploreStore } from '@/store/explore-store'
import { MAP_PAGE_SIZE, PAGE_SIZE } from '@/constants/app.constants'

export function usePaginatedCampaigns(campaigns: Campaign[]) {
  const currentPage = useExploreStore((state) => state.currentPage)
  const viewMode = useExploreStore((state) => state.viewMode)

  const pageSize = viewMode === 'map' ? MAP_PAGE_SIZE : PAGE_SIZE

  return useMemo(() => {
    return paginateCampaigns(campaigns, currentPage, pageSize)
  }, [campaigns, currentPage, pageSize])
}

