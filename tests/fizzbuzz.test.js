import { expect, it, describe } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw an specific error message if not number is provided as a parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
    expect(() => fizzbuzz('')).toThrow(/number/)
    expect(() => fizzbuzz(null)).toThrow(/number/)
    expect(() => fizzbuzz(undefined)).toThrow(/number/)
    expect(() => fizzbuzz({})).toThrow(/number/)
    expect(() => fizzbuzz([])).toThrow(/number/)
    expect(() => fizzbuzz(NaN)).toThrow(/number/)
  })

  it('should throw an error if number is less than 0', () => {
    expect(() => fizzbuzz(-1)).toThrow(/number/)
    expect(() => fizzbuzz(-3)).toThrow(/number/)
    expect(() => fizzbuzz(-5)).toThrow(/number/)
    expect(() => fizzbuzz(-15)).toThrow(/number/)
  })

  it('should return "Fizz" if number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(9)).toBe('Fizz')
    expect(fizzbuzz(12)).toBe('Fizz')
  })

  it('should return "Buzz" if number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
    expect(fizzbuzz(10)).toBe('Buzz')
    expect(fizzbuzz(20)).toBe('Buzz')
    expect(fizzbuzz(25)).toBe('Buzz')
  })

  it('should return "Woff" if number is divisible by 7', () => {
    expect(fizzbuzz(7)).toBe('Woff')
    expect(fizzbuzz(14)).toBe('Woff')
    // expect(fizzbuzz(21)).toBe('Woff')
    expect(fizzbuzz(28)).toBe('Woff')
  })

  it('should return "FizzBuzz" if number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(30)).toBe('FizzBuzz')
    expect(fizzbuzz(45)).toBe('FizzBuzz')
    expect(fizzbuzz(60)).toBe('FizzBuzz')
  })

  it('should return "FizzWoff" if number is divisible by 3 and 7', () => {
    expect(fizzbuzz(21)).toBe('FizzWoff')
    expect(fizzbuzz(42)).toBe('FizzWoff')
    expect(fizzbuzz(63)).toBe('FizzWoff')
    expect(fizzbuzz(84)).toBe('FizzWoff')
  })

  it('should return "BuzzWoff" if number is divisible by 5 and 7', () => {
    expect(fizzbuzz(35)).toBe('BuzzWoff')
    expect(fizzbuzz(70)).toBe('BuzzWoff')
    // expect(fizzbuzz(105)).toBe('BuzzWoff')
    expect(fizzbuzz(140)).toBe('BuzzWoff')
  })

  it('should return "FizzBuzzWoff" if number is divisible by 3, 5 and 7', () => {
    expect(fizzbuzz(105)).toBe('FizzBuzzWoff')
    expect(fizzbuzz(210)).toBe('FizzBuzzWoff')
    expect(fizzbuzz(315)).toBe('FizzBuzzWoff')
    expect(fizzbuzz(420)).toBe('FizzBuzzWoff')
  })

  it('should return a number if number is provided as a parameter', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})
