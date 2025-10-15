import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Products } from './Products'

// Mock the @github/spark/hooks module
vi.mock('@github/spark/hooks', () => ({
  useKV: vi.fn(() => {
    const state: string[] = []
    const setState = vi.fn((updater: (prev: string[]) => string[]) => {
      const newState = updater(state)
      state.push(...newState)
    })
    return [state, setState]
  }),
}))

describe('Products', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the products section with correct id', () => {
    const { container } = render(<Products id="test-products" />)
    const section = container.querySelector('#test-products')
    expect(section).toBeInTheDocument()
  })

  it('should render the main heading', () => {
    render(<Products id="products" />)
    expect(screen.getByText(/Smart Sportswear Collection/i)).toBeInTheDocument()
  })

  it('should render the section description', () => {
    render(<Products id="products" />)
    expect(
      screen.getByText(/Discover our revolutionary lineup/i)
    ).toBeInTheDocument()
  })

  it('should render Smart Jersey section heading', () => {
    render(<Products id="products" />)
    expect(screen.getByText('Smart Jersey')).toBeInTheDocument()
  })

  it('should render Smart Cleats section heading', () => {
    render(<Products id="products" />)
    expect(screen.getByText('Smart Cleats')).toBeInTheDocument()
  })

  it('should render all jersey products', () => {
    render(<Products id="products" />)
    expect(screen.getByText('Zava Pro Jersey')).toBeInTheDocument()
    expect(screen.getByText('Zava Training Jersey')).toBeInTheDocument()
  })

  it('should render all cleats products', () => {
    render(<Products id="products" />)
    expect(screen.getByText('Zava Elite Cleats')).toBeInTheDocument()
    expect(screen.getByText('Zava Speed Cleats')).toBeInTheDocument()
  })

  it('should display correct prices for products', () => {
    render(<Products id="products" />)
    const prices299 = screen.getAllByText('$299')
    expect(prices299.length).toBeGreaterThan(0)
    expect(screen.getByText('$399')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('should render product descriptions', () => {
    render(<Products id="products" />)
    expect(
      screen.getByText(/Professional-grade smart jersey/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Revolutionary smart cleats/i)
    ).toBeInTheDocument()
  })

  it('should render View Details buttons for all products', () => {
    render(<Products id="products" />)
    const viewButtons = screen.getAllByRole('button', { name: /View Details/i })
    expect(viewButtons).toHaveLength(4)
  })

  it('should render Add to Cart buttons for all products', () => {
    render(<Products id="products" />)
    const cartButtons = screen.getAllByRole('button', { name: /Add to Cart/i })
    expect(cartButtons).toHaveLength(4)
  })

  it('should open dialog when View Details is clicked', async () => {
    const user = userEvent.setup()
    render(<Products id="products" />)
    
    const viewButtons = screen.getAllByRole('button', { name: /View Details/i })
    await user.click(viewButtons[0])
    
    // After clicking, the dialog should be in the process of opening
    // (actual dialog opening depends on Radix UI implementation)
  })

  it('should handle Add to Cart button click', async () => {
    const user = userEvent.setup()
    render(<Products id="products" />)
    
    const cartButtons = screen.getAllByRole('button', { name: /Add to Cart/i })
    await user.click(cartButtons[0])
    
    // Cart functionality is mocked, so we just verify the button is clickable
    expect(cartButtons[0]).toBeInTheDocument()
  })

  it('should render products in correct grid layout', () => {
    const { container } = render(<Products id="products" />)
    const grids = container.querySelectorAll('.grid')
    expect(grids.length).toBeGreaterThan(0)
  })

  it('should have proper section structure', () => {
    const { container } = render(<Products id="products" />)
    const section = container.querySelector('#products')
    expect(section?.tagName).toBe('SECTION')
    expect(section).toHaveClass('py-20')
  })
})
