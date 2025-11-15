import { useCallback } from 'react'
import { useExploreStore } from '@/store/explore-store'
import { getPageRange, calculateTotalPages } from '@/lib/pagination-utils'
import { PaginationNav } from './pagination-nav'

interface PaginationControlsProps {
  totalItems: number
  pageSize: number
}

export function PaginationControls({ totalItems, pageSize }: PaginationControlsProps) {
  const currentPage = useExploreStore((state) => state.currentPage)
  const setPage = useExploreStore((state) => state.setPage)

  const totalPages = calculateTotalPages(totalItems, pageSize)
  const pages = getPageRange(currentPage, totalPages)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handlePrevious = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (currentPage > 1) {
        setPage(currentPage - 1)
        scrollToTop()
      }
    },
    [currentPage, setPage, scrollToTop],
  )

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (currentPage < totalPages) {
        setPage(currentPage + 1)
        scrollToTop()
      }
    },
    [currentPage, totalPages, setPage, scrollToTop],
  )

  const handlePageClick = useCallback(
    (e: React.MouseEvent, page: number) => {
      e.preventDefault()
      setPage(page)
      scrollToTop()
    },
    [setPage, scrollToTop],
  )

  if (totalPages <= 1) {
    return null
  }

  return (
    <nav className="flex flex-col gap-4">
      <div className="h-px w-full border-t border-border" />
      <PaginationNav
        pages={pages}
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onPageClick={handlePageClick}
      />
    </nav>
  )
}

