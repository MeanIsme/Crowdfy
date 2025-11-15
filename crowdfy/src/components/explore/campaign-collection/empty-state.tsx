export function EmptyState() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-card/60 p-8 text-center">
      <p className="text-lg font-semibold text-foreground">No campaigns match your filters</p>
      <p className="max-w-md text-sm text-muted-foreground">
        Adjust your filters or search query to discover more petitions and donation opportunities on Crowdfy.
      </p>
    </div>
  )
}

