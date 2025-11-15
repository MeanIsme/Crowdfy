import { SortButtonsGroup } from './sort-buttons-group'
import { AdvancedFiltersDialog } from './advanced-filters-dialog'

export function ExploreSortControls() {
  return (
    <div className="flex flex-wrap items-stretch gap-2">
      <SortButtonsGroup />
      <AdvancedFiltersDialog />
    </div>
  )
}

