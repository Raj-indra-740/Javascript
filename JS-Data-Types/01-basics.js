//The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

let str = "Hello";

str.test = 5; // in strict mode it will give error

console.log(str.test);