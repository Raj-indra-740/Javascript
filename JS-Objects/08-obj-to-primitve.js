let userOne = {
    firstName:'Rejanedra',
    lastName:'Chaudhari',
    age: 22,
}
let userTwo = {
    firstName:'vivek',
    lastName:'dhari',
    age: 25,
}

console.log(userOne + userTwo)
console.log(userOne - userTwo)


// Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
// Otherwise if hint is "string"
// try calling obj.toString() or obj.valueOf(), whatever exists.
// Otherwise if hint is "number" or "default"
// try calling obj.valueOf() or obj.toString(), whatever exists.


let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500

  console.log(user.valueOf())


let user2 = {
    name : 'viru',
    money : 10000,
    toString(){
        return this.name
    },
    valueOf(){
        return this.money
    }
}

console.log(user2); 
console.log(+user2);
console.log(user2 + 500); 
