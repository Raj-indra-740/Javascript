//a symbol is a “primitive unique value” with an optional description. 
let id1 = Symbol('our id')
let id2 = Symbol('third party id')
let obj = {
    [id1] : '2332',
    [id2] : '5A33CV',
    [Symbol('flag')] : true,
    [Symbol('flag')] : false,
    userName: 'Rak'
}

console.log(obj)


// symbol are hidden property which does not notice by loops or other Object methods and JSON.stringify methods.
// This makes them ideal for "hidden" or private data that shouldn’t be easily accessible.

for(let key in obj){
    console.log(key, obj[key])
}

//iterating methods ignore symbols but Object.assign can copy symbol as well


//Symbols inside the registry are called global symbols. 

let idAgain = Symbol.for('game id')

obj[idAgain] = '$#@@#AA321$$'

console.log(obj)

let newIdAgain = Symbol.for('game id');
let obj2 = {
    [newIdAgain] : '$#@@#AA$$',
}

console.log(idAgain === newIdAgain)

console.log(Symbol.keyFor(newIdAgain))