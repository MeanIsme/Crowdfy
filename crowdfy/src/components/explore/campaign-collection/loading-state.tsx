export function LoadingState() {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-border bg-card/70">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <p className="text-sm font-medium text-muted-foreground">Fetching campaigns...</p>
      </div>
    </div>
  )
}

