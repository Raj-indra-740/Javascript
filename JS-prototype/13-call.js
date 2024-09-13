const log = console.log;

function setUserName(userName){
    //all complex calculation
    this.userName = userName;
}

function createUser(userName, email, password){
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const user = new createUser("Raj", "raj@google.com", "123")

log(user);

//object
function printFullName(){
    log(this.firstName+" "+this.lastName);
}

function printFullNameTwo(hometown, state){
    log(this.firstName+" "+this.lastName+" from "+hometown+" in "+state);
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
//only difference is argument is pass as "ArrayList"
printFullNameTwo.apply(user2, ["sangli", "Maharastra"]);


//bind() method to bind printFullName() with user1
let func = printFullName.bind(user1);
let func2 = printFullName.bind(user2)

func2();

setTimeout(func,1000)



//polyfill of call

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + " is not callable")
    }

    context.fn = this;
    let result = context.fn(...args)
    delete context.fn
    return result
}
Function.prototype.myApply = function(context={}, args=[]){
    if(typeof this !== 'function'){
        throw new Error(this + " It is not callable")
    }
    if(!Array.isArray(args)){
        throw new Error('CreateListFromArrayLike called on non-object')
    }

    context.fn = this;
    let result = context.fn(...args)
    delete context.fn
    return result     
}
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + " It is not callable")
    }
    context.fn = this;
    let result = function(...newArgs){
        return context.fn(...args,...newArgs)
    }
  
    return result 
}

log('polyfill of call')
printFullNameTwo.myCall(user1,"kardh", "Maharastra" );

let user3 = {
    firstName: "Rajendra",
    lastName: "Chaudhari",
}

function greeting(){
    return (`Good morning ${this.firstName} ${this.lastName}`)
}

log('1',greeting.call(user3))
log('2',greeting.myApply(user3))

let newGreet = greeting.myBind(user3)
log('new greet function ::',newGreet(user3))