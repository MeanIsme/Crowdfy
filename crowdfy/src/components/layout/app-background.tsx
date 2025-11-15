export function AppBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-spot-blue blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
    </div>
  )
}

