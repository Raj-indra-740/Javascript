// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map.set('1','apple')
map.set('2','banana')
map.set('3','mango')
map.set('2','mango')
map.set('4','mango')

console.log(map.get('1'))
console.log(map.get(1))

console.log(map.delete('3'))
console.log(map.delete('5'))

console.log(map)
console.log(map.size)

// map.clear()
// console.log(map)

//The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

let log = console.log;

log(map.keys())
log(map.values())
log(map.entries()) //object containing array of entries


let obj = {
    name: "John",
    age: 30
  };
  
let mapFormObj = new Map(Object.entries(obj));
  
log( mapFormObj ); 

// let objFromMap = Object.fromEntries(map.entries())
let objFromMap = Object.fromEntries(map)  //can also use this because this method expect iterable object


// log(objFromMap.forEach(item => log(item)))