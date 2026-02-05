import {it,describe,vi,expect} from 'vitest'
import { getUser } from '../src/api.js'

vi.mock('../src/api.js',()=>({ getUser : vi.fn()
}))
describe('probando getUser Mock',()=>{
    it('retorna un usuario falso', async()=>{

        getUser.mockResolvedValue({name:'Rodrigo'})
        const user = await getUser()
        expect(user.name).toBe('Rodrigo')

    })
})

