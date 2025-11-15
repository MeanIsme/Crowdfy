import { TypeFilterGroup } from './type-filter-group'
import { ViewModeToggle } from './view-mode-toggle'

export function FilterBar() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <TypeFilterGroup />
        <ViewModeToggle />
      </div>
    </section>
  )
}

