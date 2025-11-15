import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PaginationButton } from './pagination-button'
import { PaginationNumbers } from './pagination-numbers'
import type { PageItem } from '@/lib/pagination-utils'

interface PaginationNavProps {
  pages: PageItem[]
  currentPage: number
  totalPages: number
  onPrevious: (e: React.MouseEvent) => void
  onNext: (e: React.MouseEvent) => void
  onPageClick: (e: React.MouseEvent, page: number) => void
}

export function PaginationNav({
  pages,
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageClick,
}: PaginationNavProps) {
  return (
    <div className="flex items-center justify-between">
      <PaginationButton onClick={onPrevious} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </PaginationButton>

      <PaginationNumbers pages={pages} currentPage={currentPage} onPageClick={onPageClick} />

      <PaginationButton onClick={onNext} disabled={currentPage === totalPages}>
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </div>
  )
}

