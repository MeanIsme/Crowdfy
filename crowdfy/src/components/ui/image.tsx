import { useState, useEffect, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
}

export function Image({ src, alt, fallback, className, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    if (fallback && imgSrc !== fallback) {
      setImgSrc(fallback)
      setHasError(false)
    } else {
      setHasError(true)
    }
  }

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}
      {hasError ? (
        <div className={cn('flex h-full w-full items-center justify-center bg-muted text-muted-foreground', className)}>
          <span className="text-sm">Image not available</span>
        </div>
      ) : (
        <img
          {...props}
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={cn('h-full w-full object-cover', isLoading && 'opacity-0', className)}
        />
      )}
    </div>
  )
}

