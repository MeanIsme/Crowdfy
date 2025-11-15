import { Button } from '@/components/ui/button'
import { useExploreStore } from '@/store/explore-store'
import { TYPE_FILTER_OPTIONS } from './filter-bar.constants'
import { cn } from '@/lib/utils'

export function TypeFilterGroup() {
  const type = useExploreStore((state) => state.type)
  const setType = useExploreStore((state) => state.setType)

  return (
    <div className="inline-flex overflow-hidden rounded-sm border border-border bg-background">
      {TYPE_FILTER_OPTIONS.map((option, index) => {
        const Icon = option.icon
        const isActive = type === option.value
        const isFirst = index === 0
        const isLast = index === TYPE_FILTER_OPTIONS.length - 1

        return (
          <div key={option.value} className="relative flex">
            {!isFirst && <div className="absolute left-0 top-0 h-full w-px bg-border" />}
            <Button
              variant="ghost"
              className={cn(
                'h-auto min-h-[2.5rem] rounded-none border-0 px-4 py-2 text-sm font-normal hover:bg-transparent',
                isActive
                  ? 'bg-background font-bold text-foreground'
                  : 'bg-muted/50 text-muted-foreground',
                isFirst && 'rounded-l-sm',
                isLast && 'rounded-r-sm',
              )}
              onClick={() => setType(option.value)}
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {option.label}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

