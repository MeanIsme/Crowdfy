import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useExploreStore } from '@/store/explore-store'

export function CampaignTypeFilter() {
  const type = useExploreStore((state) => state.type)
  const setType = useExploreStore((state) => state.setType)

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Campaign type
      </span>
      <ToggleGroup
        type="single"
        value={type}
        onValueChange={(value) => value && setType(value as typeof type)}
        className="flex flex-wrap gap-3"
        variant="outline"
      >
        <ToggleGroupItem value="all" className="rounded-full px-4 py-1 text-sm">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="petition" className="rounded-full px-4 py-1 text-sm">
          Petitions
        </ToggleGroupItem>
        <ToggleGroupItem value="donation" className="rounded-full px-4 py-1 text-sm">
          Donations
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

