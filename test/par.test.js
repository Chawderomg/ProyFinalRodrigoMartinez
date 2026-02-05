import { expect, test } from 'vitest'
import { verificaPar } from '../src/par.js'

test('Verificando el numero par', () => {
  expect(verificaPar(4)).toBe(true)
})


test('Verificando el numero impar', () => {
  expect(verificaPar(7)).toBe(false)
})


test('Verificando si el numero 0 es par', () => {
  expect(verificaPar(0)).toBe(true)
})

