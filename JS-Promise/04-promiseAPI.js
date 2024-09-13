//promise.all: Takes an array (or iterable) of promises and returns a single promise that resolves when all the promises in the array resolve. If any of the promises reject, the entire Promise.all() call rejects immediately with the reason of the first rejected promise.
//If one promise in the list rejects, the entire Promise.all() fails.


const userName = ['Raj7405', 'iliakan', 'remy', 'jeresig'];

let responses = userName.map(name => fetch(`https://api.github.com/users/${name}`));

console.log(responses)
function promisification(res){
    return Promise.all(res)
            .then(res => Promise.all(res.map(item => item.json())))
            .then(userData => userData.forEach(data => {
                    setTimeout(() => {  
                        if(data){
                            console.log(data)
                        }else{
                            console.error('ERROR: Avatar URL not found for', data.login)
                        }
                        }, 3000);
            }))
            .catch(reject => alert(reject))
}

// promisification(responses)



//promise.allSettled:Takes an array (or iterable) of promises and returns a promise that resolves when all promises have either resolved or rejected. The result is an array of objects, where each object describes the outcome of each promise (whether fulfilled or rejected).


const userName2 = ['Raj7405', 'iliakan', 'rfdsdf', 'jeresig'];
const responsesForAllSettled = userName2.map(name => fetch(`https://api.github.com/users/${name}`))

// promisification(responsesForAllSettled)


//promise.race: Takes an array (or iterable) of promises and returns a promise that resolves or rejects as soon as one of the promises resolves or rejects. Essentially, the first promise to settle wins the race.
//first come first serve    

const promise1 = new Promise((resolve) => setTimeout(() => resolve('First!'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second!'), 2000));

Promise.race([promise1, promise2])
  .then(value => console.log(value)) // Output: First!
  .catch(error => console.error(error));


//promise.any: Takes an array (or iterable) of promises and returns a promise that resolves as soon as any of the promises resolve. If all the promises reject, it will reject with an AggregateError, which is a collection of all the rejection reasons.
//When you need at least one promise to succeed and are fine with ignoring the failures.
//Promise.any() resolves when any promise succeeds. If all promises fail, it rejects with an AggregateError.

const any1 = Promise.reject(new Error('Failed!'));
const any2 = Promise.resolve('Success!');
const any3 = Promise.resolve('Another success!');

Promise.any([any1, any2, any3])
  .then(value => console.log(value))  // Output: Success!
  .catch(error => console.error(error));