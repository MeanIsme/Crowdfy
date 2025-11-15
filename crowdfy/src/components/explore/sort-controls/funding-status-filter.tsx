import { useExploreStore, type FundingStatus } from '@/store/explore-store'
import { FilterChip } from './filter-chip'

const FUNDING_STATUS_OPTIONS: FundingStatus[] = ['0-25%', '25-75%', '75-100%']

export function FundingStatusFilter() {
  const fundingStatus = useExploreStore((state) => state.fundingStatus)
  const toggleFundingStatus = useExploreStore((state) => state.toggleFundingStatus)

  return (
    <FilterChip
      label="Funding status"
      options={FUNDING_STATUS_OPTIONS}
      selected={fundingStatus}
      onToggle={(option) => toggleFundingStatus(option as FundingStatus)}
    />
  )
}

