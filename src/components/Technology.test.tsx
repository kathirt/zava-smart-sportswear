import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Technology } from './Technology'

describe('Technology', () => {
  it('should render the technology section with correct id', () => {
    const { container } = render(<Technology id="test-tech" />)
    const section = container.querySelector('#test-tech')
    expect(section).toBeInTheDocument()
  })

  it('should render the main heading', () => {
    render(<Technology id="technology" />)
    expect(screen.getByText(/Revolutionary Smart Technology/i)).toBeInTheDocument()
  })

  it('should render jersey technology features', () => {
    render(<Technology id="technology" />)
    expect(screen.getByText(/Biometric Monitoring/i)).toBeInTheDocument()
    expect(screen.getByText(/Temperature Control/i)).toBeInTheDocument()
    expect(screen.getByText(/Motion Analysis/i)).toBeInTheDocument()
    expect(screen.getByText(/Performance Analytics/i)).toBeInTheDocument()
  })

  it('should render cleats technology features', () => {
    render(<Technology id="technology" />)
    expect(screen.getByText(/Pressure Mapping/i)).toBeInTheDocument()
    expect(screen.getByText(/Gait Analysis/i)).toBeInTheDocument()
  })

  it('should render feature descriptions', () => {
    render(<Technology id="technology" />)
    expect(
      screen.getByText(/Continuous heart rate, breathing rate/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Smart fabric technology that regulates/i)
    ).toBeInTheDocument()
  })

  it('should have proper section structure', () => {
    const { container } = render(<Technology id="technology" />)
    const section = container.querySelector('#technology')
    expect(section?.tagName).toBe('SECTION')
  })

  it('should render technology cards', () => {
    const { container } = render(<Technology id="technology" />)
    // Check if cards are rendered (they use Card component)
    const cards = container.querySelectorAll('[class*="card"]')
    expect(cards.length).toBeGreaterThan(0)
  })
})
