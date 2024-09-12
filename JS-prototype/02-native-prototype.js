const log = console.log;
let arr = [1, 2, 3];

// it inherits from Array.prototype?
log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
log( arr.__proto__.__proto__.__proto__ ); // null

//all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”.


function f() {}

log(f.__proto__ == Function.prototype); // true
log(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects