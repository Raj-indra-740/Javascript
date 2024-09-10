// normal way
let arr1 = ['item1', 'item2'];

// constructor method of array class
let arr2 = new Array('item1', 'item2');

//empty arr with provided length
let arr3 = new Array(2);

console.log(arr1,arr2, arr3)


console.log(arr1.unshift('item0'))
console.log(arr1)

console.log(arr2.shift())
console.log(arr2)

console.log(arr1.push('item4'))
console.log(arr1)

console.log(arr2.pop())
console.log(arr2)

//array methods

let numArr = [1,2,3,4,5]
console.log(numArr)
delete numArr[3]  //deleting array element will leave a hole as empty space in between of array 
console.log(numArr)
numArr[3] = 4
console.log(numArr)


//to solve this deleting issue we can use splice method of array,it can do everything: insert, remove and replace elements.
//splice(startIndex, deleteCount, ...elementsToReplace)

numArr.splice(2,1)
console.log(numArr)


let returnOfSplice = numArr.splice(0,2,'one',...['two','three'])
console.log(numArr)
console.log(returnOfSplice) //return removed elements

numArr.splice(4,0, 4.5) //added without deleting it
console.log(numArr) 

console.log('')
//slice methods
let numArr2 = [1,2,3,4,5]
let slicedCopy = numArr2.slice(2,4)
console.log(slicedCopy)      
console.log(numArr2)      

//Note without argument it will return entire array copy

console.log('')

//searching in array

console.log(numArr.indexOf(4))

// numArr.fill(2)
let number = numArr.find((item) => item > 3 && item < 5)
console.log(number)
let numbers = numArr.filter((item) => item > 3)
console.log(numbers)

let forEachReturn = numArr2.forEach(() => {console.log('')})
console.log(forEachReturn)