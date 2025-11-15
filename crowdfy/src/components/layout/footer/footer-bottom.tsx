import { FooterLogo } from './footer-logo'
import { COPYRIGHT_TEXT } from './footer.constants'

export function FooterBottom() {
  return (
    <div className="border-t border-dashed border-primary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <FooterLogo />
        <p className="text-sm text-muted-foreground">{COPYRIGHT_TEXT}</p>
      </div>
    </div>
  )
}

