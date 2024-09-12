const User = {
    name: "raj",
    email: "raj@code.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User;
Teacher.name = "vijay"
console.log(Teacher.name);

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  