let log = console.log

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
function countNoOfProps(obj){
    return Object.keys(obj).length
}
function sumSalaries(obj){
    return Object.values(obj).reduce((acc,curr) => acc+=curr, 0)
}
log(sumSalaries(salaries)); 
log(countNoOfProps(salaries)); 