
function setUserName(userName){
    //all complex calculation
    this.userName = userName;
}

function createUser(userName, email, password){
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const chai = new createUser("Raj", "raj@google.com", "123")

console.log(chai);

//object
function printFullName(){
    console.log(this.firstName+" "+this.lastName);
}

function printFullNameTwo(hometown, state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+" in "+state);
}

const user1 = {
    firstName: "raj",
    lastName: "Chaudhari"
}

const user2 = {
    firstName: "sammed",
    lastName: "patil"
}

//this is called function borrwing using call()
printFullNameTwo.call(user1,"kardh", "Maharastra" );

//borrowing function using apply() method
//only differece is argument is pass as "ArrayList"
printFullNameTwo.apply(user2, ["sangli", "Maharastra"]);


//bind() method to bind printFullName() with user1
let func = printFullName.bind(user1);
let func2 = printFullName.bind(user2)

func2();

setTimeout(func,1000)
