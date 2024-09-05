console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    console.log( 'truthy!' );
  }

  let hour = 12;
  let isWeekend = true;
  
  if (hour < 10 || hour > 18 || isWeekend) {
    console.log( 'The office is closed.' ); // it is the weekend
  }

  console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 );
console.log( null || 0 || 1 ); 
console.log( undefined || null || 0 ); 

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( 'OR',firstName || lastName || nickName || "Anonymous"); 
//here whatever first truthy value OR|| operator will get, it will return it.
//if no truthy value is present in expression then OR will return last value present in expression.

console.log('AND', firstName && lastName && nickName && "Anonymous"); 
//AND returns the first falsy value or the last value if none were found.

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0