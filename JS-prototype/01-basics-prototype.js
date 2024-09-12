// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

const log = console.log;
const person = {
    personName: 'Vijay',
    age:22,
}

const personAsEmployee = {
    employeeType: 'Intern',
    salary: '50000',
}

personAsEmployee.__proto__ = person;

log(personAsEmployee.personName)  //not found in personAsEmployee then move to prototypical chain for search
log(personAsEmployee.employeeType) 

log(personAsEmployee)

//Note: limitation
//The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
//The value of __proto__ can be either an object or null. Other types are ignored

const personAsFriend = {
    numbersOfFriend: 2,
    __proto__: personAsEmployee,
}

log(personAsFriend.personName)

// personAsEmployee.__proto__ = personAsEmployee;  //it will throw error due to circular proto assignment

log(person.salary) // will return undefine prototype chain only work for top to bottom not bottom to top
