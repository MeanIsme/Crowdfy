import type { ReactNode } from 'react'
import { Header, Footer } from './index'
import { AppBackground } from './app-background'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background via-background/95 to-background">
      <Header />
      <AppBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}

