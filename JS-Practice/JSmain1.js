'use strict';

console.log('Hello JS');

var x;// type undefined
x= undefined; // to declare a var undefined
x={}.name; // initializes an object but is not


// type number
x=1;
x=3.14;
//in JS, integers and decimal numbers have the same type
// out internal representation is basically double than Java
// (64-bit IEEE floating-point)
x=Infinity;
x=-Infinity;
x=4/0;
x=5/'abc';//NaN (not a number)

// type number
x="abc"
x='abc' //single quotes and double quotes both work
x='aba'[0]; //still a string

// type boolean
x=true;
x=false;
x=x||false;
x=(3===3)||false; 

// type object
x={}; //empty object, will be viewed in console as [object Object]
x={
    name:'Bill',//properties
    age: 30
};
//x = x.name; // access properties with dot (.)
x.height=120; 
x.height='6 feet';
x=x['height']; //access properties with indexing([])

// function
// functions are still type object
x = function(n){ //function expression
    return n;
};
x=x('abc');
x=function(f,x) {return f(x)};
x=x(function(n){return n.length; }, 'asdfsad' );
// x=typeof(x)==='object'; //false, it's a function


// type null
// typeof() lies and says it's an object

x=null;
// undefined means "noninitialized variable"
// null means "no object here"

// type symbol (new in ES6)
// used for unique identifiers

console.log('value of x: ' + x);
console.log('type of x: ' + typeof(x));

// JS only has the types: number, string, boolean, object, undefined, null, symbol

if('abc'.length>1) {
    console.log('true')
} //we have if, else if, else, switch,

//for loops, while loops, do-while loops


// we have arrays (type object)
x=[]; // empty array
x=[1,2,3,4,5,'abc',null];

x.forEach(function(e) {
    console.log(e);
});


// function expressions can be declared
// and function variables can be declared

function add(a,b,c) {
    console.log(a,b,c);
    debugger;//used as a break point
    //console.log is a shantytown way of debugging so the coder can retrieve the values and see bugs, debugger will work as a way
    return a + b+ c;
}//can return any type

add (1,2); // if you dont pass enough parameters, it's undefined
add(1,2,3,4); //you can pass more than enough parameters, but it tosses the extra ones away

// void functions (with no return statement) return undefined


// in JS, you don't actually have to end with semicolons, but the code can be read wrong without