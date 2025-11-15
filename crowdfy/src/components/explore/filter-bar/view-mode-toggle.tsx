import { Button } from '@/components/ui/button'
import { useExploreStore } from '@/store/explore-store'
import { VIEW_MODE_OPTIONS } from './filter-bar.constants'
import { cn } from '@/lib/utils'

export function ViewModeToggle() {
  const viewMode = useExploreStore((state) => state.viewMode)
  const setViewMode = useExploreStore((state) => state.setViewMode)

  const handleViewModeChange = (newViewMode: typeof viewMode) => {
    if (newViewMode !== viewMode) {
      setViewMode(newViewMode)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="inline-flex overflow-hidden rounded-sm border-[0.5px] border-border/50 bg-background">
      {VIEW_MODE_OPTIONS.map((option, index) => {
        const Icon = option.icon
        const isActive = viewMode === option.value
        const isFirst = index === 0
        const isLast = index === VIEW_MODE_OPTIONS.length - 1

        return (
          <div key={option.value} className="relative flex">
            <Button
              variant="ghost"
              className={cn(
                'h-auto min-h-[2.5rem] rounded-none border-[0.5px] border-border/50 !outline-none px-4 py-2 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
                isActive
                  ? 'bg-background text-foreground'
                  : 'bg-muted/50 text-muted-foreground',
                isFirst && 'rounded-l-sm',
                isLast && 'rounded-r-sm',
              )}
              onClick={() => handleViewModeChange(option.value)}
            >
              <Icon className="h-4 w-4" />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

