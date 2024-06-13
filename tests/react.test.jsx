import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, describe } from 'vitest'
import Calculator from '../src/Calculator'
import { decimalDot, equalSign, numbers, operations } from '../src/constants'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render with a title', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')

    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign and decimal dot', () => {
    render(<Calculator />)

    screen.getByText(equalSign)
    screen.getByText(decimalDot)
  })

  it('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should show user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should show user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const plus = screen.getByText('+')

    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should calculate user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const plus = screen.getByText('+')
    const equal = screen.getByText(equalSign)

    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(two)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})
