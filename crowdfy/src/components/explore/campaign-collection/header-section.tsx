import { ExploreSortControls } from '../sort-controls/sort-controls'
import { FilterBar } from '../filter-bar/filter-bar'

export function HeaderSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Explore
          </h1>
          <p className="text-base text-muted-foreground">Where do you want to help</p>
        </div>
        <ExploreSortControls />
      </div>
      <FilterBar />
    </div>
  )
}

