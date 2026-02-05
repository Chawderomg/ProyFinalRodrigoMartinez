import { describe, expect, test ,it} from 'vitest'
import { sumaR } from '../src/suma.js'


describe('sum',()=>{

  it('suma dos numeros',()=>{
    expect(sumaR(8, 6)).toBe(14)
  })

  it('suma con cero',()=>{
    expect(sumaR(7, 0)).toBe(7)
  })

})



