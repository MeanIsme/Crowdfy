import type { SortKey } from '@/store/explore-store'

export const SORT_LABELS: Record<Exclude<SortKey, null>, string> = {
  price: 'Price',
  date: 'Date',
}

export const SORT_KEYS: SortKey[] = ['price', 'date']

export const DEFAULT_SORT_DIRECTIONS: Record<'price' | 'date', 'asc' | 'desc'> = {
  price: 'asc',
  date: 'desc',
}

