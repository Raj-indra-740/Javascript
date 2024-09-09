function User(firsName, lastName, age){
    //this = {}  implicitly

    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;

    //return this implicitly
}

let userOne = new User('Rajendra', 'Chaudhari', '22')
console.log(userOne)


let userTwo = new function(){
    this.fullName = 'Rajendra Mohan Chaudhari';
    this.gender = 'male';
}

console.log(userTwo)