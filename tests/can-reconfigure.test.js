import { describe, it, expect } from 'vitest'
import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  // it('should be a function', () => {
  //   expect(typeof canReconfigure).toBe('function')
  // })

  it('should throw an error if some of the parameters is missing', () => {
    expect(() => canReconfigure()).toThrow()
    expect(() => canReconfigure({})).toThrow()
    expect(() => canReconfigure({ from: 'a' })).toThrow()
    expect(() => canReconfigure({ to: 'a' })).toThrow()
  })

  it('should throw an error if some of the parameters is not a string', () => {
    expect(() => canReconfigure(1, 'a')).toThrow(/strings/)
    expect(() => canReconfigure('a', 1)).toThrow(/strings/)
    expect(() => canReconfigure('a', {})).toThrow(/strings/)
    expect(() => canReconfigure({}, 'a')).toThrow(/strings/)
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different lengths', () => {
    expect(canReconfigure('a', 'aa')).toBe(false)
    expect(canReconfigure('aa', 'a')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings provided have different lengths even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings have different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    expect(canReconfigure('XBOX', 'XXBX')).toBe(false)
  })

  it('should return true if strings have same order of transformation', () => {
    expect(canReconfigure('XBOX', 'YBOY')).toBe(true)
    expect(canReconfigure('XBOX', 'XOBX')).toBe(true)
    expect(canReconfigure('XBOX', 'XOBX')).toBe(true)
  })
})
