import { describe, it, expect } from 'vitest'
import { useExample } from './example'

describe('useExample', () => {
  it('should work with auto-imported @vueuse/core functions', () => {
    const { count, increment, storedValue, updateStoredValue } = useExample()
    
    expect(count.value).toBe(0)
    
    increment()
    expect(count.value).toBe(1)
    
    expect(storedValue.value).toBe('default-value')
    
    updateStoredValue('new-value')
    expect(storedValue.value).toBe('new-value')
  })
})