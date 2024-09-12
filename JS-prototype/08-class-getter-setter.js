class Person{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name(value){
        //can perform check here
        this._name = value;
    }
}

let dom = new Person('dom');

dom.name = 'mimi'
console.log(dom)