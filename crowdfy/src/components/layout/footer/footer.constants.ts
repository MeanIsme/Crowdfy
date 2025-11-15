export interface FooterLink {
  label: string
  href: string
  badge?: string | number
  isPrimary?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Home',
    links: [
      { label: 'Home', href: '#', isPrimary: true },
      { label: 'My favorites', href: '#' },
      { label: 'Recents', href: '#' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Explore', href: '#' },
      { label: 'Lists', href: '#' },
      { label: 'Maps', href: '#', badge: 'New' },
    ],
  },
  {
    title: 'Campaigns',
    links: [
      { label: 'Campaigns', href: '#' },
      { label: 'Home', href: '#' },
      { label: 'Campaigns', href: '#', badge: 12 },
      { label: 'Donations', href: '#', badge: 4 },
      { label: 'Analytics', href: '#' },
    ],
  },
  {
    title: 'Profile',
    links: [
      { label: 'Profile', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Notifications', href: '#', badge: 10 },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resources', href: '#' },
      { label: 'How to use Crowdfy', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Legal Terms', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Merch', href: '#' },
    ],
  },
]

export const COPYRIGHT_TEXT = '©2077 Mainnet Design. All rights reserved.'

