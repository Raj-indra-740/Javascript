//When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

let log = console.log;

//Class base prototype inheritance
let PirateC = class{
    constructor(name, id){
        this.name = name;
        this.id = id
    }

    getDetails(){
        return `${this.name} :: ${this.id}`;
    }
}

let pirateOne = new PirateC('usopp',0);
log(pirateOne.getDetails())

let PirateWithBountyC = class extends PirateC{
    constructor(name, id, bounty){
        super(name, id);
        this.bounty = bounty;
    }

    getPirateBountyDetails(){
        return `${this.name} :: ${this.id} :: ${Number(this.bounty).toLocaleString()}`
    }
}

let userAsEmployee = new PirateWithBountyC('zoro',328, 1_111_000_000);
log(userAsEmployee.getPirateBountyDetails())


//normal prototype inheritance i.e function

let PirateP = function(name, id){
    this.name = name;
    this.id = id
}

PirateP.prototype.getDetails = function(){
    return `${this.name} :: ${this.id}`;
}

let pirateTwo = new PirateP('chopper',2)
log(pirateTwo.getDetails())

let PirateWithBountyP = function(name, id, bounty){
    PirateP.call(this, name, id);
    this.bounty = bounty;
}

PirateWithBountyP.prototype = PirateP.prototype
PirateWithBountyP.prototype.constructor = PirateWithBountyP

PirateWithBountyP.prototype.getPirateBountyDetails = function(){
    return `${this.name} :: ${this.id} :: ${Number(this.bounty).toLocaleString()}`
}


let pirateThree = new PirateWithBountyP('luffy',1, 3_000_000_000 )
log(pirateThree.getPirateBountyDetails())


log(PirateP.prototype)
log(PirateWithBountyP.prototype)

log(pirateThree.getDetails())


let pirateFour = new PirateWithBountyP('sanji', 7, 900000000)
log(pirateFour)