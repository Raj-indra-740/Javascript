function deepCopyObj(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    console.log(obj)
    return Object.keys(obj).reduce((acc,curr) => {
        acc[curr] = deepCopyObj(obj[curr])
        return acc
    },{})
}

let a = {
    userName: 'raj',
    address: {
        roomNo: 2,
        street: 'wall street',
        city: 'New York',
        Country: 'USA',
    },
    gender: 'male',
}

let b = deepCopyObj(a)
console.log(b)
console.log(b.address == a.address)