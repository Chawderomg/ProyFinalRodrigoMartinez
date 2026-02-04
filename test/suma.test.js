import { expect, test } from 'vitest'
import { sumaR } from './src/suma.js'


test('sumar 8 + 6 to equal 14', () => {
  expect(sumaR(8, 6)).toBe(14)
})

