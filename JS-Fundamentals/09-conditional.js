let year = 2015
if (year == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}


if(year == 2015) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?"); // any value except 2015
}

let age = 8

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);

if('0') console.log('string 0 is truthy')

let ans = 'ECMAScript'
if(ans == 'ECMAScript'){
    console.log('Rigth answer')
}
else{
    console.log("you don't no ECMAScript?")
}

let result;
let a = 1;
let b = 5;  
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

(a + b < 4) ? result = 'below' : result = 'Over'
console.log(result)