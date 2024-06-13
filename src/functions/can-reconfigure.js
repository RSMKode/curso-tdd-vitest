export const canReconfigure = (from, to) => {
  //   if (from === undefined || to === undefined) {
  //     throw new Error('Some parameters are missing')
  //   }

  if (typeof from !== 'string' || typeof to !== 'string') {
    throw new Error('Parameters must be strings')
  }

  const hasSameLength = from.length === to.length
  if (!hasSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]

    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
