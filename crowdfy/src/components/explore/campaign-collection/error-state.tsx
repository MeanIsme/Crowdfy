export function ErrorState() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-3xl border border-destructive/40 bg-destructive/5 p-8 text-center">
      <p className="text-lg font-semibold text-destructive">We couldn&apos;t load campaigns</p>
      <p className="text-sm text-muted-foreground">
        Please refresh the page or try again in a few moments.
      </p>
    </div>
  )
}

