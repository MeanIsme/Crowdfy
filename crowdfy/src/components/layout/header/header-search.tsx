import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface HeaderSearchProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function HeaderSearch({ value, onChange }: HeaderSearchProps) {
  return (
    <div className="relative flex-1 max-w-md">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <Input
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="h-10 rounded-sm bg-background pl-10"
        aria-label="Search campaigns"
      />
    </div>
  )
}

