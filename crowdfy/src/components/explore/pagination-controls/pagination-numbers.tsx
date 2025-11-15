import type { PageItem } from '@/lib/pagination-utils'
import { PageButton } from './page-button'
import { Ellipsis } from './ellipsis'

interface PaginationNumbersProps {
  pages: PageItem[]
  currentPage: number
  onPageClick: (e: React.MouseEvent, page: number) => void
}

export function PaginationNumbers({ pages, currentPage, onPageClick }: PaginationNumbersProps) {
  return (
    <div className="flex items-center gap-1">
      {pages.map((page, index) => {
        if (page === 'ellipsis') {
          return <Ellipsis key={`ellipsis-${index}`} index={index} />
        }

        return (
          <PageButton
            key={page}
            page={page}
            isActive={currentPage === page}
            onClick={onPageClick}
          />
        )
      })}
    </div>
  )
}

