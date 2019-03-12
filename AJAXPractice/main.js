'use strict'

document.addEventListener('DOMContentLoaded',()=> {
    //1) get the special XMLHttpRequest object from the browser
    let httpRequest = new XMLHttpRequest();

    //2) define what should happen when "readystatechange" event occurs
    httpRequest.onreadystatechange = () => {
        //this will fire several times, but we only care when the response is done 
        if (httpRequest.readyState === 4) {
            // we are checking if it succeeded or failed
            if (httpRequest.status === 200) {
                //it succeeded and the data is in "response" or "responseText" properties
                //"responseText" is always just the raw string, but response will have some deserialized thing
                console.log(httpRequest.response);
                //this will be a JS object taken from JSON
                } else {
                    //it failed
                    console.log('request failed!');
                    console.log(httpRequest.statusText);
                } 
            }
        }
        httpRequest.responseType = 'json';
    });


//all the ways we can specify functions in JS
//1) function statement: function myFunction(param1,param2) {return param1;}
//2) function expression: let myFunction = function(param1,param2) {return param1;}

//3) arrow function: let myFunction = (param1,param2) => param1;
//4) arrow function with block body: let myFunction = (param1,param2) => { return param1; };

//5) method (in an object literal, or a class): let myobj = {myFunction(param1,param2) {return param1;} }

//callback function: function that we pass into another function to inject custom behavior to be run at some future time e.g. event handler

//closure: define a variable in a function, access that variable from a nested function, that nested function still has access to that variable even if it's out of scope

//IIFE immediately invoked function expression
//we use 2) and 3) to writed an unnamed (anonymous) function and immediately execute it, this provides some encapsulation of the logic and keeps all the variables used there out of global scope

    

