console.log('back slash: \\')
console.log('new line with slash n: \n dfkdj')
console.log('new line with slash r: \r i am r')
console.log('new line with slash r & slash n: \r\n i am r')

console.log('')

let str = 'hello world!'
console.log(str.length)
console.log(str[0])
console.log(str[str.length - 1])
console.log(str.at(-1))  //Allow negative indexing

console.log('')

let numStr = '12345'
for(let char of numStr){
    console.log(char)
}

console.log('')

//searching methods
let str2 = 'Widget with id';

console.log(str2.indexOf('id')) //it will search for single character not for entire word