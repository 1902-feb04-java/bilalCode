//functions

'use strict';

//callback functions
function add(a,b,onSuccess) {
    let result= a+b;
    onSuccess(result); //instead of returning a result, pass it to a function given by the called
};

add(2,4, function(result){
    console.log(result);
}); //the add function allows me to inject any behavior for it to apply to the result
// the third parameter is called a callback function, because the add function calls back to the calling code


add(2,4, result => console.log(result));

let func= () => 3;
let multiply = (x,y) => x*y;
let max = (x,y) => {
    if (x>y) return x;
    return y;
};

// for arrow functions, it copies "this" from thwe surrounding context

 function newCounter() {
     let x = 0;
     return function(){
        ++x;
        return x;
     }
     }

 let counter = newCounter();
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());

//  IIFE: immediately-invoked function expression

let library = (function(){
    let privateData=0;
    function privateFunction(){
        return privateData;
    };
    return {
        libraryMethod(){
            return privateFunction()+1;
        },

    };
})();


