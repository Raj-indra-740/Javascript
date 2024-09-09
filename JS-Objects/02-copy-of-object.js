let userOne = {
    firstName:'Rejanedra',
    lastName:'Chaudhari',
    age: 22,
}

let userTwo = userOne


userTwo.firstName = 'vraj';


console.log(userTwo)
console.log(userOne)

let cloneUserTwo = Object.assign({},userOne)

cloneUserTwo.firstName = 'kalki'

console.log(cloneUserTwo)
console.log(userOne)

let loginData = {
    userId: 12231,
    userName: 'miko',
    email: 'rax@gmail.com'
}

Object.assign(userTwo, loginData)
console.log(userTwo)

//Note: Object.assign can not copy nested object, for nested object it will copy refrence.

let userThree = structuredClone(userOne)
console.log(userThree === userOne)
userThree.firstName = 'bhumi'
console.log(userOne)
console.log(userThree)

userThree.personalData = {
    gender:'female'
}

let copyUserThree = Object.assign({}, userThree)
console.log('shallow clone issue',userThree.personalData == copyUserThree.personalData)

let deepCopyUserThree = structuredClone(userThree)
console.log('shallow clone issue solved',userThree.personalData == deepCopyUserThree.personalData)

let objWithFunc = {
    f: function(){
        console.log('hello')
    }
}
// let copyObjWithFunc = structuredClone(objWithFunc)
// console.log(copyObjWithFunc)

//this funciton fail to clone object containing function and throw error DOMException