import { Button } from '@/components/ui/button'

interface FilterChipProps {
  label: string
  options: string[]
  selected: Set<string>
  onToggle: (option: string) => void
}

export function FilterChip({ label, options, selected, onToggle }: FilterChipProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.has(option)
          return (
            <Button
              key={option}
              variant={isSelected ? 'default' : 'outline'}
              size="sm"
              className={`rounded-full ${isSelected ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => onToggle(option)}
            >
              {option}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

