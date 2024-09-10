let billion = 1_000_000_000;
let bn = 1e9; // 1 * 1000000000 -> after e we define number of zero

console.log(billion, bn)

let num = 0.0001;
let n = 1e-4  // 1/10000 -> after e we define number of zero

console.log(num, n)


//way to write number in different number system
let hexadecimal = 0xff  //255
console.log(hexadecimal)

let binary = 0b111  //7
console.log(binary)

let octa = 0o377  //255
console.log(octa)

//Note: for other number system we can use parseInt() method

console.log('')
//number to string using toString() method with defining base

let number = 255;
console.log(number.toString(2))  //binary representation 
console.log(number.toString(16)) //hexadecimal 
console.log(number.toString(36)) //Representation containing A-Z & 0-9 and all latin alphabets
console.log(1223..toString(36))  //two dots to directly applying method to number (1223).toString


console.log('')

console.log(isNaN('dsfds'))  //will perform type coercion 
console.log(Number.isNaN('dsfds')) //it will not but only check whether it belongs to Number type and is NaN -> true otherwise false for all cases

console.log(isFinite('2323')) //will perform type coercion
console.log(Number.isFinite('2323'))

console.log('')

//number conversion using parseInt and parseFloat
console.log(parseInt('100px'))
console.log(parseInt('12.3em'))
//will convert till conversion is possible
//we can pass second argument which is redix to define which number system's number needed in conversion's result