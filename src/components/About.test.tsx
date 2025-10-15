import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('should render the about section with correct id', () => {
    const { container } = render(<About id="test-about" />)
    const section = container.querySelector('#test-about')
    expect(section).toBeInTheDocument()
  })

  it('should render company milestones', () => {
    render(<About id="about" />)
    expect(screen.getByText('Company Founded')).toBeInTheDocument()
    expect(screen.getByText('First Prototype')).toBeInTheDocument()
    expect(screen.getByText('Patent Filed')).toBeInTheDocument()
    expect(screen.getByText('Pro Partnership')).toBeInTheDocument()
    expect(screen.getByText('Smart Cleats Launch')).toBeInTheDocument()
    expect(screen.getByText('Global Expansion')).toBeInTheDocument()
  })

  it('should render milestone years', () => {
    render(<About id="about" />)
    expect(screen.getByText('2019')).toBeInTheDocument()
    expect(screen.getByText('2020')).toBeInTheDocument()
    expect(screen.getByText('2021')).toBeInTheDocument()
    expect(screen.getByText('2022')).toBeInTheDocument()
    expect(screen.getByText('2023')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('should render team members', () => {
    render(<About id="about" />)
    expect(screen.getByText('Dr. Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Dr. Elena Volkova')).toBeInTheDocument()
    expect(screen.getByText('James Park')).toBeInTheDocument()
  })

  it('should render team roles', () => {
    render(<About id="about" />)
    expect(screen.getByText('CEO & Co-Founder')).toBeInTheDocument()
    expect(screen.getByText('CTO & Co-Founder')).toBeInTheDocument()
    expect(screen.getByText('Head of Research')).toBeInTheDocument()
    expect(screen.getByText('VP of Product')).toBeInTheDocument()
  })

  it('should render company values', () => {
    render(<About id="about" />)
    expect(screen.getByText('Performance Excellence')).toBeInTheDocument()
    expect(screen.getByText('Innovation First')).toBeInTheDocument()
  })

  it('should have proper section structure', () => {
    const { container } = render(<About id="about" />)
    const section = container.querySelector('#about')
    expect(section?.tagName).toBe('SECTION')
  })
})
