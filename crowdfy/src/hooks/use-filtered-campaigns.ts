import { useMemo } from 'react'
import type { Campaign } from '@/data/campaigns'
import { filterCampaigns, sortCampaigns, type CampaignFilters, type SortOptions } from '@/lib/campaign-utils'
import { useExploreStore } from '@/store/explore-store'

export function useFilteredCampaigns(campaigns: Campaign[] | undefined) {
  const type = useExploreStore((state) => state.type)
  const searchQuery = useExploreStore((state) => state.searchQuery)
  const sortKey = useExploreStore((state) => state.sortKey)
  const sortDirection = useExploreStore((state) => state.sortDirection)
  const fundingStatus = useExploreStore((state) => state.fundingStatus)
  const durations = useExploreStore((state) => state.durations)

  return useMemo(() => {
    if (!campaigns) return []

    const filters: CampaignFilters = {
      type,
      searchQuery,
      fundingStatus,
      durations,
    }

    const filtered = filterCampaigns(campaigns, filters)

    const sortOptions: SortOptions = {
      sortKey,
      sortDirection,
    }

    return sortCampaigns(filtered, sortOptions)
  }, [campaigns, type, searchQuery, sortKey, sortDirection, fundingStatus, durations])
}

