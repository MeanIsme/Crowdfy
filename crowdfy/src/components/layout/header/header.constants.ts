import { LayoutGrid, MapPin, Newspaper } from 'lucide-react'
import type { ViewMode } from '@/store/explore-store'

export interface NavItem {
  label: string
  active: boolean
  href?: string
}

export interface ViewModeOption {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  viewMode: ViewMode
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', active: false },
  { label: 'Explore', active: true },
  { label: 'Campaigns', active: false },
  { label: 'Profile', active: false },
]

export const VIEW_MODE_OPTIONS: ViewModeOption[] = [
  {
    value: 'gallery',
    label: 'Gallery',
    icon: LayoutGrid,
    viewMode: 'gallery',
  },
  {
    value: 'maps',
    label: 'Maps',
    icon: MapPin,
    viewMode: 'map',
  },
  {
    value: 'feed',
    label: 'Feed',
    icon: Newspaper,
    viewMode: 'list',
  },
]

export const VIEW_MODE_MAP: Record<string, ViewMode> = {
  gallery: 'gallery',
  maps: 'map',
  feed: 'list',
}

export const VIEW_MODE_TO_TOGGLE_VALUE: Record<ViewMode, string> = {
  gallery: 'gallery',
  map: 'maps',
  list: 'feed',
}

