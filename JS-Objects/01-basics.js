//Two ways to declare javascript object 

const obj1 = new Object(); //Object countructor
const obj2 = {} //Object litera

function userSelectedRole(){
    return 'customer'
}
function userAssignRole(){
    return 'prime customer'
}
let loginFlag = false;
let role = userSelectedRole()
let roleSubType = userAssignRole()

const user = {
    firstName:'Rajendra',
    LastName:'Chaudhari',
    isLogin: loginFlag,
    [role] : roleSubType,
};

console.log(user)
console.log('role' in user)
console.log('customer' in user)  //check for existence of property inside object.

for(let key in user){
    console.log([key, user[key]])
}

//object order is depend on porperty type if it string which conversion is possible in integer then it will order in ascending order, but if it non-integer then it order in cration order