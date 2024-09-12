let myName = new String("Rajendra-RC-7007")

String.prototype.trueLength = function(){
    return this.trim().length;
}

//console.log(myName.trueLength())

let myArray = [1,2,3,4,5]

Array.prototype.greeting = function(){
    this.forEach(element => {
        console.log(`hello I'm ${element}`);
    });
}

// myArray.greeting();

let myHeros = ['thor','spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'spidy-sense',

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }

}

Object.prototype.callMeRaj = function(){
    console.log(`My Name Raj.....I am evert where!`);
}

Array.prototype.heyRaj = () =>{
    console.log(`Raj says hello`);
}

myHeros.callMeRaj();
heroPower.callMeRaj();
myHeros.heyRaj();
// heroPower.heyRaj();