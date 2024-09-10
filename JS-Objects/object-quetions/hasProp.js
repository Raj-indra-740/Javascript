function hasProperty(obj, path) {
    if(!obj || path.length === 0) {
        return false
    }
    if(path.length === 1){
        return path[0] in obj
    }
    return hasProperty(obj[path[0]],path.slice(1))
}

// Test case
const obj = { a: { b: { c: 1 } } };
console.log(hasProperty(obj, ['a', 'b', 'c'])); // true
console.log(hasProperty(obj, ['a', 'b', 'd'])); // false
