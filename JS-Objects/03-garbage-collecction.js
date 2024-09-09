//engine will automatically remove unreachable object or elements
//like variable only consist reference to object but data is store somewhere else if somehow we don't have reference of that store location it will consider unreachable and engine will move that data to garbage.
let user = {age: 22};
let newUser = user;

user = null 
//still data is not remove because it reachable through newUser

newUser = null
//now data become unreachable because there no way to reach that data's memory location.

//Outgoing references do not matter. Only incoming ones can make an object reachable