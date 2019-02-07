'use strict'

function convertToBool(x) {
    let bool=boolean(x);
    console.log (`${x} as boolean: ${bool}`);
}

//values are converted to boolean in places like an if-condition

// if (condition) {

// }

// most values convert tot true, we call those values, "truthy"
//  some convert to false, "falsy"

//falsy values: 0, -0, NaN, ''(empty string), false, null, undefined
// all other values are truthy, incl. all objects, functions, arrays, etc.
let j= undefined;
convertToBool(j);