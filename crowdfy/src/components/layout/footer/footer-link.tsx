import { Badge } from '@/components/ui/badge'
import type { FooterLink } from './footer.constants'

interface FooterLinkProps {
  link: FooterLink
}

export function FooterLinkItem({ link }: FooterLinkProps) {
  const linkClassName = link.isPrimary
    ? 'text-sm font-medium text-primary hover:text-primary/80'
    : 'text-sm text-muted-foreground hover:text-foreground'

  return (
    <li>
      <a href={link.href} className={linkClassName}>
        {link.badge ? (
          <span className="flex items-center gap-2">
            {link.label}
            <Badge className="h-5 bg-primary px-1.5 text-xs font-medium text-primary-foreground">
              {link.badge}
            </Badge>
          </span>
        ) : (
          link.label
        )}
      </a>
    </li>
  )
}

