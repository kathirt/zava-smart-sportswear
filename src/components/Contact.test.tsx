import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

// Mock the @github/spark/hooks module
vi.mock('@github/spark/hooks', () => ({
  useKV: vi.fn(() => [[], vi.fn()]),
}))

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the contact section with correct id', () => {
    const { container } = render(<Contact id="test-contact" />)
    const section = container.querySelector('#test-contact')
    expect(section).toBeInTheDocument()
  })

  it('should render contact form fields', () => {
    render(<Contact id="contact" />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('should render contact information', () => {
    render(<Contact id="contact" />)
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
  })

  it('should render the submit button', () => {
    render(<Contact id="contact" />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('should allow typing in input fields', async () => {
    const user = userEvent.setup()
    render(<Contact id="contact" />)
    
    const nameInput = screen.getByLabelText(/Name/i)
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('should allow typing in email field', async () => {
    const user = userEvent.setup()
    render(<Contact id="contact" />)
    
    const emailInput = screen.getByLabelText(/Email/i)
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('should have proper section structure', () => {
    const { container } = render(<Contact id="contact" />)
    const section = container.querySelector('#contact')
    expect(section?.tagName).toBe('SECTION')
  })
})
