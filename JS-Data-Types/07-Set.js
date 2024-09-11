//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let log = console.log;
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
log( set.size ); // 3

for (let user of set) {
  log(user.name); // John (then Pete and Mary)
}


function unique(arr) {
    return new Set(arr)
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  log( unique(values) ); 