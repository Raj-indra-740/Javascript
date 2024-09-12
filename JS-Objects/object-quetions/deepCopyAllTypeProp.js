function deepClone(obj, map = new WeakMap()) {
    
    // Handle null and primitive types
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle circular references
    if (map.has(obj)) {
        return map.get(obj);
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    // Handle Map
    if (obj instanceof Map) {
        const clone = new Map();
        map.set(obj, clone);
        obj.forEach((value, key) => {
            clone.set(deepClone(key, map), deepClone(value, map));
        });
        return clone;
    }

    
    // Handle Set
    if (obj instanceof Set) {
        const clone = new Set();
        map.set(obj, clone);
        obj.forEach(value => {
            clone.add(deepClone(value, map));
        });
        return clone;
    }

    // Handle Symbols
    const clone = Object.create(Object.getPrototypeOf(obj));  //create empty object with prototype of original
    map.set(obj, clone);

    // Handle Symbol properties and regular properties
    for (const key of Reflect.ownKeys(obj)) {
        const value = obj[key];
        clone[key] = deepClone(value, map);
    }

    return clone;
}



// Test case
const original = {
    num: 42,
    str: "hello",
    date: new Date(),
    regExp: /abc/i,
    map: new Map([[1, 'one']]),
    set: new Set([1, 2, 3]),
    symbol: Symbol('unique'),
    nested: {
        arr: [1, { foo: 'bar' }],
        self: null
    }
};
original.nested.self = original;

const clone = deepClone(original);
console.log(clone);
console.log(clone.nested.self === clone); 
