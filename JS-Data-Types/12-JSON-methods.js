let log = console.log;

log(JSON.stringify(undefined))

log(JSON.stringify(null))

log(JSON.stringify([1, 2, 3]))


//The important limitation: there must be no circular references.
//Cannot Serialize Functions, Symbols, and Undefined:

//JSON.stringify(value, replacer-function/array, spacing)
const obj = { a: 1, b: 2, c: 3 };

// Only include properties 'a' and 'c'
const jsonString = JSON.stringify(obj, ["a", "c"]);
console.log(jsonString); // {"a":1,"c":3}

// Or use a function to modify values
const jsonStringWithFunction = JSON.stringify(obj, (key, value) => {
  return key === 'b' ? undefined : value;
});
console.log(jsonStringWithFunction); // {"a":1,"c":3}


//JSON.parse(text[, reviver])

const stringData = '{"id":1,"name":"John","skills":["JavaScript","React"],"age":null}';
const parseData = JSON.parse(stringData)

console.log(parseData)

//The optional reviver function allows you to transform the parsed values during the parsing process.

const stringData2 = '{"id":1,"date":"2024-09-11T10:16:42.334Z"}';
const obj2 = JSON.parse(stringData2, (key, value) => {
    if(key == 'date'){
        return new Date(value);
    }
    return value
})

console.log(obj2)
console.log(obj2.date instanceof Date); // true

console.log(' ')

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

const seen = new WeakSet();

let circular =  JSON.stringify(meetup, function replacer(key, value) {
  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return; // Circular reference found, omit it
    }
    seen.add(value);
  }
  return value;
});

console.log(circular)
/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

log(globalThis)
log(this)
