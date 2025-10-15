import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('text-red-500', 'bg-blue-500')
      expect(result).toBe('text-red-500 bg-blue-500')
    })

    it('should handle conditional classes', () => {
      const result = cn('base-class', false && 'hidden', 'visible')
      expect(result).toBe('base-class visible')
    })

    it('should merge conflicting tailwind classes', () => {
      const result = cn('p-4', 'p-8')
      expect(result).toBe('p-8')
    })

    it('should handle undefined and null values', () => {
      const result = cn('text-sm', undefined, null, 'font-bold')
      expect(result).toBe('text-sm font-bold')
    })

    it('should handle arrays of class names', () => {
      const result = cn(['text-sm', 'font-bold'], 'text-red-500')
      expect(result).toBe('text-sm font-bold text-red-500')
    })

    it('should handle objects with boolean values', () => {
      const result = cn({
        'text-red-500': true,
        'bg-blue-500': false,
        'font-bold': true,
      })
      expect(result).toBe('text-red-500 font-bold')
    })

    it('should return empty string when no classes provided', () => {
      const result = cn()
      expect(result).toBe('')
    })

    it('should handle complex combinations', () => {
      const isActive = true
      const result = cn(
        'base-class',
        isActive && 'active-class',
        { 'conditional-class': true },
        ['array-class-1', 'array-class-2']
      )
      expect(result).toContain('base-class')
      expect(result).toContain('active-class')
      expect(result).toContain('conditional-class')
      expect(result).toContain('array-class-1')
      expect(result).toContain('array-class-2')
    })
  })
})
