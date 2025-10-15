# Testing Guide

This directory contains the test setup and configuration for the Zava Smart Sportswear application.

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with UI
```bash
npm run test:ui
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Test Structure

- `setup.ts` - Global test configuration and mocks
- Unit tests are colocated with source files (e.g., `Component.test.tsx` next to `Component.tsx`)

## Test Files

- **src/lib/utils.test.ts** - Tests for utility functions (cn helper)
- **src/hooks/use-mobile.test.ts** - Tests for the mobile detection hook
- **src/components/Hero.test.tsx** - Tests for the Hero component
- **src/components/Products.test.tsx** - Tests for the Products component
- **src/components/Technology.test.tsx** - Tests for the Technology component
- **src/components/About.test.tsx** - Tests for the About component
- **src/components/Contact.test.tsx** - Tests for the Contact component
- **src/components/Athletes.test.tsx** - Tests for the Athletes component
- **src/App.test.tsx** - Basic tests for the App component

## Testing Stack

- **Vitest** - Fast unit test framework
- **React Testing Library** - React component testing utilities
- **@testing-library/jest-dom** - Custom matchers for DOM elements
- **jsdom** - DOM implementation for Node.js

## Writing Tests

Tests follow the Arrange-Act-Assert pattern:

```typescript
it('should do something', () => {
  // Arrange
  render(<Component prop="value" />)
  
  // Act
  const element = screen.getByText('Expected Text')
  
  // Assert
  expect(element).toBeInTheDocument()
})
```

## Mocking

Common mocks are set up in `setup.ts`:
- `window.matchMedia` - For responsive design tests
- `IntersectionObserver` - For animation/viewport tests
- `scrollIntoView` - For navigation tests

Component-specific mocks should be added in individual test files.
