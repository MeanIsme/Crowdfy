interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const SIZE_MAP = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}

const TEXT_SIZE_MAP = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
  const iconSize = SIZE_MAP[size]
  const textSize = TEXT_SIZE_MAP[size]

  const hasWhiteColor = className?.includes('text-white')

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <div
        className={`flex ${iconSize} items-center justify-center ${hasWhiteColor ? 'text-white' : 'text-lime-500'}`}
        aria-hidden="true"
      >
        <svg
          className={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
          <rect x="8" y="11" width="8" height="2" rx="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        </svg>
      </div>
      {showText && <span className={`${textSize} font-bold text-foreground`}>Crowdfy</span>}
    </div>
  )
}
