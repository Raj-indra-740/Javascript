
const description = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(description)

//not  possible

// Object.defineProperty(Math, 'PI', {
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))

const user = {
    name: 'raj',
    email: 'raj@xxx.com',
    isLogin: true
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, "name",{
    writable: false,
    enumerable: true,
    configurable:false

})
/**
 * — Writable: Specifies whether the property can be changed.
 * — Enumerable: Specifies whether the property can be returned in a for/in loop. 
 * — Configurable: Specifies whether the property can be deleted or changed. 
*/
console.log(Object.getOwnPropertyDescriptor(user, 'name'))

user.name = 'Rajendra'; //here you can see "name" is not mutable/writable after change in property behaviour
console.log(user)
