class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrptPassword(){
        return `${this.password * Math.floor(Math.random() * 10 + 1)}`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const student = new User("raj", "raj@g.com", 123)
console.log(student.encrptPassword());
console.log(student.changeUsername())

//behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encrptPassword_2 = function(){
    return `${this.password * Math.floor(Math.random() * 10 + 1)}`
}

User2.prototype.changeUsername_2 = function(){
    return `${this.username.toUpperCase()}`
}

const studentTwo = new User2("Sonu", "sonu@Meta.com", 420)
console.log(studentTwo.encrptPassword_2())
console.log(studentTwo.changeUsername_2())