# Crowdfy

## Setup

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Crowdfy
```

2. Install frontend dependencies:
```bash
cd crowdfy
npm install
```

3. Install backend dependencies:
```bash
cd ../crowdfy-next
npm install
```

## Run

### Development

**Frontend** (runs on `http://localhost:5173`):
```bash
cd crowdfy
npm run dev
```

**Backend** (runs on `http://localhost:3000`):
```bash
cd crowdfy-next
npm run dev
```

> Note: You need to run both frontend and backend in separate terminal windows.

### Build

**Frontend**:
```bash
cd crowdfy
npm run build
```

**Backend**:
```bash
cd crowdfy-next
npm run build
```

### Preview

**Frontend**:
```bash
cd crowdfy
npm run preview
```

**Backend** (production):
```bash
cd crowdfy-next
npm run build
npm start
```

## Approach & Trade-offs

### Architecture Decisions

**State Management - Zustand**
- **Why**: Lightweight, simple API, no boilerplate compared to Redux
- **Trade-off**: Less ecosystem/tooling than Redux, but sufficient for this project's needs
- **Approach**: Single store (`explore-store`) for all filter/search/pagination state

**Data Fetching - TanStack Query**
- **Why**: Built-in caching, error handling, loading states, and retry logic
- **Trade-off**: Additional dependency, but significantly reduces boilerplate for API calls
- **Approach**: Single query hook (`useCampaignsQuery`) with proper staleTime configuration

**UI Components - ShadCN/Radix UI**
- **Why**: Accessible, customizable, and well-maintained component primitives
- **Trade-off**: Larger bundle size, but provides excellent accessibility out-of-the-box
- **Approach**: Custom UI components built on Radix primitives with Tailwind styling

**Styling - Tailwind CSS**
- **Why**: Utility-first approach, fast development, consistent design system
- **Trade-off**: Learning curve and potential class name bloat, but manageable with proper component structure
- **Approach**: CSS variables for theming, utility classes for layout and styling

### Performance Optimizations

**Component Memoization**
- Used `React.memo` for layout components (`GalleryLayout`, `ListLayout`, `MapLayout`) to prevent unnecessary re-renders
- **Trade-off**: Slight memory overhead, but significant performance gain when rendering many campaign cards

**Custom Hooks for Logic Separation**
- Extracted filtering, pagination, and search logic into custom hooks
- **Trade-off**: More files to maintain, but better code organization and reusability

**Debounced Search**
- 300ms debounce delay for search input
- **Trade-off**: Slight delay in search results, but prevents excessive filtering operations

### Code Organization

**Feature-based Component Structure**
- Components organized by feature (explore, layout, ui) rather than by type
- **Trade-off**: Requires understanding of feature boundaries, but easier to locate related code

**Type Safety**
- Strict TypeScript with no `any` types
- **Trade-off**: More verbose type definitions, but catches errors at compile-time

**Error Handling**
- Error Boundary for React errors, Query error states for API errors
- **Trade-off**: Additional complexity, but provides better user experience on failures
