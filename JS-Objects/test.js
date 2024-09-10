g = 10;
var x = 5,y =7;
function fun(x,y){
    var a = x + y;
    this.d = 10
    console.log(d)
    return a
}
// console.log(d)
console.log(fun(x,y), g)

console.log(fun.d)

function User(firsName, lastName){
    this.firstName = firsName;
    this.lastName = lastName
}
class User2 {
    constructor(firsName, lastName) {
        this.firstName = firsName;
        this.lastName = lastName;
    }
}
let userOne = new User('ea','ss')
console.log(userOne)
console.log(global.firstName)

