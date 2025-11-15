import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useExploreStore } from '@/store/explore-store'
import { VIEW_MODE_OPTIONS, VIEW_MODE_TO_TOGGLE_VALUE, VIEW_MODE_MAP } from './header.constants'

export function HeaderViewToggle() {
  const viewMode = useExploreStore((state) => state.viewMode)
  const setViewMode = useExploreStore((state) => state.setViewMode)

  const currentValue = VIEW_MODE_TO_TOGGLE_VALUE[viewMode]

  const handleValueChange = (value: string) => {
    const newViewMode = VIEW_MODE_MAP[value]
    if (newViewMode && newViewMode !== viewMode) {
      setViewMode(newViewMode)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <ToggleGroup
      type="single"
      value={currentValue}
      onValueChange={handleValueChange}
      className="gap-2"
      size="sm"
      variant="outline"
      aria-label="View mode selector"
    >
      {VIEW_MODE_OPTIONS.map((option) => {
        const Icon = option.icon
        return (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            className="border-0 rounded-sm px-4 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            aria-label={`Switch to ${option.label} view`}
          >
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {option.label}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}

