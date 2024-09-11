let log = console.log;


let currentDate = new Date()
log(currentDate.toLocaleString())

//new Date(year, month, date, hours, minutes, seconds, ms)

let newDate = new Date(2002, 11, 2, 5, 30,50, 100)
log(newDate)
log(newDate.getFullYear())
log(newDate.getDate())
log(newDate.getMonth() +1 )
log(newDate.getDay())
log(newDate.getTime())
log(newDate.getTimezoneOffset())
log(newDate.setDate(11))

log(newDate)


let start = new Date(); // start measuring time

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

log( `The loop took ${end - start} ms` );


let nowDate = Date.now()
console.log(nowDate)


function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );


  //The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

  log(Date.parse('2002-12-02'))
  log(new Date('2002-12-02').getTime())

  log(new Date(1327611110417))