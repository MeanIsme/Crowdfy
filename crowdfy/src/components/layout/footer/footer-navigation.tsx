import { FooterSection } from './footer-section'
import { FOOTER_SECTIONS } from './footer.constants'

export function FooterNavigation() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        {FOOTER_SECTIONS.map((section) => (
          <FooterSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  )
}

