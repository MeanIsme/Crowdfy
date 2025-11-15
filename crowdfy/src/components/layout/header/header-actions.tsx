import { Plus, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Add new"
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add new</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Profile"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60" />
        <span className="sr-only">Profile</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Settings"
      >
        <Settings className="h-4 w-4" />
        <span className="sr-only">Settings</span>
      </Button>
    </div>
  )
}

