export function getUser(){
    return fetch('/user').then(res=>res.json
)
}