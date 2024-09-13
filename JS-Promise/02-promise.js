//promise is an object representing eventual completion or failure of an  asynchronous operation
//promise have three state pending, fulfilled, rejected, when promise in pending state its data value remain undefined after that either promise will return value or error depending on state of promise.
//promise resolve the inversion of control issue by allowing to chain promise using then method which take callback as parameter and will execute that callback on after completion of its preceding function or thenable methods

//First Promise
const promiseOne = new Promise(function(resole,reject){
    setTimeout(()=>{
        console.log("1: first promise created");
        resole()
    }, 1000)
})

promiseOne.then(function(){
    console.log("->One is consumed!")
})


//Second Promise
new Promise((resole, reject) => {
    setTimeout(()=>{
        console.log("2: promise two is created ")
        resole();
    },2000)
}).then(() => {

    console.log("->Two is consumed!!")
})

//Third Promise
const promiseThree = new Promise((resole,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log("3: promise Three is created ")
            resole({userName: 'Raj', age: 21});
        }
        else{
            reject("ERROR: Something Went Wrong!")
        }
    }, 3000)
})

promiseThree.then((obj)=>{
    console.log(obj);
    console.log("-> Three Consumed!");
}).catch((error)=>{
    console.log(error);
})

//Fourth Promise
const promiseFour = new Promise((resole,reject)=>{
    setTimeout(function() {
        let error = false;
        if(!error){
            console.log("4: promise four is created ")
            resole({userName: 'Raj', age: 21});
        }
        else{
            reject("ERROR: Something Went Wrong!")
        }
    },4000)
})

promiseFour.then((obj) =>{
    return obj
})
.then((user) => {
    console.log(user.userName)
    console.log("-> four consumed!")
})
.catch((error)=>{
    console.log(error);
})
.finally(() => { console.log("The promise four is either resolved or rejected")})


//Fifth Promise using async-await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            console.log("5: promise Five is created ")
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 5000)
})

async function consumedPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
        console.log("-> Five Consumed ")
    } catch(error){
        console.log(error);
    }
}

consumedPromiseFive()
// async function getAllUser(){
//     try{
//         const response = await  fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E:", error);
//     }
// }
// getAllUser()