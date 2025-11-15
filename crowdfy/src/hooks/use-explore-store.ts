import { useExploreStore as useBaseExploreStore } from '@/store/explore-store'

/**
 * Optimized hook to get multiple store values at once
 * Reduces re-renders by selecting all needed values in one call
 */
export function useExploreStore() {
  return useBaseExploreStore((state) => ({
    type: state.type,
    sortKey: state.sortKey,
    sortDirection: state.sortDirection,
    searchQuery: state.searchQuery,
    currentPage: state.currentPage,
    viewMode: state.viewMode,
    fundingStatus: state.fundingStatus,
    durations: state.durations,
    favorites: state.favorites,
    setType: state.setType,
    setSort: state.setSort,
    setViewMode: state.setViewMode,
    setSearchQuery: state.setSearchQuery,
    setPage: state.setPage,
    toggleFavorite: state.toggleFavorite,
    toggleFundingStatus: state.toggleFundingStatus,
    toggleDuration: state.toggleDuration,
    resetFilters: state.resetFilters,
  }))
}

