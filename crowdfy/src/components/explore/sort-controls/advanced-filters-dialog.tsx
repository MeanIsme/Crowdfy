import { Button } from '@/components/ui/button'
import { Logo } from '@/components/layout/logo'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useExploreStore } from '@/store/explore-store'
import { CampaignTypeFilter } from './campaign-type-filter'
import { SortButtonsGroup } from './sort-buttons-group'
import { FundingStatusFilter } from './funding-status-filter'
import { DurationFilter } from './duration-filter'

export function AdvancedFiltersDialog() {
  const resetFilters = useExploreStore((state) => state.resetFilters)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[2.5rem] rounded-sm bg-lime-500 text-white hover:bg-lime-600">
          <Logo size="sm" showText={false} className="mr-2 text-white" />
          Show filters
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Advanced filters</DialogTitle>
          <DialogDescription>Combine categories, campaign locations, and funding progress.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          <CampaignTypeFilter />

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Sort</span>
            <div className="flex flex-wrap gap-2">
              <SortButtonsGroup variant="modal" />
            </div>
          </div>

          <Separator />

          <div className="grid gap-4 md:grid-cols-2">
            <FundingStatusFilter />
            <DurationFilter />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={resetFilters}>
            Clear all
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

