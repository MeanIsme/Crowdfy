import { NAV_ITEMS } from './header.constants'

export function HeaderNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          className={`text-sm font-medium transition-colors hover:text-foreground ${
            item.active
              ? 'text-foreground font-semibold'
              : 'text-muted-foreground'
          }`}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

