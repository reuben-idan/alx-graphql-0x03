# ALX GraphQL 0x03 - Error Boundary Implementation

This project implements an Error Boundary component in React with TypeScript, designed to catch and handle JavaScript errors in your application.

## Project Structure

```
alx-rick-and-morty-app/
└── components/
    └── ErrorBoundary.tsx  # Error boundary implementation
```

## Features

- Type-safe Error Boundary component
- Error state management
- Error logging to console
- Simple error fallback UI with retry functionality

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Import and wrap your components with the ErrorBoundary:

```tsx
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}
```

## Error Boundary Implementation

The ErrorBoundary component:
- Catches JavaScript errors in child components
- Logs errors to the console
- Displays a fallback UI when errors occur
- Allows users to retry the failed operation