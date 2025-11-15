import * as React from 'react'
import { useDebouncedValue } from '@/hooks/use-debounced-value'
import { useExploreStore } from '@/store/explore-store'

const DEBOUNCE_DELAY = 300

export function useHeaderSearch() {
  const setSearchQuery = useExploreStore((state) => state.setSearchQuery)
  const [search, setSearch] = React.useState('')
  const debouncedSearch = useDebouncedValue(search, DEBOUNCE_DELAY)

  React.useEffect(() => {
    setSearchQuery(debouncedSearch.trim())
  }, [debouncedSearch, setSearchQuery])

  const handleSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  return {
    search,
    handleSearchChange,
  }
}

