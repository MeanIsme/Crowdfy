export type PageItem = number | 'ellipsis'

const MAX_VISIBLE_PAGES = 7

/**
 * Calculates the range of pages to display in pagination
 * @param current - Current page number
 * @param totalPages - Total number of pages
 * @returns Array of page numbers and ellipsis markers
 */
export function getPageRange(current: number, totalPages: number): PageItem[] {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pages: PageItem[] = []

  // Always show first page
  pages.push(1)

  // Show pages around current
  const start = Math.max(2, current - 1)
  const end = Math.min(totalPages - 1, current + 1)

  if (start > 2) {
    pages.push('ellipsis')
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (end < totalPages - 1) {
    pages.push('ellipsis')
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages)
  }

  return pages
}

/**
 * Calculates total pages from total items and page size
 */
export function calculateTotalPages(totalItems: number, pageSize: number): number {
  return Math.max(1, Math.ceil(totalItems / pageSize))
}

