const log = console.log;

let animal = {
    eats: true,
}

let dog = {
    breed: 'germansherperd',
    type: 'domestic'
}
Object.setPrototypeOf(dog,animal)

log(dog.eats)
log(Object.getPrototypeOf(dog))
log(dog)

let cat = Object.create(animal, {
    breed: { value: 'persian' },
    type: { value: 'wild' }
});

log(cat.breed)
log(cat.eats)