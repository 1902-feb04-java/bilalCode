'use strict'

//object-oriented idea: encapsulate data and behavior together
let obj = {
    name: 'Bilal',
    //objects can have functions
    sayName: function(){
        console.log(this.name);
    }
}


let obj2 = {
    name: 'Bob',
    sayName2: obj.sayName
}

obj.sayName();

function returns3(){
    return 3;
}

let theFunctionItself = returns3; 
let theFunctionReturn = returns3();

//ES5 has no classes,  but it does have cocnstructors
function Person(name, age,fingers) {
    this.name=name;
    this.age=age;
    this.fingers=fingers;
    this.sayName=function(){
        console.log(this.name);
    }
}


let nick = new Person('Nick',26,10);
console.log(nick);
nick.sayName;

//the new: 1) makes a new empty object ({}) and 2) calls the function you put after the new with this set to that object.
// es5 uses prototypal inheritance to have something LIKE a class hierarchy without class

function Student(name,age,fingers,school) {
    this.school=school;
    this.__proto__=new Person(name,age,fingers);
}

let student = new Student('Steve',18,10,'SMU');
console.log(student);
console.log(student.name);


//  in ES6 we can use classes instead of constructos
class PersonClass {
    constructor(name, age, fingers) {
        this.name = name;
        this.age = age;
        this.fingers = fingers;
    }
        
    sayName() { //new in ES6, functions can be described as methods in objects and constructors
    console.log(this.name);
    } ;
    
}

class StudentClass extends PersonClass {
    constructor(name,age,fingers,school){
        super(name,age,fingers);
        this.school=school;
    }
}

