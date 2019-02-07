'use strict';

function compare(a,b) {
    // console.log('a: '+ a + 'b' + b);
    //instead, we can write,
    console.log(`a: ${a}, b: ${b}`); //use backticks instead of quotes and put JS expression inside of  ${}
    console.log(`a==b: ${a==b}`);
    console.log(`a===b: ${a===b}`);
}

//== double equals (loose equals), negation: !=
//=== triple equals (strict equals), negation: !==

// compare (5, '5');
compare({},{});
//doubleequals tries to compare value without comparing type
//tripleequals compares both value and type

// NaN === anything is always false, even NaN===NaN
//to check if a function is NaN, we have isNaN()

//two different objects are never equal to each other, even if they include the same content