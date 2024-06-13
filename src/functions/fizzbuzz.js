/*
Escribir una función que al pasarle un número:
- Si el número es divisible por 3, devolverá "Fizz"
- Si el número es divisible por 5, devolverá "Buzz"
- Si el número es divisible por 3 y 5, devolverá "FizzBuzz"
- En cualquier otro caso, devolverá el número
*/
export const fizzbuzz = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('The parameter provided must be a number')

  if (number < 0) throw new Error('The number must be greater than 0')

  const multiples = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Woff'
  }
  let output = ''
  Object.entries(multiples).forEach(([multiple, message]) => {
    if (number % multiple === 0) output += message
  })

  return output || number
}
