let log = console.log;
let user = { userName: "John", years: 30 };

let {userName, years : age, isAdmin = false} = user

log( userName ); // John
log( age ); // 30
log( isAdmin ); // false