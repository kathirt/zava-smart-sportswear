import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('should render the hero section with correct id', () => {
    const { container } = render(<Hero id="test-hero" onExploreClick={vi.fn()} />)
    const section = container.querySelector('#test-hero')
    expect(section).toBeInTheDocument()
  })

  it('should render the main heading', () => {
    render(<Hero id="hero" onExploreClick={vi.fn()} />)
    expect(screen.getByText(/Unleash Your Potential/i)).toBeInTheDocument()
    expect(screen.getByText(/with Smart Sportswear/i)).toBeInTheDocument()
  })

  it('should render the description text', () => {
    render(<Hero id="hero" onExploreClick={vi.fn()} />)
    expect(
      screen.getByText(/Experience the future of athletic performance/i)
    ).toBeInTheDocument()
  })

  it('should render Shop Now button', () => {
    render(<Hero id="hero" onExploreClick={vi.fn()} />)
    const shopButton = screen.getByRole('button', { name: /Shop Now/i })
    expect(shopButton).toBeInTheDocument()
  })

  it('should render Watch Demo button', () => {
    render(<Hero id="hero" onExploreClick={vi.fn()} />)
    const demoButton = screen.getByRole('button', { name: /Watch Demo/i })
    expect(demoButton).toBeInTheDocument()
  })

  it('should call onExploreClick when Shop Now button is clicked', async () => {
    const handleExploreClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Hero id="hero" onExploreClick={handleExploreClick} />)
    
    const shopButton = screen.getByRole('button', { name: /Shop Now/i })
    await user.click(shopButton)
    
    expect(handleExploreClick).toHaveBeenCalledTimes(1)
  })

  it('should have proper styling classes', () => {
    const { container } = render(<Hero id="hero" onExploreClick={vi.fn()} />)
    const section = container.querySelector('#hero')
    
    expect(section).toHaveClass('min-h-screen')
    expect(section).toHaveClass('flex')
    expect(section).toHaveClass('items-center')
  })

  it('should render with motion components', () => {
    render(<Hero id="hero" onExploreClick={vi.fn()} />)
    // Motion components should render their content
    expect(screen.getByText(/Unleash Your Potential/i)).toBeInTheDocument()
  })
})
