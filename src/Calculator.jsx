import { evaluate } from 'mathjs'
import { useState } from 'react'
import { equalSign, rows } from './constants'

const Calculator = () => {
  const [value, setValue] = useState('')

  const handleClick = (option) => {
    option === equalSign
      ? setValue(evaluate(value))
      : setValue(value + option)
  }

  return (
    <section>
      <h1>Calculator</h1>
      <input type='text' value={value} readOnly />
      <div role='grid'>
        {
        rows.map((row, i) => (
          <div key={i} role='row'>
            {
              row.map(number => (
                <button
                  onClick={() => handleClick(number)}
                  key={number} role='cell'
                >{number}
                </button>
              ))
            }
          </div>

        ))
      }
      </div>
    </section>

  )
}

export default Calculator
