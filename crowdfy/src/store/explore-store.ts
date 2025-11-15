import { create } from 'zustand'

export type CampaignTypeFilter = 'all' | 'petition' | 'donation'
export type SortKey = 'price' | 'date' | null
export type SortDirection = 'asc' | 'desc'
export type ViewMode = 'gallery' | 'list' | 'map'
export type FundingStatus = '0-25%' | '25-75%' | '75-100%'
export type Duration = '< 30 days' | '30-90 days' | '> 90 days'

export interface ExploreState {
  type: CampaignTypeFilter
  sortKey: SortKey
  sortDirection: SortDirection
  viewMode: ViewMode
  searchQuery: string
  currentPage: number
  favorites: Set<string>
  fundingStatus: Set<FundingStatus>
  durations: Set<Duration>
  setType: (type: CampaignTypeFilter) => void
  setSort: (sortKey: SortKey, direction?: SortDirection) => void
  setViewMode: (mode: ViewMode) => void
  setSearchQuery: (query: string) => void
  setPage: (page: number) => void
  toggleFavorite: (id: string) => void
  toggleFundingStatus: (status: FundingStatus) => void
  toggleDuration: (duration: Duration) => void
  resetFilters: () => void
}

export const useExploreStore = create<ExploreState>((set) => ({
  type: 'all',
  sortKey: null,
  sortDirection: 'desc',
  viewMode: 'gallery',
  searchQuery: '',
  currentPage: 1,
  favorites: new Set<string>(),
  fundingStatus: new Set<FundingStatus>(),
  durations: new Set<Duration>(),
  setType: (type) =>
    set(() => ({
      type,
      currentPage: 1,
    })),
  setSort: (sortKey, direction = 'desc') =>
    set((state) => ({
      sortKey,
      sortDirection: sortKey ? direction : state.sortDirection,
      currentPage: 1,
    })),
  setViewMode: (mode) => set(() => ({ viewMode: mode, currentPage: 1 })),
  setSearchQuery: (query) => set(() => ({ searchQuery: query, currentPage: 1 })),
  setPage: (page) => set(() => ({ currentPage: page })),
  toggleFavorite: (id) =>
    set((state) => {
      const favorites = new Set(state.favorites)
      if (favorites.has(id)) {
        favorites.delete(id)
      } else {
        favorites.add(id)
      }
      return { favorites }
    }),
  toggleFundingStatus: (status) =>
    set((state) => {
      const fundingStatus = new Set(state.fundingStatus)
      if (fundingStatus.has(status)) {
        fundingStatus.delete(status)
      } else {
        fundingStatus.add(status)
      }
      return { fundingStatus, currentPage: 1 }
    }),
  toggleDuration: (duration) =>
    set((state) => {
      const durations = new Set(state.durations)
      if (durations.has(duration)) {
        durations.delete(duration)
      } else {
        durations.add(duration)
      }
      return { durations, currentPage: 1 }
    }),
  resetFilters: () =>
    set((state) => ({
      type: 'all',
      sortKey: null,
      sortDirection: state.sortDirection,
      searchQuery: '',
      currentPage: 1,
      fundingStatus: new Set<FundingStatus>(),
      durations: new Set<Duration>(),
    })),
}))
