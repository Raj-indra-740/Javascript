//async function always return promise
//await is keyword only be used inside an async function

let userName = ['Raj7405', 'iliakan', 'remy', 'jeresig'];
async function loadUserData(){
    try{
        let request = userName.map(name => fetch(`https://api.github.com/users/${name}`))
        let response = await Promise.all(request)
        let jsonData = await Promise.all(response.map(response => response.json()));
        jsonData.forEach(data => {
            setTimeout(()=>{
                if(data){
                    console.log(data)
                }else{
                    console.error('ERROR: Avatar URL not found for', data.login)
                }
            }, 1000)
        })
    }catch(err){
        console.error(err)
    }
}
// loadUserData()

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('this promise 1'), 10000)
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('this promise 2'), 5000)
})

const promise3 = new Promise((resolve,reject) => 0)
function greet(){
    console.log(promise3)
}

greet()