import { expect, test, it, test, describe } from 'vitest'
import { divide,getUser,getUsuario } from '../src/starter.js'


test('divicion correcta',()=>{
    expect(divide(8,2)).toBe(4)
})

test('division incorrecta',()=>{
    expect( ()=> divide(8,0)).toThrow()
})


describe('pruebas basicas',()=>{
    it('compara valores',()=>{
        expect(5).toBeGreaterThan(3)
        expect(3).toBeLessThan(10)
        expect(5).not.toBe(4)
    })
})


it('comparacion de objetos', ()=>{
    const user ={name:'Rodrigo',nota:58}
    expect (user).toEqual({name:'Rodrigo',nota:58})
    expect (user.nota).toBeGreaterThan(51)
})

it('comparacion de texto',()=>{
    expect(' capibara ').toContain('capibara')

})

it('comparacion de un arreglo',()=>{
    expect([2,4,8,9,6,7]).toContain(2)
    expect([2,4,8,9,6,7]).toHaveLength(6)
})

it('funcion asincrona pruebas', async()=>{
    const user = await getUsuario();
    expect(user.name).toBe('Rodrigo')

})




test('asinc',async()=>{
    try{
    const user = await getUser()
    console.log(user.name)
}catch(e){
    console.error(e.message)
}

})
