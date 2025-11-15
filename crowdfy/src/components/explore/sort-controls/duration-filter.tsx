import { useExploreStore, type Duration } from '@/store/explore-store'
import { FilterChip } from './filter-chip'

const DURATION_OPTIONS: Duration[] = ['< 30 days', '30-90 days', '> 90 days']

export function DurationFilter() {
  const durations = useExploreStore((state) => state.durations)
  const toggleDuration = useExploreStore((state) => state.toggleDuration)

  return (
    <FilterChip
      label="Duration"
      options={DURATION_OPTIONS}
      selected={durations}
      onToggle={(option) => toggleDuration(option as Duration)}
    />
  )
}

