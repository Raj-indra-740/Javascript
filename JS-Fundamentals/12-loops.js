let i = 0;

while (i <= 4) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 4);

for (let i = 0; i < 10; i++) {
    console.log("before continue")
  // if true, skip the remaining part of the body
  if (i == 5) continue;
  console.log(i); // 1, then 3, 5, 7, 9
  console.log("after continue")
  console.log('')
}


console.log('')

for (let index = 0; index < 5; ++index) {
  console.log(index)
}
console.log('')

for (let index = 0; index < 5; index++) {
  console.log(index)
}

console.log('')

for (let index = 0; index < 5; index++) {``  
   index % 2 && console.log(index) 
}
console.log('')

for (let index = 0; index < 5; index++) {``  
   index % 2 || console.log(index) 
}

console.log('priem number')

prime:
for (let i = 2; i < 10; i++) {``  
   for(let j = 2; j < i; j++){
    if(i % j == 0) continue prime
   }
   console.log(i)
}

while(i  <= 10){
     if(i == 5) break;
     console.log(i)
     i++
}
for(let i = 1; i <= 10; i++){
  if(i == 6 ) break;
  console.log(i)
}
for(let i = 1; i <= 20; i++){
  if(i % 2 == 0 ) continue;
  console.log(i)
}
for(let i = 1; i <=5; i++){
  for(let j = 1; j <=10; j++){
    console.log( i * j)
  }
console.log('')
}

let arr = [1,2,3,4,5]
let reverseArr = []
for(let i = arr.length-1; i >= 0; i--){
     reverseArr.push(arr[i]) 
}

console.log(reverseArr)


let obj1 = {
  userName: 'Rajendra',
  islogin: true,
  age: 22,

}
let obj2 = {
  userName: 'Rajendra',
  islogin: true,
  age: 22,
  a:9,
}

function getKeyOfObject(obj){
  let arr = [];
  for(let key in obj){
    arr.push(key)
  }
  return arr;
}

let obj1_keys =  getKeyOfObject(obj1)
let obj2_keys =  getKeyOfObject(obj2)
let flag = true;
for(let i = 0; i < obj1_keys.length; i++){
  if(obj1[obj1_keys[i]] != obj2[obj2_keys[i]]) {
    flag = false
    break;
  }
}
console.log(flag)