//it will ingnore null/undefine and return fall back which is defined

let userName = null;
let user = userName ?? "guest user";
console.log(user)

let firstName = null;
let lastName = null; 

console.log(firstName ?? lastName ?? userName ?? 'use is not present in data`')

//main difference
// || returns the first truthy value.
// ?? returns the first defined value.

let defaultData = {
    userName: 'tim',
}

let response = {
    data: null
}

let userData =  response.data ?? defaultData

console.log(userData)

let height;
let width = 20
let area = height ?? width * width ?? 50;

console.log(area)


//Note: javascript forbidden to use it with || or && without explicit parentheses. but can use using parentheses ()