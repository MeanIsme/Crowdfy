import type { Campaign } from '@/data/campaigns'
import type { Duration, FundingStatus } from '@/store/explore-store'

/**
 * Normalizes a string for search comparison
 */
export function normalizeSearchText(text: string): string {
  return text.toLowerCase().trim()
}

/**
 * Checks if text matches search query
 */
export function matchesSearchQuery(text: string, query: string): boolean {
  if (!query) return true
  return normalizeSearchText(text).includes(normalizeSearchText(query))
}

/**
 * Calculates funding status based on percentage
 */
export function getFundingStatus(percentage: number): FundingStatus {
  if (percentage <= 25) return '0-25%'
  if (percentage <= 75) return '25-75%'
  return '75-100%'
}

/**
 * Calculates duration category based on creation date
 */
export function getDurationCategory(createdAt: string): Duration {
  const now = new Date()
  const created = new Date(createdAt)
  const daysDiff = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))

  if (daysDiff < 30) return '< 30 days'
  if (daysDiff <= 90) return '30-90 days'
  return '> 90 days'
}

/**
 * Filters campaigns based on multiple criteria
 */
export interface CampaignFilters {
  type: 'all' | 'petition' | 'donation'
  searchQuery: string
  fundingStatus: Set<FundingStatus>
  durations: Set<Duration>
}

export function filterCampaigns(campaigns: Campaign[], filters: CampaignFilters): Campaign[] {
  return campaigns.filter((campaign) => {
    const matchesType = filters.type === 'all' || campaign.type === filters.type
    const matchesQuery =
      !filters.searchQuery ||
      matchesSearchQuery(campaign.title, filters.searchQuery) ||
      matchesSearchQuery(campaign.description, filters.searchQuery)

    const campaignFundingStatus = getFundingStatus(campaign.percentage)
    const matchesFundingStatus =
      filters.fundingStatus.size === 0 || filters.fundingStatus.has(campaignFundingStatus)

    const campaignDuration = getDurationCategory(campaign.createdAt)
    const matchesDuration = filters.durations.size === 0 || filters.durations.has(campaignDuration)

    return matchesType && matchesQuery && matchesFundingStatus && matchesDuration
  })
}

/**
 * Sorts campaigns based on key and direction
 */
export interface SortOptions {
  sortKey: 'price' | 'date' | null
  sortDirection: 'asc' | 'desc'
}

export function sortCampaigns(campaigns: Campaign[], options: SortOptions): Campaign[] {
  if (!options.sortKey) {
    return campaigns
  }

  return [...campaigns].sort((a, b) => {
    let comparator = 0

    if (options.sortKey === 'price') {
      comparator = a.amountRaised - b.amountRaised
    } else if (options.sortKey === 'date') {
      comparator = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }

    return options.sortDirection === 'asc' ? comparator : -comparator
  })
}

/**
 * Paginates an array of campaigns
 */
export function paginateCampaigns<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
}

