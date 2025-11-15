import { FooterNavigation } from './footer-navigation'
import { FooterBottom } from './footer-bottom'

const FOOTER_STYLES = {
  container: 'mt-auto border-t border-dashed border-primary/30 bg-muted/30',
}

export function Footer() {
  return (
    <footer className={FOOTER_STYLES.container}>
      <FooterNavigation />
      <FooterBottom />
    </footer>
  )
}

