//scopes

'use strict';//when ES5 was standardized, there was a desire to not break backwards compatibility, and fixed some issues, but you have to optin with 'use strict'
// you can opt-in on a per-function basis, or on the whole file


// until ES6, we had two scopes in JS: 1) global scope, 2) function scope

//varibles declared with 'var' anywhere in the function have the scope of that function

// if called before declared, the declaration is pulled up , or hoisted up, and is undefined rather than being a reference error
// without strict mode, you can set global variables so long as you dont declare them, leaving out 'var'
// becomes a referenceError with strict mode

//in general, strict mode turns silently thrownaway errors into real thrown errors. if assignment fail, that's a thrown error

// you can throw errors in JS

function bad() {
    throw 'An Error happened here';
}

try {
    bad(); //put code that might throw an error in the try block
} catch(error) { //then we put code to recover from the error in the catch block
    console.log(error);
} // the catch block does not run unless there was an error

//ES6 added block scope to Javascript

//let & const
//when you use 'var', it's function scope (or global)
//when you use let or const, it's block scope (or global)

if (true) {
    let jsdf = 5;

    const qwerty = 7;
    //you can never re-assign to a const variable
}

const obj = {
    name="Nick"
};


obj.age = 26; //not an error. const only protects the variable itself

let name = 'Bill';
let age = 50;
let bill = {
    name:name,
    age:age
};

bill = {name,age};//does the exact same as the former declaration
