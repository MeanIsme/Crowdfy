import type { SortKey } from '@/store/explore-store'

export const SORT_LABELS: Record<SortKey, string> = {
  price: 'Price',
  date: 'Date',
  null: '',
}

export const SORT_KEYS: SortKey[] = ['price', 'date']

export const DEFAULT_SORT_DIRECTIONS: Record<'price' | 'date', 'asc' | 'desc'> = {
  price: 'asc',
  date: 'desc',
}

