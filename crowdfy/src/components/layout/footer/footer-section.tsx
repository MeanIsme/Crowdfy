import { FooterLinkItem } from './footer-link'
import type { FooterSection } from './footer.constants'

interface FooterSectionProps {
  section: FooterSection
}

export function FooterSection({ section }: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
      <ul className="flex flex-col gap-3">
        {section.links.map((link, index) => (
          <FooterLinkItem key={`${section.title}-${index}`} link={link} />
        ))}
      </ul>
    </div>
  )
}

