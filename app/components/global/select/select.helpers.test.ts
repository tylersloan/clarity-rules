import { describe, expect, it } from 'vitest'
import SelectHelpers from './select.helpers'

describe('getFirstUnusedOption', () => {
  it('should return the first unused option', () => {
    const currentOptions = [
      { value: '0', label: 'Option 0' },
      { value: '1', label: 'Option 1' },
    ]
    const allOptions = [
      { value: '0', label: 'Option 0' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]
    const firstUnusedOption = SelectHelpers.getFirstUnusedOption(
      currentOptions,
      allOptions
    )
    expect(firstUnusedOption).toEqual({ value: '2', label: 'Option 2' })
  })

  it('should throw an error if no unused options are found', () => {
    const currentOptions = [
      { value: '0', label: 'Option 0' },
      { value: '1', label: 'Option 1' },
    ]
    const allOptions = [
      { value: '0', label: 'Option 0' },
      { value: '1', label: 'Option 1' },
    ]
    expect(() =>
      SelectHelpers.getFirstUnusedOption(currentOptions, allOptions)
    ).toThrow('No unused options found')
  })
})
