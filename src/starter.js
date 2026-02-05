import { expect } from "vitest";

export function divide(a,b){
    if(b===0) throw new Error('no se puede dividir entre 0')
        
    return a/b;

    
}

export async function getUsuario(){
    return {id:1, name:'Rodrigo'}
}


export async function getUser(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>{
            const ok = Math.random() > 0.2

            if(ok){
                resolve({id:1,name:'Rodri'})
            } else {
                reject(new Error('Error al obtener user'))
            }
        },4000)
    })
    }
