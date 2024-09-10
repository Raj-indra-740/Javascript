function enumerateProperties(obj) {
    let properties = []; 
    let ownProps = Object.getOwnPropertyNames(obj);
    let ownSymbols = Object.getOwnPropertySymbols(obj);
    ownProps.forEach(prop => properties.push(prop));
    ownSymbols.forEach(symbol => properties.push(symbol));
    return properties;
}
  
const obj = { a: 1 };
const sym = Symbol('b');
obj[sym] = 2;
Object.defineProperty(obj, 'c', { value: 3, enumerable: false });

console.log(enumerateProperties(obj)); // ['a', Symbol(b), 'c']
