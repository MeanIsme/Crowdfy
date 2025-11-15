import { useCallback } from 'react'
import { useExploreStore } from '@/store/explore-store'
import type { SortDirection } from '@/store/explore-store'
import { SortButton } from './sort-button'
import { SORT_KEYS, DEFAULT_SORT_DIRECTIONS } from './sort-controls.constants'

interface SortButtonsGroupProps {
  variant?: 'default' | 'modal'
}

export function SortButtonsGroup({ variant = 'default' }: SortButtonsGroupProps) {
  const sortKey = useExploreStore((state) => state.sortKey)
  const sortDirection = useExploreStore((state) => state.sortDirection)
  const setSort = useExploreStore((state) => state.setSort)

  const handleSortToggle = useCallback(
    (key: 'price' | 'date') => {
      if (sortKey !== key) {
        setSort(key, 'desc')
        return
      }
      const nextDirection: SortDirection = sortDirection === 'desc' ? 'asc' : 'desc'
      setSort(key, nextDirection)
    },
    [sortKey, sortDirection, setSort],
  )

  if (variant === 'modal') {
    return (
      <>
        {SORT_KEYS.map((key) => {
          if (key === null) return null
          const isActive = sortKey === key
          const defaultDirection = DEFAULT_SORT_DIRECTIONS[key]
          const currentDirection = isActive ? sortDirection : defaultDirection

          return (
            <SortButton
              key={key}
              sortKey={key}
              isActive={isActive}
              currentDirection={currentDirection}
              onClick={() => handleSortToggle(key)}
              variant={variant}
            />
          )
        })}
      </>
    )
  }

  const validKeys = SORT_KEYS.filter((k) => k !== null) as Array<'price' | 'date'>

  return (
    <div className="inline-flex h-[2.5rem] overflow-hidden rounded-sm border border-border bg-background">
      {validKeys.map((key, index) => {
        const isActive = sortKey === key
        const defaultDirection = DEFAULT_SORT_DIRECTIONS[key]
        const currentDirection = isActive ? sortDirection : defaultDirection
        const isFirst = index === 0
        const isLast = index === validKeys.length - 1

        return (
          <div key={key} className="relative flex">
            {!isFirst && <div className="absolute left-0 top-0 h-full w-px bg-border" />}
            <SortButton
              sortKey={key}
              isActive={isActive}
              currentDirection={currentDirection}
              onClick={() => handleSortToggle(key)}
              variant={variant}
              isFirst={isFirst}
              isLast={isLast}
            />
          </div>
        )
      })}
    </div>
  )
}

