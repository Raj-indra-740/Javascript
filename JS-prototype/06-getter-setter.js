// Getter: It is designed to represent a computed property that behaves like a field but dynamically computes its value when accessed. It’s useful when you want to hide logic behind what looks like a simple property.

const log = console.log;
const obj1 = {
    firstName: 'rajendra',
    get greet(){
       return `good morning ${this.firstName}`;
    }
}
const obj2 = {
    firstName: 'rajendra',
   greet(){
       return `good morning ${this.firstName}`;
    }
}

log(obj1.greet)
log(obj2.greet())


let user = {
    userName: 'Virendra',
    age:32,
    interest: ['Reading','Workout'],

    get getHeading(){
        return `${this.userName} here! I am ${this.age} years old`
    },
    set addInterest(value){
        this.interest.unshift(value);
    }
}

console.log(user.getHeading)
user.addInterest = 'hiking';
console.log(user)
