"use strict"; //treat the entire code as newer version

//alert(3+3) // it will not work in node js this way. we are using node js, not browser

//two types of data type base on how data is store and access in memory

/**1.primitive : call by value 
                -There are two copies of parameters stored in different memory locations.
                -One is the original copy and the other is the function copy.
                -Any changes made inside functions are not reflected in the actual parameters of the caller.

  7 types:-String, Number, Boolean, Null, undefined, BigInt
*/
console.log(3+3); console.log(2+2); //not a good practice

console.log();

let name = "Raj"
let age = 21
let islogin = false
let state;
let no = null

console.log(typeof age);        //number
console.log(typeof state);      //undefined
console.log(typeof no);         //object


/*2.non-primitive Or Refrence type : In call by reference method of parameter passing, the address of the actual parameters 
                                     is passed to the function as the formal parameters. In C, we use pointers to achieve 
                                     call-by-reference.
                                    -Both the actual and formal parameters refer to the same locations.
                                    -Any changes made inside the function are actually reflected in the actual parameters
                                     of the caller.

    Arrays
    Objects
    Function
*/

const anime = ["Naruto", "Boruto", "One piece"];
const MyFuction = function(){
    console.log("Hello World");
}
let MyObj= {
    name: "Raj",
    age: 22,
}

console.log(MyObj);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory Mangement in Js

//Two type of memory is use to store data
//Stack(primitive) and Heap(non-primitive)

//Stack Memory --> give copy of value
let MyName = "Raj"
let NewName = MyName
NewName = "Rajendra"

console.log(MyName);
console.log(NewName);

//Heap Memory --> Give direct reference of value

let userOne = {
    email: "Raj@gmail.com",
    upi: "raj@icic"
}

let userTwo = userOne

userTwo.email = "Rajendra@gmai.com"

console.log(userOne);
console.log(userTwo);