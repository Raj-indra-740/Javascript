// 'use strict'
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

user.sayHi = sayHi
admin.sayHi = sayHi

user.sayHi()
admin.sayHi()

// sayHi() //in strict mode it will give error

//Note: In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

function makeUser() {
    return {
      name: "Raju",
      ref: this,
      refFunc(){
        return this
      }
    };
}
  
let userTwo = makeUser();

console.log( user.ref); // will return undefined
// console.log( user.ref.name ); // will throw error
console.log( userTwo.refFunc().name ); 


let ladder = {
    step: 0,
    up() {
      this.step++ 
      return this;
    },
    down() {
      this.step--
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this
    }
};


ladder.up().up().down().showStep().down().showStep(); 