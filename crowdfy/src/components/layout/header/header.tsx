import { HeaderLogo } from './header-logo'
import { HeaderNav } from './header-nav'
import { HeaderActions } from './header-actions'
import { HeaderViewToggle } from './header-view-toggle'
import { HeaderSearch } from './header-search'
import { useHeaderSearch } from './header.hooks'

const HEADER_STYLES = {
  top: 'sticky top-0 z-50 w-full border-b border-border bg-background',
  sub: 'sticky top-16 z-40 w-full border-b border-border bg-background',
  container: 'container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8',
  subContainer: 'container mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8',
}

export function Header() {
  const { search, handleSearchChange } = useHeaderSearch()

  return (
    <>
      <header className={HEADER_STYLES.top}>
        <div className={HEADER_STYLES.container}>
          <HeaderLogo />
          <HeaderNav />
          <HeaderActions />
        </div>
      </header>

      <div className={HEADER_STYLES.sub}>
        <div className={HEADER_STYLES.subContainer}>
          <HeaderViewToggle />
          <HeaderSearch value={search} onChange={handleSearchChange} />
        </div>
      </div>
    </>
  )
}

