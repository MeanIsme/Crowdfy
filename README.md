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
