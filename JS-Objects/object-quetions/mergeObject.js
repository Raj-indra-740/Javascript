function mergeObjects(obj1, obj2) {
    let newObj = {...obj1}
    newObj.reduce((acc, curr) => {

    },{})
}
function deepAssign(obj1, obj2) {
  let newObj = {...obj1}  
  for(let keys in obj2){
      console.log(obj1[keys])
      if(typeof(obj2[keys]) == 'object' && !Array.isArray(obj2[keys])){
        newObj[keys] = deepAssign(obj1[keys],obj2[keys])
      }
      else{
        if(Array.isArray(newObj[keys])){
            newObj[keys] = [...newObj[keys], ...obj2[keys]]
        }else{
            newObj[keys] = obj2[keys]
        }
      }
  }
  return newObj
}
// Test case
const obj1 = { a: 1, b: { c: 2, d: [3] } };
const obj2 = { b: { d: [4,7,6], e: 5 }, f: 6 };``

const result = deepAssign(obj1, obj2);
console.log(result); // { a: 1, b: { c: 2, d: [3, 4], e: 5 }, f: 6 }
