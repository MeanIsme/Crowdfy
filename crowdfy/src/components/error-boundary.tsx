import { Component, type ReactNode } from 'react'
import { Button } from './ui/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <div className="max-w-md text-center">
              <h2 className="mb-2 text-2xl font-bold text-foreground">Something went wrong</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We encountered an unexpected error. Please try reloading the page.
              </p>
              <Button onClick={() => window.location.reload()} variant="default">
                Reload page
              </Button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

