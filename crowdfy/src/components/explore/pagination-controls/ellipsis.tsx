export function Ellipsis({ index }: { index: number }) {
  return (
    <span key={`ellipsis-${index}`} className="px-2 text-sm text-muted-foreground">
      ...
    </span>
  )
}

