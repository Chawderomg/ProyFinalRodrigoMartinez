import {expect,test,describe,it,vi} from 'vitest'
import * as math from '../src/math'

describe('dobleRandom',()=>{
    it('usar el valor mockeado',()=>{
        vi.spyOn(math,'dobleRandom').mockReturnValue(0.5)
        const result =math.dobleRandom()*2
        expect(result).toBe(1)
    })
})

