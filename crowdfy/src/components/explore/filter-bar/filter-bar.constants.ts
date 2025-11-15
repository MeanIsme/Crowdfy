import { FileText, List, MapPin, PiggyBank } from 'lucide-react'
import type { CampaignTypeFilter, ViewMode } from '@/store/explore-store'

export interface TypeFilterOption {
  value: CampaignTypeFilter
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface ViewModeOption {
  value: ViewMode
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export const TYPE_FILTER_OPTIONS: TypeFilterOption[] = [
  { value: 'all', label: 'All views' },
  { value: 'petition', label: 'Petitions', icon: FileText },
  { value: 'donation', label: 'Donations', icon: PiggyBank },
]

export const VIEW_MODE_OPTIONS: ViewModeOption[] = [
  { value: 'list', label: 'List', icon: List },
  { value: 'map', label: 'Map', icon: MapPin },
]

export const VIEW_MODE_TO_TOGGLE_VALUE: Record<ViewMode, string> = {
  gallery: 'gallery',
  list: 'list',
  map: 'map',
}

export const TOGGLE_VALUE_TO_VIEW_MODE: Record<string, ViewMode> = {
  list: 'list',
  map: 'map',
  gallery: 'gallery',
}

